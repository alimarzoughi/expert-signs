"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-foreground border-b border-border sticky top-0 z-50 font-canavar">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/expert-signs-navbar.png"
              alt="Expert Signs & Graphics"
              width={400}
              height={50}
              className="object-contain h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-background hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-background hover:text-accent transition-colors font-medium">
              About Us
            </Link>
            <Link href="/gallery" className="text-background hover:text-accent transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/#request-form">
              <Button className="bg-accent hover:bg-accent/90 text-accent-background">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-background">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4 items-end text-right">
              <Link
                href="/"
                className="text-black hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-background hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-background hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link href="/#request-form" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-background w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
