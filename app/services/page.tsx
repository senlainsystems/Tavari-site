import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Bespoke Services — TAVARI",
  description:
    "Custom tailoring services including bespoke suits, shirts, and accessories. Premium materials and expert craftsmanship.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-suits-displayed-in-elegant-showroom-bespoke-ta.jpg"
            alt="TAVARI Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6">Bespoke Services</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed">
            Custom garments crafted to your exact specifications
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Tailored to Perfection</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Our bespoke services offer complete customization—from fabric selection to final details. Every garment is
            created specifically for you, ensuring perfect fit, unparalleled comfort, and timeless style.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          {/* Bespoke Suits */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-light mb-6">Bespoke Suits</h3>
              <p className="text-muted-foreground font-mono mb-8 leading-relaxed">
                Our signature offering. A complete suit crafted from scratch based on your unique measurements,
                preferences, and style. Choose from our curated fabric collection sourced from the world's finest mills.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Individual pattern creation from 30+ measurements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Premium fabrics from Italian and British mills</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Hand-sewn details and functional buttonholes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Multiple fittings to ensure perfect fit</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/elegant-bespoke-suit-on-display-tailoring-details-.jpg"
                alt="Bespoke Suits"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Custom Shirts */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div>
              <img
                src="/luxury-dress-shirts-on-display-bespoke-tailoring-c.jpg"
                alt="Custom Shirts"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-light mb-6">Custom Shirts</h3>
              <p className="text-muted-foreground font-mono mb-8 leading-relaxed">
                Precision-tailored shirts that complement your bespoke suits or stand alone as statement pieces. Select
                from a range of collar styles, cuff options, and premium fabrics.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Egyptian cotton and luxury fabric options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">12+ collar and cuff style combinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Monogramming and personalization available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Perfect fit guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accessories */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-light mb-6">Accessories & Outerwear</h3>
              <p className="text-muted-foreground font-mono mb-8 leading-relaxed">
                Complete your look with bespoke accessories and outerwear. From overcoats to waistcoats, ties to pocket
                squares—every detail matters.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Custom overcoats and blazers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Waistcoats and formal wear accessories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Ties, bow ties, and pocket squares</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-mono text-sm">Coordinated with your bespoke garments</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/luxury-menswear-accessories-displayed-elegantly-ti.jpg"
                alt="Accessories"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8">The Bespoke Journey</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-12">
            From consultation to final fitting, we guide you through every step of creating your perfect garment
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase border-2 bg-transparent"
          >
            <Link href="/process">
              Explore Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Ready to Begin?</h2>
          <p className="text-lg mb-12 font-mono leading-relaxed opacity-90">
            Book a consultation to discuss your requirements and explore our fabric collection
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
