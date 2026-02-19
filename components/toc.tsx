import Link from "next/link";

export const TableOfContents = ({ headings }: { headings: Array<{ text: string; id: string }> }) => (
  <aside className="sticky top-24 hidden h-fit rounded-xl border border-border bg-surface/80 p-4 lg:block">
    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Contents</p>
    {headings.length ? (
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link href={`#${heading.id}`} className="text-muted hover:text-accent hover:underline">
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-muted">Detailed write-up coming soon.</p>
    )}
  </aside>
);
