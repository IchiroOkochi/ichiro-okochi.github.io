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
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted">Search, filter, and explore case studies with context on constraints, architecture decisions, and measurable outcomes.</p>
      </div>
      <ProjectsClient projects={projects} />
    </section>
  );
}
