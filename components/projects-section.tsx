import { projects } from "@/data/projects";

export const ProjectsSection = () => (
  <section id="projects" className="space-y-6">
    <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.slug} className="rounded-2xl border border-border bg-surface/70 p-5">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-muted">{project.description}</p>
          <p className="mt-2 text-sm">{project.details}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full bg-accent/15 px-2 py-1 text-xs text-accent">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
                Live Demo
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  </section>
);
