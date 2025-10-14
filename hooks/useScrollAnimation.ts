"use client"

import { useState, useEffect, type RefObject } from "react"

interface ScrollAnimationOptions {
  startOpacity?: number
  endOpacity?: number
  threshold?: number // When to start the animation (0-1)
  duration?: number // Animation duration in ms
}

export function useScrollAnimation(ref: RefObject<HTMLElement>, options: ScrollAnimationOptions = {}) {
  const { startOpacity = 0.6, endOpacity = 1, threshold = 0.2, duration = 200 } = options

  const [opacity, setOpacity] = useState(startOpacity)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is in the viewport
      const visibleRatio = 1 - rect.top / windowHeight

      // Only start animation when element is at least at the threshold
      if (visibleRatio >= threshold) {
        // Calculate opacity between startOpacity and endOpacity
        const progress = Math.min(1, (visibleRatio - threshold) / (1 - threshold))
        const newOpacity = startOpacity + progress * (endOpacity - startOpacity)

        setOpacity(newOpacity)
      } else {
        setOpacity(startOpacity)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial calculation
    handleScroll()

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, startOpacity, endOpacity, threshold])

  return {
    opacity,
    style: {
      opacity,
      transition: `opacity ${duration}ms ease-out`,
    },
  }
}

