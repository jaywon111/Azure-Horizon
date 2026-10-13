"use client";
import { useState } from "react";
import { upsells } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  bottle: <path d="M9 3h6v3l1 3v12H8V9l1-3V3zM9 11h6" />,
  car: <path d="M5 16l1.5-5h11L19 16M5 16v3h2v-2M19 16v3h-2v-2M7 16h10" />,
  spa: <path d="M12 3v6M12 21c-3 0-6-2-6-6 0-4 4-6 6-6s6 2 6 6c0 4-3 6-6 6z" />,
  chef: <path d="M6 14h12v5H6zM6 14c-2 0-3-2-3-4a4 4 0 014-4c1-2 3-3 5-3s4 1 5 3a4 4 0 014 4c0 2-1 4-3 4" />,
};

export default function Upsells({
  onChange,
}: {
  onChange: (selectedIds: string[], total: number) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    const next = selected.includes(id)
      ? selected.filter((x) => x !== id)
      : [...selected, id];
    setSelected(next);
    const total = upsells
      .filter((u) => next.includes(u.id))
      .reduce((sum, u) => sum + u.price, 0);
    onChange(next, total);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {upsells.map((u) => {
        const active = selected.includes(u.id);
        return (
          <button
            key={u.id}
            type="button"
            onClick={() => toggle(u.id)}
            className="text-left rounded-2xl p-6 transition-all duration-300"
            style={{
              background: active ? "var(--color-graphite)" : "var(--color-carbon)",
              border: active
                ? "1px solid var(--color-gold)"
                : "1px solid rgba(245,241,232,0.08)",
            }}
          >
            <div className="flex items-start gap-4">
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: "42px",
                  height: "42px",
                  background: active ? "rgba(201,169,110,0.15)" : "rgba(245,241,232,0.04)",
                  color: active ? "var(--color-gold)" : "rgba(245,241,232,0.5)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[u.icon]}
                </svg>
              </span>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1 gap-3">
                  <h4
                    className="heading"
                    style={{ fontSize: "1rem", color: "var(--color-cream)" }}
                  >
                    {u.name}
                  </h4>
                  <span
                    className="text-sm whitespace-nowrap"
                    style={{ color: active ? "var(--color-gold)" : "rgba(245,241,232,0.5)" }}
                  >
                    ${u.price}
                  </span>
                </div>
                <p className="body" style={{ fontSize: "0.85rem" }}>
                  {u.desc}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
