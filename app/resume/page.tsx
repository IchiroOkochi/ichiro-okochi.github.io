import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Ichiro Okochi",
  description: "Resume snapshot with downloadable PDF."
};

export default function ResumePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Resume</h1>
      <p className="text-muted">For the latest version, download the PDF below.</p>
      <a href="/resume.pdf" className="inline-flex rounded-lg bg-accent px-5 py-3 font-medium text-white">Download resume PDF</a>
      <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted">Add your real `public/resume.pdf` file before deployment.</p>
    </section>
  );
}
