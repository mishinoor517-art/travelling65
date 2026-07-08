"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { packages } from "@/lib/data";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="py-28 md:py-36 bg-surface dark:bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16 mx-auto text-center">
          <p className="section-eyebrow text-primary-600 uppercase text-xs font-semibold mb-3">
            Curated For You
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Tour <span className="italic text-gradient">Packages</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="rounded-3xl overflow-hidden bg-white dark:bg-white/5 shadow-lg shadow-black/5 border border-black/5 dark:border-white/10 h-full flex flex-col"
              >
                <div className="relative h-52">
                  <Image src={p.img} alt={p.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-4 left-4 bg-accent-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {p.duration}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl text-ink dark:text-white">{p.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-ink/70 dark:text-white/70">
                      <Star size={14} className="fill-accent-400 text-accent-400" /> {p.rating}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink/60 dark:text-white/60">
                        <Check size={14} className="text-secondary-600" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10">
                    <div>
                      <p className="text-[11px] text-ink/50 dark:text-white/50 leading-none mb-1">Starting from</p>
                      <p className="font-display text-2xl text-ink dark:text-white">{p.price}</p>
                    </div>
                    <button className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
