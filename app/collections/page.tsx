"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import IconCollection from "@/components/IconCollection"
import Cart from "@/components/Cart"
import type { IconItem } from "@/components/IconCard"

// Sample data - would come from your database/API in a real app
const SAMPLE_COLLECTIONS = [
  {
    id: "essential",
    title: "Essential Icons",
    description: "Our most popular icons, perfect for any project. Clean, consistent, and highly versatile.",
    icons: [
      { id: "1", name: "Home", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
      { id: "2", name: "Settings", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
      { id: "3", name: "User", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
      { id: "4", name: "Search", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
      {
        id: "5",
        name: "Notification",
        image: "/placeholder.svg?height=80&width=80",
        price: 2.99,
        category: "Essential",
      },
      { id: "6", name: "Menu", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
      { id: "7", name: "Heart", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
      { id: "8", name: "Star", image: "/placeholder.svg?height=80&width=80", price: 2.99, category: "Essential" },
    ],
  },
  {
    id: "office",
    title: "Office & Productivity",
    description: "Icons designed for business and productivity applications. Perfect for work and organization tools.",
    icons: [
      { id: "9", name: "Calendar", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "10", name: "Chart", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "11", name: "Document", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "12", name: "Mail", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "13", name: "Briefcase", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "14", name: "Clock", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "15", name: "Presentation", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
      { id: "16", name: "Calculator", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "Office" },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Icons for online shops and marketplaces. Enhance your customers' shopping experience.",
    icons: [
      {
        id: "17",
        name: "Shopping Cart",
        image: "/placeholder.svg?height=80&width=80",
        price: 3.99,
        category: "E-commerce",
      },
      { id: "18", name: "Tag", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "E-commerce" },
      {
        id: "19",
        name: "Credit Card",
        image: "/placeholder.svg?height=80&width=80",
        price: 3.99,
        category: "E-commerce",
      },
      { id: "20", name: "Delivery", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "E-commerce" },
      { id: "21", name: "Store", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "E-commerce" },
      { id: "22", name: "Gift", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "E-commerce" },
      { id: "23", name: "Discount", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "E-commerce" },
      { id: "24", name: "Receipt", image: "/placeholder.svg?height=80&width=80", price: 3.99, category: "E-commerce" },
    ],
  },
]

export default function Collections() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<IconItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("edenIconCart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse cart data", e)
      }
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("edenIconCart", JSON.stringify(cartItems))
  }, [cartItems])

  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  const addToCart = (icon: IconItem) => {
    if (!cartItems.some((item) => item.id === icon.id)) {
      setCartItems([...cartItems, icon])
    }
  }

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar toggleCart={toggleCart} />

      <main className="pt-24 animate-fade-in">
        <section className="py-16">
          <div className="eden-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-eden-100 text-eden-800 text-xs font-medium">
                Browse Collections
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Icon Collections</h1>
              <p className="text-lg text-eden-600">
                Explore our curated collections of meticulously crafted icons, designed for various use cases and
                applications.
              </p>
            </div>
          </div>
        </section>

        {SAMPLE_COLLECTIONS.map((collection) => (
          <IconCollection
            key={collection.id}
            id={collection.id}
            title={collection.title}
            description={collection.description}
            icons={collection.icons}
            cartItems={cartItems}
            addToCart={addToCart}
            showAll={true}
          />
        ))}
      </main>

      <footer className="py-12 bg-eden-50 border-t border-eden-100">
        <div className="eden-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-eden-950 mb-4 md:mb-0">
              eden.
            </Link>
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/" className="text-sm font-medium text-eden-600 hover:text-eden-800 transition-colors">
                Home
              </Link>
              <Link
                href="/collections"
                className="text-sm font-medium text-eden-600 hover:text-eden-800 transition-colors"
              >
                Collections
              </Link>
              <Link href="/about" className="text-sm font-medium text-eden-600 hover:text-eden-800 transition-colors">
                About
              </Link>
            </nav>
          </div>
          <div className="border-t border-eden-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-eden-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Eden Icons. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-eden-500 hover:text-eden-700 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-eden-500 hover:text-eden-700 transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  )
}

