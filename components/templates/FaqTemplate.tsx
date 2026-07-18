import AnimateOnScroll from "@/components/AnimateOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import Accordion from "@/components/ui/Accordion";
import CtaLink from "@/components/ui/CtaLink";
import { getDictionary } from "@/lib/i18n";
import { path, type Locale } from "@/lib/i18n/routes";

export default function FaqTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, categories } = dict.faq;

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
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <AnimateOnScroll className="mb-6">
                <h2 className="font-display font-semibold text-xl md:text-2xl text-navy">{cat.title}</h2>
              </AnimateOnScroll>
              <Accordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <AnimateOnScroll className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-5">{dict.home.ctaBanner.title}</h2>
          <p className="font-sans text-base leading-7 text-white/55 mb-10">{dict.home.ctaBanner.subtitle}</p>
          <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
            {dict.common.ctaPrimary}
          </CtaLink>
        </AnimateOnScroll>
      </section>
    </>
  );
}
