"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "@/components/DatePicker";
import type { Room } from "@/lib/data";

const TAX_RATE = 0.12;

export default function StickyBooking({ room }: { room: Room }) {
  const [arrival, setArrival] = useState<Date | null>(null);
  const [departure, setDeparture] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const nights = useMemo(() => {
    if (!arrival || !departure) return 0;
    const diff = Math.round(
      (departure.getTime() - arrival.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.max(0, diff);
  }, [arrival, departure]);

  const subtotal = nights * room.price;
  const taxes = Math.round(subtotal * TAX_RATE);
  const total = subtotal + taxes;

  const bookHref = `/book?room=${room.slug}${
    arrival ? `&arrival=${arrival.toISOString().split("T")[0]}` : ""
  }${departure ? `&departure=${departure.toISOString().split("T")[0]}` : ""}${
    guests ? `&guests=${guests}` : ""
  }`;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const card = (
    <div
      className="rounded-2xl p-7"
      style={{
        background: "var(--color-carbon)",
        border: "1px solid rgba(245,241,232,0.1)",
      }}
    >
      <div className="flex justify-between items-baseline mb-6 gap-4">
        <div>
          <p className="eyebrow mb-1">From</p>
          <p className="heading" style={{ fontSize: "1.75rem", color: "var(--color-cream)" }}>
            {fmt(room.price)}
          </p>
        </div>
        <span className="body" style={{ fontSize: "0.8rem" }}>
          per night
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <DatePicker
          value={arrival}
          onChange={(d) => {
            setArrival(d);
            if (d && departure && departure <= d) setDeparture(null);
          }}
          label="Arrival"
          minDate={new Date()}
        />
        <DatePicker
          value={departure}
          onChange={setDeparture}
          label="Departure"
          minDate={arrival || new Date()}
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-[0.65rem] tracking-[0.18em] uppercase mb-2"
          style={{ color: "rgba(245,241,232,0.45)" }}
        >
          Guests
        </label>
        <div className="flex gap-2">
          {Array.from({ length: room.occupancy }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setGuests(n)}
              className="flex-1 py-2.5 rounded-xl text-[0.85rem] transition-colors duration-300"
              style={{
                background: guests === n ? "var(--color-gold)" : "var(--color-graphite)",
                color: guests === n ? "var(--color-ink)" : "var(--color-cream)",
                border:
                  guests === n
                    ? "1px solid var(--color-gold)"
                    : "1px solid rgba(245,241,232,0.1)",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {nights > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div
            className="py-5 space-y-3 mb-6"
            style={{
              borderTop: "1px solid rgba(245,241,232,0.08)",
              borderBottom: "1px solid rgba(245,241,232,0.08)",
            }}
          >
            <div className="flex justify-between body" style={{ fontSize: "0.85rem" }}>
              <span>
                {fmt(room.price)} × {nights} night{nights > 1 ? "s" : ""}
              </span>
              <span style={{ color: "var(--color-cream)" }}>{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between body" style={{ fontSize: "0.85rem" }}>
              <span>Taxes & fees</span>
              <span style={{ color: "var(--color-cream)" }}>{fmt(taxes)}</span>
            </div>
            <div className="flex justify-between pt-2" style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}>
              <span className="heading" style={{ fontSize: "1rem", color: "var(--color-cream)" }}>
                Total
              </span>
              <span className="heading" style={{ fontSize: "1.15rem", color: "var(--color-gold)" }}>
                {fmt(total)}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      <a
        href={bookHref}
        className="pill pill-primary w-full justify-center"
        style={{ display: "flex" }}
      >
        Reserve
      </a>

      <p className="body text-center mt-4" style={{ fontSize: "0.75rem" }}>
        No charge until confirmation
      </p>

      <div className="mt-5 pt-5 flex items-center gap-2" style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}>
        <span
          className="block w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-gold)" }}
        />
        <span className="body" style={{ fontSize: "0.75rem", color: "var(--color-gold)" }}>
          {room.nextAvailable}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sticky */}
      <div className="hidden lg:block sticky top-32">{card}</div>

      {/* Mobile: fixed bar + expandable sheet */}
      <div className="lg:hidden">
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[140]"
              style={{ background: "rgba(10,10,12,0.85)" }}
              onClick={() => setExpanded(false)}
            />
          )}
        </AnimatePresence>

        <motion.div
          initial={false}
          animate={{ y: expanded ? 0 : "calc(100% - 76px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-0 right-0 bottom-0 z-[150]"
          style={{
            background: "var(--color-ink)",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderTop: "1px solid rgba(245,241,232,0.1)",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex items-center justify-between px-6 py-5"
            style={{ background: "transparent" }}
          >
            <div className="text-left">
              <p className="eyebrow mb-0.5">From</p>
              <p className="heading" style={{ fontSize: "1.35rem" }}>
                {fmt(room.price)}
                <span className="body" style={{ fontSize: "0.75rem", marginLeft: "0.4rem" }}>
                  / night
                </span>
              </p>
            </div>
            <span
              className="pill pill-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}
            >
              {expanded ? "Close" : "Reserve"}
            </span>
          </button>

          <div className="px-6 pb-8" style={{ display: expanded ? "block" : "none" }}>
            {card}
          </div>
        </motion.div>
      </div>
    </>
  );
}
