export default function BeeSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Water-drop antenna */}
      <path
        d="M30 2C30 2 26.5 8.5 26.5 12C26.5 14.5 28 16.5 30 16.5C32 16.5 33.5 14.5 33.5 12C33.5 8.5 30 2 30 2Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Left wing */}
      <path
        d="M30 27C21 17.5 5.5 16 4 25C2.5 32 15 35 30 31"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Right wing */}
      <path
        d="M30 27C39 17.5 54.5 16 56 25C57.5 32 45 35 30 31"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Body */}
      <ellipse cx="30" cy="44.5" rx="8.5" ry="13.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Stripes */}
      <path d="M21.5 38.5 Q30 37 38.5 38.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M21.5 44.5 Q30 43 38.5 44.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M22.5 50.5 Q30 49 37.5 50.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Wing-tip dots */}
      <circle cx="8"  cy="27" r="2.5" fill="currentColor" />
      <circle cx="52" cy="27" r="2.5" fill="currentColor" />
    </svg>
  );
}
