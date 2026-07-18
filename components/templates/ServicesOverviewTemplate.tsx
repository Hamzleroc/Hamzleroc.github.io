import AmbientGlow from "@/components/ui/AmbientGlow";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CtaLink from "@/components/ui/CtaLink";
import ServiceCard from "@/components/ui/ServiceCard";
import { getDictionary } from "@/lib/i18n";
import { path, servicePath, type Locale } from "@/lib/i18n/routes";

export default function ServicesOverviewTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, intro } = dict.servicesOverview;

  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
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
          <AnimateOnScroll className="max-w-2xl mb-14">
            <p className="font-sans text-base leading-7 text-slate">{intro}</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.services.map((s, i) => (
              <ServiceCard
                key={s.key}
                href={servicePath(locale, s.key)}
                icon={s.icon}
                title={s.cardTitle}
                blurb={s.cardBlurb}
                exploreLabel={dict.common.exploreService}
                delay={i * 80}
              />
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
