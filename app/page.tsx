import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img src="/african-man-in-elegant-bespoke-suit-tailored-mensw.jpg" alt="TAVARI Bespoke Menswear" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-6 text-balance">Craft Meets Heritage</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto mb-12 leading-relaxed">
            Bespoke menswear rooted in African artistry, perfected through global tailoring standards
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-none px-12 py-8 font-mono text-sm tracking-wider uppercase bg-white text-black hover:bg-white/90"
          >
            <Link href="/book">
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Where Tradition Meets Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Every garment tells a story. At TAVARI, we honor African craftsmanship while embracing the precision of
            global tailoring. Each piece is meticulously crafted to reflect your individuality, celebrating heritage
            through contemporary design.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <img src="/luxury-fabric-swatches-and-measuring-tape-tailorin.jpg" alt="Bespoke Tailoring" className="w-full h-64 object-cover" />
              </div>
              <h3 className="text-2xl font-light mb-4">Bespoke Tailoring</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Custom suits crafted to your exact specifications, from initial consultation to final fitting
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-6 text-sm font-mono uppercase tracking-wide hover:text-muted-foreground transition-colors"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/artisan-hands-working-on-fabric-african-textile-pa.jpg"
                  alt="Heritage Craftsmanship"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Heritage Craftsmanship</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Traditional techniques passed through generations, elevated by modern precision
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 text-sm font-mono uppercase tracking-wide hover:text-muted-foreground transition-colors"
              >
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/luxury-menswear-details-buttons-cufflinks-accessor.jpg"
                  alt="Personalized Experience"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Personalized Experience</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                From consultation to delivery, every step is tailored to your vision and preferences
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 mt-6 text-sm font-mono uppercase tracking-wide hover:text-muted-foreground transition-colors"
              >
                Our Process <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">Recent Work</h2>
            <p className="text-muted-foreground font-mono">Celebrating craftsmanship through refined design</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="/african-model-in-elegant-bespoke-three-piece-suit-.jpg"
                alt="Featured Look 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="/african-gentleman-in-custom-tailored-suit-urban-el.jpg"
                alt="Featured Look 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase border-2 bg-transparent"
            >
              <Link href="/lookbook">View Full Lookbook</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Begin Your Bespoke Journey</h2>
          <p className="text-lg mb-12 font-mono leading-relaxed opacity-90">
            Schedule a private consultation to discuss your vision and explore our craftsmanship
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
