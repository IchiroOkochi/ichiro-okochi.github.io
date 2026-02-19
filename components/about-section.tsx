const highlights = ["TypeScript", "Next.js", "UX", "Accessibility", "Performance"];

export const AboutSection = () => (
  <section id="about" className="space-y-4">
    <h2 className="text-3xl font-semibold tracking-tight">About</h2>
    <p className="max-w-3xl text-muted">
      I am a developer focused on turning complex product requirements into clean, intuitive interfaces. I enjoy bridging product,
      design, and engineering to deliver systems that feel fast and easy to use.
    </p>
    <div className="flex flex-wrap gap-2">
      {highlights.map((skill) => (
        <span key={skill} className="rounded-full border border-border px-3 py-1 text-sm">
          {skill}
        </span>
      ))}
    </div>
  </section>
);
