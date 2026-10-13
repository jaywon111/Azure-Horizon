import type { Amenity } from "@/lib/data";

const paths: Record<string, React.ReactNode> = {
  balcony: <path d="M3 20h18M5 20V10l7-5 7 5v10M9 20v-5h6v5" />,
  bath: <path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3zM6 12V6a2 2 0 012-2h1M13 7h3M13 10h3" />,
  music: <path d="M9 18V6l10-2v12M9 18a2 2 0 11-4 0 2 2 0 014 0zM19 16a2 2 0 11-4 0 2 2 0 014 0z" />,
  coffee: <path d="M4 8h12v6a4 4 0 01-4 4H8a4 4 0 01-4-4V8zM16 10h2a2 2 0 010 4h-2M6 4v2M10 4v2M14 4v2" />,
  butler: <path d="M12 12a3 3 0 100-6 3 3 0 000 6zM6 20a6 6 0 0112 0M12 12v8" />,
  wifi: <path d="M5 12.5a10 10 0 0114 0M8 15.5a6 6 0 018 0M12 18.5h.01" />,
  minibar: <path d="M6 3h12v18H6zM6 9h12M9 6h1M9 12h1M9 15h1" />,
  ac: <path d="M12 3v18M3 12h18M6 6l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" />,
  pool: <path d="M3 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M8 16V6a2 2 0 114 0M16 16V6a2 2 0 10-4 0" />,
  shower: <path d="M4 12h16M12 4v4M8 16h.01M12 18h.01M16 16h.01M6 20h.01M10 20h.01M14 20h.01M18 20h.01" />,
  fire: <path d="M12 3c2 4 6 5 6 10a6 6 0 01-12 0c0-3 2-4 3-6 1 2 3 2 3 0z" />,
  chef: <path d="M6 14h12v5H6zM6 14c-2 0-3-2-3-4a4 4 0 014-4c1-2 3-3 5-3s4 1 5 3a4 4 0 014 4c0 2-1 4-3 4" />,
  bike: <path d="M5 18a3 3 0 100-6 3 3 0 000 6zM19 18a3 3 0 100-6 3 3 0 000 6zM8 15l4-7h4l2 7" />,
  bed: <path d="M3 18v-8h14a4 4 0 014 4v4M3 14h18M7 10V7a1 1 0 011-1h3a1 1 0 011 1v3" />,
  heli: <path d="M4 6h16M12 6v6M8 12h8l-2 6H10l-2-6zM6 20h12" />,
  kitchen: <path d="M5 3h14v18H5zM5 11h14M9 3v8M9 15h2" />,
  media: <path d="M3 5h18v12H3zM8 21h8M12 17v4" />,
};

export default function AmenityIcons({ amenities }: { amenities: Amenity[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
      {amenities.map((a, i) => (
        <div key={i} className="flex items-center gap-3">
          <span
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{
              width: "40px",
              height: "40px",
              background: "rgba(201,169,110,0.1)",
              color: "var(--color-gold)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              {paths[a.icon] || paths.wifi}
            </svg>
          </span>
          <span className="body" style={{ fontSize: "0.85rem", color: "var(--color-cream)" }}>
            {a.label}
          </span>
        </div>
      ))}
    </div>
  );
}
