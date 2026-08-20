"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-28 md:py-32 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <Reveal>
          <Quote className="mx-auto mb-6 text-white/40" size={40} />
          <p className="section-eyebrow text-white/70 uppercase text-xs font-semibold mb-3">
            Traveler Stories
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12">
            What Our <span className="italic">Guests Say</span>
          </h2>
        </Reveal>

        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-white text-lg md:text-xl font-display italic mb-6 leading-relaxed">
                &ldquo;{t.comment}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/40">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.country}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-1.5 bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
