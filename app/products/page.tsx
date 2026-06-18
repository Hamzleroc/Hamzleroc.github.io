"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BeeSvg from "@/components/BeeSvg";
import { useCart } from "@/context/CartContext";

type Category = "All" | "Face Serums & Oils" | "Moisturizers & Creams" | "Body Care";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Heritage Glow Serum",
    category: "Face Serums & Oils" as Category,
    price: "€65",
    priceNum: 65,
    desc: "A potent blend of African botanicals and cold-pressed oils that restores lasting radiance.",
    bg: "from-amber-pale to-beige",
  },
  {
    id: 2,
    name: "Botanical Brightening Oil",
    category: "Face Serums & Oils" as Category,
    price: "€55",
    priceNum: 55,
    desc: "Baobab and rosehip oil fused with turmeric extract for an even, luminous complexion.",
    bg: "from-beige to-amber-pale",
  },
  {
    id: 3,
    name: "Radiance Face Oil",
    category: "Face Serums & Oils" as Category,
    price: "€48",
    priceNum: 48,
    desc: "Lightweight moringa oil enriched with African violet leaf for daily all-day glow.",
    bg: "from-cream to-amber-pale",
  },
  {
    id: 4,
    name: "Velvet Moisture Cream",
    category: "Moisturizers & Creams" as Category,
    price: "€45",
    priceNum: 45,
    desc: "Deep hydration powered by baobab oil and shea with a velvet-soft, non-greasy finish.",
    bg: "from-amber-pale to-cream",
  },
  {
    id: 5,
    name: "African Shea Cream",
    category: "Moisturizers & Creams" as Category,
    price: "€38",
    priceNum: 38,
    desc: "Raw unrefined shea blended with jojoba and vitamin E. Suitable for all skin types.",
    bg: "from-beige to-cream",
  },
  {
    id: 6,
    name: "Heritage Night Cream",
    category: "Moisturizers & Creams" as Category,
    price: "€52",
    priceNum: 52,
    desc: "An overnight formula with frankincense, marula, and African plum extract.",
    bg: "from-cream to-beige",
  },
  {
    id: 7,
    name: "Raw Honey Body Butter",
    category: "Body Care" as Category,
    price: "€35",
    priceNum: 35,
    desc: "Ultra-rich whipped butter with raw Rwandan honey and triple-milled shea.",
    bg: "from-amber-pale to-beige",
  },
  {
    id: 8,
    name: "Exfoliating Sugar Scrub",
    category: "Body Care" as Category,
    price: "€32",
    priceNum: 32,
    desc: "Brown sugar crystals in a base of coconut and argan oils for silky-smooth skin.",
    bg: "from-beige to-amber-pale",
  },
  {
    id: 9,
    name: "Argan Body Elixir",
    category: "Body Care" as Category,
    price: "€42",
    priceNum: 42,
    desc: "A fast-absorbing dry oil with Moroccan argan and vitamin-rich marula.",
    bg: "from-cream to-amber-pale",
  },
];

const CATEGORIES: Category[] = ["All", "Face Serums & Oils", "Moisturizers & Creams", "Body Care"];

export default function ProductsPage() {
  const [active, setActive] = useState<Category>("All");
  const { addItem, items } = useCart();

  const products =
    active === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4 anim-fade-up">
            Our Collection
          </p>
          <h1
            className="font-display font-light text-charcoal leading-tight anim-fade-up delay-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Every formula,
            <br />
            <em>a heritage act.</em>
          </h1>
        </div>
      </section>

      {/* Category Filters */}
      <div className="sticky top-20 z-40 bg-cream-light border-b border-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-[10px] tracking-[0.18em] uppercase font-semibold px-6 py-5 transition-colors duration-200 cursor-pointer whitespace-nowrap border-b-2 ${
                  active === cat
                    ? "border-amber text-amber"
                    : "border-transparent text-muted hover:text-brown"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-16 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <AnimateOnScroll key={p.id} delay={i * 70}>
                <article className="group cursor-pointer">
                  <div
                    className={`relative aspect-[3/4] mb-5 overflow-hidden bg-gradient-to-br ${p.bg} flex items-center justify-center`}
                  >
                    <BeeSvg className="w-28 h-36 text-amber/12 group-hover:text-amber/22 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="font-sans text-[9px] tracking-[0.22em] uppercase font-semibold px-3 py-1.5 bg-cream/80 text-muted backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-300" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="font-display text-xl text-charcoal group-hover:text-amber transition-colors duration-200 flex-1 pr-4">
                      {p.name}
                    </h2>
                    <span className="font-sans text-sm font-semibold text-amber flex-shrink-0">{p.price}</span>
                  </div>
                  <p className="font-sans text-sm text-muted leading-6 mb-5">{p.desc}</p>
                  <button
                    onClick={() => addItem({ id: p.id, name: p.name, price: p.price, priceNum: p.priceNum, category: p.category })}
                    className="font-sans text-xs tracking-[0.18em] uppercase font-semibold px-6 py-3 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer w-full focus-visible:outline-2 focus-visible:outline-amber"
                  >
                    {items.some((i) => i.id === p.id) ? "Add Another" : "Add to Cart"}
                  </button>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
