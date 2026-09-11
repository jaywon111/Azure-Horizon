import Link from "next/link";
import { rooms } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = { title: "Suites & Villas | The Azure Horizon" };

export default function RoomsPage() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Accommodations</p>
        <h1 className="display-1 mb-8 max-w-4xl"><BlurText text="Twelve rooms. Every one faces the water." /></h1>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6 mt-20">
        {rooms.map((r, i) => (
          <Reveal key={r.slug} delay={i * 0.08}>
            <Link href={`/rooms/${r.slug}`}>
              <SpotlightCard>
                <img src={r.image} alt={r.name} className="w-full h-[480px] object-cover rounded-t-2xl" />
                <div className="p-10">
                  <div className="flex justify-between items-baseline mb-4 gap-4">
                    <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{r.name}</h2>
                    <span className="text-sm" style={{ color: "var(--color-gold)" }}>from ${r.price}</span>
                  </div>
                  <p className="body-lg mb-6">{r.desc}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: "var(--color-mist)" }}>
                    <span>{r.size}</span>
                    <span>·</span>
                    <span>Sleeps {r.occupancy}</span>
                    <span>·</span>
                    <span>{r.view}</span>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
