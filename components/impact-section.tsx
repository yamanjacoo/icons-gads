"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ImpactSection() {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF"; // fallback color

  return (
    <div className="eden-container mx-auto rounded-[36px]  bg-[#1e1e1e] p-6 my-12">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-center">
        {/* Left Card */}
        <div className="w-full overflow-hidden rounded-[36px]  bg-neutral-900 relative">
          <div className="aspect-[550/620] rounded-[36px]  w-full relative">
            {/* Background Image */}
            <Image
              src={process.env.NEXT_PUBLIC_PHOTO || "/default-image.png"}
              alt="Background"
              fill
              className="object-cover opacity-40"
            />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-4xl sm:text-5xl text-white font-semibold leading-tight mb-6">
                Your success
                <br />
                is my goal
              </h2>

              <p className="text-white opacity-80 text-base font-semibold mb-8 max-w-xs">
                After working with countless icons, I’ve developed an eye for
                spotting issues instantly—and refining every detail to
                perfection in my icon packs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Quote */}
        <div className="w-full  flex items-center justify-center p-4 sm:p-6 md:p-8">
          <blockquote className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight text-center max-w-xl">
            "Icons are small, but their impact is massive"
          </blockquote>
        </div>
      </div>
    </div>
  );
}
