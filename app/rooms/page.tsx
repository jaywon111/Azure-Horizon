import Link from "next/link";
import { rooms } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = { title: "Suites & Villas | The Azure Horizon" };

export default function RoomsPage() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Accommodations</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Twelve rooms. Every one faces the water." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              Each suite is designed around a single view — the Pacific. None is the same.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid-2">
            {rooms.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link href={`/rooms/${r.slug}`} className="block h-full">
                  <SpotlightCard>
                    <div className="overflow-hidden" style={{ borderRadius: "20px 20px 0 0" }}>
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full transition-transform duration-1000 hover:scale-105"
                        style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-baseline mb-4 gap-4">
                        <h2 className="display-3">{r.name}</h2>
                        <span
                          className="text-xs whitespace-nowrap"
                          style={{ color: "var(--color-gold)" }}
                        >
                          from ${r.price}
                        </span>
                      </div>
                      <p className="body mb-6">{r.desc}</p>
                      <div
                        className="mt-auto pt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.7rem] tracking-wide uppercase"
                        style={{ color: "var(--color-mist)", borderTop: "1px solid rgba(245,241,232,0.08)" }}
                      >
                        <span>{r.size}</span>
                        <span>Sleeps {r.occupancy}</span>
                        <span>{r.view}</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
