import type { Metadata } from "next";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("nl");

export const metadata: Metadata = {
  title: dict.meta.home.title,
  description: dict.meta.home.description,
  alternates: { canonical: "/nl", languages: { en: "/", nl: "/nl" } },
};

export default function Page() {
  return <HomeTemplate locale="nl" />;
}
