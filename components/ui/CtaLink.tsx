import Link from "next/link";
import Icon from "@/components/icons/Icon";

type Variant = "primary" | "secondary" | "onDark" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-volt text-white hover:bg-volt-dark shadow-[0_8px_24px_-8px_rgba(62,123,250,0.55)] hover:shadow-[0_10px_30px_-6px_rgba(62,123,250,0.65)]",
  secondary:
    "border border-line text-navy hover:border-volt hover:text-volt bg-white/60 hover:bg-white",
  onDark:
    "border border-white/25 text-white hover:border-white hover:bg-white/10",
  ghost: "text-volt hover:text-volt-dark",
};

export default function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}) {
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-2 font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer"
      : "inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {showArrow && <Icon name="arrow" className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow && <Icon name="arrow" className="w-4 h-4" />}
    </Link>
  );
}
