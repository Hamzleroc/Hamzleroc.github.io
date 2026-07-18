export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-navy" : "text-white";
  const subColor = variant === "dark" ? "text-slate" : "text-white/45";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-volt to-volt-dark shadow-[0_0_0_1px_rgba(255,255,255,0.08)] flex-shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
          <path
            d="M13 2L4.5 13.5H11L10 22l9.5-12.5H13L14 2z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold text-lg tracking-tight ${textColor}`}>
          Altrix
        </span>
        <span className={`font-sans text-[9px] tracking-[0.28em] uppercase font-semibold ${subColor}`}>
          Engineering
        </span>
      </span>
    </span>
  );
}
