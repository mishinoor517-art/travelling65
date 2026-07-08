"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cities } from "@/lib/data";
import Reveal from "./Reveal";

export default function Cities() {
  return (
    <section className="py-28 md:py-32 bg-white dark:bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="section-eyebrow text-secondary-600 uppercase text-xs font-semibold mb-3">
            City Breaks
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Iconic <span className="italic text-gradient">Cities</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cities.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.07}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer"
              >
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-display text-white text-xl mb-1">{c.name}</h3>
                  <p className="text-white/70 text-xs leading-snug line-clamp-2">{c.blurb}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
