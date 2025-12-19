import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service — TAVARI",
  description: "TAVARI's terms of service for bespoke tailoring commissions.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground font-mono mb-16">Last Updated: December 2024</p>

          <div className="space-y-12 text-muted-foreground font-mono text-sm leading-relaxed">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Bespoke Commission Terms</h2>
              <p>
                By commissioning a bespoke garment from TAVARI, you agree to these terms. All commissions require a
                non-refundable 50% deposit at the time of consultation. The remaining balance is due upon final fitting
                before garment delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Timeline & Delivery</h2>
              <p>
                Standard bespoke commissions take 8-12 weeks from initial consultation to delivery. Rush services may be
                available with additional fees. Timelines are estimates and may vary based on complexity and material
                availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Fittings & Alterations</h2>
              <p>
                Multiple fittings are included in the bespoke process. Minor alterations within 30 days of delivery are
                complimentary. Alterations due to weight changes or other body modifications after final fitting may
                incur additional charges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Cancellations</h2>
              <p>
                Due to the custom nature of bespoke garments, cancellations after the initial deposit are not eligible
                for refund. We reserve the right to cancel commissions and provide full refunds at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Garment Care</h2>
              <p>
                All garments come with care instructions. TAVARI is not responsible for damage resulting from improper
                care or unauthorized alterations by third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Intellectual Property</h2>
              <p>
                All designs, patterns, and creative work produced by TAVARI remain our intellectual property. Clients
                may not reproduce or commission replicas of TAVARI designs from other tailors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Contact</h2>
              <p>
                For questions regarding these terms:
                <br />
                Email: hello@tavari.com
                <br />
                Address: TAVARI Atelier, 123 Craft Avenue, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
