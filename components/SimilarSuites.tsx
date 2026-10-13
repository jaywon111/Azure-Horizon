import Link from "next/link";
import { rooms } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

export default function SimilarSuites({ currentSlug }: { currentSlug: string }) {
  const others = rooms.filter((r) => r.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {others.map((r) => (
        <Link key={r.slug} href={`/rooms/${r.slug}`} className="block h-full">
          <SpotlightCard>
            <div className="overflow-hidden" style={{ borderRadius: "20px 20px 0 0" }}>
              <img
                src={r.image}
                alt={r.name}
                className="w-full transition-transform duration-1000 hover:scale-105"
                style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              />
            </div>
            <div className="p-7">
              <div className="flex justify-between items-baseline mb-3 gap-4">
                <h3 className="heading" style={{ fontSize: "1.25rem" }}>
                  {r.name}
                </h3>
                <span className="text-xs whitespace-nowrap" style={{ color: "var(--color-gold)" }}>
                  from ${r.price}
                </span>
              </div>
              <p className="body" style={{ fontSize: "0.9rem" }}>
                {r.desc.slice(0, 100)}…
              </p>
            </div>
          </SpotlightCard>
        </Link>
      ))}
    </div>
  );
}
