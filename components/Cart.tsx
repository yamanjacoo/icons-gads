"use client"

import { X, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { IconItem } from "./IconCard"
import Image from "next/image"

interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: IconItem[]
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export default function Cart({ isOpen, onClose, items, removeFromCart, clearCart }: CartProps) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" onClick={onClose} />}

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-eden-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-eden-800" />
              <h2 className="font-semibold text-lg">Your Cart</h2>
              <span className="bg-eden-100 text-eden-800 text-xs font-medium px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="flex-1 overflow-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-12 w-12 text-eden-200 mb-4" />
                <h3 className="text-lg font-medium text-eden-800 mb-1">Your cart is empty</h3>
                <p className="text-eden-500 mb-4">Start adding some beautiful icons!</p>
                <Button onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-eden-50 rounded-lg">
                    <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-eden-900 truncate">{item.name}</h4>
                      <p className="text-sm text-eden-500">{item.category}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium">${item.price.toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-eden-500 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-4 border-t border-eden-100">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="gap-1" onClick={clearCart}>
                  <Trash2 className="h-4 w-4" />
                  Clear Cart
                </Button>
                <Button>Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

