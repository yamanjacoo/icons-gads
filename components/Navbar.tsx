"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  toggleCart: () => void
}

export default function Navbar({ toggleCart }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/90 backdrop-blur-sm border-b border-eden-100">
      <div className="eden-container">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-eden-950">
            eden.
          </Link>

          <nav className="hidden md:flex items-center gap-8">
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

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

