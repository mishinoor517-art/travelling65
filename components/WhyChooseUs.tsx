"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, Headset, UserCheck, ShieldCheck, Hotel, CreditCard } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: BadgeDollarSign, title: "Best Prices", desc: "Price-matched fares and stays, guaranteed." },
  { icon: Headset, title: "24/7 Support", desc: "Real humans on call, wherever you are." },
  { icon: UserCheck, title: "Professional Guides", desc: "Local experts who know the hidden spots." },
  { icon: ShieldCheck, title: "Secure Booking", desc: "Encrypted payments, protected reservations." },
  { icon: Hotel, title: "Luxury Hotels", desc: "Hand-vetted 4 and 5-star partner stays." },
  { icon: CreditCard, title: "Easy Payments", desc: "Flexible installments, zero hidden fees." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 md:py-32 bg-white dark:bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="section-eyebrow text-secondary-600 uppercase text-xs font-semibold mb-3">
            The Wayfarer Standard
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Why Travelers <span className="italic text-gradient">Choose Us</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(37,99,235,0.4)" }}
                className="rounded-2xl p-7 border border-black/5 dark:border-white/10 bg-surface dark:bg-white/5 h-full"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 grid place-items-center text-white mb-5"
                >
                  <it.icon size={22} />
                </motion.div>
                <h3 className="font-display text-lg text-ink dark:text-white mb-2">{it.title}</h3>
                <p className="text-sm text-ink/60 dark:text-white/60">{it.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
