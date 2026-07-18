import type { Metadata } from "next";
import ContactTemplate from "@/components/templates/ContactTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("nl");

export const metadata: Metadata = {
  title: dict.meta.contact.title,
  description: dict.meta.contact.description,
  alternates: { canonical: "/nl/contact", languages: { en: "/contact", nl: "/nl/contact" } },
};

export default function Page() {
  return <ContactTemplate locale="nl" />;
}
