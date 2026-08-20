"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Moon, Sun } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#experiences" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-lg shadow-black/5" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-7 py-3">
          <a href="#home" className="flex items-center gap-2 group" data-cursor-grow>
            <span className="relative h-11 w-11 md:h-12 md:w-12 rounded-xl overflow-hidden bg-white shadow-md shadow-black/10 p-1 group-hover:scale-105 transition-transform duration-500 shrink-0">
              <Image
                src="/images/logo.png"
                alt="GB Immigration & Law Consultants logo"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    scrolled ? "text-ink/80 dark:text-white/80 hover:text-primary-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent-600 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Search"
              className={`grid place-items-center w-9 h-9 rounded-full transition-colors ${
                scrolled ? "text-ink dark:text-white hover:bg-primary-50 dark:hover:bg-white/10" : "text-white hover:bg-white/10"
              }`}
            >
              <Search size={18} />
            </button>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className={`grid place-items-center w-9 h-9 rounded-full transition-colors ${
                scrolled ? "text-ink dark:text-white hover:bg-primary-50 dark:hover:bg-white/10" : "text-white hover:bg-white/10"
              }`}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md"
            >
              Book Now
            </a>
          </div>

          <button
            className={`lg:hidden ${scrolled ? "text-ink dark:text-white" : "text-white"}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl glass overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg text-ink dark:text-white/90 font-medium hover:bg-primary-50 dark:hover:bg-white/10 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center btn-gradient text-white font-semibold px-5 py-3 rounded-full"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
