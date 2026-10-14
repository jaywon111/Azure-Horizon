"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export function BlurText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          initial={{ filter: "blur(12px)", opacity: 0, y: 8 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reduced) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
