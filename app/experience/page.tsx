import { Metadata } from "next";
import experience from "@/data/experience.json";

export const metadata: Metadata = {
  title: "Experience | Ichiro Okochi",
  description: "Internships, research, and leadership timeline."
};

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Experience timeline</h1>
      <ol className="relative space-y-6 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={item.title} className="rounded-xl border border-border p-5">
            <span className="absolute -left-2 mt-2 h-3 w-3 rounded-full bg-accent" aria-hidden />
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.period}</p>
            <h2 className="text-xl font-semibold">{item.title} · {item.org}</h2>
            <p className="mt-2 text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
