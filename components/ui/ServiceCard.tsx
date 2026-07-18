import Link from "next/link";
import Icon, { type IconName } from "@/components/icons/Icon";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServiceCard({
  href,
  icon,
  title,
  blurb,
  exploreLabel,
  delay = 0,
}: {
  href: string;
  icon: IconName;
  title: string;
  blurb: string;
  exploreLabel: string;
  delay?: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <Link
        href={href}
        className="group lift-hover block h-full bg-white border border-line rounded-2xl p-8 hover:border-volt/40 hover:shadow-[0_20px_45px_-20px_rgba(37,85,214,0.35)] transition-shadow duration-300 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-volt/10 to-solar/10 flex items-center justify-center mb-6 group-hover:from-volt/20 group-hover:to-solar/20 transition-colors duration-300">
          <Icon name={icon} className="w-6 h-6 text-volt-dark" />
        </div>
        <h3 className="font-display font-semibold text-lg text-navy mb-3">{title}</h3>
        <p className="font-sans text-sm leading-6 text-slate mb-6">{blurb}</p>
        <span className="font-sans text-xs tracking-[0.1em] uppercase font-semibold text-volt group-hover:text-volt-dark inline-flex items-center gap-2 transition-colors">
          {exploreLabel}
          <Icon name="arrow" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </AnimateOnScroll>
  );
}
