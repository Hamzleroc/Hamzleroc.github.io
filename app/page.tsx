import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BeeSvg from "@/components/BeeSvg";
import NewsletterForm from "@/components/NewsletterForm";

const featured = [
  {
    name: "Heritage Glow Serum",
    category: "Face Serums & Oils",
    price: "€65",
    desc: "A potent blend of African botanicals and cold-pressed oils that restores lasting radiance.",
    bg: "from-amber-pale to-beige",
  },
  {
    name: "Raw Honey Body Butter",
    category: "Body Care",
    price: "€35",
    desc: "Ultra-rich whipped butter with raw Rwandan honey and triple-milled shea.",
    bg: "from-beige to-amber-pale",
  },
  {
    name: "Velvet Moisture Cream",
    category: "Moisturizers & Creams",
    price: "€45",
    desc: "Deep hydration powered by baobab oil and African violet extract.",
    bg: "from-cream to-amber-pale",
  },
];

const ingredients = [
  {
    origin: "Rwanda",
    name: "Raw Honey",
    benefit: "Antibacterial, deeply moisturising, and dense with antioxidants that protect and heal.",
  },
  {
    origin: "Ghana",
    name: "Shea Butter",
    benefit: "Intensely nourishing with anti-inflammatory fatty acids that calm and condition.",
  },
  {
    origin: "Morocco",
    name: "Argan Oil",
    benefit: "Lightweight and non-greasy, rich in vitamin E and oleic acid for smooth, balanced skin.",
  },
];

const testimonials = [
  {
    quote: "I've tried dozens of serums, but nothing comes close. My skin looks genuinely transformed after three weeks.",
    name: "Amina V.",
    city: "Brussels",
  },
  {
    quote: "The body butter is unlike anything I've used before. It melts right in and leaves this beautiful subtle glow.",
    name: "Sophie D.",
    city: "Antwerp",
  },
  {
    quote: "Love that the formulas are grounded in real traditions. You can feel the intentionality in every product.",
    name: "Laure M.",
    city: "Ghent",
  },
];

const marqueeWords = ["Natural", "Heritage", "Belgian", "Botanical", "Clean Beauty", "Ethical", "Ancestral", "Handcrafted"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-light">
        {/* Warm background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 72% 35%, #EDD9C4 0%, #F4EDE4 45%, #FAF7F2 100%)",
          }}
        />

        {/* Large background bee */}
        <div
          aria-hidden="true"
          className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 text-amber/7 select-none pointer-events-none"
        >
          <BeeSvg className="w-72 h-[360px] md:w-[420px] md:h-[520px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-amber font-semibold mb-8 anim-fade-up">
              Skincare Meets Heritage
            </p>

            <h1
              className="font-display font-light text-charcoal leading-[1.04] anim-fade-up delay-100"
              style={{ fontSize: "clamp(3.5rem, 9.5vw, 8.5rem)" }}
            >
              Skin
              <br />
              <em className="text-amber">Rooted</em>
              <br />
              in Tradition.
            </h1>

            <p className="font-sans text-base md:text-lg leading-8 text-muted max-w-xl mt-8 mb-12 anim-fade-up delay-200">
              Premium natural skincare from Belgium, inspired by African heritage.
              Every formula bridges ancestral wisdom and modern science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 anim-fade-up delay-300">
              <Link
                href="/products"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase font-semibold px-9 py-4 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer text-center focus-visible:outline-2 focus-visible:outline-amber"
              >
                Shop the Collection
              </Link>
              <Link
                href="/about"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase font-semibold px-9 py-4 border border-brown/25 text-brown hover:border-amber hover:text-amber transition-colors duration-200 cursor-pointer text-center"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee Strip ─────────────────────────────────────────── */}
      <div className="bg-amber overflow-hidden py-4 select-none" aria-hidden="true">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-sans text-[10px] tracking-[0.3em] uppercase font-semibold text-cream/75 flex-shrink-0">
              {marqueeWords.map((w) => `${w}  ·  `).join("")}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured Products ──────────────────────────────────────── */}
      <section className="py-28 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-16">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4">
              Our Formulas
            </p>
            <h2
              className="font-display font-light text-charcoal leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Crafted with intention,
              <br />
              <em>rooted in nature.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 120}>
                <article className="group cursor-pointer">
                  <div
                    className={`relative aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-br ${p.bg} flex items-center justify-center`}
                  >
                    <BeeSvg className="w-32 h-40 text-amber/12 group-hover:text-amber/22 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="font-sans text-[9px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5 bg-cream/80 text-muted backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-300" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl text-charcoal group-hover:text-amber transition-colors duration-200 flex-1 pr-3">
                      {p.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-amber flex-shrink-0">{p.price}</span>
                  </div>
                  <p className="font-sans text-sm text-muted leading-6 mb-5">{p.desc}</p>
                  <Link
                    href="/products"
                    className="font-sans text-[10px] tracking-[0.25em] uppercase font-semibold text-amber hover:text-amber-dark transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    View Product
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200} className="mt-14 text-center">
            <Link
              href="/products"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase font-semibold px-10 py-4 border border-brown/25 text-brown hover:border-amber hover:text-amber transition-colors duration-200 cursor-pointer"
            >
              View All Products
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Brand Story ───────────────────────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual */}
            <AnimateOnScroll>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-amber-pale via-beige to-cream flex items-center justify-center overflow-hidden">
                  <BeeSvg className="w-52 h-64 text-amber/25" />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 right-4 font-display text-[200px] font-light text-amber/8 leading-none select-none"
                  >
                    M
                  </span>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-charcoal text-cream px-8 py-6">
                  <p className="font-display text-2xl font-light text-amber">Since</p>
                  <p className="font-display text-5xl font-light leading-none">2020</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll delay={150}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-6">
                Our Story
              </p>
              <h2
                className="font-display font-light text-charcoal leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Where ancient wisdom
                <br />
                <em>meets modern science.</em>
              </h2>
              <div className="space-y-5 font-sans text-base leading-8 text-muted max-w-lg">
                <p>
                  Malab Skin was born from a deep respect for the skincare traditions passed down through generations across Africa. Our founder grew up watching family rituals centred on raw butters, oils, and botanical extracts.
                </p>
                <p>
                  Today, from our home in Belgium, we translate those traditions into precision-formulated products that honour their roots while meeting the standards of modern skincare science.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase font-semibold text-amber hover:text-amber-dark transition-colors mt-10 cursor-pointer"
              >
                Read Our Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Key Ingredients ───────────────────────────────────────── */}
      <section className="py-28 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-16 text-center">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4">
              Key Ingredients
            </p>
            <h2
              className="font-display font-light text-cream leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Rooted in Nature
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/8">
            {ingredients.map((ing, i) => (
              <AnimateOnScroll key={ing.name} delay={i * 100}>
                <div className="bg-charcoal px-10 py-12 group hover:bg-cream/5 transition-colors duration-300 h-full">
                  <div className="w-10 h-10 border border-amber/30 flex items-center justify-center mb-8 group-hover:border-amber transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-amber" />
                  </div>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase font-semibold text-amber/55 mb-3">
                    {ing.origin}
                  </p>
                  <h3 className="font-display text-2xl text-cream mb-4">{ing.name}</h3>
                  <p className="font-sans text-sm leading-7 text-cream/45">{ing.benefit}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-28 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-16 text-center">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4">
              What They Say
            </p>
            <h2
              className="font-display font-light text-charcoal leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Real skin, real results.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                <blockquote className="bg-cream border border-beige p-8 flex flex-col h-full">
                  <span
                    className="font-display text-6xl text-amber/20 leading-none mb-4"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-sans text-sm leading-8 text-muted flex-1 mb-8">{t.quote}</p>
                  <footer>
                    <p className="font-display text-base text-charcoal">{t.name}</p>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-amber/55 mt-1">
                      {t.city}, Belgium
                    </p>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────── */}
      <section className="py-24 bg-amber">
        <AnimateOnScroll>
          <div className="max-w-xl mx-auto px-6 text-center">
            <BeeSvg className="w-10 h-12 text-cream/30 mx-auto mb-6" />
            <h2
              className="font-display font-light text-cream leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Join the ritual.
            </h2>
            <p className="font-sans text-sm leading-7 text-cream/70 mb-10">
              Subscribe for skincare insights, heritage stories, and exclusive early access to new formulas.
            </p>
            <NewsletterForm />
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
