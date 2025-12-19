import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Lookbook — TAVARI",
  description:
    "Explore TAVARI's collection of bespoke menswear. Browse our portfolio of custom suits and tailored garments.",
}

export default function LookbookPage() {
  const looks = [
    {
      title: "Classic Three-Piece",
      description: "Navy wool suit with peak lapels",
      image: "/lookbook-navy-three-piece-suit-bespoke-tailoring.jpg",
    },
    {
      title: "Heritage Stripe",
      description: "Chalk stripe suit in African-inspired fabric",
      image: "/lookbook-striped-suit-african-fabric-pattern.jpg",
    },
    {
      title: "Evening Elegance",
      description: "Black tie ensemble with silk details",
      image: "/lookbook-black-tie-tuxedo-evening-wear.jpg",
    },
    {
      title: "Modern Classic",
      description: "Charcoal grey double-breasted suit",
      image: "/lookbook-grey-double-breasted-suit-modern.jpg",
    },
    {
      title: "Summer Linen",
      description: "Lightweight beige linen suit",
      image: "/lookbook-beige-linen-suit-summer-elegant.jpg",
    },
    {
      title: "Statement Texture",
      description: "Textured wool with contrasting waistcoat",
      image: "/lookbook-textured-suit-patterned-waistcoat.jpg",
    },
    {
      title: "Power Dressing",
      description: "Midnight blue with sharp tailoring",
      image: "/lookbook-midnight-blue-suit-sharp-cut.jpg",
    },
    {
      title: "Casual Refinement",
      description: "Sport coat with tailored trousers",
      image: "/lookbook-sport-coat-smart-casual-elegant.jpg",
    },
    {
      title: "Traditional Excellence",
      description: "Pinstripe suit with classic details",
      image: "/lookbook-pinstripe-suit-traditional-tailoring.jpg",
    },
    {
      title: "Contemporary Edge",
      description: "Slim cut suit in rich brown",
      image: "/lookbook-brown-suit-contemporary-styling.jpg",
    },
    {
      title: "Formal Occasion",
      description: "Morning dress with tailcoat",
      image: "/lookbook-formal-morning-dress-tailcoat.jpg",
    },
    {
      title: "Heritage Blend",
      description: "Tweed suit with African textile accents",
      image: "/lookbook-tweed-suit-african-textile-details.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/lookbook-hero-african-model-elegant-bespoke-suit.jpg"
            alt="TAVARI Lookbook"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-6">Lookbook</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed">
            A celebration of craftsmanship through refined design
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-lg text-muted-foreground font-mono leading-relaxed max-w-3xl mx-auto">
              Each piece represents our commitment to excellence—where traditional African craftsmanship meets global
              tailoring standards. These are not just garments; they are expressions of individuality.
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {looks.map((look, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden"
                style={{ height: index % 3 === 0 ? "600px" : index % 3 === 1 ? "500px" : "550px" }}
              >
                <div className="relative h-full overflow-hidden">
                  <img
                    src={look.image || "/placeholder.svg"}
                    alt={look.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-light mb-2">{look.title}</h3>
                    <p className="text-sm font-mono opacity-90">{look.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Featured Collections</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="mb-6 h-[400px] overflow-hidden">
                <img
                  src="/collection-african-heritage-suits-traditional-fa.jpg"
                  alt="Heritage Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-3xl font-light mb-4">Heritage Collection</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Celebrating African textile traditions through contemporary tailoring. These pieces incorporate
                traditional fabrics and patterns reimagined for modern sophistication.
              </p>
            </div>

            <div>
              <div className="mb-6 h-[400px] overflow-hidden">
                <img
                  src="/collection-modern-executive-suits-contemporary-t.jpg"
                  alt="Executive Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-3xl font-light mb-4">Executive Collection</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Power dressing refined. Tailored for the modern executive who demands both authority and elegance in
                their professional wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl md:text-4xl font-light mb-8 text-balance leading-relaxed">
            "TAVARI created not just a suit, but an experience. The attention to detail, the perfect fit, and the way
            they honored both my heritage and personal style was extraordinary."
          </blockquote>
          <p className="font-mono text-sm text-muted-foreground">— Marcus A., Lagos</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
