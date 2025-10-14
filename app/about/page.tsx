import MainNavbar from "@/components/MainNavbar";
import NewFooter from "@/components/NewFooter";
import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF";

  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      <MainNavbar />

      <main className="pt-32 pb-24">
        <div className="eden-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl  text-white mb-4">
              About {process.env.NEXT_PUBLIC_STORE_NAME}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The story behind our icon collection and the dedication that goes
              into every design
            </p>
          </div>

          <div className="rounded-2xl bg-[#1E1E1E] w-full h-[299px] flex flex-col justify-center items-center">
            <Image
              src={process.env.NEXT_PUBLIC_PHOTO || "/default-image.png"}
              className="mr-2 sm:mr-4 rounded-full"
              height={200}
              width={200}
              alt="Company logo"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className=" backdrop-blur-sm rounded-xl   p-8 mb-16">
              <p className="text-white/80 mb-6 leading-relaxed">
                I've poured countless hours into crafting this icon collection,
                meticulously designing each icon with attention to detail and
                consistency. What started as a passion project has evolved into
                a comprehensive library that I'm proud to share with designers
                and developers worldwide.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                The trust and feedback from customers like you push me to
                continuously improve and expand this collection. Every
                suggestion and request helps shape the future of
                {process.env.NEXT_PUBLIC_STORE_NAME}, and I'm committed to
                maintaining the highest standards of quality and usability.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                This is only the beginning. I have ambitious plans for future
                updates, including new icon categories, additional styles, and
                enhanced customization options. My goal is to create not just
                icons, but tools that empower your creative process and elevate
                your projects.
              </p>

              <p className="text-white/80 leading-relaxed">
                Thank you for your support on this journey. I look forward to
                seeing how you use these icons in your amazing projects.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="opacity-60 text-center text-white text-xl">
            Do you have any questions?
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="flex items-center text-white text-2xl">
              Ask me directly
              <ArrowUpRight
                className="ml-2 w-12 h-12"
                style={{ color: primaryColor }}
              />
            </button>
          </div>
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
