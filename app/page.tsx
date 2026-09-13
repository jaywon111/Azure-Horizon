import Link from "next/link";
import ThreeHero from "@/components/ThreeHero";
import { SplitText, BlurText, Reveal } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";
import SpotlightCard from "@/components/SpotlightCard";
import AccordionGallery from "@/components/AccordionGallery";
import {
  rooms,
  dining,
  spa,
  experiences,
  reviews,
  faqs,
  local,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <ThreeHero />

        {/* Bottom-up gradient so text sits on visible light, not pure black */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,14,16,0.35) 0%, rgba(14,14,16,0.05) 35%, rgba(14,14,16,0.55) 70%, rgba(14,14,16,0.95) 100%)",
            zIndex: 1,
          }}
          aria-hidden
        />

        <div className="container-wide relative z-10 flex-1 flex flex-col justify-center pt-40 pb-16">
          <p className="eyebrow mb-6">
            <BlurText text="Malibu · Est. 2019" />
          </p>

          <h1 className="display-1 max-w-5xl mb-8">
            <SplitText text="A quiet house on the Pacific." delay={0.2} />
          </h1>

          <div className="max-w-xl mb-10">
            <BlurText
              className="body-lg"
              text="Twelve suites, a subterranean spa, and a chef's table that changes with the tide. Nothing else."
              delay={0.6}
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            <MagneticButton href="/book" primary>Reserve a Suite</MagneticButton>
            <MagneticButton href="/about">Our Story</MagneticButton>
          </div>
        </div>

        <div className="container-wide relative z-10 pb-8 flex justify-between items-end text-xs">
          <span style={{ color: "rgba(245,241,232,0.5)", letterSpacing: "0.08em" }}>
            34.0259° N, 118.7798° W
          </span>
          <span style={{ color: "rgba(245,241,232,0.5)", letterSpacing: "0.08em" }}>
            Scroll ↓
          </span>
        </div>
      </section>

      {/* ============ THE HOUSE (cream) ============ */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">The House</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">
                We built twelve rooms because twelve is the most we can look after properly.
              </h2>
            </Reveal>
          </div>

          <div className="grid-3">
            {[
              {
                n: "01",
                t: "Twelve Suites",
                d: "Every room faces the water. None is the same.",
              },
              {
                n: "02",
                t: "A Living Kitchen",
                d: "The menu changes with the tide. We don't print it.",
              },
              {
                n: "03",
                t: "Forbes Five-Star",
                d: "Recognized for four consecutive years.",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="pt-6 border-t" style={{ borderColor: "rgba(26,26,29,0.15)" }}>
                  <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>
                    {s.n}
                  </p>
                  <h3 className="display-3 mb-3">{s.t}</h3>
                  <p className="body">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUITES (dark) ============ */}
      <section className="section-lg section-ink">
        <div className="container">
          <div className="section-head flex flex-wrap justify-between items-end gap-6 max-w-none">
            <div>
              <Reveal>
                <p className="eyebrow mb-5">Accommodations</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-2">Suites &amp; Villas</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/rooms" className="pill">View All</Link>
            </Reveal>
          </div>

          <div className="grid-3">
            {rooms.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <Link href={`/rooms/${r.slug}`} className="block h-full">
                  <SpotlightCard>
                    <div className="overflow-hidden" style={{ borderRadius: "20px 20px 0 0" }}>
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full transition-transform duration-1000 hover:scale-105"
                        style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex justify-between items-baseline mb-4 gap-4">
                        <h3 className="heading" style={{ fontSize: "1.35rem" }}>
                          {r.name}
                        </h3>
                        <span className="text-xs whitespace-nowrap" style={{ color: "var(--color-gold)" }}>
                          from ${r.price}
                        </span>
                      </div>
                      <p className="body mb-6">{r.desc.slice(0, 115)}…</p>
                      <div className="mt-auto pt-5 hairline">
                        <div
                          className="flex flex-wrap gap-x-5 gap-y-1 pt-4 text-[0.7rem] tracking-wide uppercase"
                          style={{ color: "var(--color-mist)" }}
                        >
                          <span>{r.size}</span>
                          <span>Sleeps {r.occupancy}</span>
                          <span>{r.view}</span>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPA (cream) ============ */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Wellness</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">
                A subterranean spa carved into the cliff.
              </h2>
            </Reveal>
          </div>

          <AccordionGallery items={spa} light />
        </div>
      </section>

      {/* ============ DINING (dark) ============ */}
      <section className="section-lg section-ink">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Dining</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">Three kitchens. One tide.</h2>
            </Reveal>
          </div>

          <div>
            {dining.map((d, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10"
                  style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
                >
                  <div className="md:col-span-1 text-xs" style={{ color: "var(--color-mist)" }}>
                    0{i + 1}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="display-3">{d.name}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="body-lg">{d.desc}</p>
                  </div>
                  <div
                    className="md:col-span-2 text-xs tracking-wider uppercase md:text-right"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {d.hours}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCES (cream) ============ */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Experiences</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">The house arranges things. Quietly.</h2>
            </Reveal>
          </div>

          <div className="grid-3">
            {experiences.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="relative rounded-2xl overflow-hidden group h-full"
                  style={{ aspectRatio: "4 / 5" }}
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
                        "linear-gradient(to top, rgba(14,14,16,0.92) 0%, rgba(14,14,16,0.3) 45%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-cream">
                    <h3 className="display-3 mb-3">{e.title}</h3>
                    <p className="body" style={{ color: "rgba(245,241,232,0.8)" }}>
                      {e.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS (dark) ============ */}
      <section className="section-lg section-ink overflow-hidden">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">In Their Words</p>
            </Reveal>
          </div>
        </div>

        <div className="marquee">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 p-8 md:p-10 rounded-2xl"
              style={{
                minWidth: "340px",
                maxWidth: "420px",
                background: "var(--color-carbon)",
                border: "1px solid rgba(245,241,232,0.08)",
              }}
            >
              <p className="display-3 mb-8" style={{ fontSize: "1.15rem", lineHeight: 1.45 }}>
                "{r.quote}"
              </p>
              <p className="eyebrow">{r.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ NEIGHBORHOOD (cream) ============ */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">The Neighborhood</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">Malibu, as we know it.</h2>
            </Reveal>
          </div>

          <div className="grid-2">
            {local.map((l, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className="flex justify-between items-baseline py-6"
                  style={{ borderBottom: "1px solid rgba(26,26,29,0.15)" }}
                >
                  <div>
                    <h3 className="heading mb-1" style={{ fontSize: "1.35rem" }}>
                      {l.name}
                    </h3>
                    <p className="body" style={{ fontSize: "0.95rem" }}>
                      {l.desc}
                    </p>
                  </div>
                  <span style={{ color: "var(--color-gold)" }}>→</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ (dark) ============ */}
      <section className="section-lg section-ink">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow mb-5">Details</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-2">Questions, answered.</h2>
              </Reveal>
            </div>

            <div className="md:col-span-8 max-w-3xl">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <details
                    className="group py-6"
                    style={{ borderBottom: "1px solid rgba(245,241,232,0.1)" }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer list-none gap-6">
                      <span
                        className="heading"
                        style={{ fontSize: "1.15rem", fontWeight: 400 }}
                      >
                        {f.q}
                      </span>
                      <span
                        className="transition-transform duration-300 group-open:rotate-45 text-2xl flex-shrink-0"
                        style={{ color: "var(--color-gold)" }}
                      >
                        +
                      </span>
                    </summary>
                    <p className="body-lg mt-4 pr-12">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA (cream) ============ */}
      <section className="section-lg section-cream">
        <div className="container text-center">
          <Reveal>
            <h2 className="display-2 max-w-3xl mx-auto mb-10" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Come for a night. Stay for the season.
            </h2>
            <MagneticButton href="/book" primary>Reserve a Suite</MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
