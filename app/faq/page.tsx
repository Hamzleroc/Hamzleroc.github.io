import type { Metadata } from "next";
import FaqTemplate from "@/components/templates/FaqTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.meta.faq.title,
  description: dict.meta.faq.description,
  alternates: { canonical: "/faq", languages: { en: "/faq", nl: "/nl/veelgestelde-vragen" } },
};

export default function Page() {
  return <FaqTemplate locale="en" />;
}
