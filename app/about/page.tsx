import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Our Story | The Azure Horizon" };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Our Story</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Built slowly. On purpose." />
            </h1>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE + STORY */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Sticky timeline column */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <p className="eyebrow mb-8">Timeline</p>

                <div className="space-y-8">
                  {[
                    { y: "2019", t: "The land is acquired" },
                    { y: "2021", t: "Ground is broken" },
                    { y: "2023", t: "The house opens" },
                    { y: "2026", t: "Forbes Five-Star" },
                  ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.06}>
                      <div className="flex gap-6 items-baseline">
                        <span
                          className="text-xs tracking-widest"
                          style={{ color: "var(--color-gold)", minWidth: "3.5rem" }}
                        >
                          {item.y}
                        </span>
                        <span className="body" style={{ color: "var(--color-inktext)" }}>
                          {item.t}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Story column */}
            <div className="md:col-span-8 space-y-8 max-w-2xl">
              <Reveal>
                <p
                  className="body-lg"
                  style={{ fontSize: "1.35rem", color: "var(--color-inktext)", lineHeight: 1.5 }}
                >
                  We bought the land in 2019 — a forgotten stretch of cliff between two public
                  beaches. The brief to our architect was one page: build something that looks
                  like it has always been here.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="body-lg">
                  It took four years and, at times, felt impossible. The cliff is unstable.
                  The salt eats everything. We ended up with eleven engineers and one very
                  patient stonemason.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="body-lg">
                  What we built is a house, not a hotel. Twelve rooms. No lobby. No logo.
                  A chef who cooks what the boats bring in. A spa you reach through a door
                  in the cliff.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="body-lg">We don't advertise. Guests find us. They come back.</p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-8">
                  <MagneticButton href="/book" primary>
                    Reserve a Suite
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* QUIET CLOSING */}
      <section className="section-lg section-ink">
        <div className="container">
          <Reveal>
            <h2 className="display-2 max-w-3xl">
              A house that looks like it has always been here.
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  );
}
