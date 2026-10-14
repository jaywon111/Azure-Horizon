import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Press | The Azure Horizon",
  description: "Press mentions, awards, and press contact for The Azure Horizon.",
};

const press = [
  {
    publication: "Condé Nast Traveler",
    year: "2026",
    title: "The 12 Best New Hotels in California",
    quote: "A masterclass in restraint. Nothing is loud — everything is right.",
  },
  {
    publication: "Monocle",
    year: "2026",
    title: "The Quiet Revolution in Coastal Hospitality",
    quote: "Every detail — from the linen to the lighting — feels considered. A rare thing.",
  },
  {
    publication: "Travel + Leisure",
    year: "2026",
    title: "Forbes Five-Star 2026: The New Additions",
    quote: "Twelve rooms, thirty-four staff, and a standard that shames larger properties.",
  },
  {
    publication: "Wallpaper*",
    year: "2025",
    title: "The Stonework of Ravi Chandra",
    quote: "The house looks like it has always been here. It took four years to look that old.",
  },
  {
    publication: "Robb Report",
    year: "2025",
    title: "The Chef's Tables Worth Flying For",
    quote: "Elias Moreau writes his menu at 05:30, after the boats come in. It is the best meal in California.",
  },
];

export default function PressPage() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Press</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="In print." />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div>
            {press.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <article
                  className="grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10"
                  style={{ borderTop: "1px solid rgba(26,26,29,0.15)" }}
                >
                  <div className="md:col-span-3">
                    <p className="display-3">{p.publication}</p>
                    <p
                      className="text-xs tracking-widest uppercase mt-2"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {p.year}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="heading mb-3" style={{ fontSize: "1.15rem" }}>
                      {p.title}
                    </h3>
                    <p className="body" style={{ fontStyle: "italic" }}>
                      "{p.quote}"
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div
              className="mt-16 p-10 md:p-12 rounded-2xl"
              style={{
                background: "var(--color-carbon)",
                border: "1px solid rgba(245,241,232,0.08)",
              }}
            >
              <p className="eyebrow mb-5" style={{ color: "var(--color-gold)" }}>
                Press contact
              </p>
              <h3 className="display-3 mb-5" style={{ color: "var(--color-cream)" }}>
                For interviews, imagery, and stays.
              </h3>
              <p className="body-lg mb-8" style={{ maxWidth: "40rem" }}>
                Our press team arranges visits, interviews with the founders, and
                high-resolution imagery on request. Please allow 48 hours.
              </p>
              <MagneticButton href="mailto:press@azurehorizon.com" primary>
                press@azurehorizon.com
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
