import Icon from "@/components/icons/Icon";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import CircuitLines from "@/components/ui/CircuitLines";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";

export default function ContactTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, cards, officeTitle, hoursTitle, formNote } = dict.contact;

  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <CircuitLines className="absolute inset-0 w-full h-full text-white/[0.06] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateOnScroll>
            <p className="font-sans text-xs tracking-[0.28em] uppercase text-volt-light font-semibold mb-6">
              {hero.eyebrow}
            </p>
            <h1
              className="font-display font-semibold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              {hero.title}
            </h1>
            <p className="font-sans text-base md:text-lg leading-8 text-white/55 max-w-2xl mx-auto">
              {hero.subtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {cards.map((c, i) => (
              <AnimateOnScroll key={c.title} delay={i * 90}>
                <a
                  href={c.href}
                  target={c.icon === "whatsapp" ? "_blank" : undefined}
                  rel={c.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                  className="group lift-hover block h-full bg-white border border-line rounded-2xl p-8 hover:border-volt/40 hover:shadow-[0_20px_45px_-20px_rgba(37,85,214,0.35)] transition-shadow duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-volt/10 to-solar/10 flex items-center justify-center mb-6 group-hover:from-volt/20 group-hover:to-solar/20 transition-colors duration-300">
                    <Icon name={c.icon as "phone" | "mail" | "whatsapp"} className="w-6 h-6 text-volt-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-navy mb-2">{c.title}</h3>
                  <p className="font-sans text-base font-semibold text-volt-dark mb-2">{c.value}</p>
                  <p className="font-sans text-xs text-slate">{c.note}</p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <div className="relative bg-navy text-white rounded-2xl p-10 h-full overflow-hidden flex flex-col justify-end min-h-[16rem]">
                <div aria-hidden="true" className="absolute inset-0 opacity-40">
                  <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                    <g stroke="white" strokeOpacity="0.15" strokeWidth="1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
                      ))}
                      {Array.from({ length: 7 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="relative">
                  <Icon name="mapPin" className="w-8 h-8 text-volt-light mb-4" />
                  <h3 className="font-display font-semibold text-xl mb-2">{officeTitle}</h3>
                  <p className="font-sans text-sm text-white/60 leading-6">
                    {dict.company.address}
                    <br />
                    {dict.company.city}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white border border-line rounded-2xl p-10 h-full flex flex-col justify-between min-h-[16rem]">
                <div>
                  <Icon name="calendar" className="w-8 h-8 text-volt mb-4" />
                  <h3 className="font-display font-semibold text-xl text-navy mb-2">{hoursTitle}</h3>
                  <p className="font-sans text-sm text-slate leading-6">{dict.company.hours}</p>
                </div>
                <p className="font-sans text-sm text-slate leading-6 mt-8 pt-6 border-t border-line">
                  {formNote}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
