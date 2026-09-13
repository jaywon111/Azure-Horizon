import { events } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Events & Weddings | The Azure Horizon" };

export default function Page() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Events &amp; Weddings</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Gather, quietly, at the edge of the Pacific." />
            </h1>
          </Reveal>
        </div>
      </section>

      {events.map((e, i) => (
        <section
          key={i}
          className={`section-lg ${i % 2 === 0 ? "section-cream" : "section-ink"}`}
        >
          <div className="container">
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <Reveal>
                  <h2 className="display-2">{e.name}</h2>
                </Reveal>
              </div>
              <div className="md:col-span-5">
                <Reveal delay={0.05}>
                  <p className="body-lg">{e.desc}</p>
                </Reveal>
              </div>
              <div className="md:col-span-3">
                <Reveal delay={0.1}>
                  <p className="eyebrow" style={{ letterSpacing: "0.12em" }}>
                    {e.capacity}
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl overflow-hidden">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full"
                  style={{ aspectRatio: "21 / 9", objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section-lg section-ink">
        <div className="container text-center">
          <Reveal>
            <h2 className="display-2 max-w-3xl mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Plan something private.
            </h2>
            <MagneticButton href="/contact" primary>
              Speak with events
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
