"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ProjectMeta } from "@/lib/types";

type CommandItem = {
  id: string;
  label: string;
  hint: string;
  href: string;
};


const quickLinks: CommandItem[] = [
  { id: "projects", href: "/projects", label: "Projects", hint: "Browse all case studies" },
  { id: "experience", href: "/experience", label: "Experience", hint: "Career timeline" },
  { id: "about", href: "/about", label: "About", hint: "Background and principles" },
  { id: "contact", href: "/contact", label: "Contact", hint: "Start a conversation" }
];

export const CommandPalette = ({ projects }: { projects: ProjectMeta[] }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery("");
    }
  }, [open]);


  const resultItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const projectItems: CommandItem[] = projects.map((project) => ({
      id: project.slug,
      href: `/projects/${project.slug}`,
      label: project.title,
      hint: `${project.timeline} · ${project.tags.join(", ")}`
    }));

    const all = [...quickLinks, ...projectItems];
    return normalized ? all.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(normalized)).slice(0, 8) : all.slice(0, 8);
  }, [projects, query]);

  const runCommand = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="rounded-lg border border-border px-3 py-1 text-xs text-muted hover:text-text"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        aria-haspopup="dialog"
      >
        ⌘K
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/45 p-4" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="mx-auto mt-20 max-w-xl rounded-xl border border-border bg-surface p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (!resultItems.length) return;
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActiveIndex((prev) => (prev + 1) % resultItems.length);
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveIndex((prev) => (prev - 1 + resultItems.length) % resultItems.length);
                }
                if (event.key === "Enter") {
                  event.preventDefault();
                  runCommand(resultItems[activeIndex].href);
                }
              }}
              placeholder="Jump to page or project"
              className="mb-4 w-full rounded-lg border border-border bg-transparent px-3 py-2"
            />
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Results</p>
            <div role="listbox" aria-label="Command results" className="space-y-1">
              {resultItems.length ? (
                resultItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => runCommand(item.href)}
                    className={`block w-full rounded-lg px-3 py-2 text-left ${activeIndex === index ? "bg-accent/10 text-accent" : "hover:bg-accent/10"}`}
                    role="option"
                    aria-selected={activeIndex === index}
                  >
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted">{item.hint}</p>
                  </button>
                ))
              ) : (
                <div className="rounded-lg border border-dashed border-border px-3 py-4 text-sm text-muted">
                  Nothing matched “{query}”. Try a project name, page title, or shorter term.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
