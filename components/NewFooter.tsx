"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const NewFooter = () => {
  const openCookieSettings = () => {
    // This will trigger the cookie consent banner to reappear
    localStorage.removeItem("cookieConsentGiven");
    // Force a page reload to show the banner
    window.location.reload();
  };

  const LOGO = process.env.NEXT_PUBLIC_LOGO;
  const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || "";
  const PHONE = process.env.NEXT_PUBLIC_PHONE || "";
  const MADE_BY = process.env.NEXT_PUBLIC_MADE_BY || "";
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF"; // fallback color

  return (
    <footer className="w-full  text-white pt-32 pb-16 relative overflow-hidden ">
      <div
        className="eden-container relative z-10 rounded-3xl p-12"
        style={{ backgroundColor: primaryColor }}
      >
        {/* Brand and address */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src={process.env.NEXT_PUBLIC_PHOTO || "/default-image.png"}
                className="mr-2 sm:mr-4 rounded-full"
                height={40}
                width={40}
                alt="Company logo"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <span className=" text-xl ml-2">
                {process.env.NEXT_PUBLIC_STORE_NAME}
              </span>
            </div>
            <p className="text-white/60 max-w-xs">
              Premium icons for modern designers and developers
            </p>
            <p className="mt-4">
              {MADE_BY && <span className="">Made with ❤️ by {MADE_BY}</span>}
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Main Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Main</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Essential Policies for Digital Products */}
          <div>
            <h3 className="text-white font-medium mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/terms"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/refund"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/delivery"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Digital Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://google.com/${ADDRESS}`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-white/60">
            © {new Date().getFullYear()}{" "}
            {process.env.NEXT_PUBLIC_STORE_NAME || "Digital Products"}. All
            rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
            <button
              onClick={openCookieSettings}
              className="text-white/40 hover:text-white/60 transition-colors text-sm"
            >
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
