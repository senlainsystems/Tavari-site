import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "The Bespoke Process — TAVARI",
  description:
    "Discover our meticulous bespoke tailoring process from initial consultation to final delivery. Excellence in every step.",
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/tailor-measuring-client-for-bespoke-suit-luxury-tail.jpg"
            alt="The Bespoke Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6">The Bespoke Process</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed">
            A journey of precision, craftsmanship, and personalization
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Crafted for You, Only You</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Creating a bespoke garment is an intimate collaboration. From our first meeting to the moment you wear your
            finished piece, we are dedicated to understanding your vision and executing it with meticulous precision.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Step 1 */}
          <div className="grid md:grid-cols-12 gap-12 mb-32 items-start">
            <div className="md:col-span-2">
              <div className="text-6xl font-light text-muted-foreground">01</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-3xl font-light mb-4">Initial Consultation</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                We begin with a private consultation to understand your style preferences, lifestyle needs, and the
                occasions for which you'll wear your garment.
              </p>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                During this session, we discuss fabric options, design details, and establish a timeline for your
                commission. This is where your vision begins to take form.
              </p>
            </div>
            <div className="md:col-span-6">
              <img
                src="/luxury-fabric-consultation-samples-and-swatches-be.jpg"
                alt="Initial Consultation"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-12 gap-12 mb-32 items-start">
            <div className="md:col-span-2">
              <div className="text-6xl font-light text-muted-foreground">02</div>
            </div>
            <div className="md:col-span-4 order-3 md:order-2">
              <h3 className="text-3xl font-light mb-4">Precise Measurements</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                Our master tailors take over 30 individual measurements, accounting for posture, shoulder slope, and
                body asymmetries that ready-to-wear garments ignore.
              </p>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                These measurements become the foundation for your unique pattern—a blueprint created specifically for
                your body that will be kept on file for future commissions.
              </p>
            </div>
            <div className="md:col-span-6 order-2 md:order-3">
              <img
                src="/tailor-taking-measurements-precision-tailoring-pro.jpg"
                alt="Precise Measurements"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-12 gap-12 mb-32 items-start">
            <div className="md:col-span-2">
              <div className="text-6xl font-light text-muted-foreground">03</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-3xl font-light mb-4">Pattern & Cutting</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                Using your measurements, we create a unique pattern that serves as the architectural blueprint for your
                garment. The fabric is then carefully cut by hand, ensuring precision in every piece.
              </p>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                This stage requires exceptional skill—the pattern must account for how the fabric drapes and moves with
                your body while maintaining the garment's structural integrity.
              </p>
            </div>
            <div className="md:col-span-6">
              <img
                src="/tailor-cutting-luxury-fabric-pattern-making-bespok.jpg"
                alt="Pattern & Cutting"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-12 gap-12 mb-32 items-start">
            <div className="md:col-span-2">
              <div className="text-6xl font-light text-muted-foreground">04</div>
            </div>
            <div className="md:col-span-4 order-3 md:order-2">
              <h3 className="text-3xl font-light mb-4">First Fitting</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                You try on the basted garment—a preliminary version held together with temporary stitching. This allows
                us to assess fit, drape, and overall silhouette.
              </p>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                We make detailed notes and adjustments, refining the fit to achieve the perfect balance between comfort
                and structure. This fitting is crucial to the final result.
              </p>
            </div>
            <div className="md:col-span-6 order-2 md:order-3">
              <img
                src="/fitting-session-in-luxury-tailoring-studio-client-.jpg"
                alt="First Fitting"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid md:grid-cols-12 gap-12 mb-32 items-start">
            <div className="md:col-span-2">
              <div className="text-6xl font-light text-muted-foreground">05</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-3xl font-light mb-4">Hand Finishing</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                After adjustments, our tailors complete the garment with hand-sewn details that machines cannot
                replicate. Buttonholes are hand-stitched, linings are attached with precision.
              </p>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                This stage showcases our commitment to traditional techniques—every stitch serves both functional and
                aesthetic purposes, ensuring longevity and beauty.
              </p>
            </div>
            <div className="md:col-span-6">
              <img
                src="/close-up-of-hand-stitching-on-luxury-suit-tailorin.jpg"
                alt="Hand Finishing"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="text-6xl font-light text-muted-foreground">06</div>
            </div>
            <div className="md:col-span-4 order-3 md:order-2">
              <h3 className="text-3xl font-light mb-4">Final Fitting & Delivery</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                The completed garment is presented for your final fitting. We make any last minor adjustments to ensure
                absolute perfection before delivery.
              </p>
              <p className="text-muted-foreground font-mono text-sm mt-4 leading-relaxed">
                Your bespoke piece comes with care instructions and our commitment to ongoing service—we're here for
                alterations and future commissions as your relationship with TAVARI continues.
              </p>
            </div>
            <div className="md:col-span-6 order-2 md:order-3">
              <img
                src="/elegant-finished-bespoke-suit-on-display-luxury-ta.jpg"
                alt="Final Delivery"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">Timeline</h2>
          <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
            <div>
              <h3 className="text-2xl font-light mb-4">Duration</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                A typical bespoke commission takes 8-12 weeks from initial consultation to final delivery. This timeline
                ensures we never compromise on quality or attention to detail.
              </p>
              <p className="text-muted-foreground font-mono text-sm mt-4 leading-relaxed">
                Rush services are available for select circumstances with additional fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">Start Your Commission</h2>
          <p className="text-lg mb-12 font-mono leading-relaxed opacity-90">
            Schedule your consultation to begin the bespoke process
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
