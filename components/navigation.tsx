"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-wider">
            TAVARI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/about"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
            >
              Services
            </Link>
            <Link
              href="/process"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
            >
              Process
            </Link>
            <Link
              href="/lookbook"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
            >
              Lookbook
            </Link>
            <Link
              href="/collaborate"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
            >
              Collaborate
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="default"
              className="rounded-none px-8 py-6 font-mono text-xs tracking-wider uppercase"
            >
              <Link href="/book">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <Link
              href="/about"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/process"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="/lookbook"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Lookbook
            </Link>
            <Link
              href="/collaborate"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors font-mono uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborate
            </Link>
            <Button
              asChild
              variant="default"
              className="rounded-none px-8 py-6 font-mono text-xs tracking-wider uppercase w-full"
            >
              <Link href="/book">Book Consultation</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
