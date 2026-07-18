import Icon from "@/components/icons/Icon";

const certs = ["RESCert", "VCA", "Synergrid P1/P2", "Fluvius Partner", "AREI/RGIE"];

export default function CertTicker() {
  const items = [...certs, ...certs];

  return (
    <div className="marquee-pause overflow-hidden border-y border-line bg-white/60 py-5" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center">
            {items.map((c, i) => (
              <span
                key={`${rep}-${i}`}
                className="inline-flex items-center gap-2.5 px-8 font-sans text-xs tracking-[0.18em] uppercase font-semibold text-slate/70"
              >
                <Icon name="shield" className="w-3.5 h-3.5 text-volt/50" />
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
