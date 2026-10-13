"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("azure_cookie_choice");
    if (!saved) {
      const t = setTimeout(() => setShow(true), 2400);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    localStorage.setItem("azure_cookie_choice", choice);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-4 right-4 md:left-auto md:right-6 md:max-w-sm bottom-24 md:bottom-6 z-[150] rounded-2xl p-6"
          style={{
            background: "rgba(23,23,26,0.95)",
            border: "1px solid rgba(245,241,232,0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <p className="eyebrow mb-3">Cookies</p>
          <p className="body" style={{ fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            We use minimal cookies to make the site work and understand how it's used. Read our{" "}
            <Link href="/privacy" className="underline" style={{ color: "var(--color-gold)" }}>
              privacy policy
            </Link>
            .
          </p>
          <div className="flex gap-3">
            <button onClick={() => decide("accepted")} className="pill pill-primary flex-1 justify-center" style={{ padding: "0.7rem 1rem", fontSize: "0.75rem" }}>
              Accept
            </button>
            <button onClick={() => decide("declined")} className="pill flex-1 justify-center" style={{ padding: "0.7rem 1rem", fontSize: "0.75rem" }}>
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
