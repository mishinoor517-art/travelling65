"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section id="blog" className="py-28 md:py-32 bg-surface dark:bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="section-eyebrow text-primary-600 uppercase text-xs font-semibold mb-3">
            From The Journal
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Latest <span className="italic text-gradient">Stories</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -3 }}
                className="rounded-3xl overflow-hidden bg-white dark:bg-white/5 shadow-lg shadow-black/5 border border-black/5 dark:border-white/10 h-full flex flex-col"
              >
                <div className="relative h-52">
                  <Image src={b.img} alt={b.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <span className="absolute top-4 left-4 bg-white/90 text-ink text-xs font-semibold px-3 py-1.5 rounded-full">
                    {b.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-ink/50 dark:text-white/50 mb-2">{b.date}</p>
                  <h3 className="font-display text-xl text-ink dark:text-white mb-3">{b.title}</h3>
                  <p className="text-sm text-ink/60 dark:text-white/60 mb-6 flex-1">{b.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group/link">
                    Read More
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
