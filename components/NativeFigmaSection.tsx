"use client"

import { useInView } from "@/hooks/useInView"

interface FeatureCardProps {
  title: string
  description: string
  iconColor: string
  delay?: number
}

function FeatureCard({ title, description, iconColor, delay = 0 }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div
        className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center bg-opacity-10 relative overflow-hidden`}
        style={{ backgroundColor: `${iconColor}20` }}
      >
        <div className="w-8 h-8 rounded-md" style={{ backgroundColor: iconColor }}></div>
        <div className="absolute inset-0 rounded-2xl border border-opacity-30" style={{ borderColor: iconColor }}></div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/70 max-w-[250px]">{description}</p>
    </div>
  )
}

export default function NativeFigmaSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Native Figma icons, ready for any task</h2>
          <p className="text-white/70 text-lg">
            These icons created with great attention to detail, but with fast editing in mind. Available from any
            browser on any device, without Adobe.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              delay={inView ? index * 100 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Created in Figma from scratch",
    description:
      "Organized with variants, ready to adapt. It isn't just another icon set with the trivial import from Illustrator.",
    iconColor: "#8A5CF6",
  },
  {
    title: "5,000+ icons / 6 styles",
    description:
      "Crafted with love and great attention to detail. 6 stylish looks to help your UI stand out from the crowd.",
    iconColor: "#F6BC5C",
  },
  {
    title: "Standard size & optimal stroke",
    description:
      "Classic 24px grid, elegant 1.5px stroke weight by default. Compatible with many other icon libraries.",
    iconColor: "#5CF68A",
  },
  {
    title: "Variable stroke weight & radius",
    description:
      "Easily change stroke weight or corner radius of any icon. Or make changes on all the icons at once, if required.",
    iconColor: "#F65C5C",
  },
  {
    title: "Fast switching between styles",
    description: "Variants allow you to switch between icon styles without using search. Huge time & energy saver.",
    iconColor: "#5C8AF6",
  },
  {
    title: "Smart & clean search results",
    description:
      "Your search won't be overloaded with icons in all 6 styles. And smart tags will make it even more accurate.",
    iconColor: "#F6A05C",
  },
  {
    title: "Save color & stroke overrides",
    description: "When switching between icons in the same style, their color and stroke properties are preserved.",
    iconColor: "#5CF6BC",
  },
  {
    title: "Two ways to resize icons",
    description:
      "Resize the icon keeping the original stroke weight and radius, or scale them in sync with the Scale Tool.",
    iconColor: "#BCF65C",
  },
  {
    title: "Optimized SVG output",
    description: "Minimum number of shapes and no unnecessary attributes. Easily change icon colors in code.",
    iconColor: "#BC5CF6",
  },
]

