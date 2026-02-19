"use client";

import { motion } from "framer-motion";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-8 md:p-12">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,.24),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,.2),transparent_35%)]" />
    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.22em] text-accent">
      Full-Stack Developer · Product-minded Engineer
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
    >
      Building elegant digital experiences with speed, clarity, and impact.
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-5 max-w-2xl text-lg text-muted"
    >
      I design and build beautiful, accessible web products using modern frontend tooling and thoughtful user-centered architecture.
    </motion.p>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
      <a href="#projects" className="rounded-lg bg-accent px-5 py-3 font-medium text-white shadow-glow">
        View Projects
      </a>
      <a href="/resume" className="rounded-lg border border-border px-5 py-3 hover:border-accent/60 hover:text-accent">
        Download Resume
      </a>
    </motion.div>
  </section>
);
