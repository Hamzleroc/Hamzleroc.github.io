import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("en", "solar-panels")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/services/solar-panels", languages: { en: "/services/solar-panels", nl: "/nl/diensten/zonnepanelen" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="en" serviceKey="solar-panels" />;
}
