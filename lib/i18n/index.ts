import type { Locale } from "./routes";
import type { Dictionary, ServiceContent } from "./types";
import en from "./en";
import nl from "./nl";

const dictionaries: Record<Locale, Dictionary> = { en, nl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getService(locale: Locale, key: string): ServiceContent | undefined {
  return dictionaries[locale].services.find((s) => s.key === key);
}

export * from "./routes";
export type { Dictionary, ServiceContent } from "./types";
