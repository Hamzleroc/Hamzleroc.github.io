export type Locale = "en" | "nl";

export const locales: Locale[] = ["en", "nl"];
export const defaultLocale: Locale = "en";

export type ServiceKey =
  | "solar-panels"
  | "batteries"
  | "ev-charging"
  | "heat-pumps"
  | "air-conditioning"
  | "electrical-services";

export const serviceKeys: ServiceKey[] = [
  "solar-panels",
  "batteries",
  "ev-charging",
  "heat-pumps",
  "air-conditioning",
  "electrical-services",
];

const serviceSlugs: Record<ServiceKey, { en: string; nl: string }> = {
  "solar-panels": { en: "solar-panels", nl: "zonnepanelen" },
  batteries: { en: "batteries", nl: "thuisbatterijen" },
  "ev-charging": { en: "ev-charging", nl: "laadpalen" },
  "heat-pumps": { en: "heat-pumps", nl: "warmtepompen" },
  "air-conditioning": { en: "air-conditioning", nl: "airconditioning" },
  "electrical-services": { en: "electrical-services", nl: "elektrische-installaties" },
};

const staticPaths = {
  home: { en: "/", nl: "/nl" },
  services: { en: "/services", nl: "/nl/diensten" },
  about: { en: "/about", nl: "/nl/over-ons" },
  projects: { en: "/projects", nl: "/nl/projecten" },
  faq: { en: "/faq", nl: "/nl/veelgestelde-vragen" },
  contact: { en: "/contact", nl: "/nl/contact" },
} as const;

export type StaticPageKey = keyof typeof staticPaths;

export function path(locale: Locale, key: StaticPageKey): string {
  return staticPaths[key][locale];
}

export function servicePath(locale: Locale, service: ServiceKey): string {
  const base = staticPaths.services[locale];
  return `${base}/${serviceSlugs[service][locale]}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "nl" : "en";
}

/**
 * Maps every known pathname in one locale to its counterpart in the other,
 * so the language switcher always lands on the equivalent page. Falls back
 * to the localized homepage when the current path isn't in the map.
 */
export function counterpartPath(currentPath: string, currentLocale: Locale): string {
  const target = otherLocale(currentLocale);
  const normalized = currentPath.replace(/\/$/, "") || "/";

  for (const key of Object.keys(staticPaths) as StaticPageKey[]) {
    if (staticPaths[key][currentLocale].replace(/\/$/, "") === normalized || (key === "home" && normalized === staticPaths[key][currentLocale])) {
      return staticPaths[key][target];
    }
  }

  for (const service of serviceKeys) {
    const candidate = servicePath(currentLocale, service).replace(/\/$/, "");
    if (candidate === normalized) {
      return servicePath(target, service);
    }
  }

  return staticPaths.home[target];
}

export function serviceSlugFromPath(locale: Locale, slug: string): ServiceKey | undefined {
  return serviceKeys.find((key) => serviceSlugs[key][locale] === slug);
}
