"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Highlight } from "@/lib/types";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

export const HighlightReel = ({ items }: { items: Highlight[] }) => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: MOTION_DURATION.base, delay: index * 0.06, ease: MOTION_EASE }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-xl border border-border bg-white/40 p-5 dark:bg-slate-900/40"
        >
          <p className="text-3xl font-bold text-accent">
            {item.value}
            {item.suffix}
          </p>
          <p className="mt-1 text-sm text-muted">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};
