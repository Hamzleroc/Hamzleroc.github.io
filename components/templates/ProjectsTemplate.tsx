import Icon from "@/components/icons/Icon";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import CtaLink from "@/components/ui/CtaLink";
import { getDictionary } from "@/lib/i18n";
import { path, type Locale } from "@/lib/i18n/routes";

const categoryIcon: Record<string, "sun" | "battery" | "plug" | "thermo" | "snow" | "bolt"> = {
  "Solar & Storage": "sun",
  "Zonne-energie & Opslag": "sun",
  "Electrical Installations": "bolt",
  "Elektrische Installaties": "bolt",
  "EV Charging": "plug",
  Laadpalen: "plug",
  "Heat Pumps": "thermo",
  Warmtepompen: "thermo",
  "Business Solar": "sun",
  "Zakelijke Zonne-energie": "sun",
  "Air Conditioning": "snow",
  Airconditioning: "snow",
};

export default function ProjectsTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, items } = dict.projects;

  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <article className="lift-hover group bg-white border border-line rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-navy via-navy-light to-ink flex items-center justify-center overflow-hidden">
                    <Icon
                      name={categoryIcon[item.category] ?? "bolt"}
                      className="w-16 h-16 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500"
                    />
                    <span className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 bg-white/90 text-navy rounded-full">
                      {item.category}
                    </span>
                    <span className="absolute bottom-4 right-4 font-sans text-xs text-white/60">{item.year}</span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate mb-3">
                      <Icon name="mapPin" className="w-3.5 h-3.5 text-volt" />
                      {item.location}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy mb-3">{item.title}</h3>
                    <p className="font-sans text-sm leading-6 text-slate mb-5 flex-1">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[10px] tracking-wide uppercase font-semibold px-2.5 py-1 bg-volt/8 text-volt-dark rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200} className="mt-16 text-center">
            <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
              {dict.common.ctaPrimary}
            </CtaLink>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
