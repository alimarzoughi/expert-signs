"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredImages = [
  "/signs/ross-davis-retina.jpg",
  "/signs/mis-padres-neon.jpg",
  "/signs/tiger-mural-colored.jpg",
  "/signs/chevron.jpg", // index 3 (portrait)
  "/signs/good-times.jpg",
  "/signs/super-penny-mart.jpg",
  "/signs/el-jarrito.png",
  "/signs/royal-autoplex.jpg",
  "/signs/crystal-beauty.jpg",
  "/signs/search-wireless.jpg", // added extension
]

export function FeaturedSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const whooshRef = useRef<HTMLAudioElement | null>(null)

  // Create audio object once on client
  useEffect(() => {
    if (typeof Audio !== "undefined") {
      whooshRef.current = new Audio("/sounds/whoosh.mp3") // put your file here
    }
  }, [])

  const playWhoosh = () => {
    const audio = whooshRef.current
    if (!audio) return
    audio.currentTime = 0 // rewind so it plays from start every time
    audio.play().catch(() => {
      // Ignore play promise errors (e.g. autoplay blocked)
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredImages.length)
    playWhoosh()
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length)
    playWhoosh()
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
    playWhoosh()
  }

  // Auto-advance every 10s with sound
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredImages.length)

      const audio = whooshRef.current
      if (audio) {
        audio.currentTime = 0
        audio.play().catch(() => {})
      }
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const portraitIndexes = [3]

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={featuredImages[currentIndex] || "/placeholder.svg"}
          alt={`Featured design ${currentIndex + 1}`}
          fill
          priority={currentIndex === 0}
          className={
            portraitIndexes.includes(currentIndex)
              ? "object-contain bg-black"
              : "object-cover"
          }
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={goToPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="flex justify-center gap-2 mt-4">
        {featuredImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
