import MainNavbar from "@/components/MainNavbar";
import IconPricing from "@/components/IconPricing";
import NewFooter from "@/components/NewFooter";
import { HomePricing } from "@/components/HomePricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      <MainNavbar />

      <main className="pt-24">
        <HomePricing></HomePricing>
      </main>

      <NewFooter />
    </div>
  );
}
