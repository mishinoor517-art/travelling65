"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experiences() {
  return (
    <section id="experiences" className="py-28 md:py-32 bg-surface dark:bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="section-eyebrow text-accent-600 uppercase text-xs font-semibold mb-3">
            Beyond Sightseeing
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Featured <span className="italic text-gradient">Experiences</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {experiences.map((e, i) => (
            <Reveal key={e.name} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={e.img}
                  alt={e.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:from-primary-900/80 transition-colors duration-500" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-display text-white text-lg">{e.name}</h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
