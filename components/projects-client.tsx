"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProjectMeta } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

type SortMode = "impact" | "newest";

export const ProjectsClient = ({ projects }: { projects: ProjectMeta[] }) => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState<SortMode>("impact");
  const reducedMotion = useReducedMotion();
  const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const searched = normalized
      ? projects.filter((project) => `${project.title} ${project.summary} ${project.tags.join(" ")}`.toLowerCase().includes(normalized))
      : projects;
    const tagged = tag === "All" ? searched : searched.filter((project) => project.tags.includes(tag));
    return [...tagged].sort((a, b) => (sort === "impact" ? b.impact - a.impact : b.timeline.localeCompare(a.timeline)));
  }, [projects, query, sort, tag]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-3">
        <input
          aria-label="Search projects"
          placeholder="Search by title, stack, or outcome"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="col-span-2 rounded-lg border border-border bg-transparent px-4 py-2"
        />
        <select className="rounded-lg border border-border bg-transparent px-4 py-2" value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
          <option value="impact">Sort by impact</option>
          <option value="newest">Sort by newest</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((item) => (
          <button key={item} onClick={() => setTag(item)} className={`rounded-full border px-3 py-1 text-sm ${tag === item ? "border-accent text-accent" : "border-border"}`}>
            {item}
          </button>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div layout={!reducedMotion} className="grid gap-6 md:grid-cols-2">
          {filtered.length ? (
            filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? {} : { opacity: 0 }}
                transition={{ duration: MOTION_DURATION.fast, ease: MOTION_EASE }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-border p-8 text-muted">
              <p className="font-medium text-text">No projects found for “{query || tag}”.</p>
              <p className="mt-2 text-sm">Try another keyword, switch tags, or clear filters to browse everything.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
