import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "About — TAVARI Bespoke Menswear",
  description:
    "Learn about TAVARI's commitment to African artistry and global tailoring excellence. Our story, values, and dedication to craft.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/african-tailor-working-in-luxury-workshop-craftsmansh.jpg"
            alt="TAVARI Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6">Our Story</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed">
            Where heritage meets precision, tradition meets innovation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-balance text-center">
            Honoring African Craftsmanship
          </h2>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-mono">
            <p>
              TAVARI was founded on the belief that African artistry deserves its place among the world's finest
              tailoring traditions. We bridge continents and cultures, creating garments that honor heritage while
              embracing contemporary sophistication.
            </p>
            <p>
              Each piece we create carries the wisdom of generations of craftsmen, combined with the precision of global
              tailoring standards. This is not mass production—this is art, refined through dedication and executed with
              meticulous attention to every detail.
            </p>
            <p>
              Our clients are discerning individuals who understand that true luxury lies not in logos, but in the
              quality of materials, the skill of construction, and the perfect fit that can only be achieved through
              bespoke tailoring.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-4">Craftsmanship</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Every stitch, every seam, every detail is executed with precision. We refuse to compromise on quality,
                ensuring each garment meets the highest standards of tailoring excellence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4">Heritage</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                We celebrate African textile traditions and craftsmanship techniques passed through generations,
                elevating them through contemporary design and global tailoring standards.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4">Exclusivity</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                We limit our commissions to ensure each client receives the personalized attention and time their
                bespoke garment deserves. Quality over quantity, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Image */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/luxury-bespoke-tailoring-workshop-with-fabric-roll.jpg"
                alt="TAVARI Workshop"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">Where It All Happens</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-6">
                Our atelier combines traditional craftsmanship with modern precision. Here, master tailors work
                alongside emerging talent, ensuring techniques are preserved while innovation flourishes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                From initial measurements to final fittings, every step of your garment's creation happens under one
                roof, overseen by craftsmen who take personal pride in their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Experience TAVARI</h2>
          <p className="text-lg mb-12 font-mono leading-relaxed opacity-90">
            Schedule a consultation to discuss your vision and explore our bespoke services
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-none px-12 py-8 font-mono text-sm tracking-wider uppercase"
          >
            <Link href="/book">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
