"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-32 bg-surface dark:bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="section-eyebrow text-primary-600 uppercase text-xs font-semibold mb-3">
            Let&apos;s Plan Your Trip
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Get In <span className="italic text-gradient">Touch</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg shadow-black/5 p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid sm:grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink/60 dark:text-white/60">Name</label>
                  <input required className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-600 transition-colors dark:text-white" placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink/60 dark:text-white/60">Email</label>
                  <input required type="email" className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-600 transition-colors dark:text-white" placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink/60 dark:text-white/60">Phone</label>
                  <input className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-600 transition-colors dark:text-white" placeholder="+92 300 0000000" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink/60 dark:text-white/60">Destination</label>
                  <input className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-600 transition-colors dark:text-white" placeholder="Where would you like to go?" />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink/60 dark:text-white/60">Message</label>
                  <textarea rows={4} required className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-600 transition-colors dark:text-white resize-none" placeholder="Tell us about your dream trip..." />
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="sm:col-span-2 btn-gradient text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {sent ? "Message Sent!" : "Send Message"}
                </motion.button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2 flex flex-col gap-5">
    <div className="rounded-3xl overflow-hidden h-48 relative">
  <iframe
    title="Office location map"
    className="w-full h-full border-0 grayscale contrast-125"
    loading="lazy"
    src="https://www.google.com/maps?q=Immigration+With+GB,+Sargodha,+Pakistan&output=embed"
    allowFullScreen
  />
</div>

            <div className="rounded-3xl bg-ink dark:bg-white/5 p-7 text-white space-y-5 flex-1">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/80">Mall of sargodha 4th foor office number 40, Sargodha, Pakistan</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary-400 shrink-0" />
                <p className="text-sm text-white/80">goharali4117a@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary-400 shrink-0" />
                <p className="text-sm text-white/80">+92 3013478117</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary-400 shrink-0" />
                <p className="text-sm text-white/80">Mon – Sat: 9AM – 8PM</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-secondary-600 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
