"use client";

import Image from "next/image";
import { useState } from "react";

export default function BrandScroll() {
  // Sample brand data - replace with your actual brands
  const brands = [
    { id: 1, name: "/brand1.svg" },
    { id: 2, name: "/brand2.svg" },
    { id: 3, name: "/brand3.svg" },
    { id: 4, name: "/brand4.svg" },
    { id: 5, name: "/brand5.svg" },
    { id: 6, name: "/brand6.svg" },
  ];

  return (
    <div className="rounded-xl  overflow-hidden relative">
      {/* Left gradient fade */}
      <div
        className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #000000 0%,  rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Right gradient fade */}
      <div
        className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <div className="marquee-container">
        <div className="marquee-content" style={{}}>
          {/* First set of brands */}
          {brands.map((brand) => (
            <div
              key={`first-${brand.id}`}
              className="flex-shrink-0 bg-white/10 p-6 h-28 w-28 rounded-full flex items-center justify-center mx-[3px]"
            >
              <Image
                className="text-white font-medium text-lg"
                src={brand.name}
                alt={""}
                height={40}
                width={40}
              ></Image>
            </div>
          ))}

          {/* Second set of brands (duplicate for seamless loop) */}
          {brands.map((brand) => (
            <div
              key={`second-${brand.id}`}
              className="flex-shrink-0 bg-white/10 p-6 h-28 w-28 rounded-full flex items-center justify-center mx-[3px]"
            >
              <Image
                className="text-white font-medium text-lg"
                src={brand.name}
                alt={""}
                height={40}
                width={40}
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
