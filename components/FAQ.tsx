"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-32 bg-white dark:bg-[#0B1220]">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow text-secondary-600 uppercase text-xs font-semibold mb-3">
            Good To Know
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Frequently Asked <span className="italic text-gradient">Questions</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden bg-surface dark:bg-white/5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink dark:text-white">{f.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 135 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-primary-50 dark:bg-white/10 text-primary-600"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-ink/60 dark:text-white/60 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
