import { dining } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Dining | The Azure Horizon" };

export default function DiningPage() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Dining</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Three kitchens. One tide." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              The menu changes with what the boats bring in. Nothing is flown, nothing is frozen.
            </p>
          </Reveal>
        </div>
      </section>

      {dining.map((d, i) => (
        <section
          key={i}
          className={`section-lg ${i % 2 === 0 ? "section-cream" : "section-ink"}`}
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <Reveal>
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full rounded-2xl"
                  style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
                />
              </Reveal>

              <Reveal delay={0.1}>
                <p className="eyebrow mb-5">{d.hours}</p>
                <h2 className="display-2 mb-6">{d.name}</h2>
                <p className="body-lg">{d.desc}</p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="section-lg section-ink">
        <div className="container text-center">
          <Reveal>
            <h2 className="display-2 max-w-3xl mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Reserve a table.
            </h2>
            <p className="body-lg mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Dining is reserved for guests and members.
            </p>
            <a href="mailto:dining@azurehorizon.com" className="pill pill-primary">
              Email reservations
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
