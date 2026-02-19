"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  const [status, setStatus] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    console.info("Contact form submission", payload);
    setStatus("Thanks! Your message was captured successfully.");
    form.reset();
  };

  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
      <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border p-5 md:max-w-2xl">
        <label className="text-sm">
          Name
          <input required name="name" className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm">
          Email
          <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm">
          Message
          <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
        </label>
        <button type="submit" className="w-fit rounded-lg bg-accent px-5 py-2 font-medium text-white">
          Send Message
        </button>
        {status ? <p className="text-sm text-muted">{status}</p> : null}
      </form>
      <div className="flex gap-3">
        <a aria-label="GitHub" href="https://github.com/ichiro-okochi" className="rounded-full border border-border p-2 hover:text-accent"><Github size={18} /></a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/ichiro-okochi" className="rounded-full border border-border p-2 hover:text-accent"><Linkedin size={18} /></a>
        <a aria-label="Email" href="mailto:hello@example.com" className="rounded-full border border-border p-2 hover:text-accent"><Mail size={18} /></a>
      </div>
    </section>
  );
};
