"use client";

import { useState } from "react";
import Icon from "@/components/icons/Icon";
import type { FaqItem } from "@/lib/i18n/types";

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-base md:text-lg text-navy group-hover:text-volt-dark transition-colors">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-volt border-volt rotate-180" : "group-hover:border-volt"
                }`}
              >
                <Icon name="chevronDown" className={`w-4 h-4 ${isOpen ? "text-white" : "text-navy"}`} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-sans text-sm leading-7 text-slate pb-6 pr-14">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
