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

  return (
    <div>
      {/* Selectors */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <label
            className="block text-[0.7rem] tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--color-gold)" }}
          >
            Suite A
          </label>
          <select
            value={a}
            onChange={(e) => {
              const v = e.target.value;
              if (v === b) {
                setB(a);
              }
              setA(v);
            }}
            className="w-full px-4 py-3 rounded-xl appearance-none"
            style={{
              background: "var(--color-carbon)",
              border: "1px solid rgba(245,241,232,0.12)",
              color: "var(--color-cream)",
              fontSize: "0.95rem",
              backgroundImage:
                "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23C9A96E' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.25rem center",
              paddingRight: "3rem",
            }}
          >
            {rooms.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block text-[0.7rem] tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--color-gold)" }}
          >
            Suite B
          </label>
          <select
            value={b}
            onChange={(e) => {
              const v = e.target.value;
              if (v === a) {
                setA(b);
              }
              setB(v);
            }}
            className="w-full px-4 py-3 rounded-xl appearance-none"
            style={{
              background: "var(--color-carbon)",
              border: "1px solid rgba(245,241,232,0.12)",
              color: "var(--color-cream)",
              fontSize: "0.95rem",
              backgroundImage:
                "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23C9A96E' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.25rem center",
              paddingRight: "3rem",
            }}
          >
            {rooms.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${a}-${b}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[roomA, roomB].map((r, idx) => (
            <div
              key={r.slug}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "var(--color-carbon)",
                border:
                  idx === 0
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
                <div className="flex justify-between items-baseline mb-4 gap-4">
                  <h3 className="display-3">{r.name}</h3>
                  <span
                    className="text-sm whitespace-nowrap"
                    style={{ color: "var(--color-gold)" }}
                  >
                    ${r.price}/nt
                  </span>
                </div>

                <div className="space-y-3 mb-6">
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
                  className="pill w-full justify-center"
                  style={{ display: "flex" }}
                >
                  View suite
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
