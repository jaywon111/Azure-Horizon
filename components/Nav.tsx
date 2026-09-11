"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/rooms", label: "Suites" },
  { href: "/dining", label: "Dining" },
  { href: "/spa", label: "Spa" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Story" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 backdrop-blur-xl transition-colors duration-500"
          style={{ background: scrolled ? "rgba(10,10,11,0.75)" : "rgba(10,10,11,0.25)" }}
        >
          <Link href="/" className="px-4 py-2 text-sm tracking-tight font-medium" style={{ fontFamily: "var(--font-display)" }}>
            Azure Horizon
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="px-4 py-2 text-sm rounded-full hover:text-cream hover:bg-white/5 transition-colors" style={{ color: "var(--color-mist)" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/book/thank-you" className="pill pill-primary text-xs px-5 py-2.5">Reserve</Link>
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-3" aria-label="Menu">
            <div className="w-4 h-px bg-cream mb-1" />
            <div className="w-4 h-px bg-cream" />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-6"
            style={{ background: "var(--color-ink)" }}
          >
            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.06 }}>
                <Link href={l.href} onClick={() => setOpen(false)} className="display-2" style={{ fontFamily: "var(--font-display)" }}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
