import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BeeSvg from "@/components/BeeSvg";

const values = [
  {
    num: "01",
    title: "Ancestral Wisdom",
    body: "Every ingredient traces back to a tradition. We research, we listen, and we honour what has worked for centuries before adding it to a formula.",
  },
  {
    num: "02",
    title: "Clean Formulation",
    body: "No parabens, no synthetic fragrances, no filler ingredients. Every component earns its place by contributing measurably to skin health.",
  },
  {
    num: "03",
    title: "Ethical Sourcing",
    body: "We partner directly with cooperatives in Ghana, Morocco, Rwanda, and across the continent — fair-trade, traceable, and community-first.",
  },
  {
    num: "04",
    title: "Made in Belgium",
    body: "All formulations are developed and produced in Belgium, combining African raw materials with rigorous European cosmetic standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-6 anim-fade-up">
              Our Story
            </p>
            <h1
              className="font-display font-light text-charcoal leading-[1.05] anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
            >
              Skincare
              <br />
              <em className="text-amber">Meets</em> Heritage.
            </h1>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-28 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateOnScroll>
              <div className="relative aspect-square bg-gradient-to-br from-amber-pale via-beige to-cream flex items-center justify-center overflow-hidden">
                <BeeSvg className="w-64 h-80 text-amber/22" />
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-6 font-display text-[180px] font-light text-amber/8 leading-none select-none"
                >
                  M
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <h2
                className="font-display font-light text-charcoal leading-tight mb-8"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Born from memory,
                <br />
                <em>built with purpose.</em>
              </h2>
              <div className="space-y-5 font-sans text-base leading-8 text-muted">
                <p>
                  Malab Skin began in a kitchen in Brussels, where our founder Amara Bah would recreate the skincare rituals she remembered from her childhood in West Africa — rich shea preparations, honey masks, and oil blends that left skin genuinely nourished rather than merely coated.
                </p>
                <p>
                  What started as a personal practice became a professional obsession: how do you scale something so rooted in touch, memory, and place without losing what makes it special?
                </p>
                <p>
                  The answer was to start very small and grow very deliberately. Every formula begins with a single ingredient — researched, ethically sourced, tested extensively — and is built out from there. Nothing is added to fill a bottle faster. Everything serves the skin.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-20">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4">
              What We Stand For
            </p>
            <h2
              className="font-display font-light text-cream leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Our principles,
              <br />
              <em>not just our policies.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/8">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.num} delay={i * 90}>
                <div className="bg-charcoal px-10 py-12 hover:bg-cream/5 transition-colors duration-300 group h-full">
                  <span className="font-display text-5xl font-light text-amber/18 group-hover:text-amber/35 transition-colors duration-300 block mb-8">
                    {v.num}
                  </span>
                  <h3 className="font-display text-2xl text-cream mb-4">{v.title}</h3>
                  <p className="font-sans text-sm leading-7 text-cream/45">{v.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Philosophy */}
      <section className="py-28 bg-cream">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <BeeSvg className="w-10 h-12 text-amber mx-auto mb-8" />
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-6">
              Our Ingredients
            </p>
            <h2
              className="font-display font-light text-charcoal leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Every ingredient has a reason to be there.
            </h2>
            <p className="font-sans text-base leading-8 text-muted mb-12">
              We trace every raw material to its origin — working directly with farming cooperatives, small producers, and family operations across Africa. We pay fairly, communicate transparently, and visit our partners in person. The quality you feel on your skin starts long before the formula is made.
            </p>
            <Link
              href="/products"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase font-semibold px-10 py-4 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber"
            >
              Explore Our Products
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
