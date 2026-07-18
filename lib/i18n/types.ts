import type { ServiceKey } from "./routes";
import type { IconName } from "@/components/icons/Icon";

export interface Stat {
  value: string;
  label: string;
}

export interface IconTextItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceContent {
  key: ServiceKey;
  icon: IconName;
  navLabel: string;
  cardTitle: string;
  cardBlurb: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  overview: string[];
  benefits: IconTextItem[];
  features: { title: string; desc: string }[];
  faq: FaqItem[];
}

export interface Dictionary {
  meta: {
    titleSuffix: string;
    home: { title: string; description: string };
    services: { title: string; description: string };
    about: { title: string; description: string };
    projects: { title: string; description: string };
    faq: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: {
    services: string;
    about: string;
    projects: string;
    faq: string;
    contact: string;
    getQuote: string;
    servicesMenuNote: string;
  };
  footer: {
    blurb: string;
    servicesHeading: string;
    companyHeading: string;
    contactHeading: string;
    rights: string;
    craftedIn: string;
  };
  common: {
    ctaPrimary: string;
    ctaSecondary: string;
    learnMore: string;
    viewAllServices: string;
    backToServices: string;
    callUs: string;
    emailUs: string;
    whatsapp: string;
    ourServices: string;
    exploreService: string;
  };
  company: {
    name: string;
    shortName: string;
    tagline: string;
    phone: string;
    phoneHref: string;
    email: string;
    whatsappHref: string;
    address: string;
    city: string;
    hours: string;
  };
  home: {
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    trustBar: { label: string; stats: Stat[] };
    servicesSection: { eyebrow: string; title: string; subtitle: string };
    whyUs: { eyebrow: string; title: string; items: IconTextItem[] };
    process: { eyebrow: string; title: string; subtitle: string; steps: ProcessStep[] };
    testimonials: { eyebrow: string; title: string; items: Testimonial[] };
    ctaBanner: { title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
    faqTeaser: { eyebrow: string; title: string; cta: string };
  };
  servicesOverview: {
    hero: { eyebrow: string; title: string; subtitle: string };
    intro: string;
  };
  about: {
    hero: { eyebrow: string; title: string; subtitle: string };
    story: { eyebrow: string; title: string; paragraphs: string[] };
    stats: Stat[];
    values: IconTextItem[];
    timeline: { year: string; title: string; desc: string }[];
    certifications: { name: string; desc: string }[];
    team: { name: string; role: string; bio: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  projects: {
    hero: { eyebrow: string; title: string; subtitle: string };
    items: {
      title: string;
      category: string;
      location: string;
      year: string;
      desc: string;
      tags: string[];
    }[];
  };
  faq: {
    hero: { eyebrow: string; title: string; subtitle: string };
    categories: { title: string; items: FaqItem[] }[];
  };
  contact: {
    hero: { eyebrow: string; title: string; subtitle: string };
    cards: { icon: string; title: string; value: string; href: string; note: string }[];
    officeTitle: string;
    hoursTitle: string;
    formNote: string;
  };
  services: ServiceContent[];
}
