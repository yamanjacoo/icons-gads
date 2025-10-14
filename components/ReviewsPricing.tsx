"use client"

import { useState, useEffect } from "react"
import { Check, Star } from "lucide-react"
import DetailBadge from "./badge"
import { Button } from "@/components/ui/button"

interface PricingTierProps {
  title: string
  price: number
  features: string[]
  isPopular?: boolean
  delay?: number
  isVisible: boolean
}

function PricingTier({ title, price, features, isPopular = false, delay = 0, isVisible }: PricingTierProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div
        className={`h-full flex flex-col ${isPopular ? "border-2 border-primary" : "border border-white/10"} bg-neutral-900/80 backdrop-blur-sm rounded-xl overflow-hidden`}
      >
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-white">${price}</span>
            <span className="ml-2 text-sm text-white/60">one-time</span>
          </div>
        </div>

        <div className="flex-1 p-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span className="text-sm text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 pt-0">
          <Button
            className={`w-full ${isPopular ? "bg-primary hover:bg-primary/90" : "bg-white/10 hover:bg-white/20 text-white"}`}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

function ReviewCard({
  author,
  role,
  content,
  rating,
  delay,
  isVisible,
}: {
  author: string
  role: string
  content: string
  rating: number
  delay: number
  isVisible: boolean
}) {
  return (
    <div
      className={`bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`} />
        ))}
      </div>
      <p className="text-white/80 text-sm mb-4">{content}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{author}</p>
          <p className="text-white/60 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsPricing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("reviews-pricing")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="reviews-pricing" className="py-20 bg-finance-950 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(101,48,245,0.15),transparent)]"></div>

      <div className="eden-container relative z-10">
        <div className="text-center mb-16">
          <DetailBadge title="Simple, transparent pricing" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose your perfect plan</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Get lifetime access to our premium icons with a one-time payment. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <PricingTier
            title="Starter"
            price={32.99}
            features={[
              "50+ premium icons",
              "SVG & PNG formats",
              "Personal projects",
              "Basic customization",
              "Email support",
            ]}
            isVisible={isVisible}
            delay={100}
          />

          <PricingTier
            title="Professional"
            price={42.99}
            features={[
              "150+ premium icons",
              "All file formats",
              "Commercial projects",
              "Advanced customization",
              "Priority email support",
            ]}
            isPopular={true}
            isVisible={isVisible}
            delay={200}
          />

          <PricingTier
            title="Business"
            price={53.99}
            features={[
              "300+ premium icons",
              "All file formats",
              "Extended license",
              "Custom color palettes",
              "Priority support",
            ]}
            isVisible={isVisible}
            delay={300}
          />

          <PricingTier
            title="Enterprise"
            price={79.99}
            features={[
              "500+ premium icons",
              "All file formats",
              "Unlimited projects",
              "Custom icon requests",
              "Dedicated support",
            ]}
            isVisible={isVisible}
            delay={400}
          />
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">What our customers say</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of satisfied designers and developers who use our icons every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard
            author="Sarah Johnson"
            role="UI Designer"
            content="These icons have become an essential part of my design toolkit. They're beautifully crafted and incredibly versatile."
            rating={5}
            delay={200}
            isVisible={isVisible}
          />

          <ReviewCard
            author="Michael Chen"
            role="Frontend Developer"
            content="The integration was seamless. I love how easy it is to customize these icons to match our brand guidelines."
            rating={5}
            delay={300}
            isVisible={isVisible}
          />

          <ReviewCard
            author="Emma Rodriguez"
            role="Product Manager"
            content="We've received numerous compliments on our UI since implementing these icons. They've elevated our product's visual appeal."
            rating={4}
            delay={400}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

