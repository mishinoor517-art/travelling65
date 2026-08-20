"use client";

import Image from "next/image";
<<<<<<< HEAD
=======
import { Compass } from "lucide-react";
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9
import { gallery } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
<<<<<<< HEAD
              <span className="relative h-11 w-11 rounded-xl overflow-hidden bg-white p-1 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="GB Immigration & Law Consultants logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>
=======
              <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600">
                <Compass size={18} />
              </span>
              <span className="font-display italic text-xl">Wayfarer</span>
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Twenty years of planning journeys people still talk about.
              Curated destinations, honest pricing, real support.
            </p>
            <form className="flex gap-2 max-w-sm">
              <input
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm outline-none placeholder-white/40 focus:bg-white/15 transition-colors"
              />
              <button className="btn-gradient text-white text-sm font-semibold px-5 rounded-full">
                Join
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
<<<<<<< HEAD
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Destinations", href: "#destinations" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-secondary-400 transition-colors">{l.label}</a>
                </li>
=======
              {["Home", "About Us", "Destinations", "Packages", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-secondary-400 transition-colors">{l}</a></li>
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Destinations</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {["Paris", "Dubai", "Maldives", "Switzerland", "Bali"].map((l) => (
                <li key={l}><a href="#" className="hover:text-secondary-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((src) => (
                <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src={src} alt="Instagram travel photo" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Wayfarer Travel Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
