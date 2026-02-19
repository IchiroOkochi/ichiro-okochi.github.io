import { skillCategories } from "@/data/skills";

export const SkillsSection = () => (
  <section id="skills" className="space-y-6">
    <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((group) => (
        <article key={group.category} className="rounded-2xl border border-border p-5">
          <h3 className="font-semibold">{group.category}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-md bg-surface px-2 py-1 text-sm text-muted ring-1 ring-border">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);
