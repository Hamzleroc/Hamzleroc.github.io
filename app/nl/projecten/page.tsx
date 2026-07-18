import type { Metadata } from "next";
import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("nl");

export const metadata: Metadata = {
  title: dict.meta.projects.title,
  description: dict.meta.projects.description,
  alternates: { canonical: "/nl/projecten", languages: { en: "/projects", nl: "/nl/projecten" } },
};

export default function Page() {
  return <ProjectsTemplate locale="nl" />;
}
