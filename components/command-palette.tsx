"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ProjectMeta } from "@/lib/types";

export const CommandPalette = ({ projects }: { projects: ProjectMeta[] }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []);

  const quickLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5),
    [projects, query]
  );

  return (
    <>
      <button type="button" className="rounded-lg border border-border px-3 py-1 text-xs text-muted" onClick={() => setOpen(true)}>
        ⌘K
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div className="mx-auto mt-24 max-w-xl rounded-xl border border-border bg-surface p-4" onClick={(e) => e.stopPropagation()}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Jump to page or project" className="mb-4 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 hover:bg-accent/10" onClick={() => setOpen(false)}>{link.label}</Link>
              ))}
              {filteredProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-accent/10" onClick={() => setOpen(false)}>{project.title}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
