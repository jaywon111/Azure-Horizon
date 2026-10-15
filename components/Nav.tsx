"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CurrencySelector from "@/components/CurrencySelector";

const links = [
  { href: "/rooms",       label: "Suites" },
  { href: "/dining",      label: "Dining" },
  { href: "/spa",         label: "Spa" },
  { href: "/experiences", label: "Experiences" },
  { href: "/offers",      label: "Offers" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/journal",     label: "Journal" },
];

const menuSections = [
  {
    label: "Stay",
    links: [
      { href: "/rooms",       label: "Suites & Villas" },
      { href: "/offers",      label: "Offers" },
      { href: "/events",      label: "Events & Weddings" },
      { href: "/book",        label: "Reserve" },
    ],
  },
  {
    label: "Experience",
    links: [
      { href: "/dining",      label: "Dining" },
      { href: "/spa",         label: "Spa & Wellness" },
      { href: "/experiences", label: "Experiences" },
      { href: "/gallery",     label: "Gallery" },
    ],
  },
  {
    label: "House",
    links: [
      { href: "/about",       label: "Our Story" },
      { href: "/journal",     label: "Journal" },
      { href: "/press",       label: "Press" },
      { href: "/careers",     label: "Careers" },
      { href: "/contact",     label: "Contact" },
    ],
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("azure_currency");
    if (saved) setCurrency(saved);
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) setCurrency(detail);
    };
    window.addEventListener("azure:currency", handler);
    return () => window.removeEventListener("azure:currency", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const setCurrencyAndClose = (code: string) => {
    localStorage.setItem("azure_currency", code);
    window.dispatchEvent(new CustomEvent("azure:currency", { detail: code }));
    setCurrency(code);
  };

  return (
    <>
      {/* Floating pill nav — one clean row on every viewport */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none px-3 md:px-4 pt-4 md:pt-6">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center rounded-full border border-white/10 backdrop-blur-xl transition-colors duration-500"
          style={{
            background: scrolled ? "rgba(14,14,16,0.85)" : "rgba(14,14,16,0.3)",
            padding: "0.35rem",
            paddingLeft: "1.15rem",
            paddingRight: "0.35rem",
            gap: "0.25rem",
          }}
        >
          <Link
            href="/"
            className="text-sm font-medium tracking-tight whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            onClick={() => setMenuOpen(false)}
          >
            Azure Horizon
          </Link>

          <div className="hidden xl:flex items-center ml-1 mr-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-[0.8125rem] rounded-full transition-colors duration-300 hover:bg-white/6"
                style={{ color: "rgba(245,241,232,0.7)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <CurrencySelector />

          <Link
            href="/book"
            className="pill pill-primary hidden sm:inline-flex text-[0.75rem] px-4 py-2"
          >
            Reserve
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="p-2.5 rounded-full transition-colors duration-300 hover:bg-white/6 flex items-center justify-center flex-shrink-0"
            style={{ width: "2.25rem", height: "2.25rem" }}
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

      {/* Full-screen overlay menu — tap anywhere to close */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[99] flex flex-col overflow-y-auto"
            style={{ background: "var(--color-ink)" }}
          >
            <div className="container flex-1 flex flex-col pt-40 md:pt-36 pb-20">
              <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                {menuSections.map((section, si) => (
                  <motion.div
                    key={section.label}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + si * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="eyebrow mb-6">{section.label}</p>
                    <nav className="grid gap-2">
                      {section.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setMenuOpen(false)}
                          className="inline-block display-3 transition-colors duration-300 hover:text-gold"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-16 md:hidden"
              >
                <p className="eyebrow mb-4">Currency</p>
                <div className="flex flex-wrap gap-2">
                  {["USD", "EUR", "GBP", "JPY", "AUD", "CAD"].map((code) => (
                    <button
                      key={code}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrencyAndClose(code);
                      }}
                      className="px-3.5 py-2 text-[0.7rem] tracking-wider uppercase rounded-full transition-colors duration-300"
                      style={{
                        color:
                          code === currency
                            ? "var(--color-ink)"
                            : "rgba(245,241,232,0.7)",
                        background:
                          code === currency ? "var(--color-gold)" : "transparent",
                        border:
                          code === currency
                            ? "1px solid var(--color-gold)"
                            : "1px solid rgba(245,241,232,0.15)",
                      }}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-16 pt-8"
                style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
              >
                <div className="grid md:grid-cols-2 gap-8">
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
                transition={{ delay: 0.6, duration: 0.6 }}
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
