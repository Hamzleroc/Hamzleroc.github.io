import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/lib/i18n";

const service = getService("en", "electrical-services")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/electrical-services",
    languages: { en: "/services/electrical-services", nl: "/nl/diensten/elektrische-installaties" },
  },
};

export default function Page() {
  return <ServiceDetailTemplate locale="en" serviceKey="electrical-services" />;
}
