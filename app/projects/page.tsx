import { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectsClient } from "@/components/projects-client";

export const metadata: Metadata = {
  title: "Projects | Ichiro Okochi",
  description: "Case studies in embedded systems, web platforms, and systems engineering."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-3 text-muted">Search, filter, and explore deep-dive case studies.</p>
      </div>
      <ProjectsClient projects={projects} />
    </section>
  );
}
