import MainNavbar from "@/components/MainNavbar";
import NewFooter from "@/components/NewFooter";
import type { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  badgeText: string;
  children: ReactNode;
  lastUpdated?: string;
}

export default function PolicyLayout({
  title,
  subtitle,
  badgeText,
  children,
  lastUpdated = "March 25, 2025",
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      <MainNavbar />

      <main className="pt-32 pb-24">
        <div className="eden-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-white mb-4">{title}</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
            {lastUpdated && (
              <p className="text-white/50 text-sm mt-4">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>

          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="prose prose-invert max-w-none">{children}</div>
          </div>
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
