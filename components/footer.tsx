import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-light tracking-wider mb-4">TAVARI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              Bespoke menswear rooted in African artistry and global craftsmanship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/lookbook"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Lookbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/book"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/collaborate"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Collaborate
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@tavari.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  hello@tavari.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center font-mono">
            © {new Date().getFullYear()} TAVARI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
