export type IconName =
  | "shield"
  | "spark"
  | "clock"
  | "chart"
  | "wrench"
  | "leaf"
  | "compass"
  | "handshake"
  | "sun"
  | "battery"
  | "plug"
  | "thermo"
  | "snow"
  | "bolt"
  | "phone"
  | "mail"
  | "whatsapp"
  | "star"
  | "quote"
  | "arrow"
  | "menu"
  | "close"
  | "check"
  | "chevronDown"
  | "mapPin"
  | "calendar";

const paths: Record<IconName, React.ReactNode> = {
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 3v5.5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6l7-3z"
    />
  ),
  spark: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 2L4.5 13.5H11L10 22l9.5-12.5H13L14 2z"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3.2 2" />
    </>
  ),
  chart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20V10M10 20V4M16 20v-7M22 20H2"
    />
  ),
  wrench: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.3 2.3-2-2 2.3-2.3z"
    />
  ),
  leaf: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 4S9 3 5.5 8.5C2.7 12.9 4 18 4 18s5.2 1.4 9.6-1.6C19 12.9 20 4 20 4zM4 20c3-4 6-6.5 10-9"
    />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.8 9.2l-2 5.6-5.6 2 2-5.6 5.6-2z" />
    </>
  ),
  handshake: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12l4-3 4 2 3-2 2 2h3l4 3-3 4-2-1-2 2-4-3-2 2-4-2-3-4z"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8"
      />
    </>
  ),
  battery: (
    <>
      <rect x="2.5" y="7" width="16" height="10" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5l-2 3h3l-2 3" />
    </>
  ),
  plug: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 3v4M14 3v4M6 7h10v4a5 5 0 01-10 0V7zM11 16v2a3 3 0 003 3"
    />
  ),
  thermo: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14.5V5a2 2 0 10-4 0v9.5a4 4 0 104 0z"
    />
  ),
  snow: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11M6 4l1 3-3 1M18 4l-1 3 3 1M6 20l1-3-3-1M18 20l-1-3 3-1"
    />
  ),
  bolt: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 2L4.5 13.5H11L10 22l9.5-12.5H13L14 2z"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 3.5h3.2l1.3 4.5-2 1.6a13 13 0 006.4 6.4l1.6-2 4.5 1.3v3.2c0 1-.9 1.8-1.9 1.6C10.8 19.4 4.6 13.2 3 6.4a1.7 1.7 0 011.5-2.9z"
    />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.5l9 6.5 9-6.5" />
    </>
  ),
  whatsapp: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 18l-3.5 1L4.5 15.7A8.5 8.5 0 1111 20.5 8.4 8.4 0 017 18z M8.5 9.3c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4s.6 1.5.7 1.6.1.3 0 .4a4 4 0 01-.5.7c-.2.2-.4.4-.1.8.2.4 1 1.5 2.1 2.4 1.4 1.2 1.9 1.2 2.2 1.1.2-.1.6-.6.8-.9.2-.3.4-.2.6-.1l1.5.7c.2.1.4.2.4.4 0 .5-.2 1.3-.5 1.6-.4.4-1.2.7-1.8.7-1 0-2.5-.4-4.4-1.9-2.3-1.8-3.6-3.9-3.8-4.3-.2-.3-.9-1.4-.9-2.6 0-1.2.6-1.8.8-2z"
    />
  ),
  star: <path d="M12 2.5l2.9 6 6.6.9-4.8 4.7 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.8-4.7 6.6-.9 2.9-6z" />,
  quote: <path d="M9 7c-2.8 0-5 2.2-5 5v5h5v-5H6.5C6.7 10 7.7 9 9 9V7zm9 0c-2.8 0-5 2.2-5 5v5h5v-5h-2.5c.2-2 1.2-3 2.5-3V7z" />,
  arrow: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />,
  menu: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />,
  close: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />,
  check: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />,
  chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25l6.75 7.5 6.75-7.5" />,
  mapPin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21.5s7-6.6 7-11.8A7 7 0 105 9.7c0 5.2 7 11.8 7 11.8zM12 12.5a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
    />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4M16 3v4M3.5 10h17" />
    </>
  ),
};

const filled: IconName[] = ["star", "quote", "whatsapp"];

export default function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: IconName;
  className?: string;
}) {
  const isFilled = filled.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
