import Link from "next/link";
import Image from "next/image";
import { ProjectMeta } from "@/lib/types";

export const ProjectCard = ({ project }: { project: ProjectMeta }) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/90 bg-white/60 transition hover:-translate-y-1 hover:shadow-glow dark:bg-slate-900/50"
  >
    <Image src={project.cover} width={1200} height={630} alt={project.title} className="h-44 w-full object-cover" />
    <div className="flex flex-1 flex-col space-y-4 p-5">
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted">
        <p>{project.timeline}</p>
        <p className="rounded-full border border-border px-2 py-1 normal-case tracking-normal text-text/80">Impact {project.impact}/100</p>
      </div>
      <h3 className="text-xl font-semibold leading-snug tracking-tight group-hover:text-accent">{project.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-surface/80 px-2 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm font-medium text-accent">Read case study →</p>
    </div>
  </Link>
);
