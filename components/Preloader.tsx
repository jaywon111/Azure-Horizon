"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("azure_loaded") === "1") return;
    setShow(true);

    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("azure_loaded", "1");
    }, 2200);

    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
          style={{ background: "var(--color-ink)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p
              className="text-2xl md:text-3xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.02em",
                color: "var(--color-cream)",
              }}
            >
              Azure Horizon
            </p>

            {/* Shimmer line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto overflow-hidden"
              style={{ height: "1px", background: "rgba(245,241,232,0.1)" }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.4,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                  width: "100%",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-6 text-[0.7rem] tracking-[0.24em] uppercase"
              style={{ color: "rgba(245,241,232,0.4)" }}
            >
              Malibu · Est. 2019
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
