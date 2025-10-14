"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import IconCard, { type IconItem } from "./IconCard"

interface IconCollectionProps {
  id: string
  title: string
  description: string
  icons: IconItem[]
  cartItems: IconItem[]
  addToCart: (icon: IconItem) => void
  showAll?: boolean
}

export default function IconCollection({
  id,
  title,
  description,
  icons,
  cartItems,
  addToCart,
  showAll = false,
}: IconCollectionProps) {
  const [visibleIcons, setVisibleIcons] = useState(showAll ? icons : icons.slice(0, 4))

  const isIconInCart = (iconId: string) => {
    return cartItems.some((item) => item.id === iconId)
  }

  return (
    <section id={id} className="py-16 border-t border-eden-100">
      <div className="eden-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{title}</h2>
            <p className="text-eden-600">{description}</p>
          </div>

          {!showAll && (
            <Link
              href={`/collections#${id}`}
              className="inline-flex items-center text-sm font-medium text-eden-800 hover:text-eden-950"
            >
              View Collection <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {visibleIcons.map((icon) => (
            <IconCard key={icon.id} icon={icon} isInCart={isIconInCart(icon.id)} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

