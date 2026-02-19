import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ichiro Okochi",
  description: "Contact options and a fallback-friendly form endpoint."
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-muted">Reach out via the links below or send a message directly.</p>
      <div className="flex gap-3 text-sm">
        <a href="https://github.com/ichiro-okochi" className="rounded-lg border border-border px-4 py-2">GitHub</a>
        <a href="https://www.linkedin.com" className="rounded-lg border border-border px-4 py-2">LinkedIn</a>
      </div>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 rounded-xl border border-border p-6">
        <label className="block"><span className="text-sm">Email</span><input type="email" name="email" required className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2"/></label>
        <label className="block"><span className="text-sm">Message</span><textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2"/></label>
        <button type="submit" className="rounded-lg bg-accent px-5 py-2 text-white">Send message</button>
        <p className="text-xs text-muted">If form delivery fails, email me directly at hello@example.com.</p>
      </form>
    </section>
  );
}
