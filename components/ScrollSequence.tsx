"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollSequence({ frames }: { frames: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = rect.height - winH;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const index = Math.min(
    frames.length - 1,
    Math.floor(progress * frames.length)
  );

  return (
    <div ref={ref} style={{ height: `${frames.length * 80}vh`, position: "relative" }}>
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--color-ink)" }}
      >
        <img
          key={index}
          src={frames[index]}
          alt={`Room view ${index + 1}`}
          className="w-full h-full object-cover"
          style={{ transition: "opacity 0.15s ease" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,14,16,0.35) 0%, transparent 30%, transparent 70%, rgba(14,14,16,0.85) 100%)",
          }}
        />

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <p
            className="text-[0.7rem] tracking-[0.24em] uppercase"
            style={{ color: "rgba(245,241,232,0.6)" }}
          >
            Scroll to walk through
          </p>
          <div
            className="mx-auto mt-4 h-[2px] w-[120px] overflow-hidden"
            style={{ background: "rgba(245,241,232,0.15)" }}
          >
            <div
              className="h-full transition-[width] duration-150"
              style={{ width: `${progress * 100}%`, background: "var(--color-gold)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
