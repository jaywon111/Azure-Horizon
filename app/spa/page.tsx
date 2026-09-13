import { spa } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Spa | The Azure Horizon" };

export default function SpaPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Wellness</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="A spa carved into the cliff." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              Every treatment begins with the sound of the ocean. Everything else is quiet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TREATMENTS — card layout, no overlay text */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Treatments</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">Three rituals. Each one slow.</h2>
            </Reveal>
          </div>

          <div className="grid-3">
            {spa.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "var(--color-cream)",
                    border: "1px solid rgba(26,26,29,0.12)",
                  }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full transition-transform duration-1000 hover:scale-105"
                      style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                    />
                  </div>

                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex justify-between items-baseline mb-4 gap-4">
                      <h3 className="heading" style={{ fontSize: "1.35rem" }}>
                        {s.name}
                      </h3>
                      <span
                        className="text-xs whitespace-nowrap"
                        style={{ color: "var(--color-gold)" }}
                      >
                        {s.duration}
                      </span>
                    </div>

                    <p className="body mb-6">{s.desc}</p>

                    <div
                      className="mt-auto pt-5 flex justify-between items-baseline"
                      style={{ borderTop: "1px solid rgba(26,26,29,0.12)" }}
                    >
                      <span className="eyebrow" style={{ color: "var(--color-inkmuted)" }}>
                        From
                      </span>
                      <span
                        className="heading"
                        style={{ fontSize: "1.15rem", color: "var(--color-inktext)" }}
                      >
                        ${s.price}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE SPACE */}
      <section className="section-lg section-ink">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=80"
                  alt="Treatment room at The Azure Horizon spa"
                  className="w-full"
                  style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow mb-5">The Space</p>
              <h2 className="display-2 mb-6">
                Eleven metres below the cliff edge.
              </h2>
              <p className="body-lg">
                You reach the spa through a door in the cliff. Inside, a single corridor
                passes four treatment rooms, a cedar sauna, a cold plunge, and a
                geothermal pool that opens to the sky.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
