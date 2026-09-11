"use client";
import { useEffect, useRef } from "react";

export default function GhostCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    let raf = 0;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const grow = () => el.classList.add("grow");
    const shrink = () => el.classList.remove("grow");
    const attach = () => {
      document.querySelectorAll("a, button, .pill, .spotlight").forEach(n => {
        n.addEventListener("mouseenter", grow);
        n.addEventListener("mouseleave", shrink);
      });
    };
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      mo.disconnect();
    };
  }, []);
  return <div ref={ref} className="ghost-cursor" aria-hidden />;
}
