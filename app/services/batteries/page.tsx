import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("en", "batteries")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/services/batteries", languages: { en: "/services/batteries", nl: "/nl/diensten/thuisbatterijen" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="en" serviceKey="batteries" />;
}
