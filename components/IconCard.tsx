"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlusCircle, CheckCircle } from "lucide-react"

export interface IconItem {
  id: string
  name: string
  image: string
  price: number
  category: string
}

interface IconCardProps {
  icon: IconItem
  isInCart: boolean
  addToCart: (icon: IconItem) => void
}

export default function IconCard({ icon, isInCart, addToCart }: IconCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-soft border border-eden-100 transition-all hover:shadow-md">
      <div className="aspect-square bg-eden-50 p-6 flex items-center justify-center relative">
        <Image
          src={icon.image || "/placeholder.svg"}
          alt={icon.name}
          width={80}
          height={80}
          className="w-16 h-16 object-contain transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eden-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <Button
            variant={isInCart ? "secondary" : "default"}
            size="sm"
            className={`gap-1 ${isInCart ? "bg-eden-100 text-eden-800" : "bg-eden-950 text-white"}`}
            onClick={() => !isInCart && addToCart(icon)}
            disabled={isInCart}
          >
            {isInCart ? (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <PlusCircle className="h-4 w-4" />
                <span>Add to Cart</span>
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-eden-950">{icon.name}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-eden-500">{icon.category}</span>
          <span className="font-medium text-eden-800">${icon.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

