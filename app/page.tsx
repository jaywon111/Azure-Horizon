import Link from "next/link";
import ThreeHero from "@/components/ThreeHero";
import { SplitText, BlurText, Reveal } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";
import SpotlightCard from "@/components/SpotlightCard";
import AccordionGallery from "@/components/AccordionGallery";
import { rooms, dining, spa, experiences, reviews, faqs, local } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-[6vw] pt-40 pb-12 overflow-hidden">
        <ThreeHero />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center">
          <p className="eyebrow mb-8"><BlurText text="Malibu · Est. 2019" /></p>
          <h1 className="display-1 max-w-5xl">
            <SplitText text="A quiet house on the Pacific." delay={0.2} />
          </h1>
          <div className="mt-10 max-w-xl">
            <BlurText
              className="body-lg"
              text="Twelve suites, a subterranean spa, and a chef's table that changes with the tide. Nothing else."
              delay={0.6}
            />
          </div>
          <div className="mt-12 flex gap-4 flex-wrap">
            <MagneticButton href="/rooms" primary>Reserve a Suite</MagneticButton>
            <MagneticButton href="/about">Our Story</MagneticButton>
          </div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex justify-between items-end text-xs" style={{ color: "var(--color-mist)", opacity: 0.6 }}>
          <span>34.0259° N, 118.7798° W</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow mb-6">The House</p>
          <h2 className="display-2 max-w-4xl">
            <BlurText text="We built twelve rooms because twelve is the most we can look after properly." />
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {[
            { n: "01", t: "Twelve Suites", d: "Every room faces the water. None is the same." },
            { n: "02", t: "A Living Kitchen", d: "The menu changes with the tide. We don't print it." },
            { n: "03", t: "Forbes Five-Star", d: "Recognized for four consecutive years." },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="eyebrow mb-4">{s.n}</p>
              <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{s.t}</h3>
              <p className="body-lg">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <p className="eyebrow mb-4">Accommodations</p>
              <h2 className="display-2"><BlurText text="Suites & Villas" /></h2>
            </div>
            <Link href="/rooms" className="pill">View All</Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.1}>
              <Link href={`/rooms/${r.slug}`}>
                <SpotlightCard className="h-full">
                  <div className="overflow-hidden rounded-t-2xl">
                    <img src={r.image} alt={r.name} className="w-full h-72 object-cover transition-transform duration-1000 hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-baseline mb-3 gap-4">
                      <h3 className="text-xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{r.name}</h3>
                      <span className="text-xs" style={{ color: "var(--color-gold)" }}>from ${r.price}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>{r.desc.slice(0, 110)}…</p>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow mb-4">Wellness</p>
          <h2 className="display-2 mb-16 max-w-3xl"><BlurText text="A subterranean spa carved into the cliff." /></h2>
        </Reveal>
        <AccordionGallery items={spa} />
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow mb-4">Dining</p>
          <h2 className="display-2 mb-16 max-w-3xl"><BlurText text="Three kitchens. One tide." /></h2>
        </Reveal>
        <div className="space-y-2">
          {dining.map((d, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid md:grid-cols-12 gap-6 items-center py-10 border-t border-white/10">
                <div className="md:col-span-1 text-xs" style={{ color: "var(--color-mist)" }}>0{i + 1}</div>
                <div className="md:col-span-4">
                  <h3 className="text-3xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{d.name}</h3>
                </div>
                <div className="md:col-span-5 body-lg">{d.desc}</div>
                <div className="md:col-span-2 text-xs" style={{ color: "var(--color-mist)" }}>{d.hours}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow mb-4">Experiences</p>
          <h2 className="display-2 mb-16 max-w-3xl"><BlurText text="The house arranges things. Quietly." /></h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((e, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative rounded-2xl overflow-hidden h-[480px] group">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-ink), rgba(10,10,11,0.3) 40%, transparent)" }} />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{e.title}</h3>
                  <p className="text-sm" style={{ color: "var(--color-mist)" }}>{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section overflow-hidden">
        <Reveal>
          <p className="eyebrow mb-4">In Their Words</p>
        </Reveal>
        <div className="marquee flex gap-6 mt-12 w-max">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="min-w-[420px] max-w-[420px] p-10 rounded-2xl border border-white/10" style={{ background: "var(--color-carbon)" }}>
              <p className="text-lg mb-6 leading-snug" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>"{r.quote}"</p>
              <p className="eyebrow">{r.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow mb-4">The Neighborhood</p>
          <h2 className="display-2 mb-16 max-w-3xl"><BlurText text="Malibu, as we know it." /></h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {local.map((l, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex justify-between items-baseline py-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl mb-1" style={{ fontFamily: "var(--font-display)" }}>{l.name}</h3>
                  <p className="text-sm" style={{ color: "var(--color-mist)" }}>{l.desc}</p>
                </div>
                <span className="text-xs" style={{ color: "var(--color-gold)" }}>→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow mb-4">Details</p>
          <h2 className="display-2 mb-16 max-w-3xl"><BlurText text="Questions, answered." /></h2>
        </Reveal>
        <div className="max-w-3xl">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group border-b border-white/10 py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg pr-6" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>{f.q}</span>
                  <span className="transition-transform group-open:rotate-45 text-2xl" style={{ color: "var(--color-gold)" }}>+</span>
                </summary>
                <p className="body-lg mt-4 pr-12">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section text-center">
        <Reveal>
          <h2 className="display-2 max-w-4xl mx-auto mb-10">
            <BlurText text="Come for a night. Stay for the season." />
          </h2>
          <MagneticButton href="/rooms" primary>Reserve a Suite</MagneticButton>
        </Reveal>
      </section>
    </>
  );
}
