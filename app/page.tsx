"use client";

import { useState, useEffect } from "react";

import Cart from "@/components/Cart";
import type { IconItem } from "@/components/IconCard";
import MainNavbar from "@/components/MainNavbar";

import AboutIconsSection from "@/components/AboutIconsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import NativeFigmaSection from "@/components/NativeFigmaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewFooter from "@/components/NewFooter";
import HeroSection from "@/components/HeroSection";
import BrandScroll from "@/components/brands";
import { TrustedByCreators } from "@/components/trustedbycreators";
import { HomePricing } from "@/components/HomePricing";
import { FAQSection } from "@/components/FAQSection";
import { ImpactSection } from "@/components/impact-section";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<IconItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("edenIconCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("edenIconCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      {/* <GridBackground /> */}
      <MainNavbar />

      <HeroSection />
      <BrandScroll></BrandScroll>

      {/* <NativeFigmaSection /> */}
      <AboutIconsSection />
      <ProjectsShowcase />
      <TrustedByCreators></TrustedByCreators>
      <TestimonialsSection />
      <HomePricing />

      <FAQSection />
      <ImpactSection></ImpactSection>
      <NewFooter />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}
