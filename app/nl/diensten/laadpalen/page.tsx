import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("nl", "ev-charging")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/nl/diensten/laadpalen", languages: { en: "/services/ev-charging", nl: "/nl/diensten/laadpalen" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="nl" serviceKey="ev-charging" />;
}
