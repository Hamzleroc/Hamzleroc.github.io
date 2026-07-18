import type { Metadata } from "next";
import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.meta.projects.title,
  description: dict.meta.projects.description,
  alternates: { canonical: "/projects", languages: { en: "/projects", nl: "/nl/projecten" } },
};

export default function Page() {
  return <ProjectsTemplate locale="en" />;
}
