import type { Metadata } from "next";
import AboutTemplate from "@/components/templates/AboutTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("nl");

export const metadata: Metadata = {
  title: dict.meta.about.title,
  description: dict.meta.about.description,
  alternates: { canonical: "/nl/over-ons", languages: { en: "/about", nl: "/nl/over-ons" } },
};

export default function Page() {
  return <AboutTemplate locale="nl" />;
}
