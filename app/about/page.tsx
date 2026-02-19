import { Metadata } from "next";
import skills from "@/data/skills.json";

export const metadata: Metadata = {
  title: "About | Ichiro Okochi",
  description: "Story, values, and what I am currently exploring."
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="max-w-3xl text-lg text-muted">I design and build products where software meets physical systems. I care about calm interfaces, robust architecture, and engineering decisions that age well.</p>
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border border-border p-5"><h2 className="font-semibold">Values</h2><p className="mt-2 text-sm text-muted">Accessibility by default, pragmatic quality, and transparent collaboration.</p></div>
        <div className="rounded-xl border border-border p-5"><h2 className="font-semibold">Currently learning</h2><p className="mt-2 text-sm text-muted">Model compression for edge ML and Rust for embedded control planes.</p></div>
        <div className="rounded-xl border border-border p-5"><h2 className="font-semibold">Working on</h2><p className="mt-2 text-sm text-muted">A tiny observability toolkit for maker projects and low-power sensor stacks.</p></div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}><p className="mb-2 text-sm uppercase text-muted">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-border px-3 py-1 text-sm">{item}</span>)}</div></div>
        ))}
      </div>
    </section>
  );
}
