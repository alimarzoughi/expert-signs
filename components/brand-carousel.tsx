"use client"

import { useEffect, useRef } from "react"

import brands from "@/lib/brands"

export default function BrandCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Brands That Trust Our Service</h2>
      </div>

      <div
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="inline-flex gap-12 px-6">
          {/* First set of logos */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="inline-flex items-center justify-center h-20 w-40 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`h-full w-full object-contain ${brand.scale}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="inline-flex items-center justify-center h-20 w-40 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`h-full w-full object-contain ${brand.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
