"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/rooms",       label: "Suites" },
  { href: "/dining",      label: "Dining" },
  { href: "/spa",         label: "Spa" },
  { href: "/experiences", label: "Experiences" },
  { href: "/offers",      label: "Offers" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/about",       label: "Story" },
];

const menuLinks = [
  { href: "/rooms",       label: "Suites & Villas" },
  { href: "/dining",      label: "Dining" },
  { href: "/spa",         label: "Spa & Wellness" },
  { href: "/experiences", label: "Experiences" },
  { href: "/offers",      label: "Offers" },
  { href: "/events",      label: "Events & Weddings" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/about",       label: "Our Story" },
  { href: "/contact",     label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Floating pill nav */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4 pt-5 md:pt-6">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 backdrop-blur-xl transition-colors duration-500"
          style={{
            background: scrolled ? "rgba(14,14,16,0.82)" : "rgba(14,14,16,0.28)",
            padding: "0.375rem",
            paddingLeft: "1.25rem",
            paddingRight: "0.375rem",
          }}
        >
          <Link
            href="/"
            className="text-sm font-medium tracking-tight whitespace-nowrap pr-2 md:pr-3"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            onClick={() => setMenuOpen(false)}
          >
            Azure Horizon
          </Link>

          {/* Desktop links — properly spaced */}
          <div className="hidden lg:flex items-center gap-0.5 mr-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-[0.8125rem] rounded-full transition-colors duration-300 hover:bg-white/6"
                style={{ color: "rgba(245,241,232,0.7)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Reserve CTA */}
          <Link
            href="/book"
            className="pill pill-primary hidden md:inline-flex text-[0.75rem] px-4 py-2"
          >
            Reserve
          </Link>

          {/* Grid menu icon */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="ml-1 p-2.5 rounded-full transition-colors duration-300 hover:bg-white/6 flex items-center justify-center"
            style={{ minWidth: "2.25rem", minHeight: "2.25rem" }}
          >
            <span className="grid grid-cols-3 gap-[3px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="block w-[3px] h-[3px] rounded-full"
                  style={{ background: "var(--color-cream)" }}
                />
              ))}
            </span>
          </button>
        </motion.nav>
      </div>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] flex flex-col"
            style={{ background: "var(--color-ink)" }}
          >
            <div className="container flex-1 flex flex-col justify-center pt-32 pb-20">
              <nav className="grid gap-2 md:gap-3">
                {menuLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-block display-3 transition-colors duration-300 hover:text-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-16 pt-8 hairline"
              >
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <p className="eyebrow mb-3">Reservations</p>
                    <p className="body">+1 555 0199 · stay@azurehorizon.com</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Address</p>
                    <p className="body">100 Ocean Drive, Malibu, CA 90265</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10"
              >
                <Link
                  href="/book"
                  onClick={() => setMenuOpen(false)}
                  className="pill pill-primary"
                >
                  Reserve a Suite
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
