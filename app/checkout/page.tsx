// app/checkout/page.tsx (App Router approach)
"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import MainNavbar from "@/components/MainNavbar";
import PaymentForm from "@/components/cardElementStripe";
import React from "react";

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// Email validation utility
const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254; // RFC 5322 max length
};

const getEmailValidationMessage = (email: string): string | null => {
  if (!email) return null;
  if (email.length < 3) return "Email is too short";
  if (email.length > 254) return "Email is too long";
  if (!validateEmail(email)) return "Please enter a valid email address";
  return null;
};

// Name validation utility
const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

const getNameValidationMessage = (name: string): string | null => {
  if (!name) return "Full name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters long";
  if (name.trim().length > 50) return "Name must be less than 50 characters";
  return null;
};

// Utility to validate and parse custom plan amount
const validateCustomPlanAmount = (planParam: string): number | null => {
  // Check if it's a valid number
  const amount = parseFloat(planParam);

  // Validate the amount (must be positive and reasonable)
  if (isNaN(amount) || amount <= 0 || amount > 10000) {
    return null;
  }

  // Round to 2 decimal places to handle currency properly
  return Math.round(amount * 100) / 100;
};

// Function to create a custom plan
const createCustomPlan = (amount: number): PricingPlan => {
  return {
    id: `custom-${amount}`,
    name: "Custom",
    price: amount,
    description: "Custom pricing plan",
    features: [
      "Custom plan features",
      "Full access to services",
      "Commercial use license",
      "Priority support",
    ],
  };
};

// Types
interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

interface CheckoutFormProps {
  selectedPlan: PricingPlan;
}

type PaymentMethod =
  | "card"
  | "ideal"
  | "bancontact"
  | "apple_pay"
  | "google_pay";

// Pricing plans configuration (matching your PricingCard)
const PRICING_PLANS: Record<string, PricingPlan> = {
  basic: {
    id: "basic",
    name: "Basic",
    price: 5,
    description: "For individuals getting started",
    features: [
      "Access to 400 icons",
      "PNG + SVG format exports",
      "Commercial use license",
      "Includes 1 fully-built example project",
    ],
  },
  standard: {
    id: "standard",
    name: "Standard",
    price: 32,
    description: "For freelancers and small projects",
    features: [
      "Access to 900+ icons",
      "PNG + SVG format exports",
      "Commercial use license",
      "Includes 2 fully-built example project",
    ],
  },
  professional: {
    id: "professional",
    name: "Professional",
    price: 52,
    description: "For growing businesses and creators",
    features: [
      "Access to 1,700+ icons",
      "PNG + SVG format exports",
      "Commercial use license",
      "Includes 4 fully-built example project",
    ],
  },
  business: {
    id: "business",
    name: "Business",
    price: 79,
    description: "For established businesses and teams",
    features: [
      "Access to 3,200+ icons",
      "PNG + SVG format exports",
      "Commercial use license",
      "Includes 6 fully-built example project",
    ],
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: 130,
    description: "For large organizations with complex needs",
    features: [
      "Access to 5,400+ icons",
      "PNG + SVG format exports",
      "Commercial use license",
      "Includes 10 fully-built example project",
    ],
  },
};

// Enhanced Payment Form Component with validation
const PaymentFormWithValidation: React.FC<{
  onCardChange: (complete: boolean, error: string | null) => void;
}> = React.memo(({ onCardChange }) => {
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
  const [cardCvcComplete, setCardCvcComplete] = useState(false);
  const [cardError, setCardError] = useState<string | null>(null);

  // Memoize the card change handlers to prevent re-renders
  const handleCardNumberChange = useCallback((event: any) => {
    setCardNumberComplete(event.complete);
    if (event.error) {
      setCardError(event.error.message);
    } else {
      setCardError(null);
    }
  }, []);

  const handleCardExpiryChange = useCallback(
    (event: any) => {
      setCardExpiryComplete(event.complete);
      if (event.error) {
        setCardError(event.error.message);
      } else if (!event.error && cardError && cardError.includes("expiry")) {
        setCardError(null);
      }
    },
    [cardError]
  );

  const handleCardCvcChange = useCallback(
    (event: any) => {
      setCardCvcComplete(event.complete);
      if (event.error) {
        setCardError(event.error.message);
      } else if (!event.error && cardError && cardError.includes("cvc")) {
        setCardError(null);
      }
    },
    [cardError]
  );

  // Only call onCardChange when necessary
  useEffect(() => {
    const allComplete =
      cardNumberComplete && cardExpiryComplete && cardCvcComplete;
    onCardChange(allComplete, cardError);
  }, [
    cardNumberComplete,
    cardExpiryComplete,
    cardCvcComplete,
    cardError,
    onCardChange,
  ]);

  return (
    <div>
      <PaymentForm
        onCardNumberChange={handleCardNumberChange}
        onCardExpiryChange={handleCardExpiryChange}
        onCardCvcChange={handleCardCvcChange}
      />
      {cardError && (
        <div className="mt-2 text-red-400 text-sm">{cardError}</div>
      )}
    </div>
  );
});

PaymentFormWithValidation.displayName = "PaymentFormWithValidation";

const PaymentRequestButton: React.FC<{
  selectedPlan: PricingPlan;
  email: string;
  fullName: string;
  onPaymentSuccess: (paymentIntent: any) => void;
  onError: (error: string) => void;
}> = React.memo(
  ({ selectedPlan, email, fullName, onPaymentSuccess, onError }) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState<any>(null);
    const [canMakePayment, setCanMakePayment] = useState(false);

    // Memoize the payment request creation
    const createPaymentRequest = useCallback(async () => {
      if (
        !stripe ||
        !email ||
        !validateEmail(email) ||
        !fullName ||
        !validateName(fullName)
      ) {
        return;
      }

      const pr = stripe.paymentRequest({
        country: "NL", // Set based on your business location
        currency: "eur",
        total: {
          label: `${selectedPlan.name} Plan`,
          amount: selectedPlan.price * 100, // Convert to cents
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check if Apple Pay or Google Pay is available
      try {
        const result = await pr.canMakePayment();
        if (result) {
          setCanMakePayment(true);
          setPaymentRequest(pr);
        }
      } catch (error) {
        console.error("Error checking payment methods:", error);
      }

      pr.on("paymentmethod", async (event) => {
        try {
          // Create payment intent for Payment Request API
          const response = await fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: selectedPlan.price,
              currency: "eur",
              email: email,
              customerName: fullName,
              planName: selectedPlan.name,
              paymentMethod: "apple_pay", // This will be handled by Payment Request API
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const { clientSecret } = await response.json();

          // Confirm the payment
          const { error, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: event.paymentMethod.id,
            },
            {
              handleActions: false,
            }
          );

          if (error) {
            event.complete("fail");
            onError(error.message || "Payment failed");
          } else {
            event.complete("success");
            if (paymentIntent && paymentIntent.status === "succeeded") {
              onPaymentSuccess(paymentIntent);
            }
          }
        } catch (err) {
          event.complete("fail");
          onError("Payment failed");
        }
      });
    }, [stripe, selectedPlan, email, fullName, onPaymentSuccess, onError]);

    useEffect(() => {
      createPaymentRequest();
    }, [createPaymentRequest]);

    if (!canMakePayment || !paymentRequest) {
      return null;
    }

    return (
      <div className="mb-6">
        <PaymentRequestButtonElement
          options={{
            paymentRequest,
            style: {
              paymentRequestButton: {
                type: "buy",
                theme: "light",
                height: "48px",
              },
            },
          }}
        />

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-[#dedcd1]/20"></div>
          <div className="px-4 text-[#9c9a92] text-sm">or pay with</div>
          <div className="flex-1 border-t border-[#dedcd1]/20"></div>
        </div>
      </div>
    );
  }
);

PaymentRequestButton.displayName = "PaymentRequestButton";

// Move PaymentMethodOption outside of CheckoutForm to prevent re-creation
const PaymentMethodOption: React.FC<{
  value: PaymentMethod;
  label: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: string;
  logoHeight?: string;
  restriction?: string;
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onCardChange: (complete: boolean, error: string | null) => void;
}> = React.memo(
  ({
    value,
    label,
    logoSrc,
    logoAlt,
    restriction,
    paymentMethod,
    onPaymentMethodChange,
    onCardChange,
  }) => (
    <div className="space-y-3">
      <label className="flex items-center cursor-pointer justify-between">
        <div className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value={value}
            checked={paymentMethod === value}
            onChange={(e) =>
              onPaymentMethodChange(e.target.value as PaymentMethod)
            }
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
              paymentMethod === value
                ? "border-[#faf9f5] bg-[#faf9f5]"
                : "border-[#9c9a92]"
            }`}
          >
            {paymentMethod === value && (
              <div className="w-2 h-2 rounded-full bg-[#30302e]"></div>
            )}
          </div>
          <span className="text-[#faf9f5] text-sm">{label}</span>
        </div>
        {logoSrc && (
          <div className="ml-3">
            <img src={logoSrc} alt={logoAlt} />
          </div>
        )}
      </label>

      {restriction && paymentMethod === value && (
        <div className="text-[#9c9a92] text-xs">{restriction}</div>
      )}

      {/* Animated payment method specific content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          paymentMethod === value
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {paymentMethod === value && (
          <div className="space-y-6 pt-4">
            {/* Payment Method Specific Content */}
            {value === "card" && (
              <div>
                <PaymentFormWithValidation onCardChange={onCardChange} />
              </div>
            )}

            {value === "ideal" && (
              <div>
                <label className="block text-[#faf9f5] text-sm font-normal mb-2">
                  Bank selection
                </label>
                <div className="p-3 bg-[#30302e] rounded-[5px] flex items-start justify-start flex-row border border-[#dedcd1]/20">
                  <img
                    src="/redirect.svg"
                    className="h-16 w-16 mr-[10px]"
                  ></img>
                  <div className="text-[#c2c0b6] text-sm">
                    You'll be redirected to your bank to complete the payment
                    securely via iDEAL.
                  </div>
                </div>
              </div>
            )}

            {value === "bancontact" && (
              <div>
                <label className="block text-[#faf9f5] text-sm font-normal mb-2">
                  Bank selection
                </label>
                <div className="p-3 bg-[#30302e] rounded-[5px] flex items-start justify-start flex-row border border-[#dedcd1]/20">
                  <img
                    src="/redirect.svg"
                    className="h-16 w-16 mr-[10px]"
                  ></img>
                  <div className="text-[#c2c0b6] text-sm">
                    You'll be redirected to your bank to complete the payment
                    securely via Bancontact.
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
);

PaymentMethodOption.displayName = "PaymentMethodOption";

const CheckoutForm: React.FC<CheckoutFormProps> = ({ selectedPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailTouched, setEmailTouched] = useState(false);
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [nameTouched, setNameTouched] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [cardComplete, setCardComplete] = useState(false);
  const [cardError, setCardError] = useState<string | null>(null);

  // Memoize callback functions to prevent unnecessary re-renders
  const handleCardChange = useCallback(
    (complete: boolean, error: string | null) => {
      setCardComplete(complete);
      setCardError(error);
    },
    []
  );

  // IMPROVED: Include plan information in success redirect
  const handlePaymentSuccess = useCallback(
    (paymentIntent: any) => {
      window.location.href = `/success?payment_intent=${paymentIntent.id}&plan=${selectedPlan.id}`;
    },
    [selectedPlan.id]
  );

  const handlePaymentError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  // Memoize email change handler
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleEmailBlur = useCallback(() => {
    setEmailTouched(true);
  }, []);

  // Memoize name change handler
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFullName(e.target.value);
    },
    []
  );

  const handleNameBlur = useCallback(() => {
    setNameTouched(true);
  }, []);

  // Memoize payment method change handler
  const handlePaymentMethodChange = useCallback((method: PaymentMethod) => {
    setPaymentMethod(method);
  }, []);

  // Email validation effect - optimized to reduce re-renders
  useEffect(() => {
    if (emailTouched) {
      if (!email) {
        setEmailError("Email is required");
      } else {
        const validationMessage = getEmailValidationMessage(email);
        setEmailError(validationMessage);
      }
    } else {
      setEmailError(null);
    }
  }, [email, emailTouched]);

  // Name validation effect - optimized
  useEffect(() => {
    if (nameTouched) {
      const validationMessage = getNameValidationMessage(fullName);
      setNameError(validationMessage);
    } else {
      setNameError(null);
    }
  }, [fullName, nameTouched]);

  // Create payment intent with retry logic
  const createPaymentIntentWithRetry = useCallback(
    async (attemptCount = 0): Promise<any> => {
      const maxRetries = 3;
      const baseDelay = 1000; // 1 second

      try {
        const paymentIntentResponse = await fetch(
          "/api/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: selectedPlan.price,
              currency: "eur",
              email: email,
              customerName: fullName,
              planName: selectedPlan.name,
              paymentMethod: paymentMethod,
            }),
          }
        );

        if (!paymentIntentResponse.ok) {
          const errorData = await paymentIntentResponse.json();
          throw new Error(
            errorData.error ||
              `HTTP error! status: ${paymentIntentResponse.status}`
          );
        }

        const paymentIntentData = await paymentIntentResponse.json();

        if (!paymentIntentData.clientSecret) {
          throw new Error("No client secret received from payment intent");
        }

        return paymentIntentData;
      } catch (error) {
        if (
          attemptCount < maxRetries &&
          error instanceof Error &&
          (error.message.includes("connection") ||
            error.message.includes("network"))
        ) {
          const delay = baseDelay * Math.pow(2, attemptCount); // Exponential backoff
          console.log(
            `Retrying payment intent creation in ${delay}ms (attempt ${
              attemptCount + 1
            }/${maxRetries})`
          );

          await new Promise((resolve) => setTimeout(resolve, delay));
          return createPaymentIntentWithRetry(attemptCount + 1);
        }
        throw error;
      }
    },
    [selectedPlan.price, email, fullName, selectedPlan.name, paymentMethod]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      // Mark fields as touched to show validation errors
      setEmailTouched(true);
      setNameTouched(true);

      // Validate email before proceeding
      if (!email) {
        setEmailError("Email is required");
        return;
      }

      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        return;
      }

      // Validate name (required for all payment methods now)
      if (!fullName || !validateName(fullName)) {
        setNameError(
          "Full name is required and must be at least 2 characters long"
        );
        return;
      }

      if (!stripe || !elements) {
        setError("Payment system not ready. Please try again.");
        return;
      }

      setLoading(true);
      setError(null);

      // Use the full name provided by the user
      const billingName = fullName.trim();

      try {
        const paymentIntentData = await createPaymentIntentWithRetry();
        const { clientSecret } = paymentIntentData;

        if (paymentMethod === "card") {
          const cardNumberElement = elements.getElement(CardNumberElement);

          if (!cardNumberElement) {
            setError("Card element not found");
            setLoading(false);
            return;
          }

          // Confirm card payment using CardNumberElement
          const { error: confirmError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
                card: cardNumberElement,
                billing_details: {
                  name: billingName,
                  email: email,
                },
              },
            });

          if (confirmError) {
            setError(confirmError.message || "Payment failed");
            setLoading(false);
            return;
          }

          if (paymentIntent && paymentIntent.status === "succeeded") {
            // IMPROVED: Include plan information in success redirect
            window.location.href = `/success?payment_intent=${paymentIntent.id}&plan=${selectedPlan.id}`;
          }
        } else if (paymentMethod === "ideal") {
          const { error: confirmError } = await stripe.confirmIdealPayment(
            clientSecret,
            {
              payment_method: {
                ideal: {},
                billing_details: {
                  name: billingName,
                  email: email,
                },
              },
              // IMPROVED: Include plan information in return URL
              return_url: `${window.location.origin}/success?plan=${selectedPlan.id}`,
            }
          );

          if (confirmError) {
            setError(confirmError.message || "Payment failed");
            setLoading(false);
            return;
          }
        } else if (paymentMethod === "bancontact") {
          const { error: confirmError } = await stripe.confirmBancontactPayment(
            clientSecret,
            {
              payment_method: {
                billing_details: {
                  name: billingName,
                  email: email,
                },
              },
              // IMPROVED: Include plan information in return URL
              return_url: `${window.location.origin}/success?plan=${selectedPlan.id}`,
            }
          );

          if (confirmError) {
            setError(confirmError.message || "Payment failed");
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Payment error:", err);
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
        setLoading(false);
      }
    },
    [
      email,
      fullName,
      paymentMethod,
      stripe,
      elements,
      createPaymentIntentWithRetry,
      selectedPlan.id, // Add selectedPlan.id to dependencies
    ]
  );

  // Memoize validation states to prevent unnecessary recalculations
  const validationStates = useMemo(() => {
    const isEmailValid = email && validateEmail(email);
    const isNameValid = fullName && validateName(fullName);
    const isCardValid = paymentMethod === "card" ? cardComplete : true;
    const areRequiredFieldsValid = isEmailValid && isNameValid && isCardValid;

    return {
      isEmailValid,
      isNameValid,
      isCardValid,
      areRequiredFieldsValid,
    };
  }, [email, fullName, paymentMethod, cardComplete]);

  // Determine if the button should be disabled
  const isButtonDisabled =
    !stripe || loading || !validationStates.areRequiredFieldsValid;

  // Get button text based on state
  const getButtonText = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#30302e] mr-2"></div>
          Processing...
        </div>
      );
    }

    if (!email) {
      return "Enter email to continue";
    }

    if (!validationStates.isEmailValid) {
      return "Enter valid email to continue";
    }

    if (!validationStates.isNameValid) {
      return "Enter full name to continue";
    }

    if (paymentMethod === "card" && !validationStates.isCardValid) {
      return "Complete card details";
    }

    switch (paymentMethod) {
      case "ideal":
        return "Pay with iDEAL";
      case "bancontact":
        return "Pay with Bancontact";
      default:
        return "Pay";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label className="block text-[#faf9f5] text-sm font-normal mb-2">
          Email address
          <span className="text-red-400 ml-1">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
          className={`w-full h-11 px-3 bg-[#30302e] rounded-[5px] text-[#faf9f5] text-base placeholder-[#9c9a92] focus:outline-none transition-colors ${
            emailError
              ? "border border-red-500 focus:border-red-500"
              : "border border-transparent focus:border-[#faf9f5]"
          }`}
          placeholder="your@email.com"
        />
        {emailError && emailTouched && (
          <div className="mt-2 text-red-400 text-sm">{emailError}</div>
        )}
      </div>

      {/* Full Name - Now required for all payment methods */}
      <div>
        <label className="block text-[#faf9f5] text-sm font-normal mb-2">
          Full name
          <span className="text-red-400 ml-1">*</span>
        </label>
        <input
          type="text"
          value={fullName}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          required
          className={`w-full h-11 px-3 bg-[#30302e] rounded-[5px] text-[#faf9f5] text-base placeholder-[#9c9a92] focus:outline-none transition-colors ${
            nameError
              ? "border border-red-500 focus:border-red-500"
              : "border border-transparent focus:border-[#faf9f5]"
          }`}
          placeholder="John Doe"
        />
        {nameError && nameTouched && (
          <div className="mt-2 text-red-400 text-sm">{nameError}</div>
        )}
        <div className="mt-2 text-[#9c9a92] text-xs">
          Required for all payment methods
        </div>
      </div>

      {/* Apple Pay / Google Pay Button */}
      {validationStates.areRequiredFieldsValid && (
        <PaymentRequestButton
          selectedPlan={selectedPlan}
          email={email}
          fullName={fullName}
          onPaymentSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      )}

      <h3 className="text-[#faf9f5] text-base font-medium mb-6">
        Payment method
      </h3>

      {/* Payment Method Selection */}
      <div>
        <div className="space-y-6">
          <PaymentMethodOption
            value="card"
            label="Credit/Debit Card"
            logoWidth="150px"
            logoHeight="20px"
            logoSrc="paymentLogos.svg"
            paymentMethod={paymentMethod}
            onPaymentMethodChange={handlePaymentMethodChange}
            onCardChange={handleCardChange}
          />

          <PaymentMethodOption
            value="ideal"
            label="iDEAL"
            logoSrc="ideal.svg"
            logoAlt="iDEAL Logo"
            restriction="Available for Netherlands bank accounts only"
            paymentMethod={paymentMethod}
            onPaymentMethodChange={handlePaymentMethodChange}
            onCardChange={handleCardChange}
          />

          <PaymentMethodOption
            value="bancontact"
            label="Bancontact"
            logoSrc="bancontact.svg"
            logoAlt="Bancontact Logo"
            restriction="Available for Belgium bank accounts only"
            paymentMethod={paymentMethod}
            onPaymentMethodChange={handlePaymentMethodChange}
            onCardChange={handleCardChange}
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="p-3 bg-red-900/20 border border-red-700 rounded-lg">
          <div className="text-sm text-red-400">{error}</div>
        </div>
      )}

      {/* Submit button */}
      <div className="transition-all duration-300 ease-in-out">
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full h-9 rounded-lg text-sm font-medium transition-colors focus:outline-none ${
            isButtonDisabled
              ? "bg-[#51514d] text-[#9c9a92] cursor-not-allowed"
              : "bg-[#faf9f5] text-[#30302e] hover:bg-[#e8e6e1]"
          }`}
        >
          {getButtonText()}
        </button>

        {/* Terms */}
        {validationStates.areRequiredFieldsValid && (
          <p className="text-[#9c9a92] text-xs font-normal leading-none mt-4">
            By providing your payment information, you allow{" "}
            {process.env.NEXT_PUBLIC_STORE_NAME || "us"} to charge your{" "}
            {paymentMethod === "ideal" || paymentMethod === "bancontact"
              ? "bank account"
              : "card"}{" "}
            in the amount above now and monthly until you cancel in accordance
            with our{" "}
            <a href="/legal/terms" className="underline hover:text-[#c2c0b6]">
              terms
            </a>
            . You can cancel at any time.
          </p>
        )}
      </div>
    </form>
  );
};

// Separate client component that uses useSearchParams
const CheckoutPageWithSearchParams: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!plan) {
      // No plan parameter provided
      router.push("/pricing");
      return;
    }

    // First, check if it's a predefined plan
    if (PRICING_PLANS[plan]) {
      setSelectedPlan(PRICING_PLANS[plan]);
      return;
    }

    // If not a predefined plan, check if it's a valid custom amount
    const customAmount = validateCustomPlanAmount(plan);
    if (customAmount !== null) {
      const customPlan = createCustomPlan(customAmount);
      setSelectedPlan(customPlan);
      return;
    }

    // Invalid plan parameter
    setError("Invalid plan parameter. Please select a valid plan.");
    // Redirect to pricing page after a delay to show the error
    setTimeout(() => {
      router.push("/pricing");
    }, 3000);
  }, [plan, router]);

  // Show error state if invalid plan
  if (error) {
    return (
      <div className="min-h-screen bg-[#262624] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-lg mb-4">{error}</div>
          <div className="text-[#9c9a92] text-sm">
            Redirecting to pricing page...
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#faf9f5] mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-[#262624] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#faf9f5]"></div>
      </div>
    );
  }

  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF";

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-md mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[#faf9f5] text-2xl font-medium">
            {selectedPlan.name} plan
          </h1>
          {selectedPlan.id.startsWith("custom-") && (
            <p className="text-[#9c9a92] text-sm mt-2">Custom pricing plan</p>
          )}
        </div>

        {/* Order Details */}
        <div
          className="bg-[#2A29FF] rounded-md p-5 mb-6"
          style={{ backgroundColor: primaryColor }}
        >
          <h3 className="text-[#faf9f5] text-base font-medium mb-4">
            Order details
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-white text-sm font-medium">
                  {selectedPlan.name} plan
                </div>
                {selectedPlan.id.startsWith("custom-") && (
                  <div className="text-white/70 text-xs mt-1">
                    Custom amount
                  </div>
                )}
              </div>
              <div className="text-white text-sm font-medium">
                €{selectedPlan.price}
              </div>
            </div>

            <div className="w-full h-px bg-[radial-gradient(circle,_#dedcd1_1px,_transparent_1px)] [background-size:4px_1px] opacity-50"></div>

            <div className="flex justify-between items-center">
              <div className="text-white text-sm font-medium">Total to pay</div>
              <div className="text-white text-sm font-medium">
                €{selectedPlan.price}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <Elements stripe={stripePromise}>
          <div className="bg-[#1e1e1e] border border-[#dedcd1]/20 rounded-md p-5">
            <CheckoutForm selectedPlan={selectedPlan} />
          </div>
        </Elements>
      </div>
    </div>
  );
};

// Loading fallback component
const CheckoutPageLoading: React.FC = () => (
  <div className="min-h-screen bg-[#262624] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#faf9f5]"></div>
  </div>
);

// Main component that wraps the search params component in Suspense
const CheckoutPage: React.FC = () => {
  return (
    <Suspense fallback={<CheckoutPageLoading />}>
      <CheckoutPageWithSearchParams />
    </Suspense>
  );
};

export default CheckoutPage;
