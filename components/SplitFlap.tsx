"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SplitFlap({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const chars = text.split("");

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", perspective: "1000px" }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={visible ? { rotateX: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
