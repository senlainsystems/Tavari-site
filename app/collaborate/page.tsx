import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Collaborate with TAVARI",
  description:
    "Join the TAVARI team as a designer or model. We seek exceptional talent to collaborate with our luxury menswear brand.",
}

export default function CollaboratePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/collaboration-creative-team-luxury-fashion-workspace.jpg"
            alt="Collaborate with TAVARI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6">Join Our Team</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed">
            We collaborate with exceptional designers and models who share our commitment to excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Crafting Excellence Together</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            At TAVARI, we believe in fostering relationships with creative professionals who understand the value of
            craftsmanship and dedication. Whether you're a designer or model, we invite you to explore opportunities
            with our brand.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mt-6">
            We welcome applications from both established professionals and upcoming talent who are passionate about
            luxury menswear and ready to grow with us.
          </p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Designer Opportunity */}
            <div>
              <div className="mb-8 h-[400px] overflow-hidden">
                <img
                  src="/designer-working-on-fashion-sketches-creative-pro.jpg"
                  alt="Designer Opportunities"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-4xl font-light mb-6">For Designers</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                We seek talented designers with a passion for bespoke tailoring and an appreciation for African textile
                traditions. Our atelier is a space for creativity, learning, and pushing the boundaries of menswear
                design.
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground font-mono text-sm">
                <li>• Passion for menswear and tailoring</li>
                <li>• Strong understanding of garment construction</li>
                <li>• Portfolio demonstrating technical skill and creativity</li>
                <li>• Commitment to craftsmanship and attention to detail</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase w-full md:w-auto"
              >
                <Link href="/collaborate/designer">
                  Apply as Designer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Model Opportunity */}
            <div>
              <div className="mb-8 h-[400px] overflow-hidden">
                <img
                  src="/professional-male-model-photoshoot-luxury-fashion.jpg"
                  alt="Model Opportunities"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-4xl font-light mb-6">For Models</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                We collaborate with models who embody elegance, presence, and professionalism. Our lookbooks and
                campaigns celebrate diverse representation while maintaining the sophistication of luxury menswear.
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground font-mono text-sm">
                <li>• Professional modeling experience preferred</li>
                <li>• Strong portfolio with editorial or luxury fashion work</li>
                <li>• Understanding of menswear presentation</li>
                <li>• Availability for fittings and shoots</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase w-full md:w-auto"
              >
                <Link href="/collaborate/model">
                  Apply as Model
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">What We Value</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4">Excellence</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                We demand the highest standards in every aspect of our work and seek collaborators who share this
                commitment.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4">Innovation</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                While honoring tradition, we embrace creativity and fresh perspectives that push menswear forward.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4">Integrity</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Professionalism, respect, and dedication are the foundation of all our collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
