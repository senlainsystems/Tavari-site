"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function DesignerApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Application Received</h1>
          <p className="text-lg text-muted-foreground font-mono mb-12 leading-relaxed">
            Thank you for your interest in joining TAVARI. We will review your application and contact you within 7-10
            business days.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase border-2 bg-transparent"
          >
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wide hover:text-muted-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collaborate
          </Link>

          <h1 className="text-5xl md:text-6xl font-light mb-6">Designer Application</h1>
          <p className="text-lg text-muted-foreground font-mono mb-16 leading-relaxed">
            Tell us about your experience, vision, and what draws you to TAVARI. We review all applications carefully
            and seek designers who share our dedication to craft.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light border-b border-border pb-4">Personal Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-mono text-xs uppercase tracking-wide">
                    First Name *
                  </Label>
                  <Input id="firstName" required className="rounded-none border-2 h-12 font-mono" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-mono text-xs uppercase tracking-wide">
                    Last Name *
                  </Label>
                  <Input id="lastName" required className="rounded-none border-2 h-12 font-mono" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wide">
                  Email Address *
                </Label>
                <Input id="email" type="email" required className="rounded-none border-2 h-12 font-mono" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide">
                  Phone Number *
                </Label>
                <Input id="phone" type="tel" required className="rounded-none border-2 h-12 font-mono" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="font-mono text-xs uppercase tracking-wide">
                  Current Location *
                </Label>
                <Input id="location" required className="rounded-none border-2 h-12 font-mono" />
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light border-b border-border pb-4">Professional Experience</h2>

              <div className="space-y-2">
                <Label htmlFor="education" className="font-mono text-xs uppercase tracking-wide">
                  Relevant Education/Training
                </Label>
                <Textarea id="education" className="rounded-none border-2 min-h-24 font-mono" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="background" className="font-mono text-xs uppercase tracking-wide">
                  Professional Background *
                </Label>
                <Textarea
                  id="background"
                  required
                  className="rounded-none border-2 min-h-32 font-mono"
                  placeholder="Describe your experience in fashion design, tailoring, or related fields..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="font-mono text-xs uppercase tracking-wide">
                  Key Skills & Specializations *
                </Label>
                <Textarea
                  id="skills"
                  required
                  className="rounded-none border-2 min-h-24 font-mono"
                  placeholder="Pattern making, draping, CAD software, specific techniques..."
                />
              </div>
            </div>

            {/* Portfolio & Vision */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light border-b border-border pb-4">Portfolio & Vision</h2>

              <div className="space-y-2">
                <Label htmlFor="portfolio" className="font-mono text-xs uppercase tracking-wide">
                  Portfolio URL *
                </Label>
                <Input
                  id="portfolio"
                  type="url"
                  required
                  className="rounded-none border-2 h-12 font-mono"
                  placeholder="https://"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolioFile" className="font-mono text-xs uppercase tracking-wide">
                  Upload Portfolio (PDF, max 10MB)
                </Label>
                <div className="border-2 border-border rounded-none p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                  <Input id="portfolioFile" type="file" accept=".pdf" className="rounded-none border-0 font-mono" />
                  <p className="text-xs text-muted-foreground font-mono mt-2">PDF format, maximum 10MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation" className="font-mono text-xs uppercase tracking-wide">
                  Why TAVARI? *
                </Label>
                <Textarea
                  id="motivation"
                  required
                  className="rounded-none border-2 min-h-32 font-mono"
                  placeholder="What draws you to our brand? How do you see yourself contributing to TAVARI's vision?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability" className="font-mono text-xs uppercase tracking-wide">
                  Availability *
                </Label>
                <Textarea
                  id="availability"
                  required
                  className="rounded-none border-2 min-h-24 font-mono"
                  placeholder="When can you start? Full-time, part-time, or freelance?"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-8">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase w-full md:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
              <p className="text-xs text-muted-foreground font-mono mt-4">
                By submitting, you confirm all information provided is accurate and complete.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
