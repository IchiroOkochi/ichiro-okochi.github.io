import { experiences } from "@/data/experience";

export const ExperienceSection = () => (
  <section id="experience" className="space-y-6">
    <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
    <div className="space-y-4 border-l border-border pl-5">
      {experiences.map((item) => (
        <article key={`${item.organization}-${item.title}`} className="relative rounded-xl border border-border p-5">
          <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full bg-accent" aria-hidden />
          <p className="text-sm text-muted">{item.dateRange}</p>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-muted">{item.organization}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
