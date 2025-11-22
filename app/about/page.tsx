import { Shield, Users, Target, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
              About Expert Signs & Graphics
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Where creativity meets craftsmanship, and safety is never compromised.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with a passion for transforming businesses through exceptional signage, Expert Signs & Graphics
                has grown to become a trusted name in the industry. Our journey began with a simple belief: that every
                business deserves signage that truly represents their brand and captures attention.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, we're proud to be a state-licensed and fully insured signage company, serving businesses of all
                sizes with the same dedication to quality and safety that defined our founding principles. From concept
                to installation, we handle every aspect of your signage project with meticulous care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-balance">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a state-licensed and insured company, we prioritize safety in every project. Our team follows
                  strict protocols to ensure safe installation and maintenance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3">Precision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every detail matters. We bring precision engineering and meticulous attention to detail to create
                  flawless signage.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3">Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collaborate closely with our clients, transforming their vision into reality through expert
                  guidance and creative solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're passionate about delivering exceptional results that exceed expectations and stand the test of
                  time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent text-accent-foreground p-12 rounded-lg">
              <h2 className="text-4xl font-serif font-bold mb-6 text-balance">
                Licensed, Insured, and Committed to Safety
              </h2>
              <div className="space-y-4 text-lg">
                <p className="leading-relaxed">
                  Safety isn't just a priority—it's the foundation of everything we do. Our state licensing demonstrates
                  our commitment to meeting the highest industry standards, while our comprehensive insurance coverage
                  protects your property and our team.
                </p>
                <p className="leading-relaxed">
                  Every member of our installation team undergoes rigorous safety training and certification. We use
                  industry-leading equipment and follow OSHA guidelines to ensure every project is completed safely and
                  professionally.
                </p>
                <p className="leading-relaxed">
                  When you choose Expert Signs & Graphics, you're choosing peace of mind. You can trust that your
                  signage project will be handled by professionals who take safety as seriously as they take quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-balance">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Custom Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our creative team works with you to design signage that perfectly captures your brand identity and
                messaging.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Expert Fabrication</h3>
              <p className="text-muted-foreground leading-relaxed">
                Using premium materials and cutting-edge technology, we fabricate signs built to last and impress.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Professional Installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our licensed, insured team ensures safe, precise installation with minimal disruption to your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
