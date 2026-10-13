"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "AUD", symbol: "A$" },
  { code: "CAD", symbol: "C$" },
];

export default function CurrencySelector() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("USD");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("azure_currency");
    if (saved) setCurrent(saved);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const select = (code: string) => {
    setCurrent(code);
    localStorage.setItem("azure_currency", code);
    window.dispatchEvent(new CustomEvent("azure:currency", { detail: code }));
    setOpen(false);
  };

  const symbol = currencies.find((c) => c.code === current)?.symbol || "$";

  return (
    <div ref={ref} className="relative hidden md:block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 text-[0.7rem] tracking-wider uppercase rounded-full transition-colors duration-300 hover:bg-white/6"
        style={{ color: "rgba(245,241,232,0.7)" }}
        aria-label="Select currency"
      >
        <span style={{ color: "var(--color-gold)" }}>{symbol}</span>
        <span>{current}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full right-0 mt-2 rounded-xl overflow-hidden"
            style={{
              background: "rgba(23,23,26,0.95)",
              border: "1px solid rgba(245,241,232,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              minWidth: "8rem",
            }}
          >
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => select(c.code)}
                className="w-full text-left px-4 py-2.5 text-[0.75rem] tracking-wider uppercase transition-colors duration-200 hover:bg-white/6 flex items-center gap-3"
                style={{
                  color: c.code === current ? "var(--color-gold)" : "rgba(245,241,232,0.7)",
                }}
              >
                <span style={{ minWidth: "1.5rem" }}>{c.symbol}</span>
                <span>{c.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
