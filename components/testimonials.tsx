import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-balance">
            What Our Clients Say
          </h2>

          {/* Google Rating Display */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <div className="text-3xl font-serif font-bold mb-1">5.0</div>
            <div className="text-lg text-muted-foreground">Based on 110 Google reviews</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Belal and his team did an amazing job!!! I would recommend this company to everyone. My sign was
                  finished in less than 2 weeks. He's very professional, patient and precise."
                </p>
                <p className="font-bold">- Beyond Beauty Salon</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Expert Signs & Graphics did an amazing job creating a custom LED sign for my gelateria/cafe in
                  Denham Springs! They listened to my ideas, offered great suggestions, and the quality is amazing.
                  The installation was efficient and professional. I've already seen more foot traffic and positive
                  customer feedback. Highly recommend!"
                </p>
                <p className="font-bold">- Gloria's Gelato</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Excellent and professional company. Does an amazing job, and quickly as well. Sign looks absolutely
                  perfect! Will only hire them from now on for all my signage."
                </p>
                <p className="font-bold">- Night Dragon Games</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Expert+Signs+%26+Graphics+Baton+Rouge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8"
              >
                Read All Reviews on Google
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}