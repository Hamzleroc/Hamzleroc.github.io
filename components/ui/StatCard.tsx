import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Stat } from "@/lib/i18n/types";

export default function StatCard({
  stat,
  delay = 0,
  tone = "dark",
}: {
  stat: Stat;
  delay?: number;
  tone?: "dark" | "light";
}) {
  const valueColor = tone === "dark" ? "text-white" : "text-navy";
  const labelColor = tone === "dark" ? "text-white/50" : "text-slate";

  return (
    <AnimateOnScroll delay={delay}>
      <div className="text-center sm:text-left">
        <p
          className={`font-display font-semibold leading-none ${valueColor}`}
          style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)" }}
        >
          {stat.value}
        </p>
        <p className={`font-sans text-xs tracking-[0.12em] uppercase mt-3 ${labelColor}`}>
          {stat.label}
        </p>
      </div>
    </AnimateOnScroll>
  );
}
