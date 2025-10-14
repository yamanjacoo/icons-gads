// pages/checkout.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Types
interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  priceId: string; // Stripe Price ID
}

interface CheckoutFormProps {
  selectedPlan: PricingPlan;
}

// Pricing plans configuration
const PRICING_PLANS: Record<string, PricingPlan> = {
  pro: {
    id: 'pro',
    name: 'Claude Pro',
    price: 20,
    interval: 'month',
    features: [
      'Priority bandwidth and availability',
      'Early access to new features',
      'Create projects to work with Claude around a set of docs, code, or ideas',
      'Work with recent Claude 3 Opus and Haiku models'
    ],
    priceId: 'price_pro_monthly' // Replace with actual Stripe Price ID
  },
  team: {
    id: 'team',
    name: 'Claude Team',
    price: 30,
    interval: 'month',
    features: [
      'Everything in Pro',
      'Higher usage limits',
      'Central billing and administration',
      'Early access to collaboration features'
    ],
    priceId: 'price_team_monthly' // Replace with actual Stripe Price ID
  }
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ selectedPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found');
      setLoading(false);
      return;
    }

    try {
      // Create payment method
      const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email: email,
        },
      });

      if (methodError) {
        setError(methodError.message || 'An error occurred');
        setLoading(false);
        return;
      }

      // Create subscription
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          priceId: selectedPlan.priceId,
          email: email,
        }),
      });

      const subscription = await response.json();

      if (subscription.error) {
        setError(subscription.error);
        setLoading(false);
        return;
      }

      // Handle successful subscription
      window.location.href = '/success';
      
    } catch (err) {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder="your@email.com"
        />
      </div>

      {/* Card Element */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment information
        </label>
        <div className="p-3 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <div className="text-sm text-red-600">{error}</div>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        {loading ? 'Processing...' : `Subscribe to ${selectedPlan.name}`}
      </button>

      {/* Terms */}
      <p className="text-xs text-gray-500 text-center">
        By subscribing, you agree to our{' '}
        <a href="/terms" className="underline hover:text-gray-700">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="underline hover:text-gray-700">
          Privacy Policy
        </a>
        . Your subscription will automatically renew each month.
      </p>
    </form>
  );
};

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { plan } = router.query;
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  useEffect(() => {
    if (plan && typeof plan === 'string' && PRICING_PLANS[plan]) {
      setSelectedPlan(PRICING_PLANS[plan]);
    } else if (plan) {
      // Invalid plan, redirect to pricing page
      router.push('/pricing');
    }
  }, [plan, router]);

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">Claude</span>
            </div>
            <button
              onClick={() => router.back()}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Plan details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Complete your subscription
            </h2>
            
            {/* Selected plan */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedPlan.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Monthly subscription
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    ${selectedPlan.price}
                  </div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">What's included:</h4>
              <ul className="space-y-2">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Billing info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <p>• Cancel anytime</p>
                <p>• Immediate access after payment</p>
                <p>• Secure payment processing</p>
              </div>
            </div>
          </div>

          {/* Right side - Payment form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Payment details
            </h3>
            
            <Elements stripe={stripePromise}>
              <CheckoutForm selectedPlan={selectedPlan} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;