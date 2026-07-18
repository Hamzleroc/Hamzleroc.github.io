import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("nl", "batteries")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/nl/diensten/thuisbatterijen", languages: { en: "/services/batteries", nl: "/nl/diensten/thuisbatterijen" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="nl" serviceKey="batteries" />;
}
