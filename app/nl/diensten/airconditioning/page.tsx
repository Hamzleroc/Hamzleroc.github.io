import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("nl", "air-conditioning")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/nl/diensten/airconditioning", languages: { en: "/services/air-conditioning", nl: "/nl/diensten/airconditioning" } },
};

export default function Page() {
  return <ServiceDetailTemplate locale="nl" serviceKey="air-conditioning" />;
}
