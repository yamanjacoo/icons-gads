"use client";

import Link from "next/link";

interface BuyButtonProps {
  primaryColor?: string;
  textColor?: string; // Optional with default value
  text?: string;
  className?: string;
  price: number;
}

export function BuyButton({
  primaryColor,
  textColor = "white", // Default value is white
  text = "Buy Now",
  className = "",
  price,
}: BuyButtonProps) {
  const defaultColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF";
  const finalColor = primaryColor || defaultColor;

  const getPaymentLink = () => {
    switch (price) {
      case 5:
        return "/checkout?plan=basic";
      case 32:
        return "/checkout?plan=standard";
      case 52:
        return "/checkout?plan=professional";
      case 79:
        return "/checkout?plan=business";
      case 130:
        return "/checkout?plan=enterprise";
      default:
        return "/pricing";
    }
  };

  const paymentLink = getPaymentLink();

  return (
    <Link href={paymentLink} rel="noopener noreferrer" className="block">
      <div
        className={`h-12 w-auto flex flex-row justify-between items-center rounded-full pl-8 py-8 pr-2 cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        style={{ backgroundColor: finalColor }}
      >
        <p className="text-[18px] font-medium" style={{ color: textColor }}>
          {text}
        </p>
        <div className="ml-8 rounded-full h-12 w-12 bg-white flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: finalColor }}
          >
            <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
