import MainNavbar from "@/components/MainNavbar";
import NewFooter from "@/components/NewFooter";
import { Button } from "@/components/ui/button";
import { Download, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DownloadDemoPage() {
  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      <MainNavbar />

      <main className="pt-32 pb-24">
        <div className="eden-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Try our icons before you buy
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Download a free sample pack of our premium icons to test in your
              projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Preview Section */}
              <div className="p-8 flex flex-col justify-center items-center">
                <div className="bg-white/5 rounded-xl p-6 mb-6 w-full">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-white/10 rounded-lg flex items-center justify-center"
                      >
                        <Image
                          src={`/placeholder.svg?height=40&width=40`}
                          alt={`Demo icon ${i}`}
                          width={40}
                          height={40}
                          className="w-8 h-8 opacity-70"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-white/50 text-sm text-center">
                  Preview of 325 icons from our demo pack
                </p>
              </div>

              {/* Download Section */}
              <div className="bg-primary/10 p-8">
                <h2 className="text-2xl font-bold mb-4">Free Demo Pack</h2>
                <p className="text-white/70 mb-6">
                  Get a taste of our premium quality with this free sample pack
                  containing 20 carefully selected icons.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium mb-2">Included in the demo:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>325 high-quality icons in SVG format</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multiple styles and categories</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Free for personal and commercial projects</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://firebasestorage.googleapis.com/v0/b/transport-7d83f.firebasestorage.app/o/icons%2FFree%20version-%20v1.0.zip?alt=media&token=ebf86cb1-0658-4320-a78c-c03d1d0c7121"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 mb-4 gap-2">
                    <Download className="h-4 w-4" />
                    Download Free Demo Pack
                  </Button>
                </a>

                <p className="text-white/50 text-xs text-center mb-6">
                  By downloading, you agree to our{" "}
                  <Link
                    href="/legal/terms"
                    className="underline hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </p>

                <div className="text-center">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center text-primary hover:text-primary/90"
                  >
                    Ready for the full collection?{" "}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Why try our demo?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Our demo pack gives you a glimpse of the quality and versatility
              of our full icon collections. Test them in your projects before
              making a purchase decision.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">
                  Premium Quality
                </h3>
                <p className="text-white/70 text-sm text-center">
                  Experience the same high quality as our premium collections
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">
                  No Commitment
                </h3>
                <p className="text-white/70 text-sm text-center">
                  Try before you buy with no obligation to purchase
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">
                  Versatile Formats
                </h3>
                <p className="text-white/70 text-sm text-center">
                  SVG format for maximum flexibility and scalability
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
