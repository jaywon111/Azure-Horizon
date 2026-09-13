import { experiences } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Experiences | The Azure Horizon" };

export default function Page() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Experiences</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="The house arranges things. Quietly." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              Sail at sunrise, cook with our chef, or walk the hills above Malibu. All arranged
              by your concierge before arrival.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid-2">
            {experiences.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="relative rounded-2xl overflow-hidden group h-full"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(14,14,16,0.92) 0%, rgba(14,14,16,0.25) 45%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                    <h3 className="display-3 mb-3">{e.title}</h3>
                    <p className="body" style={{ color: "rgba(245,241,232,0.85)" }}>
                      {e.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg section-ink">
        <div className="container text-center">
          <Reveal>
            <h2 className="display-2 max-w-3xl mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Curated by our concierge.
            </h2>
            <a href="mailto:concierge@azurehorizon.com" className="pill pill-primary">
              Speak with the concierge
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
