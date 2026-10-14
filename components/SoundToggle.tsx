"use client";
import { useEffect, useRef, useState } from "react";

export default function SoundToggle() {
  const [on, setOn] = useState(false);
  const [available, setAvailable] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("azure_sound");
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ocean-waves-112906.mp3"
    );
    audio.loop = true;
    audio.volume = 0.15;
    audio.oncanplaythrough = () => setAvailable(true);
    audio.onerror = () => setAvailable(false);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (on) {
      audio.play().catch(() => setOn(false));
      localStorage.setItem("azure_sound", "on");
    } else {
      audio.pause();
      localStorage.setItem("azure_sound", "off");
    }
  }, [on]);

  if (!available) return null;

  return (
    <button
      onClick={() => setOn((v) => !v)}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed z-[180] flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-white/6"
      style={{
        left: "1.25rem",
        bottom: "5.5rem",
        width: "44px",
        height: "44px",
        background: "rgba(14,14,16,0.85)",
        border: "1px solid rgba(245,241,232,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "var(--color-cream)",
      }}
    >
      {on ? (
        <span className="flex items-end gap-[3px] h-[14px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[2px] rounded-full"
              style={{
                background: "var(--color-gold)",
                animation: `sound-bar 1s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                height: "100%",
              }}
            />
          ))}
          <style>{`
            @keyframes sound-bar {
              0%, 100% { transform: scaleY(0.3); }
              50% { transform: scaleY(1); }
            }
          `}</style>
        </span>
      ) : (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6v4h3l4 3V3L5 6H2z" />
          <path d="M11 6L14 9M14 6L11 9" />
        </svg>
      )}
    </button>
  );
}
