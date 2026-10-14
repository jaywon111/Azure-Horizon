"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0, tx = 0, ty = 0;
    let raf = 0;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = (e.target as HTMLElement)?.closest(
        "[data-preview]"
      ) as HTMLElement | null;
      if (target) {
        const src = target.getAttribute("data-preview");
        if (src) {
          setImage(src);
          setVisible(true);
          return;
        }
      }
      setVisible(false);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[190]"
      style={{
        width: "220px",
        height: "280px",
        borderRadius: "16px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
        border: "1px solid rgba(245,241,232,0.15)",
      }}
      aria-hidden
    >
      {image && (
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
}
