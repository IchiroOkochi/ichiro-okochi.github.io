import Link from "next/link";
import Image from "next/image";
import { ProjectMeta } from "@/lib/types";

export const ProjectCard = ({ project }: { project: ProjectMeta }) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group overflow-hidden rounded-2xl border border-border bg-white/50 transition hover:-translate-y-1 hover:shadow-glow dark:bg-slate-900/50"
  >
    <Image src={project.cover} width={1200} height={630} alt={project.title} className="h-44 w-full object-cover" />
    <div className="space-y-3 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{project.timeline}</p>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-muted">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-2 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);
