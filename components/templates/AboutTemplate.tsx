import Icon from "@/components/icons/Icon";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import CtaLink from "@/components/ui/CtaLink";
import StatCard from "@/components/ui/StatCard";
import { getDictionary } from "@/lib/i18n";
import { path, type Locale } from "@/lib/i18n/routes";

export default function AboutTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, story, stats, values, timeline, certifications, team, ctaTitle, ctaSubtitle } = dict.about;

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

      {/* Stats */}
      <section className="bg-ink text-white pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-t border-white/10 pt-12">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} delay={i * 90} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <AnimateOnScroll>
              <p className="font-sans text-xs tracking-[0.28em] uppercase text-volt font-semibold mb-6">
                {story.eyebrow}
              </p>
              <h2
                className="font-display font-semibold text-navy leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.75rem)" }}
              >
                {story.title}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120} className="space-y-5">
              {story.paragraphs.map((p) => (
                <p key={p} className="font-sans text-base leading-8 text-slate">
                  {p}
                </p>
              ))}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 90}>
                <div className="bg-white p-8 h-full hover:bg-paper transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-volt/10 flex items-center justify-center mb-6">
                    <Icon name={v.icon} className="w-5 h-5 text-volt-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-navy mb-3">{v.title}</h3>
                  <p className="font-sans text-sm leading-6 text-slate">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-navy text-white relative overflow-hidden">
        <AmbientGlow variant="subtle" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <AnimateOnScroll key={t.year} delay={i * 90}>
                <div className="flex gap-8 py-8 border-b border-white/10 last:border-0">
                  <p className="font-display font-semibold text-2xl text-volt-light w-20 flex-shrink-0">{t.year}</p>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-2">{t.title}</h3>
                    <p className="font-sans text-sm leading-6 text-white/50">{t.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <AnimateOnScroll key={c.name} delay={i * 90}>
                <div className="bg-white border border-line rounded-2xl p-7 text-center h-full">
                  <div className="w-11 h-11 rounded-xl bg-volt/10 flex items-center justify-center mx-auto mb-5">
                    <Icon name="shield" className="w-5 h-5 text-volt-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-navy mb-2">{c.name}</h3>
                  <p className="font-sans text-xs leading-5 text-slate">{c.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 90}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-volt/15 to-solar/15 flex items-center justify-center mx-auto mb-5">
                    <span className="font-display font-semibold text-xl text-volt-dark">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-navy">{member.name}</h3>
                  <p className="font-sans text-xs tracking-wide uppercase text-volt font-semibold mt-1 mb-3">{member.role}</p>
                  <p className="font-sans text-xs leading-5 text-slate">{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-ink text-white overflow-hidden">
        <AmbientGlow variant="dark" />
        <AnimateOnScroll className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-5">{ctaTitle}</h2>
          <p className="font-sans text-base leading-7 text-white/55 mb-10">{ctaSubtitle}</p>
          <CtaLink href={path(locale, "contact")} variant="primary" showArrow>
            {dict.common.ctaPrimary}
          </CtaLink>
        </AnimateOnScroll>
      </section>
    </>
  );
}
