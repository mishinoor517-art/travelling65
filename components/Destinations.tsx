"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Clock, ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/data";
import Reveal from "./Reveal";

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-28 md:py-36 bg-surface dark:bg-ink overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal className="max-w-2xl mb-16">
          <p className="section-eyebrow text-primary-600 uppercase text-xs font-semibold mb-3">
            Where To Next
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Popular <span className="italic text-gradient">Destinations</span>
          </h2>
          <p className="text-ink/60 dark:text-white/60 mt-4">
            Nine places our travelers return to again and again — chosen for the
            welcome, not just the view.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((d, i) => (
            <Reveal key={d.country} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg shadow-black/5 h-[380px]"
              >
                <Image
                  src={d.img}
                  alt={d.country}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 flex items-center gap-1 text-white text-xs font-semibold">
                  <Star size={13} className="fill-accent-400 text-accent-400" />
                  {d.rating}
                </div>

                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex items-center gap-2 text-white/70 text-xs mb-2">
                    <Clock size={13} /> {d.days} Days
                  </div>
                  <h3 className="font-display text-white text-2xl mb-3">{d.country}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-[11px] leading-none mb-1">From</p>
                      <p className="text-white font-semibold">{d.price}</p>
                    </div>
                    <button className="flex items-center gap-1.5 bg-white text-ink text-sm font-semibold px-4 py-2.5 rounded-full group-hover:bg-accent-600 group-hover:text-white transition-colors">
                      Book
                      <ArrowUpRight size={15} />
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
