// app/success/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import MainNavbar from "@/components/MainNavbar";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface PaymentDetails {
  id: string;
  amount: number;
  currency: string;
  status: string;
  payment_method_types: string[];
  created: number;
  metadata?: {
    plan?: string;
    email?: string;
    payment_method_type?: string;
  };
  payment_method?: {
    type: string;
  };
  charges?: {
    data?: Array<{
      payment_method_details?: {
        type: string;
      };
    }>;
  };
}

// Separate component that uses useSearchParams
const SuccessPageWithSearchParams: React.FC = () => {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get parameters from URL
  const paymentIntentId = searchParams.get("payment_intent");
  const paymentIntentClientSecret = searchParams.get(
    "payment_intent_client_secret"
  );
  const redirectStatus = searchParams.get("redirect_status");
  // NEW: Get plan from URL parameters as fallback
  const planFromUrl = searchParams.get("plan");

  useEffect(() => {
    const retrievePaymentIntent = async () => {
      try {
        if (paymentIntentClientSecret) {
          // For iDEAL and Bancontact redirects, we need to retrieve the payment intent
          const stripe = await stripePromise;
          if (!stripe) {
            throw new Error("Stripe failed to load");
          }

          const { paymentIntent, error } = await stripe.retrievePaymentIntent(
            paymentIntentClientSecret
          );

          if (error) {
            setError(error.message || "Failed to retrieve payment details");
            setLoading(false);
            return;
          }

          if (paymentIntent) {
            // Type assertion to access properties that might not be in type definition
            const piWithMetadata = paymentIntent as any;

            setPaymentDetails({
              id: paymentIntent.id,
              amount: paymentIntent.amount,
              currency: paymentIntent.currency,
              status: paymentIntent.status,
              payment_method_types: paymentIntent.payment_method_types || [],
              created: paymentIntent.created,
              metadata: piWithMetadata.metadata || {},
              payment_method: piWithMetadata.payment_method,
              charges: piWithMetadata.charges,
            });
          }
        } else if (paymentIntentId) {
          // For direct card payments, fetch payment details from backend
          try {
            const response = await fetch(
              `/api/confirm-payment?payment_intent_id=${paymentIntentId}`,
              {
                method: "GET",
              }
            );

            if (response.ok) {
              const paymentData = await response.json();
              setPaymentDetails({
                id: paymentData.id,
                amount: paymentData.amount,
                currency: paymentData.currency,
                status: paymentData.status,
                payment_method_types: paymentData.payment_method_types || [],
                created: Date.now() / 1000,
                metadata: paymentData.metadata || {},
                payment_method: paymentData.payment_method,
                charges: paymentData.charges,
              });
            } else {
              // IMPROVED: Fallback that preserves plan information
              setPaymentDetails({
                id: paymentIntentId,
                amount: 0,
                currency: "eur",
                status: "succeeded",
                payment_method_types: ["card"],
                created: Date.now() / 1000,
                metadata: {
                  plan: planFromUrl || undefined, // Preserve plan from URL
                },
              });
            }
          } catch (fetchError) {
            // IMPROVED: Fallback that preserves plan information
            setPaymentDetails({
              id: paymentIntentId,
              amount: 0,
              currency: "eur",
              status: "succeeded",
              payment_method_types: ["card"],
              created: Date.now() / 1000,
              metadata: {
                plan: planFromUrl || undefined, // Preserve plan from URL
              },
            });
          }
        } else {
          setError("No payment information found");
        }
      } catch (err) {
        setError("Failed to load payment details");
        console.error("Error retrieving payment intent:", err);
      } finally {
        setLoading(false);
      }
    };

    retrievePaymentIntent();
  }, [paymentIntentId, paymentIntentClientSecret, planFromUrl]);

  const getPaymentMethodDisplay = (paymentDetails: PaymentDetails) => {
    // First, try to get the actual payment method from metadata (most reliable)
    if (paymentDetails.metadata?.payment_method_type) {
      const methodType = paymentDetails.metadata.payment_method_type;
      switch (methodType) {
        case "ideal":
          return "iDEAL";
        case "bancontact":
          return "Bancontact";
        case "card":
          return "Credit/Debit Card";
        case "apple_pay":
          return "Apple Pay";
        case "google_pay":
          return "Google Pay";
        default:
          return methodType;
      }
    }

    // Second, try to get from the actual payment method used
    if (paymentDetails.payment_method?.type) {
      const methodType = paymentDetails.payment_method.type;
      switch (methodType) {
        case "ideal":
          return "iDEAL";
        case "bancontact":
          return "Bancontact";
        case "card":
          return "Credit/Debit Card";
        default:
          return methodType;
      }
    }

    // Third, try to get from charges data
    if (paymentDetails.charges?.data?.[0]?.payment_method_details?.type) {
      const methodType =
        paymentDetails.charges.data[0].payment_method_details.type;
      switch (methodType) {
        case "ideal":
          return "iDEAL";
        case "bancontact":
          return "Bancontact";
        case "card":
          return "Credit/Debit Card";
        default:
          return methodType;
      }
    }

    // Finally, fall back to payment method types (less reliable for display)
    const { payment_method_types } = paymentDetails;

    // For redirected payments, prioritize the specific method
    if (redirectStatus === "succeeded") {
      if (payment_method_types.includes("ideal")) {
        return "iDEAL";
      } else if (payment_method_types.includes("bancontact")) {
        return "Bancontact";
      }
    }

    // For other payments, prioritize card if present
    if (payment_method_types.includes("card")) {
      return "Credit/Debit Card";
    } else if (payment_method_types.includes("ideal")) {
      return "iDEAL";
    } else if (payment_method_types.includes("bancontact")) {
      return "Bancontact";
    }

    return payment_method_types.join(", ");
  };

  const getStatusDisplay = (status: string, redirectStatus?: string | null) => {
    if (redirectStatus === "succeeded" || status === "succeeded") {
      return { text: "Payment Successful", color: "text-green-400" };
    } else if (redirectStatus === "failed" || status === "failed") {
      return { text: "Payment Failed", color: "text-red-400" };
    } else if (status === "processing") {
      return { text: "Payment Processing", color: "text-yellow-400" };
    } else if (redirectStatus === "pending" || status === "requires_action") {
      return { text: "Payment Pending", color: "text-yellow-400" };
    }
    return { text: "Payment Status Unknown", color: "text-gray-400" };
  };

  const getSuccessMessage = (paymentDetails: PaymentDetails) => {
    const methodDisplay = getPaymentMethodDisplay(paymentDetails);

    if (methodDisplay === "iDEAL") {
      return "Your iDEAL payment has been processed successfully.";
    } else if (methodDisplay === "Bancontact") {
      return "Your Bancontact payment has been processed successfully.";
    } else if (methodDisplay === "Credit/Debit Card") {
      return "Your card payment has been processed successfully.";
    } else if (methodDisplay === "Apple Pay") {
      return "Your Apple Pay payment has been processed successfully.";
    } else if (methodDisplay === "Google Pay") {
      return "Your Google Pay payment has been processed successfully.";
    }
    return "Your payment has been processed successfully.";
  };

  // IMPROVED: Better plan detection for "Try again" redirect
  const getPlanForRetry = () => {
    // First, try to get plan from payment metadata
    if (paymentDetails?.metadata?.plan) {
      const planName = paymentDetails.metadata.plan.toLowerCase();
      const planMappings: Record<string, string> = {
        basic: "basic",
        standard: "standard",
        professional: "professional",
        business: "business",
        enterprise: "enterprise",
      };
      console.log("Plan name from metadata:", planName);
      const mappedPlan = planMappings[planName];
      if (mappedPlan) {
        return mappedPlan;
      }
    }

    // Second, try to get plan from URL parameters
    if (planFromUrl) {
      console.log("Plan name from URL:", planFromUrl);
      return planFromUrl;
    }

    // Third, try to extract from current URL path or referrer
    try {
      const referrer = document.referrer;
      const referrerUrl = new URL(referrer);
      const planFromReferrer = referrerUrl.searchParams.get("plan");
      if (planFromReferrer) {
        console.log("Plan name from referrer:", planFromReferrer);
        return planFromReferrer;
      }
    } catch (e) {
      // Ignore referrer parsing errors
    }

    // Default fallback
    console.log("Using default plan fallback");
    return "basic";
  };

  const handleTryAgain = () => {
    const planId = getPlanForRetry();
    window.location.href = `/checkout?plan=${planId}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#faf9f5] mx-auto mb-4"></div>
          <p className="text-[#faf9f5]">Loading payment details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-[#faf9f5] text-2xl font-medium mb-4">
              Error Loading Payment
            </h1>
            <p className="text-[#9c9a92] mb-6">{error}</p>
            <button
              onClick={handleTryAgain}
              className="bg-[#faf9f5] text-[#30302e] px-6 py-3 rounded-lg font-medium hover:bg-[#e8e6e1] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!paymentDetails) {
    return (
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-[#faf9f5] text-2xl font-medium mb-4">
              No Payment Found
            </h1>
            <p className="text-[#9c9a92] mb-6">
              We couldn't find any payment information.
            </p>
            <button
              onClick={handleTryAgain}
              className="bg-[#faf9f5] text-[#30302e] px-6 py-3 rounded-lg font-medium hover:bg-[#e8e6e1] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusDisplay(paymentDetails.status, redirectStatus);
  const isSuccess = statusInfo.text === "Payment Successful";

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="text-center">
          {/* Status Icon */}
          <div
            className={`w-16 h-16 ${
              isSuccess ? "bg-green-600" : "bg-red-600"
            } rounded-full flex items-center justify-center mx-auto mb-6`}
          >
            {isSuccess ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  fill="white"
                />
              </svg>
            )}
          </div>

          {/* Status Title */}
          <h1 className={`text-2xl font-medium mb-2 ${statusInfo.color}`}>
            {statusInfo.text}
          </h1>

          {/* Payment Details */}
          <div className="bg-[#1e1e1e] rounded-md p-6 mb-6 text-left">
            <h3 className="text-[#faf9f5] text-base font-medium mb-4">
              Payment Details
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#9c9a92] text-sm">Payment ID</span>
                <span className="text-[#c2c0b6] text-sm font-mono">
                  {paymentDetails.id.substring(0, 20)}...
                </span>
              </div>

              {paymentDetails.amount > 0 && (
                <div className="flex justify-between">
                  <span className="text-[#9c9a92] text-sm">Amount</span>
                  <span className="text-[#c2c0b6] text-sm">
                    {paymentDetails.currency.toUpperCase()}{" "}
                    {(paymentDetails.amount / 100).toFixed(2)}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-[#9c9a92] text-sm">Payment Method</span>
                <span className="text-[#c2c0b6] text-sm">
                  {getPaymentMethodDisplay(paymentDetails)}
                </span>
              </div>

              {paymentDetails.metadata?.plan && (
                <div className="flex justify-between">
                  <span className="text-[#9c9a92] text-sm">Plan</span>
                  <span className="text-[#c2c0b6] text-sm">
                    {paymentDetails.metadata.plan}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-[#9c9a92] text-sm">Date</span>
                <span className="text-[#c2c0b6] text-sm">
                  {new Date(paymentDetails.created * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Success Message - Only show on success, no buttons */}
          {isSuccess && (
            <div className="mb-6">
              <p className="text-[#c2c0b6] mb-4">
                Thank you for your purchase! You'll receive a confirmation email
                shortly.
              </p>
              <p className="text-[#9c9a92] text-sm">
                {getSuccessMessage(paymentDetails)}
              </p>
            </div>
          )}

          {/* Failed Payment Message with Try Again Button */}
          {!isSuccess && (
            <div className="mb-6">
              <p className="text-[#c2c0b6] mb-4">
                We're sorry, but your payment could not be processed. Please try
                again or contact support if the issue persists.
              </p>
              <button
                onClick={handleTryAgain}
                className="bg-[#faf9f5] text-[#30302e] px-6 py-3 rounded-lg font-medium hover:bg-[#e8e6e1] transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Loading fallback component
const SuccessPageLoading: React.FC = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#faf9f5] mx-auto mb-4"></div>
      <p className="text-[#faf9f5]">Loading payment details...</p>
    </div>
  </div>
);

// Main component that wraps the search params component in Suspense
const SuccessPage: React.FC = () => {
  return (
    <Suspense fallback={<SuccessPageLoading />}>
      <SuccessPageWithSearchParams />
    </Suspense>
  );
};

export default SuccessPage;
