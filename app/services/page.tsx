import type { Metadata } from "next";
import ServicesOverviewTemplate from "@/components/templates/ServicesOverviewTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.meta.services.title,
  description: dict.meta.services.description,
  alternates: { canonical: "/services", languages: { en: "/services", nl: "/nl/diensten" } },
};

export default function Page() {
  return <ServicesOverviewTemplate locale="en" />;
}
