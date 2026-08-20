"use client";

import { useEffect, useState } from "react";
<<<<<<< HEAD
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
=======
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
<<<<<<< HEAD
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="relative h-20 w-20 rounded-2xl overflow-hidden bg-white p-1.5 mb-5 shadow-lg"
          >
            <Image
              src="/images/logo.png"
              alt="GB Immigration & Law Consultants logo"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </motion.div>
=======
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="text-secondary-400 mb-5"
          >
            <Compass size={44} strokeWidth={1.5} />
          </motion.div>
          <div className="font-display italic text-2xl text-white/90 tracking-wide">
            Wayfarer
          </div>
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9
          <div className="relative mt-6 h-[2px] w-40 overflow-hidden bg-white/10 rounded-full">
            <div className="loader-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-secondary-400 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
