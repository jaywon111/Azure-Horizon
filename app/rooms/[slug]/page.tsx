import { rooms } from "@/lib/data";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export function generateStaticParams() {
  return rooms.map(r => ({ slug: r.slug }));
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find(r => r.slug === slug);
  if (!room) notFound();

  return (
    <article className="pt-40">
      <div className="px-6 md:px-[6vw] max-w-[1600px] mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">Suite · {room.view}</p>
          <h1 className="display-1 mb-10 max-w-4xl">{room.name}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <img src={room.image} alt={room.name} className="w-full h-[70vh] object-cover rounded-3xl" />
        </Reveal>
      </div>

      <div className="section grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="body-lg text-xl max-w-2xl" style={{ color: "var(--color-cream)" }}>{room.desc}</p>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div className="p-8 rounded-2xl border border-white/10 space-y-4" style={{ background: "var(--color-carbon)" }}>
              <div className="flex justify-between"><span className="text-sm" style={{ color: "var(--color-mist)" }}>Size</span><span>{room.size}</span></div>
              <div className="hairline" />
              <div className="flex justify-between"><span className="text-sm" style={{ color: "var(--color-mist)" }}>Sleeps</span><span>{room.occupancy}</span></div>
              <div className="hairline" />
              <div className="flex justify-between"><span className="text-sm" style={{ color: "var(--color-mist)" }}>View</span><span>{room.view}</span></div>
              <div className="hairline" />
              <div className="flex justify-between"><span className="text-sm" style={{ color: "var(--color-mist)" }}>From</span><span style={{ color: "var(--color-gold)" }}>${room.price} / night</span></div>
              <div className="pt-4">
                <MagneticButton href="/book/thank-you" primary>Reserve</MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="section">
        <Reveal>
          <p className="eyebrow mb-6">In the Room</p>
          <div className="grid md:grid-cols-3 gap-6">
            {room.amenities.map((a, i) => (
              <div key={i} className="py-5 border-t border-white/10 text-lg" style={{ fontFamily: "var(--font-display)" }}>{a}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </article>
  );
}
