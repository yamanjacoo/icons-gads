import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

// Initialize dataLayer for Google Ads
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize the Inter font with the weights we need
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Icon Collections",
  description:
    "Explore our curated collections of meticulously crafted icons, designed for various use cases and applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-17651233566";

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans bg-black`}>
        <ScrollToTop />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

import "./globals.css";
