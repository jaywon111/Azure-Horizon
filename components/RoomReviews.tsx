import type { RoomReview } from "@/lib/data";

export default function RoomReviews({ reviews }: { reviews: RoomReview[] }) {
  if (reviews.length === 0) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl"
          style={{
            background: "var(--color-carbon)",
            border: "1px solid rgba(245,241,232,0.08)",
          }}
        >
          <div className="flex gap-1 mb-5">
            {Array.from({ length: r.rating }).map((_, j) => (
              <span key={j} style={{ color: "var(--color-gold)" }}>
                ★
              </span>
            ))}
          </div>
          <p
            className="heading mb-6"
            style={{ fontSize: "1.05rem", lineHeight: 1.5, color: "var(--color-cream)", fontWeight: 400 }}
          >
            "{r.quote}"
          </p>
          <div className="flex justify-between items-baseline">
            <span className="eyebrow">{r.author}</span>
            <span className="body" style={{ fontSize: "0.75rem" }}>
              {r.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
