import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses | Ichiro Okochi",
  description: "Tools and tiny experiments powering my workflow."
};

export default function UsesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Uses + Lab</h1>
      <p className="text-muted">A living list of tools and experiments behind my projects.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-border p-5"><h2 className="font-semibold">Daily stack</h2><p className="mt-2 text-sm text-muted">VS Code, iTerm2, Raycast, Linear, Figma, Logic Analyzer Mini.</p></article>
        <article className="rounded-xl border border-border p-5"><h2 className="font-semibold">Current experiments</h2><p className="mt-2 text-sm text-muted">Power profiling scripts, low-motion UI patterns, and FPGA benchmark harnesses.</p></article>
      </div>
    </section>
  );
}
