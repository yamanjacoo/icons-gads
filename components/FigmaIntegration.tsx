"use client";

import { useState, useEffect } from "react";

export default function ProjectsShowcase() {
  // Add animation on scroll
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects-showcase");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects-showcase"
      className="py-16 md:py-24 bg-finance-950 text-white"
    >
      <div className="eden-container">
        {/* Badge and Heading */}

        {/* Cards Container - Using max-width and responsive centering instead of fixed width */}
        <div className="flex flex-col gap-5 w-full max-w-[1200px] mx-auto">
          {/* Main Card - Full Width */}
          <div
            className={`w-full opacity-95 bg-[#1E1E1E] rounded-2xl shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.10)] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06)] outline outline-1 outline-offset-[-1px] outline-zinc-800 overflow-hidden transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Image Placeholder - Made responsive with aspect ratio */}
            <div
              className="w-full h-64 md:h-72 lg:h-80 relative bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/card-1.png')" }}
            >
              {/* Overlay text */}
            </div>

            {/* Content Section */}
            <div className="w-full px-6 sm:px-8 md:px-10 py-7 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <div className="text-white text-xl sm:text-2xl font-medium ">
                  Customizable Website Builder
                </div>
                <div className="text-neutral-400 text-sm sm:text-base font-normal  leading-normal">
                  Design your unique travel storefront with ease.
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Cards - Made responsive with grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {/* Card 1 */}
            <div
              className={`w-full opacity-95 bg-[#1E1E1E] rounded-2xl shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.10)] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06)] outline outline-1 outline-offset-[-1px] outline-zinc-800 overflow-hidden transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              {/* Image Placeholder with Aspect Ratio */}
              <div
                className="w-full h-64 md:h-72 lg:h-80 relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/card-2.png')" }}
              >
                {/* Overlay text */}
              </div>

              {/* Content Section */}
              <div className="w-full px-6 sm:px-8 md:px-10 py-7 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-medium ">
                    Integrate anywhere Figma, Adobe and More
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-base font-normal  leading-normal">
                    Secure and efficient payment solutions.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`w-full opacity-95 bg-[#1E1E1E] rounded-2xl shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.10)] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06)] outline outline-1 outline-offset-[-1px] outline-zinc-800 overflow-hidden transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              {/* Image Placeholder with Aspect Ratio */}
              <div
                className="w-full h-64 md:h-72 lg:h-80 relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/card-3.png')" }}
              >
                {/* Overlay text */}
              </div>

              {/* Content Section */}
              <div className="w-full px-6 sm:px-8 md:px-10 py-7 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-medium ">
                    Wide collection for any use
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-base font-normal  leading-normal">
                    Secure and efficient payment solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
