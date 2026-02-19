import Link from "next/link";
import highlights from "@/data/highlights.json";
import { getProjects } from "@/lib/content";
import { HighlightReel } from "@/components/highlight-reel";
import { ProjectCard } from "@/components/project-card";

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-border p-8 md:p-14">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl animate-pulseSoft" />
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Product Designer × Frontend Engineer</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">I build high-trust interfaces for hardware-adjacent products.</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">From firmware dashboards to collaborative tools, I blend system-level thinking with polished interaction design.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-lg bg-accent px-5 py-3 font-medium text-white">View case studies</Link>
          <Link href="/contact" className="rounded-lg border border-border px-5 py-3">Let&apos;s collaborate</Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Highlight reel</h2>
        <HighlightReel items={highlights} />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm text-accent">See all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </div>
  );
}
