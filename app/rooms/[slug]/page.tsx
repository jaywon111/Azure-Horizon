import { rooms } from "@/lib/data";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Suite · {room.view}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-4xl">{room.name}</h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-ink" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Reveal delay={0.15}>
            <img
              src={room.image}
              alt={room.name}
              className="w-full rounded-3xl"
              style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-ink">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow mb-5">The Suite</p>
              </Reveal>
              <Reveal delay={0.05}>
                <p
                  className="body-lg"
                  style={{ fontSize: "1.35rem", color: "var(--color-cream)", lineHeight: 1.5 }}
                >
                  {room.desc}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div
                  className="p-8 rounded-2xl"
                  style={{ background: "var(--color-carbon)", border: "1px solid rgba(245,241,232,0.08)" }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="body" style={{ fontSize: "0.85rem" }}>Size</span>
                      <span className="text-cream">{room.size}</span>
                    </div>
                    <div className="hairline" />
                    <div className="flex justify-between">
                      <span className="body" style={{ fontSize: "0.85rem" }}>Sleeps</span>
                      <span className="text-cream">{room.occupancy}</span>
                    </div>
                    <div className="hairline" />
                    <div className="flex justify-between">
                      <span className="body" style={{ fontSize: "0.85rem" }}>View</span>
                      <span className="text-cream">{room.view}</span>
                    </div>
                    <div className="hairline" />
                    <div className="flex justify-between">
                      <span className="body" style={{ fontSize: "0.85rem" }}>From</span>
                      <span style={{ color: "var(--color-gold)" }}>${room.price} / night</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <MagneticButton href="/book" primary>Reserve</MagneticButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">In the Room</p>
          </Reveal>
          <div className="grid-3">
            {room.amenities.map((a, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className="py-5 heading"
                  style={{ fontSize: "1.15rem", borderTop: "1px solid rgba(26,26,29,0.15)" }}
                >
                  {a}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
