import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("en", "ev-charging")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/services/ev-charging", languages: { en: "/services/ev-charging", nl: "/nl/diensten/laadpalen" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="en" serviceKey="ev-charging" />;
}
