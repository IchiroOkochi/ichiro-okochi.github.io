import { Metadata } from "next";
import Link from "next/link";
import highlights from "@/data/highlights.json";
import { getProjects } from "@/lib/content";
import { HighlightReel } from "@/components/highlight-reel";
import { ProjectCard } from "@/components/project-card";
import { HeroSignal } from "@/components/hero-signal";

export const metadata: Metadata = {
  title: "Ichiro Okochi | Product Designer & Frontend Engineer",
  description: "Personal portfolio featuring selected case studies across systems, embedded products, and modern web experiences."
};
export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="relative grid gap-8 overflow-hidden rounded-3xl border border-border bg-surface/70 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-accent">Product Designer × Frontend Engineer</p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            I turn complex systems into software people can trust in a glance.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I design and ship interfaces for hardware-heavy products—from FPGA workflows to field dashboards—without sacrificing performance, accessibility, or craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-lg bg-accent px-5 py-3 font-medium text-white hover:opacity-95">
              Explore case studies
            </Link>
            <Link href="/contact" className="rounded-lg border border-border px-5 py-3 hover:border-accent/50 hover:text-accent">
              Start a conversation
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">Available for product + frontend consulting in Q2 2026.</p>
        </div>
        <HeroSignal />
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Highlight reel</h2>
          <p className="text-sm text-muted">Recent outcomes across product, platform, and delivery.</p>
        </div>
        <HighlightReel items={highlights} />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            See all projects
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
