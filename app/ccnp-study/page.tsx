import AnimateOnScroll from "@/components/AnimateOnScroll";
import CcnpTutor from "@/components/CcnpTutor";
import { categories } from "./data";

export const metadata = {
  title: "CCNP Study Tutor",
  description:
    "An offline AI-style study tutor for the CCNP ENCOR 350-401 exam — ask questions and get instant explanations.",
};

export default function CcnpStudyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-6 anim-fade-up">
            CCNP Study
          </p>
          <h1
            className="font-display font-light text-charcoal leading-[1.05] anim-fade-up delay-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Your CCNP
            <br />
            <em className="text-amber">AI Tutor.</em>
          </h1>
          <p className="font-sans text-base leading-8 text-muted max-w-2xl mt-8 anim-fade-up delay-200">
            Ask questions across every ENCOR 350-401 exam domain and get instant, offline
            explanations — no API key, no live model calls, just a focused study companion.
          </p>
        </div>
      </section>

      {/* Exam domains */}
      <section className="py-24 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-14">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4">
              Exam Blueprint
            </p>
            <h2
              className="font-display font-light text-charcoal leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Six domains, <em>one tutor.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-beige">
            {categories.map((c, i) => (
              <AnimateOnScroll key={c.id} delay={i * 80}>
                <div className="bg-cream-light px-8 py-10 h-full">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted">
                      {c.blueprint}
                    </span>
                    <span className="font-display text-2xl text-amber">{c.weight}</span>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">{c.title}</h3>
                  <p className="font-sans text-sm leading-6 text-muted">{c.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tutor */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-12">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-4">
              Ask Anything
            </p>
            <h2
              className="font-display font-light text-charcoal leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Chat with the <em>tutor.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <CcnpTutor />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
