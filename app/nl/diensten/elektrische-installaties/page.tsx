import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("nl", "electrical-services")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/nl/diensten/elektrische-installaties",
    languages: { en: "/services/electrical-services", nl: "/nl/diensten/elektrische-installaties" },
  },
};

export default function Page() {
  return <ServiceDetailTemplate locale="nl" serviceKey="electrical-services" />;
}
