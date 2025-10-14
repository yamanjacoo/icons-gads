"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const legalDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        legalDropdownRef.current &&
        !legalDropdownRef.current.contains(event.target as Node)
      ) {
        setLegalDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-black/95 backdrop-blur-sm" : "py-4 bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-20">
            <span className="font-display text-xl tracking-tight text-white">
              {process.env.NEXT_PUBLIC_STORE_NAME || "Digital Products"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </Link>

            {/* Legal Dropdown */}
            <div className="relative" ref={legalDropdownRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
              >
                Legal <ChevronDown className="h-4 w-4" />
              </button>

              {legalDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-xl border border-white/10 shadow-lg py-2 z-50">
                  <Link
                    href="/legal/terms"
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setLegalDropdownOpen(false)}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/legal/privacy"
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setLegalDropdownOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/legal/refund"
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setLegalDropdownOpen(false)}
                  >
                    Refund Policy
                  </Link>
                  <Link
                    href="/legal/delivery"
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setLegalDropdownOpen(false)}
                  >
                    Digital Delivery
                  </Link>
                </div>
              )}
            </div>

            {/* Get Started Button (Desktop) */}
            <div className="hidden md:block">
              <Button
                className="bg-white text-black hover:bg-white/90 gap-1 rounded-full"
                asChild
              >
                <Link href="/pricing">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-10 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-10 transition-transform duration-500 ease-in-out transform md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center pt-16 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col items-center gap-4 mb-8 w-full">
            <Link
              href="/about"
              className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>

            {/* Legal Section */}
            <div className="w-full text-center mt-4">
              <p className="text-white/50 text-sm mb-2">Legal Policies</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link
                  href="/legal/terms"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <Link
                  href="/legal/privacy"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/refund"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Refund Policy
                </Link>
                <Link
                  href="/legal/delivery"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Digital Delivery
                </Link>
              </div>
            </div>
          </nav>

          {/* Get Started Button (Mobile) */}
          <Button
            className="bg-white text-black hover:bg-white/90 w-full max-w-xs gap-1 rounded-full"
            onClick={() => setIsMenuOpen(false)}
            asChild
          >
            <Link href="/pricing">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
