"use client";

import { Check } from "lucide-react";
import { BuyButton } from "./buy-now";

export function HomePricing() {
  const plans = [
    {
      id: 1,
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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
  ];

  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF";

  return (
    <div className="w-full eden-container mx-auto">
      <div className="flex flex-col gap-6">
        <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white leading-[60px] sm:leading-tight md:leading-tight lg:leading-[80px] pb-4 sm:pb-6 md:pb-8 lg:pb-12">
          <span className="inline-block px-2 py-1 text-white mb-1 sm:mb-2">
            Flexible plans
          </span>
          <br />
          <span>for every need</span>
        </h2>

        {plans.map((plan) => {
          const buttonColor = plan.price === 79 ? "white" : primaryColor;
          // For price 79, use primaryColor as text color
          const textColor = plan.price === 79 ? primaryColor : undefined;

          return (
            <div
              key={plan.id}
              className="w-full relative rounded-[38px] overflow-hidden"
            >
              <div className="w-full h-full absolute bg-[#1e1e1e]"></div>

              {/* Content container */}
              <div className="relative z-10 flex flex-col md:flex-row">
                {/* Left side - Features */}
                <div className="flex-1 p-8 md:p-12">
                  <div className="text-white text-2xl mb-8">
                    {plan.name} Plan Includes:
                  </div>

                  <div className="flex flex-col gap-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-7 h-7 flex items-center justify-center">
                          <Check
                            className="w-5 h-5"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <div className="ml-4 text-white text-sm md:text-lg opacity-50">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Pricing Card */}
                <div className="flex-1 p-2 justify-center items-start m-2">
                  <div
                    className={`rounded-[34px] h-full flex flex-col justify-center p-6 ${
                      plan.price !== 79 ? "bg-[#161616]" : ""
                    }`}
                    style={
                      plan.price === 79 ? { backgroundColor: primaryColor } : {}
                    }
                  >
                    {/* Plan number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-white text-3xl">0{plan.id}</div>
                    </div>

                    {/* Plan details */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-white text-3xl mb-4">
                          {plan.name}
                        </div>
                        <div className="text-white text-base opacity-50">
                          {plan.description}
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="text-white text-4xl font-semibold">
                          €{plan.price}
                        </div>
                      </div>
                    </div>

                    <BuyButton
                      primaryColor={buttonColor}
                      textColor={textColor}
                      price={plan.price}
                      text="Buy Now"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
