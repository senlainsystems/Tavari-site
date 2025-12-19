import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy — TAVARI",
  description: "TAVARI's privacy policy and data protection practices.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground font-mono mb-16">Last Updated: December 2024</p>

          <div className="space-y-12 text-muted-foreground font-mono text-sm leading-relaxed">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Information We Collect</h2>
              <p>
                TAVARI collects personal information when you book a consultation, apply for collaboration, or interact
                with our website. This includes name, contact details, measurements, and preferences related to our
                bespoke services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide bespoke tailoring services and consultations</li>
                <li>Maintain records of your measurements and preferences</li>
                <li>Process applications for designer and model collaborations</li>
                <li>Communicate about appointments, orders, and services</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Data Protection</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. Access to client
                data is restricted to authorized personnel only. We do not sell or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us at
                privacy@tavari.com to exercise these rights or for any privacy-related inquiries.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-foreground mb-4">Contact</h2>
              <p>
                For privacy concerns or questions, please contact:
                <br />
                Email: privacy@tavari.com
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
