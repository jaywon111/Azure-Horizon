import type { Room } from "@/lib/data";

export default function FloorPlan({ room }: { room: Room }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div
        className="rounded-2xl p-10 md:p-12"
        style={{
          background: "var(--color-carbon)",
          border: "1px solid rgba(245,241,232,0.08)",
        }}
      >
        <svg viewBox="0 0 400 300" className="w-full" style={{ maxHeight: "320px" }}>
          {/* Outer wall */}
          <rect
            x="20"
            y="20"
            width="360"
            height="260"
            fill="none"
            stroke="rgba(245,241,232,0.25)"
            strokeWidth="1.5"
          />
          {/* Room dividers */}
          <line x1="180" y1="20" x2="180" y2="180" stroke="rgba(245,241,232,0.25)" strokeWidth="1.5" />
          <line x1="180" y1="180" x2="380" y2="180" stroke="rgba(245,241,232,0.25)" strokeWidth="1.5" />
          <line x1="20" y1="180" x2="180" y2="180" stroke="rgba(245,241,232,0.25)" strokeWidth="1.5" />
          {/* Doorway arcs */}
          <path d="M 180 60 A 30 30 0 0 1 150 90" fill="none" stroke="rgba(201,169,110,0.6)" strokeWidth="1" />
          <path d="M 180 200 A 30 30 0 0 1 150 230" fill="none" stroke="rgba(201,169,110,0.6)" strokeWidth="1" />
          <path d="M 260 180 A 30 30 0 0 0 290 150" fill="none" stroke="rgba(201,169,110,0.6)" strokeWidth="1" />
          {/* Window marks */}
          <line x1="20" y1="100" x2="20" y2="140" stroke="var(--color-gold)" strokeWidth="2.5" />
          <line x1="380" y1="100" x2="380" y2="140" stroke="var(--color-gold)" strokeWidth="2.5" />
          <line x1="100" y1="280" x2="140" y2="280" stroke="var(--color-gold)" strokeWidth="2.5" />
          {/* Room labels */}
          <text x="100" y="100" fill="var(--color-cream)" fontSize="11" fontFamily="Inter" textAnchor="middle">
            {room.floorPlan[0]?.label}
          </text>
          <text x="100" y="240" fill="var(--color-cream)" fontSize="11" fontFamily="Inter" textAnchor="middle">
            {room.floorPlan[1]?.label}
          </text>
          <text x="280" y="100" fill="var(--color-cream)" fontSize="11" fontFamily="Inter" textAnchor="middle">
            {room.floorPlan[2]?.label}
          </text>
          <text x="280" y="240" fill="var(--color-cream)" fontSize="11" fontFamily="Inter" textAnchor="middle">
            {room.floorPlan[3]?.label}
          </text>
        </svg>
      </div>

      <div>
        <p className="eyebrow mb-5">Floor plan</p>
        <h3 className="display-3 mb-8">{room.size}, laid out for one view.</h3>
        <div className="space-y-3">
          {room.floorPlan.map((f, i) => (
            <div
              key={i}
              className="flex justify-between items-baseline py-4"
              style={{ borderBottom: "1px solid rgba(245,241,232,0.08)" }}
            >
              <span className="body" style={{ color: "var(--color-cream)" }}>
                {f.label}
              </span>
              <span className="body" style={{ fontSize: "0.85rem", color: "var(--color-gold)" }}>
                {f.area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
