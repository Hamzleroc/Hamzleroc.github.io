import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import BeeSvg from "@/components/BeeSvg";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber font-semibold mb-6 anim-fade-up">
            Get in Touch
          </p>
          <h1
            className="font-display font-light text-charcoal leading-tight anim-fade-up delay-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {"We'd love to hear"}
            <br />
            <em>from you.</em>
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form — 3 cols */}
            <AnimateOnScroll className="lg:col-span-3">
              <div className="bg-cream border border-beige p-10">
                <h2 className="font-display text-2xl text-charcoal mb-8">Send us a message</h2>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Info — 2 cols */}
            <AnimateOnScroll delay={150} className="lg:col-span-2">
              <div className="space-y-12">
                {/* Details */}
                <div>
                  <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-amber font-semibold mb-6">
                    Contact Details
                  </h3>
                  <ul className="space-y-5 font-sans text-sm text-muted">
                    <li className="flex gap-4 items-start">
                      <svg className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span>Brussels, Belgium</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <svg className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <a
                        href="mailto:hello@malabskin.com"
                        className="hover:text-amber transition-colors cursor-pointer"
                      >
                        hello@malabskin.com
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Response times */}
                <div>
                  <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-amber font-semibold mb-6">
                    Response Times
                  </h3>
                  <dl className="space-y-3 font-sans text-sm text-muted">
                    {[
                      ["Monday – Friday", "Within 24h"],
                      ["Saturday",        "Within 48h"],
                      ["Sunday",          "Next business day"],
                    ].map(([day, time]) => (
                      <div key={day} className="flex justify-between border-b border-beige pb-3">
                        <dt>{day}</dt>
                        <dd>{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <BeeSvg className="w-12 h-14 text-amber/18" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
