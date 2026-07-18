import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const subColor = tone === "dark" ? "text-white/55" : "text-slate";

  return (
    <AnimateOnScroll className={`max-w-2xl ${alignClass}`}>
      <p className="font-sans text-xs tracking-[0.28em] uppercase text-volt font-semibold mb-4">
        {eyebrow}
      </p>
      <h2
        className={`font-display font-semibold leading-[1.08] tracking-tight ${titleColor}`}
        style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-base leading-7 mt-5 ${subColor}`}>{subtitle}</p>
      )}
    </AnimateOnScroll>
  );
}
