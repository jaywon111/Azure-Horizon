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

  // Flag body when banner is visible so floating buttons can shift up
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (show) {
      document.body.classList.add("cookie-visible");
    } else {
      document.body.classList.remove("cookie-visible");
    }
    return () => {
      document.body.classList.remove("cookie-visible");
    };
  }, [show]);

  const decide = (choice: "accepted" | "declined") => {
    localStorage.setItem("azure_cookie_choice", choice);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Mobile: full-width bottom bar */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 bottom-0 z-[170] md:hidden"
            style={{
              background: "rgba(23,23,26,0.98)",
              borderTop: "1px solid rgba(245,241,232,0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <div className="px-6 pt-6 pb-8">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="block w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-gold)" }}
                />
                <p className="eyebrow" style={{ marginBottom: 0 }}>
                  Cookies
                </p>
              </div>
              <p
                className="body"
                style={{ fontSize: "0.85rem", marginBottom: "1.25rem" }}
              >
                We use minimal cookies to make the site work. Read our{" "}
                <Link
                  href="/privacy"
                  className="underline"
                  style={{ color: "var(--color-gold)" }}
                >
                  privacy policy
                </Link>
                .
              </p>
              <div className="flex gap-2.5">
                <button
                  onClick={() => decide("accepted")}
                  className="pill pill-primary flex-1 justify-center"
                  style={{ padding: "0.75rem 1rem", fontSize: "0.75rem" }}
                >
                  Accept
                </button>
                <button
                  onClick={() => decide("declined")}
                  className="pill flex-1 justify-center"
                  style={{ padding: "0.75rem 1rem", fontSize: "0.75rem" }}
                >
                  Decline
                </button>
              </div>
            </div>
          </motion.div>

          {/* Desktop: floating card bottom-right */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block fixed right-6 bottom-6 z-[170] max-w-sm rounded-2xl p-6"
            style={{
              background: "rgba(23,23,26,0.95)",
              border: "1px solid rgba(245,241,232,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <p className="eyebrow mb-3">Cookies</p>
            <p
              className="body"
              style={{ fontSize: "0.85rem", marginBottom: "1.25rem" }}
            >
              We use minimal cookies to make the site work and understand how
              it's used. Read our{" "}
              <Link
                href="/privacy"
                className="underline"
                style={{ color: "var(--color-gold)" }}
              >
                privacy policy
              </Link>
              .
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => decide("accepted")}
                className="pill pill-primary flex-1 justify-center"
                style={{ padding: "0.7rem 1rem", fontSize: "0.75rem" }}
              >
                Accept
              </button>
              <button
                onClick={() => decide("declined")}
                className="pill flex-1 justify-center"
                style={{ padding: "0.7rem 1rem", fontSize: "0.75rem" }}
              >
                Decline
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
