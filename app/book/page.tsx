"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BookConsultationPage() {
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
      <div className="min-h-screen">
        <Navigation />
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-32">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8">Consultation Requested</h1>
            <p className="text-lg text-muted-foreground font-mono mb-8 leading-relaxed">
              Thank you for your interest in TAVARI. We have received your consultation request and will contact you
              within 48 hours to confirm your appointment.
            </p>
            <p className="text-muted-foreground font-mono text-sm mb-12">
              Please check your email for confirmation details. We look forward to beginning your bespoke journey.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase border-2 bg-transparent"
            >
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/consultation-meeting-luxury-tailoring-studio-client.jpg"
            alt="Book Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6">Book Your Consultation</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed">
            Begin your bespoke journey with a private consultation
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left Column - Information */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-light mb-8">What to Expect</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wide mb-2">Duration</h3>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      Consultations typically last 60-90 minutes, allowing time to discuss your vision, explore fabrics,
                      and take initial measurements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <User className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wide mb-2">Private Session</h3>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      One-on-one consultation with our master tailor in a comfortable, private setting where we focus
                      entirely on your requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageSquare className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wide mb-2">No Obligation</h3>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      The consultation is complimentary and carries no obligation to commission. We simply want to
                      understand your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-muted">
                <h3 className="font-mono text-sm uppercase tracking-wide mb-4">Location</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                  TAVARI Atelier
                  <br />
                  123 Craft Avenue
                  <br />
                  Lagos, Nigeria
                </p>
                <p className="text-muted-foreground font-mono text-sm">
                  Virtual consultations available for international clients.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-light border-b border-border pb-4">Your Information</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-mono text-xs uppercase tracking-wide">
                        <User className="inline h-4 w-4 mr-2" />
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
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input id="email" type="email" required className="rounded-none border-2 h-12 font-mono" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input id="phone" type="tel" required className="rounded-none border-2 h-12 font-mono" />
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-light border-b border-border pb-4">Consultation Preferences</h2>

                  <div className="space-y-2">
                    <Label htmlFor="consultationType" className="font-mono text-xs uppercase tracking-wide">
                      Consultation Type *
                    </Label>
                    <select
                      id="consultationType"
                      required
                      className="w-full rounded-none border-2 border-input h-12 px-3 font-mono bg-background"
                    >
                      <option value="">Select type...</option>
                      <option value="in-person">In-Person at Atelier</option>
                      <option value="virtual">Virtual Consultation</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="font-mono text-xs uppercase tracking-wide">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Preferred Date *
                      </Label>
                      <Input id="preferredDate" type="date" required className="rounded-none border-2 h-12 font-mono" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime" className="font-mono text-xs uppercase tracking-wide">
                        <Clock className="inline h-4 w-4 mr-2" />
                        Preferred Time *
                      </Label>
                      <select
                        id="preferredTime"
                        required
                        className="w-full rounded-none border-2 border-input h-12 px-3 font-mono bg-background"
                      >
                        <option value="">Select time...</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 3PM)</option>
                        <option value="evening">Evening (3PM - 6PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest" className="font-mono text-xs uppercase tracking-wide">
                      Service Interest *
                    </Label>
                    <select
                      id="serviceInterest"
                      required
                      className="w-full rounded-none border-2 border-input h-12 px-3 font-mono bg-background"
                    >
                      <option value="">Select service...</option>
                      <option value="bespoke-suit">Bespoke Suit</option>
                      <option value="custom-shirt">Custom Shirt</option>
                      <option value="multiple">Multiple Items</option>
                      <option value="exploring">Just Exploring</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="font-mono text-xs uppercase tracking-wide">
                      Approximate Budget
                    </Label>
                    <select
                      id="budget"
                      className="w-full rounded-none border-2 border-input h-12 px-3 font-mono bg-background"
                    >
                      <option value="">Select range...</option>
                      <option value="3500-5000">$3,500 - $5,000</option>
                      <option value="5000-7500">$5,000 - $7,500</option>
                      <option value="7500-10000">$7,500 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-light border-b border-border pb-4">Additional Information</h2>

                  <div className="space-y-2">
                    <Label htmlFor="occasion" className="font-mono text-xs uppercase tracking-wide">
                      Occasion or Purpose
                    </Label>
                    <Input
                      id="occasion"
                      className="rounded-none border-2 h-12 font-mono"
                      placeholder="Wedding, business, special event..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="font-mono text-xs uppercase tracking-wide">
                      Special Requests or Questions
                    </Label>
                    <Textarea
                      id="notes"
                      className="rounded-none border-2 min-h-32 font-mono"
                      placeholder="Any specific requirements, style preferences, or questions you'd like to discuss..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral" className="font-mono text-xs uppercase tracking-wide">
                      How Did You Hear About Us?
                    </Label>
                    <Input
                      id="referral"
                      className="rounded-none border-2 h-12 font-mono"
                      placeholder="Referral, social media, search..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="rounded-none px-12 py-6 font-mono text-xs tracking-wider uppercase w-full"
                  >
                    {isSubmitting ? "Submitting..." : "Request Consultation"}
                  </Button>
                  <p className="text-xs text-muted-foreground font-mono mt-4 text-center">
                    We'll contact you within 48 hours to confirm your appointment
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
