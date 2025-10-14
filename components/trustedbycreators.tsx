import Image from "next/image";
import { BuyButton } from "./buy-now";
import DemoButton from "./demoButton";

export function TrustedByCreators() {
  return (
    <div className="relative w-full overflow-hidden container my-6 sm:my-8 md:my-10 rounded-xl sm:rounded-2xl">
    
      <div className="relative aspect-[9/16] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[16/8] xl:aspect-[16/7] w-full">
        <Image
          src="https://framerusercontent.com/images/YONjKj76nkanVkusPMgvv81A.jpg"
          alt="Woman working on laptop"
          fill
          className="object-cover brightness-75 grayscale"
          priority
        />

        {/* Left gradient fade */}
        <div
          className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 z-10"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Right gradient fade */}
        <div
          className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 z-10"
          style={{
            background:
              "linear-gradient(to left, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Top gradient fade */}

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 lg:h-48 z-10"
          style={{
            background:
              "linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>

      {/* Content overlay - centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 lg:p-12 z-20">
        <div className="space-y-6 sm:space-y-6 md:space-y-8 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white leading-[60px] sm:leading-tight md:leading-tight lg:leading-[80px] pb-4 sm:pb-6 md:pb-8 lg:pb-12">
            <span className="inline-block px-2 py-1 text-white mb-1 sm:mb-2">
              Trusted by
            </span>
            <br />
            <span>creators like you</span>
          </h2>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center  space-y-2 w-[300px] px-4 sm:px-0">
              <BuyButton price={0} />
              <DemoButton></DemoButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
