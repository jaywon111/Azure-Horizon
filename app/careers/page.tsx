import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Careers | The Azure Horizon",
  description: "Join a team of thirty-four who look after twelve rooms on the Pacific.",
};

const roles = [
  {
    title: "Concierge",
    type: "Full-time",
    location: "Malibu, CA",
    desc: "Own the guest experience from arrival to departure. Two years of luxury hospitality required. Spanish or French a plus.",
  },
  {
    title: "Sous Chef — Tide",
    type: "Full-time",
    location: "Malibu, CA",
    desc: "Work directly with Elias Moreau on a menu that changes daily. Fine dining experience essential. Michelin background preferred.",
  },
  {
    title: "Spa Therapist",
    type: "Full-time",
    location: "Malibu, CA",
    desc: "Deliver signature Oceanic Ritual, Thermal Circuit, and Facial treatments. Licensed massage therapist required.",
  },
  {
    title: "House Manager — Cliff House",
    type: "Full-time, live-in",
    location: "Malibu, CA",
    desc: "Dedicated to The Cliff House and its guests. Live-in accommodation provided. Extensive private service experience required.",
  },
  {
    title: "Night Porter",
    type: "Full-time",
    location: "Malibu, CA",
    desc: "Oversee the house between 23:00 and 07:00. Security-conscious, discreet, and comfortable working alone.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Careers</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Thirty-four people. Twelve rooms. One standard." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              We hire slowly and rarely. When we do, we look for people who
              understand that luxury is a form of attention, not a form of display.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Open roles</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">Five positions open.</h2>
            </Reveal>
          </div>

          <div>
            {roles.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className="grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10"
                  style={{ borderTop: "1px solid rgba(26,26,29,0.15)" }}
                >
                  <div className="md:col-span-4">
                    <h3 className="display-3">{r.title}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="body">{r.desc}</p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <p
                      className="text-xs tracking-wider uppercase mb-1"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {r.type}
                    </p>
                    <p className="body" style={{ fontSize: "0.85rem" }}>
                      {r.location}
                    </p>
                  </div>
                </div>
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
                Apply
              </p>
              <h3 className="display-3 mb-5" style={{ color: "var(--color-cream)" }}>
                Send a letter, not a résumé.
              </h3>
              <p className="body-lg mb-8" style={{ maxWidth: "40rem" }}>
                Tell us why this coast, why this house, and what you've looked after before.
                We read every letter ourselves.
              </p>
              <MagneticButton
                href="mailto:careers@azurehorizon.com"
                primary
              >
                careers@azurehorizon.com
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
