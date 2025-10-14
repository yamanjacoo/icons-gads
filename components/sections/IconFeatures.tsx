import type React from "react";
import { Palette, Zap, Layers, Globe } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-lg bg-indigo-100 p-3 text-indigo-600">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}

export default function IconFeatures() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why choose {process.env.NEXT_PUBLIC_STORE_NAME}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Our icons are designed with attention to detail and crafted for
            versatility.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<Palette className="h-6 w-6" />}
            title="Pixel Perfect"
            description="Every icon is meticulously crafted to ensure pixel-perfect precision at any size."
          />
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Fast Integration"
            description="Easy to implement in your projects with multiple format options."
          />
          <Feature
            icon={<Layers className="h-6 w-6" />}
            title="Customizable"
            description="Easily customize colors, sizes, and styles to match your brand."
          />
          <Feature
            icon={<Globe className="h-6 w-6" />}
            title="Regular Updates"
            description="We continuously add new icons and improve existing ones."
          />
        </div>
      </div>
    </section>
  );
}
