"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedSlideshow from "@/components/featured-slideshow"
import SocialShowcase from "@/components/social-showcase"
import BrandCarousel from "@/components/brand-carousel"
import RequestForm from "@/components/request-form"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full px-20 pt-6">
          <Image
            src="/expert-signs-hero.png"
            alt="Expert Signs & Graphics - Exceed Your Vision"
            width={1920}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="py-8 text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-canavar text-lg px-8"
            onClick={() => document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request a Quote Today!
          </Button>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel/>

      {/* Safety First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-balance">Safety First</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/professional-workers-in-safety-gear-installing-lar.jpg"
                  alt="Professional team with safety equipment installing a sign"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">Committed to Your Safety & Peace of Mind</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At Expert Signs & Graphics, safety is more than a priority. We are fully state
                  licensed and insured, guaranteeing that every project meets the highest industry standards.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our team undergoes rigorous safety training and uses professional-grade equipment to protect both our
                  workers and your property. From ground-level installations to complex high-rise projects, we maintain
                  unwavering dedication to safe practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
              Crafting Excellence in Every Sign
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              At Expert Signs & Graphics, we combine cutting-edge design with meticulous craftsmanship to create signage
              that not only communicates, but captivates. Our state-licensed team brings decades of experience,
              unwavering dedication to safety, and an obsession with detail to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              From sleek storefront displays to eye-catching vehicle wraps, we transform your vision into stunning
              reality. Fully insured and committed to the highest safety standards, we ensure every installation is
              executed flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Slideshow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-balance">
            Featured Projects
          </h2>
          <FeaturedSlideshow />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-balance">
            Why Choose Expert Signs & Graphics
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-primary">
              <CardContent>
                <h3 className="text-3xl text-primary-foreground font-serif font-bold mb-3">Safety & Compliance</h3>
                <p className="text-primary-foreground leading-relaxed">
                  We're state licensed and fully insured, adhering to the strictest safety protocols. Your peace of mind
                  is our priority.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary">
              <CardContent>
                <h3 className="text-3xl text-secondary-foreground font-serif font-bold mb-3">Unmatched Quality</h3>
                <p className="text-secondary-foreground leading-relaxed">
                  Premium materials, precision engineering, and attention to detail ensure your signs stand out and
                  stand the test of time.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary">
              <CardContent>
                <h3 className="text-3xl text-primary-foreground font-serif font-bold mb-3">Creative Excellence</h3>
                <p className="text-primary-foreground leading-relaxed">
                  Our design team pushes boundaries to create signage that's not just functional—it's unforgettable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Showcase */}
      <SocialShowcase/>

      {/* Request Section */}
      <section id="request-form" className="py-20 bg-muted text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance text-center">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl mb-8 text-accent-foreground/90 text-center text-pretty leading-relaxed">
              Let&apos;s create signage that makes a lasting impression. Submit your request today.
            </p>

            <RequestForm />
          </div>
        </div>
      </section>
    </main>
  )
}
