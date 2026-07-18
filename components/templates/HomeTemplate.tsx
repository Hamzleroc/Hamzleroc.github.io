import Icon from "@/components/icons/Icon";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import CircuitLines from "@/components/ui/CircuitLines";
import CertTicker from "@/components/ui/CertTicker";
import CtaLink from "@/components/ui/CtaLink";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import ServiceCard from "@/components/ui/ServiceCard";
import { getDictionary } from "@/lib/i18n";
import { path, servicePath, type Locale } from "@/lib/i18n/routes";

export default function HomeTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, trustBar, servicesSection, whyUs, process, testimonials, ctaBanner, faqTeaser } = dict.home;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink text-white">
        <AmbientGlow variant="dark" />
        <CircuitLines className="absolute inset-0 w-full h-full text-white/[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-volt-light font-semibold mb-8 anim-fade-up inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-eco pulse-glow" />
              {hero.eyebrow}
            </p>

            <h1
              className="font-display font-semibold text-white leading-[1.02] tracking-tight anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.75rem, 6.4vw, 5.5rem)" }}
            >
              {hero.titleLine1}
              <br />
              <span className="bg-gradient-to-r from-volt-light via-white to-solar bg-clip-text text-transparent">
                {hero.titleLine2}
              </span>
            </h1>

            <p className="font-sans text-base md:text-lg leading-8 text-white/60 max-w-xl mt-8 mb-12 anim-fade-up delay-200">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 anim-fade-up delay-300">
              <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
                {hero.ctaPrimary}
              </CtaLink>
              <CtaLink href={path(locale, "services")} variant="onDark">
                {hero.ctaSecondary}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ─────────────────────────────────────────────── */}
      <section className="bg-ink text-white pb-20 -mt-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-t border-white/10 pt-12">
            {trustBar.stats.map((s, i) => (
              <StatCard key={s.label} stat={s} delay={i * 90} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <CertTicker />

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
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
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line mt-14 rounded-2xl overflow-hidden border border-line">
            {whyUs.items.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 90}>
                <div className="bg-white p-8 h-full hover:bg-paper transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-volt/10 flex items-center justify-center mb-6">
                    <Icon name={item.icon} className="w-5 h-5 text-volt-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-navy mb-3">{item.title}</h3>
                  <p className="font-sans text-sm leading-6 text-slate">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="py-28 bg-navy text-white relative overflow-hidden">
        <AmbientGlow variant="subtle" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <SectionHeading eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle} tone="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {process.steps.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={i * 100}>
                <div className="relative pl-0">
                  <p className="font-display text-5xl font-semibold text-white/10 mb-4">{step.n}</p>
                  <h3 className="font-display font-semibold text-lg text-white mb-3">{step.title}</h3>
                  <p className="font-sans text-sm leading-6 text-white/50">{step.desc}</p>
                  {i < process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-white/15" />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} align="left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {testimonials.items.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                <blockquote className="bg-white border border-line rounded-2xl p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-5 text-solar">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Icon key={idx} name="star" className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="font-sans text-sm leading-7 text-slate flex-1 mb-8">&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <p className="font-display font-semibold text-sm text-navy">{t.name}</p>
                    <p className="font-sans text-xs text-slate mt-0.5">{t.city}</p>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="relative py-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-display font-semibold leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {ctaBanner.title}
          </h2>
          <p className="font-sans text-base leading-7 text-white/55 mb-10 max-w-xl mx-auto">
            {ctaBanner.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
              {ctaBanner.ctaPrimary}
            </CtaLink>
            <CtaLink href={dict.company.phoneHref} variant="onDark">
              {ctaBanner.ctaSecondary}
            </CtaLink>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── FAQ teaser ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <AnimateOnScroll className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-volt font-semibold mb-4">
            {faqTeaser.eyebrow}
          </p>
          <h2 className="font-display font-semibold text-navy text-2xl md:text-3xl mb-8">{faqTeaser.title}</h2>
          <CtaLink href={path(locale, "faq")} variant="secondary" showArrow>
            {faqTeaser.cta}
          </CtaLink>
        </AnimateOnScroll>
      </section>
    </>
  );
}
