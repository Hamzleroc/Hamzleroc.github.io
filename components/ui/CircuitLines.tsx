export default function CircuitLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path className="circuit-line" d="M20 60H180L220 100H400" />
        <path className="circuit-line delay-100" d="M40 160H240L280 200H560" />
        <path className="circuit-line delay-200" d="M0 260H160L200 300H360L400 340H580" />
        <path className="circuit-line delay-300" d="M100 20V90" />
        <path className="circuit-line delay-300" d="M400 100V180" />
        <path className="circuit-line delay-400" d="M280 200V260" />
      </g>
      <g fill="currentColor">
        <circle cx="180" cy="60" r="4" />
        <circle cx="400" cy="100" r="4" />
        <circle cx="240" cy="160" r="4" />
        <circle cx="560" cy="200" r="4" />
        <circle cx="200" cy="300" r="4" />
        <circle cx="400" cy="340" r="4" />
      </g>
    </svg>
  );
}
