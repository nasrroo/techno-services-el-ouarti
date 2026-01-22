"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroSplash() {
  const [show, setShow] = useState(false);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const already = sessionStorage.getItem("ts_intro_done");
    if (already) return;

    sessionStorage.setItem("ts_intro_done", "1");
    setShow(true);

    const t = setTimeout(() => setShow(false), reduceMotion ? 300 : 1400);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.45 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background:
                "radial-gradient(600px 300px at 50% 45%, rgba(220,38,38,0.20), transparent 60%)",
            }}
          />

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.03, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-3xl bg-white p-4 shadow-xl shadow-red-600/10 ring-1 ring-white/10">
              <Image src="/logo.png" alt="Logo" width={140} height={140} priority />
            </div>

            <div className="mt-5 text-center text-xs tracking-[0.25em] text-zinc-300">
              TECHNO SERVICES EL OUARTI
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
