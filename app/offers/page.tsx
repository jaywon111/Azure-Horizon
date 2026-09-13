import { offers } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Offers | The Azure Horizon" };

export default function Page() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Offers</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Considered stays." />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid-3">
            {offers.map((o, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ background: "var(--color-carbon)", border: "1px solid rgba(245,241,232,0.08)" }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.name}
                      className="w-full transition-transform duration-1000 hover:scale-105"
                      style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <p className="eyebrow mb-4">
                      {o.nights} nights · from ${o.from}
                    </p>
                    <h3 className="display-3 mb-4">{o.name}</h3>
                    <p className="body mb-6">{o.desc}</p>
                    <div className="mt-auto pt-5" style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}>
                      <MagneticButton href="/book" primary>Reserve</MagneticButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
