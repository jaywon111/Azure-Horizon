import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Contact | The Azure Horizon" };

export default function Page() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="We reply within the hour." />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-ink" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <Reveal>
              <div className="space-y-10">
                <div>
                  <p className="eyebrow mb-4">Reservations</p>
                  <p className="body-lg" style={{ color: "var(--color-cream)" }}>
                    +1 555 0199
                  </p>
                  <p className="body-lg" style={{ color: "var(--color-cream)" }}>
                    stay@azurehorizon.com
                  </p>
                </div>

                <div>
                  <p className="eyebrow mb-4">Address</p>
                  <p className="body-lg" style={{ color: "var(--color-cream)" }}>
                    100 Ocean Drive
                    <br />
                    Malibu, CA 90265
                  </p>
                </div>

                <div>
                  <p className="eyebrow mb-4">Directions from LAX</p>
                  <p className="body-lg">
                    Take I-405 N to CA-1 N (Pacific Coast Highway). North 15 miles. Right onto
                    Ocean Drive. We are the last house on the left.
                  </p>
                </div>

                <div>
                  <MagneticButton href="/book" primary>Reserve a Suite</MagneticButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(245,241,232,0.08)" }}>
                <iframe
                  src="https://www.google.com/maps?q=Malibu,CA&output=embed"
                  width="100%"
                  height="640"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.9) contrast(0.85)",
                    display: "block",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Azure Horizon location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
