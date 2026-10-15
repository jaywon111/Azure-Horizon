"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function DatePicker({
  value,
  onChange,
  minDate,
  label,
  unavailableDates = [],
}: {
  value: Date | null;
  onChange: (d: Date | null) => void;
  minDate?: Date;
  label: string;
  unavailableDates?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => {
    const base = value || new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const unavailable = useMemo(() => new Set(unavailableDates), [unavailableDates]);
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const cells = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const startDay = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const arr: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(new Date(year, month, d));
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [cursor]);

  const disabled = (d: Date) => {
    if (minDate && d < minDate) return true;
    if (d < today) return true;
    if (unavailable.has(toKey(d))) return true;
    return false;
  };

  const select = (d: Date) => {
    onChange(d);
    setOpen(false);
  };

  const formatted = value
    ? `${MONTHS[value.getMonth()].slice(0, 3)} ${value.getDate()}, ${value.getFullYear()}`
    : "Select date";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 transition-colors duration-300 flex items-center justify-between gap-3"
        style={{
          background: "var(--color-graphite)",
          border: "1px solid rgba(245,241,232,0.1)",
          color: value ? "var(--color-cream)" : "rgba(245,241,232,0.4)",
          fontSize: "0.9rem",
        }}
      >
        <div>
          <div
            className="text-[0.65rem] tracking-[0.18em] uppercase mb-1.5"
            style={{ color: "rgba(245,241,232,0.45)" }}
          >
            {label}
          </div>
          <div>{formatted}</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.5 }}>
          <rect x="1" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M1 6H13" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4 1V4M10 1V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-0 right-0 mt-3 z-30 p-6"
          style={{
            background: "rgba(23,23,26,0.98)",
            border: "1px solid rgba(245,241,232,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* Month nav */}
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={() =>
                setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
              }
              className="p-2 rounded-full transition-colors duration-300 hover:bg-white/10"
              aria-label="Previous month"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <div
              className="text-sm tracking-wide"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              {MONTHS[cursor.getMonth()]} {cursor.getFullYear()}
            </div>
            <button
              type="button"
              onClick={() =>
                setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
              }
              className="p-2 rounded-full transition-colors duration-300 hover:bg-white/10"
              aria-label="Next month"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 mb-3">
            {DAYS.map((d, i) => (
              <div
                key={i}
                className="text-center text-[0.65rem] tracking-wider"
                style={{ color: "rgba(245,241,232,0.35)" }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days — more breathing room */}
          <div className="grid grid-cols-7 gap-2">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const isDisabled = disabled(d);
              const isSelected = value && toKey(d) === toKey(value);
              const isToday = toKey(d) === toKey(today);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => select(d)}
                  className="aspect-square text-[0.8rem] transition-colors duration-200 flex items-center justify-center"
                  style={{
                    background: isSelected ? "var(--color-gold)" : "transparent",
                    color: isSelected
                      ? "var(--color-ink)"
                      : isDisabled
                      ? "rgba(245,241,232,0.2)"
                      : "var(--color-cream)",
                    border:
                      isToday && !isSelected
                        ? "1px solid rgba(201,169,110,0.4)"
                        : "1px solid transparent",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    textDecoration: isDisabled && !isSelected ? "line-through" : "none",
                  }}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
