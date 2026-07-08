"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, CalendarDays, Users, Search, ChevronDown, Plane } from "lucide-react";

export default function Hero() {
  const [guests, setGuests] = useState(2);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />

      {/* Floating clouds */}
      <div className="absolute top-24 left-0 w-full opacity-40 pointer-events-none">
        <div className="animate-drift" style={{ animationDuration: "55s" }}>
          <svg width="140" height="60" viewBox="0 0 140 60" fill="white">
            <ellipse cx="40" cy="35" rx="40" ry="20" />
            <ellipse cx="80" cy="25" rx="30" ry="18" />
            <ellipse cx="105" cy="38" rx="26" ry="15" />
          </svg>
        </div>
      </div>
      <div className="absolute top-48 left-0 w-full opacity-25 pointer-events-none">
        <div className="animate-drift" style={{ animationDuration: "75s", animationDelay: "-20s" }}>
          <svg width="100" height="45" viewBox="0 0 140 60" fill="white">
            <ellipse cx="40" cy="35" rx="40" ry="20" />
            <ellipse cx="80" cy="25" rx="30" ry="18" />
          </svg>
        </div>
      </div>

      {/* Animated airplane */}
      <motion.div
        className="absolute top-1/3 text-white/80"
        initial={{ x: "-10vw", y: 0 }}
        animate={{ x: "110vw", y: [0, -20, 0] }}
        transition={{
          x: { duration: 22, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Plane size={30} className="rotate-45" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-eyebrow text-secondary-400 uppercase text-xs md:text-sm font-semibold mb-5"
        >
          Wayfarer Travel Co. — Est. Journeys Since 2006
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-4xl sm:text-5xl md:text-7xl leading-[1.05] mb-6"
        >
          Explore The World
          <br />
          <span className="italic text-gradient">Like Never Before</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          Curated journeys, five-star stays, and moments worth flying for —
          planned down to the last detail by people who&apos;ve actually been there.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="glass rounded-2xl md:rounded-full p-3 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-3xl mx-auto shadow-2xl shadow-black/20"
        >
          <div className="flex items-center gap-2 px-4 py-3 flex-1 text-left">
            <MapPin size={18} className="text-secondary-500 shrink-0" />
            <div>
              <p className="text-[11px] text-white/60 leading-none mb-1">Destination</p>
              <input
                placeholder="Where to?"
                className="bg-transparent text-white placeholder-white/50 text-sm font-medium outline-none w-full"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/15" />

          <div className="flex items-center gap-2 px-4 py-3 flex-1 text-left">
            <CalendarDays size={18} className="text-secondary-500 shrink-0" />
            <div>
              <p className="text-[11px] text-white/60 leading-none mb-1">Dates</p>
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                placeholder="Add dates"
                className="bg-transparent text-white placeholder-white/50 text-sm font-medium outline-none w-full"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/15" />

          <div className="flex items-center gap-2 px-4 py-3 flex-1 text-left relative group">
            <Users size={18} className="text-secondary-500 shrink-0" />
            <div className="flex-1">
              <p className="text-[11px] text-white/60 leading-none mb-1">Guests</p>
              <div className="flex items-center gap-3">
                <span className="text-white text-sm font-medium">{guests} Guests</span>
                <div className="flex items-center gap-1 ml-auto">
                  <button
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="w-5 h-5 grid place-items-center rounded-full bg-white/10 text-white text-xs hover:bg-white/20"
                  >
                    −
                  </button>
                  <button
                    onClick={() => setGuests((g) => Math.min(12, g + 1))}
                    className="w-5 h-5 grid place-items-center rounded-full bg-white/10 text-white text-xs hover:bg-white/20"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button className="btn-gradient text-white font-semibold text-sm px-6 py-4 rounded-full flex items-center justify-center gap-2 shrink-0">
            <Search size={17} />
            Explore
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#destinations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
