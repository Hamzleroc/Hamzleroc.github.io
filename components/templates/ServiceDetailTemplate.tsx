import Icon from "@/components/icons/Icon";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import CircuitLines from "@/components/ui/CircuitLines";
import Accordion from "@/components/ui/Accordion";
import CtaLink from "@/components/ui/CtaLink";
import ServiceCard from "@/components/ui/ServiceCard";
import { getDictionary, getService } from "@/lib/i18n";
import { path, servicePath, type Locale, type ServiceKey } from "@/lib/i18n/routes";

export default function ServiceDetailTemplate({ locale, serviceKey }: { locale: Locale; serviceKey: ServiceKey }) {
  const dict = getDictionary(locale);
  const service = getService(locale, serviceKey);
  if (!service) return null;

  const related = dict.services.filter((s) => s.key !== serviceKey).slice(0, 3);

  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <CircuitLines className="absolute inset-0 w-full h-full text-white/[0.06] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateOnScroll>
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-8">
              <Icon name={service.icon} className="w-7 h-7 text-volt-light" />
            </div>
            <p className="font-sans text-xs tracking-[0.28em] uppercase text-volt-light font-semibold mb-6">
              {service.hero.eyebrow}
            </p>
            <h1
              className="font-display font-semibold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.5rem)" }}
            >
              {service.hero.title}
            </h1>
            <p className="font-sans text-base md:text-lg leading-8 text-white/55 max-w-2xl mx-auto mb-10">
              {service.hero.subtitle}
            </p>
            <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
              {dict.common.ctaPrimary}
            </CtaLink>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="space-y-5">
            {service.overview.map((p) => (
              <p key={p} className="font-sans text-base leading-8 text-slate">
                {p}
              </p>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {service.benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 90}>
                <div className="bg-white p-8 h-full hover:bg-paper transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-volt/10 flex items-center justify-center mb-6">
                    <Icon name={b.icon} className="w-5 h-5 text-volt-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-navy mb-3">{b.title}</h3>
                  <p className="font-sans text-sm leading-6 text-slate">{b.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <AmbientGlow variant="subtle" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="font-display font-semibold text-2xl md:text-3xl">{service.cardTitle}</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 80}>
                <div className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-volt/20 flex items-center justify-center mt-0.5">
                    <Icon name="check" className="w-3.5 h-3.5 text-volt-light" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-white mb-2">{f.title}</h3>
                    <p className="font-sans text-sm leading-6 text-white/50">{f.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-10">
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy">
              {dict.faq.hero.eyebrow}
            </h2>
          </AnimateOnScroll>
          <Accordion items={service.faq} />
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll className="mb-12 flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy">{dict.common.ourServices}</h2>
            <CtaLink href={path(locale, "services")} variant="ghost" showArrow>
              {dict.common.viewAllServices}
            </CtaLink>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s, i) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <AnimateOnScroll className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-5">{dict.home.ctaBanner.title}</h2>
          <p className="font-sans text-base leading-7 text-white/55 mb-10">{dict.home.ctaBanner.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
              {dict.common.ctaPrimary}
            </CtaLink>
            <CtaLink href={path(locale, "services")} variant="onDark">
              {dict.common.backToServices}
            </CtaLink>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
