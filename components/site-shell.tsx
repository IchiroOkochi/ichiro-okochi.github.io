import Link from "next/link";
import { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/command-palette";
import { ProjectMeta } from "@/lib/types";

export const SiteShell = ({ children, projects }: { children: ReactNode; projects: ProjectMeta[] }) => (
  <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4">
    <header className="sticky top-0 z-40 mt-3 flex items-center justify-between rounded-xl border border-border bg-surface/90 p-3 backdrop-blur">
      <Link href="/" className="font-semibold tracking-wide">Ichiro Okochi</Link>
      <nav className="hidden gap-4 text-sm md:flex">
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/about">About</Link>
        <Link href="/uses">Uses</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-2"><CommandPalette projects={projects} /><ThemeToggle /></div>
    </header>
    <main className="flex-1 py-10">{children}</main>
    <footer className="border-t border-border py-6 text-sm text-muted">© {new Date().getFullYear()} Ichiro Okochi · Built with Next.js + MDX.</footer>
  </div>
);
