"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutIconsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section is in the viewport
      const scrollPercentage = 1 - rect.top / windowHeight;

      // Clamp between 0 and 1, but slow down the animation by using a smaller multiplier
      const clampedProgress = Math.max(0, Math.min(1, scrollPercentage * 1.2)); // Reduced from 1.5 to 1.2

      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate delayed progress values for each text section
  const firstTextProgress = scrollProgress;
  const secondTextProgress = scrollProgress > 0.2 ? scrollProgress - 0.2 : 0;
  const thirdTextProgress = scrollProgress > 0.8 ? scrollProgress - 0.4 : 0;
  const paragraphProgress = scrollProgress > 0.12 ? scrollProgress - 0.6 : 0;

  // Normalize the delayed progress values to 0-1 range
  const normalizeProgress = (progress: number) => Math.min(1, progress * 1.25);

  return (
    <section ref={sectionRef} className="py-20 bg-finance-950 text-white">
      <div className="eden-container">
        <h2 className="text-4xl md:text-4xl lg:text-7xl  tracking-tight lg:leading-[80px] max-w-5xl mb-8">
          <TextFill
            progress={normalizeProgress(firstTextProgress)}
            className="inline"
          >
            This cutting-edge collection empowers designers to streamline
            workflows
          </TextFill>
          <AnimatedIcon
            src="/about-1.png"
            alt="Streamline workflows"
            progress={scrollProgress}
            threshold={0.3}
            bgColor="bg-teal-400/10"
            glowColor="teal"
          />
          <TextFill
            progress={normalizeProgress(secondTextProgress)}
            className="inline"
          >
            , optimize visual consistency
          </TextFill>
          <AnimatedIcon
            src="/about-2.png"
            alt="Visual consistency"
            progress={scrollProgress}
            threshold={0.5}
            bgColor="bg-indigo-400/10"
            glowColor="indigo"
          />
          <TextFill
            progress={normalizeProgress(thirdTextProgress)}
            className="inline"
          >
            , and gain actionable design insights —all in one intuitive library
          </TextFill>
          <AnimatedIcon
            src="/about-3.png"
            alt="Design insights"
            progress={scrollProgress}
            threshold={0.7}
            bgColor="bg-amber-400/10"
            glowColor="amber"
          />
        </h2>
      </div>
    </section>
  );
}

interface TextFillProps {
  children: React.ReactNode;
  progress: number; // 0 to 1
  baseOpacity?: number; // Opacity of unfilled text (0 to 1)
  className?: string;
}

export function TextFill({
  children,
  progress,
  baseOpacity = 0.4,
  className = "",
}: TextFillProps) {
  // Calculate the gradient position based on progress
  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, white ${
      progress * 100
    }%, rgba(255, 255, 255, ${baseOpacity}) ${progress * 100}%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    // Slow down the transition
    transition: "background-image 0.3s ease-out", // Increased from 0.1s to 0.3s
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}

interface AnimatedIconProps {
  src: string;
  alt: string;
  progress: number;
  threshold?: number; // When to start the animation (0-1)
  bgColor?: string;
  glowColor?: string;
}

function AnimatedIcon({
  src,
  alt,
  progress,
  threshold = 0.5,
  bgColor = "bg-white/10",
  glowColor = "white",
}: AnimatedIconProps) {
  // Calculate the icon animation progress
  // Only start animating after reaching the threshold
  const iconProgress =
    progress < threshold ? 0 : Math.min(1, (progress - threshold) * 3); // Reduced from 5 to 3 to slow down

  // Calculate styles based on progress
  const scale = 0.5 + iconProgress * 0.5; // Scale from 0.5 to 1
  const opacity = iconProgress;
  const rotate = (1 - iconProgress) * 10; // Small rotation that goes to 0

  // Dynamic glow intensity
  const glowSize = iconProgress * 15;
  const glowOpacity = iconProgress * 0.8;

  const style: React.CSSProperties = {
    transform: `scale(${scale}) rotate(${rotate}deg)`,
    opacity: opacity,
    // Slow down the transition
    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", // Increased from 0.4s to 0.6s
  } as React.CSSProperties;

  return (
    <span
      className={`inline-flex items-center justify-center p-2 mx-2 rounded-full overflow-hidden`}
      style={style}
    >
      <div
        className="relative"
        style={{
          animation:
            iconProgress >= 1 ? "gentle-float 3s ease-in-out infinite" : "none",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          height={40}
          width={40}
          className="relative z-10"
        />
        <div
          className={`absolute inset-0 blur-md rounded-full z-0`}
          style={{
            transform: `scale(${1.2 + iconProgress * 0.4})`,
            opacity: iconProgress * 0.7,
          }}
        />
      </div>
    </span>
  );
}
