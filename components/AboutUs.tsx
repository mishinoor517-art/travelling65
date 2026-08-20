"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutUs() {
  return (
    <section id="about" className="py-28 md:py-36 bg-surface dark:bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Owner image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 blur-2xl" />
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 border border-white/10"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/owner.jpg"
                    alt="Shahzada Danial — Founder, Shahzada Danial Travels"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                  <p className="text-white font-display text-xl italic">Shahzada Danial</p>
                  <p className="text-white/70 text-sm">Founder</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:grid absolute -bottom-6 -right-6 w-28 h-28 place-items-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 text-white shadow-xl"
              >
                <Quote size={30} className="opacity-90" />
              </motion.div>
            </div>
          </Reveal>

          {/* Owner message */}
          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <p className="section-eyebrow text-primary-600 uppercase text-xs font-semibold mb-3">
              Meet The Founder
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white mb-3">
              About <span className="italic text-gradient">Us</span>
            </h2>
            <p className="font-display italic text-lg md:text-xl text-ink/70 dark:text-white/70 mb-6">
              Turning your travel dreams into beautiful memories.
            </p>

            <div className="space-y-5 text-ink/70 dark:text-white/70 leading-relaxed mb-8">
              <p>
                Welcome to <span className="font-semibold text-ink dark:text-white">Shahzada Danial Travels</span> — where every journey is designed with passion, comfort, and trust.
              </p>
              <p>
                I am <span className="font-semibold text-ink dark:text-white">Shahzada Danial</span>, and my vision is to provide travelers with unforgettable experiences, seamless travel solutions, and journeys filled with happiness. We believe traveling is not just about visiting new places; it is about discovering cultures, creating memories, and experiencing moments that stay with you forever.
              </p>
              <p>
                With a commitment to excellence, personalized services, and attention to every detail, we make sure your trip is comfortable, safe, and truly memorable. Whether you are planning a family vacation, an adventure escape, or an international tour, we are here to turn your travel plans into reality.
              </p>
              <p className="font-display italic text-ink dark:text-white text-lg">
                Your destination is our responsibility, and your satisfaction is our greatest achievement.
              </p>
            </div>

            <div className="mb-8 pl-5 border-l-2 border-accent-500">
              <p className="font-display italic text-xl text-ink dark:text-white">
                Explore More. Travel Better. Create Memories Forever.
              </p>
              <p className="text-sm text-ink/50 dark:text-white/50 mt-2">— Shahzada Danial</p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-gradient text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-md group"
            >
              Start Your Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
