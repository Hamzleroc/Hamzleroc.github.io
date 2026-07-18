import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("nl", "heat-pumps")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/nl/diensten/warmtepompen", languages: { en: "/services/heat-pumps", nl: "/nl/diensten/warmtepompen" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="nl" serviceKey="heat-pumps" />;
}
