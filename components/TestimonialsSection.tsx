"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

// Define the testimonial data structure
interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

export default function TestimonialsSection() {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: `${process.env.NEXT_PUBLIC_STORE_NAME} has transformed our design workflow. The consistency and quality of these icons have elevated our UI to a new level. They integrate perfectly with our design system and save us countless hours of work.`,
      author: "Sarah Johnson",
      company: "TBT Systems",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: `As a UI designer, I've tried many icon libraries, but ${process.env.NEXT_PUBLIC_STORE_NAME} stands out for its attention to detail and versatility. The Figma integration is seamless, and the customization options are exactly what I needed for my projects.`,
      author: "Michael Chen",
      company: "Poco Designs",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: `The consistency across all icons is remarkable. Whether I'm designing for web or mobile, ${process.env.NEXT_PUBLIC_STORE_NAME} provides the perfect visual language that maintains harmony throughout our applications. It's hands-down the best icon system I've used.`,
      author: "Emma Rodriguez",
      company: "Interface Innovations",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle navigation
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsVisible(true);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setIsVisible(true);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 500);
  };

  // Set initial visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for scroll animations
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("testimonials-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials-section"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(101,48,245,0.1),transparent)]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-100 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white leading-[60px] sm:leading-tight md:leading-tight lg:leading-[80px] pb-4 sm:pb-6 md:pb-8 lg:pb-12">
            <span className="inline-block px-2 py-1 text-white mb-1 sm:mb-2">
              From a Designer
            </span>
            <br />
            <span>To Designers</span>
          </h2>
        </div>

        {/* Testimonial */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-white text-center">
            "{testimonials[currentIndex].quote}"
          </blockquote>
        </div>

        {/* Author */}
        <div
          className={`flex flex-col items-center transition-all duration-500 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-xl font-semibold text-white">
            {testimonials[currentIndex].author}
          </h3>
          <p className="text-white/60">{testimonials[currentIndex].company}</p>
        </div>

        {/* Navigation */}
        <div
          className={`flex justify-center mt-12 gap-4 transition-all duration-700 delay-200 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
