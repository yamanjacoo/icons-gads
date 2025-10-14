import React, { useCallback } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#faf9f5",
      backgroundColor: "#30302e",
      "::placeholder": {
        color: "#9c9a92",
      },
    },
    invalid: {
      color: "#ef4444",
    },
  },
};

interface PaymentFormProps {
  onCardNumberChange?: (event: any) => void;
  onCardExpiryChange?: (event: any) => void;
  onCardCvcChange?: (event: any) => void;
}

// Memoize the component to prevent unnecessary re-renders
const PaymentForm = React.memo<PaymentFormProps>(
  ({ onCardNumberChange, onCardExpiryChange, onCardCvcChange }) => {
    // Memoize the handlers to prevent re-renders of Stripe Elements
    const handleCardNumberChange = useCallback(
      (event: any) => {
        onCardNumberChange?.(event);
      },
      [onCardNumberChange]
    );

    const handleCardExpiryChange = useCallback(
      (event: any) => {
        onCardExpiryChange?.(event);
      },
      [onCardExpiryChange]
    );

    const handleCardCvcChange = useCallback(
      (event: any) => {
        onCardCvcChange?.(event);
      },
      [onCardCvcChange]
    );

    return (
      <div className="space-y-5">
        {/* Card Number */}
        <div>
          <label className="block text-[#faf9f5] text-sm font-normal mb-2">
            Card Number
          </label>
          <div className="w-full h-11 px-3 bg-[#30302e] rounded-[5px] text-[#faf9f5] text-base placeholder-[#9c9a92] flex items-center border border-transparent focus-within:border-[#faf9f5] transition-colors">
            <CardNumberElement
              options={ELEMENT_OPTIONS}
              className="w-full bg-transparent focus:outline-none"
              onChange={handleCardNumberChange}
            />
          </div>
        </div>

        {/* Expiry and CVC */}
        <div className="flex gap-4">
          {/* Expiry */}
          <div className="w-1/2">
            <label className="block text-[#faf9f5] text-sm font-normal mb-2">
              Expiry Date
            </label>
            <div className="w-full h-11 px-3 bg-[#30302e] rounded-[5px] text-[#faf9f5] text-base flex items-center border border-transparent focus-within:border-[#faf9f5] transition-colors">
              <CardExpiryElement
                options={ELEMENT_OPTIONS}
                className="w-full bg-transparent focus:outline-none"
                onChange={handleCardExpiryChange}
              />
            </div>
          </div>

          {/* CVC */}
          <div className="w-1/2">
            <label className="block text-[#faf9f5] text-sm font-normal mb-2">
              CVC
            </label>
            <div className="w-full h-11 px-3 bg-[#30302e] rounded-[5px] text-[#faf9f5] text-base flex items-center border border-transparent focus-within:border-[#faf9f5] transition-colors">
              <CardCvcElement
                options={ELEMENT_OPTIONS}
                className="w-full bg-transparent focus:outline-none"
                onChange={handleCardCvcChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// Add display name for debugging
PaymentForm.displayName = "PaymentForm";

export default PaymentForm;
