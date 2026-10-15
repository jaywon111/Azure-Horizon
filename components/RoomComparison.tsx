"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { rooms } from "@/lib/data";

export default function RoomComparison() {
  const [a, setA] = useState(rooms[0].slug);
  const [b, setB] = useState(rooms[1].slug);

  const roomA = rooms.find((r) => r.slug === a)!;
  const roomB = rooms.find((r) => r.slug === b)!;

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem 1.25rem",
    borderRadius: "12px",
    background: "var(--color-carbon)",
    border: "1px solid rgba(245,241,232,0.12)",
    color: "var(--color-cream)",
    fontSize: "0.95rem",
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23C9A96E' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1.25rem center",
    paddingRight: "3rem",
  };

  const renderCard = (r: typeof roomA, label: string) => (
    <div>
      <p className="eyebrow mb-3" style={{ letterSpacing: "0.2em" }}>{label}</p>
      <div
        className="rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: "var(--color-carbon)",
          border: label === "Suite A"
            ? "1px solid rgba(201,169,110,0.3)"
            : "1px solid rgba(245,241,232,0.08)",
        }}
      >
        <img
          src={r.image}
          alt={r.name}
          className="w-full"
          style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
        />
        <div className="p-7">
          <div className="flex justify-between items-baseline mb-6 gap-4">
            <h3 className="display-3">{r.name}</h3>
            <span
              className="text-sm whitespace-nowrap"
              style={{ color: "var(--color-gold)" }}
            >
              ${r.price}/nt
            </span>
          </div>

          <div className="space-y-3 mb-8">
            {[
              { label: "Size", value: r.size },
              { label: "Sleeps", value: String(r.occupancy) },
              { label: "View", value: r.view },
              { label: "From", value: `$${r.price} / night` },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-baseline py-2"
                style={{ borderBottom: "1px solid rgba(245,241,232,0.06)" }}
              >
                <span className="body" style={{ fontSize: "0.8rem" }}>
                  {row.label}
                </span>
                <span
                  className="body"
                  style={{ fontSize: "0.85rem", color: "var(--color-cream)" }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <Link
            href={`/rooms/${r.slug}`}
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-gold"
            style={{
              color: "var(--color-gold)",
              fontSize: "0.85rem",
              letterSpacing: "0.02em",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: "rgba(201,169,110,0.4)",
            }}
          >
            View suite <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${a}-${b}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-10 md:gap-8"
        >
          {/* Suite A column */}
          <div className="space-y-6">
            <select
              value={a}
              onChange={(e) => {
                const v = e.target.value;
                if (v === b) setB(a);
                setA(v);
              }}
              style={selectStyle}
              aria-label="Select Suite A"
            >
              {rooms.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name}
                </option>
              ))}
            </select>
            {renderCard(roomA, "Suite A")}
          </div>

          {/* Suite B column */}
          <div className="space-y-6">
            <select
              value={b}
              onChange={(e) => {
                const v = e.target.value;
                if (v === a) setA(b);
                setB(v);
              }}
              style={selectStyle}
              aria-label="Select Suite B"
            >
              {rooms.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name}
                </option>
              ))}
            </select>
            {renderCard(roomB, "Suite B")}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
