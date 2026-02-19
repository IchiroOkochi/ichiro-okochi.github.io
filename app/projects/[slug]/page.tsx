import Image from "next/image";
import { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { TableOfContents } from "@/components/toc";

export const generateStaticParams = async () => {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const project = await getProjectBySlug(params.slug);
  return {
    title: `${project.frontmatter.title} | Projects`,
    description: project.frontmatter.summary
  };
};

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content, headings } = await getProjectBySlug(params.slug);

  return (
    <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-8">
        <Image src={frontmatter.cover} alt={frontmatter.title} width={1200} height={630} className="rounded-2xl border border-border" />
        <header className="rounded-2xl border border-border bg-surface/70 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{frontmatter.timeline}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">{frontmatter.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{frontmatter.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {frontmatter.tech.map((item) => (
              <span key={item} className="rounded-full border border-border bg-surface px-2 py-1 text-xs">
                {item}
              </span>
            ))}
          </div>
        </header>
        <section className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted">Impact score</p>
            <p className="text-2xl font-bold text-accent">{frontmatter.impact}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted">Role</p>
            <p className="font-semibold">{frontmatter.role}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted">Timeline</p>
            <p className="font-semibold">{frontmatter.timeline}</p>
          </div>
        </section>
        <div className="prose-custom max-w-none">{content}</div>
      </div>
      <TableOfContents headings={headings} />
    </article>
  );
}
