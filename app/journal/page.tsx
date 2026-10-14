import Link from "next/link";
import { articles } from "@/lib/journal";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = {
  title: "Journal | The Azure Horizon",
  description: "Notes from the house. Chef interviews, craft stories, and design decisions.",
};

export default function JournalIndex() {
  const [feature, ...rest] = articles;

  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Journal</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Notes from the house." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              Stories from behind the walls — the chef, the stonemason, the kitchen, the
              silence. Published occasionally, when there is something to say.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature */}
      <section className="section-ink" style={{ paddingBottom: "5rem" }}>
        <div className="container">
          <Reveal>
            <Link
              href={`/journal/${feature.slug}`}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center group"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full transition-transform duration-1000 group-hover:scale-105"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="eyebrow mb-5">
                  {feature.category} · {feature.readTime} read
                </p>
                <h2 className="display-2 mb-6 transition-colors duration-300 group-hover:text-gold">
                  {feature.title}
                </h2>
                <p className="body-lg mb-6">{feature.excerpt}</p>
                <p className="body" style={{ fontSize: "0.85rem" }}>
                  By {feature.author} · {feature.date}
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Rest */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link
                  href={`/journal/${a.slug}`}
                  className="block h-full group"
                >
                  <article
                    className="rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{
                      background: "var(--color-carbon)",
                      border: "1px solid rgba(245,241,232,0.08)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full transition-transform duration-1000 group-hover:scale-105"
                        style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>
                        {a.category} · {a.readTime}
                      </p>
                      <h3
                        className="heading mb-4 transition-colors duration-300 group-hover:text-gold"
                        style={{ fontSize: "1.25rem", color: "var(--color-cream)" }}
                      >
                        {a.title}
                      </h3>
                      <p className="body mb-6" style={{ color: "var(--color-mist)" }}>
                        {a.excerpt}
                      </p>
                      <p
                        className="mt-auto pt-5 text-xs uppercase tracking-wider"
                        style={{
                          color: "rgba(245,241,232,0.4)",
                          borderTop: "1px solid rgba(245,241,232,0.08)",
                        }}
                      >
                        {a.author} · {a.date}
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
