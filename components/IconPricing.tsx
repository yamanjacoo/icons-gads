"use client";
import { Download, HelpCircle, ArrowRight } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  name: string;
  basic: boolean;
  flexible: boolean;
  premium: boolean;
}

export default function IconPricing({
  showComparisonTable = false,
}: {
  showComparisonTable?: boolean;
}) {
  const features: PricingFeature[] = [
    {
      name: "Access to basic icon set",
      basic: true,
      flexible: true,
      premium: true,
    },
    { name: "Commercial usage", basic: true, flexible: true, premium: true },
    { name: "Lifetime updates", basic: false, flexible: true, premium: true },
    {
      name: "Source files included",
      basic: false,
      flexible: true,
      premium: true,
    },
    {
      name: "Custom color editing",
      basic: false,
      flexible: false,
      premium: true,
    },
    { name: "Priority support", basic: false, flexible: false, premium: true },
    { name: "Extended license", basic: false, flexible: false, premium: true },
  ];
  // Using environment variables for Stripe payment links
  const NEXT_PUBLIC_P19 = process.env.NEXT_PUBLIC_P19;
  const NEXT_PUBLIC_P79 = process.env.NEXT_PUBLIC_P79;
  const NEXT_PUBLIC_P32 = process.env.NEXT_PUBLIC_P32;
  const NEXT_PUBLIC_P130 = process.env.NEXT_PUBLIC_P130;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="eden-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose your perfect plan
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Get lifetime access to our premium icons with a one-time payment. No
            subscriptions, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards - Simplified to match home page style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-[#141413] rounded-xl p-6 border border-white/10 flex flex-col">
            <div>
              <h3 className="font-bold mb-1">Basic Icons</h3>
              <p className="text-sm text-white/60 mb-5">
                Essential icons for simple projects.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">19.00€</span>
                <span className="text-sm text-white/60 ml-1">one-time</span>
              </div>
              <Button
                className="w-full bg-white text-finance-950 hover:bg-white/90"
                asChild
              >
                <a href={NEXT_PUBLIC_P19}>Get Started</a>
              </Button>
            </div>
          </div>

          {/* Flexible Plan */}
          <div className="bg-[#141413] rounded-xl p-6 border border-white/10 flex flex-col">
            <div>
              <h3 className="font-bold mb-1">Flexible Icons</h3>
              <p className="text-sm text-white/60 mb-5">
                Versatile icons for everyday design needs.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">32.00€</span>
                <span className="text-sm text-white/60 ml-1">one-time</span>
              </div>
              <Button
                className="w-full bg-white text-finance-950 hover:bg-white/90"
                asChild
              >
                <a href={NEXT_PUBLIC_P32}>Get Started</a>
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#141413] rounded-xl p-6 border border-primary/30 flex flex-col relative">
            <div className="absolute right-5 top-4 bg-primary text-white rounded-full px-2 py-0.5 text-xs">
              Popular
            </div>
            <div>
              <h3 className="font-bold mb-1">Premium Icons</h3>
              <p className="text-sm text-white/60 mb-5">
                Professional-grade icons for serious designers.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">79.00€</span>
                <span className="text-sm text-white/60 ml-1">one-time</span>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href={NEXT_PUBLIC_P79}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Remove the comparison table section completely */}
      </div>
    </section>
  );
}
