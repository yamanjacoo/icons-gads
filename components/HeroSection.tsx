"use client";

import Image from "next/image";
import { BuyButton } from "./buy-now";
import DemoButton from "./demoButton";

export default function HeroSection() {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF"; // fallback color

  return (
    <section className="mx-auto my-6 md:my-12 flex min-h-[80vh] md:min-h-screen flex-col items-start justify-center bg-black text-white px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background image confined to hero section */}
      {process.env.NEXT_PUBLIC_BACKGROUND_IMAGE && (
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Gradient overlay that fades to black at the bottom */}
      {process.env.NEXT_PUBLIC_BACKGROUND_IMAGE && (
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.95) 100%)",
          }}
        />
      )}

      {/* Wrap the content in a container with higher z-index */}
      <div className="relative z-10 w-full eden-container mt-24">
        <div className="w-full md:max-w-3xl">
          <div className="flex flex-row items-center justify-start p-2 sm:p-3 pr-4 sm:pr-8 rounded-full">
            <Image
              src={process.env.NEXT_PUBLIC_PHOTO || "/default-image.png"}
              className="mr-2 sm:mr-4 rounded-full"
              height={60}
              width={60}
              alt="Company logo"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />

            <div className="flex flex-col">
              <p className="font-semibold text-[14px] sm:text-[16px] md:text-[18px]">
                {process.env.NEXT_PUBLIC_MADE_BY || ""}
              </p>
              <p className="text-[12px] sm:text-[14px]">Creator & Designer</p>
            </div>
          </div>
        </div>

        <h1 className="text-[60px] sm:text-[80px] md:text-[80px] lg:text-[100px] xl:text-[140px] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[130px] my-6 sm:my-8 md:my-12 max-w-full">
          The Only Pack Of Icons You Need
        </h1>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <BuyButton price={0} />
          <DemoButton></DemoButton>
        </div>
      </div>
    </section>
  );
}
