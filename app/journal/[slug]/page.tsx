import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/journal";
import { Reveal } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Journal | The Azure Horizon`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <Link
              href="/journal"
              className="eyebrow mb-6 inline-flex items-center gap-2 transition-colors duration-300 hover:text-gold"
            >
              ← Back to Journal
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow mb-5">
              {article.category} · {article.readTime} read
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-1 max-w-4xl mb-10">{article.title}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-2xl mb-10" style={{ fontSize: "1.15rem" }}>
              {article.excerpt}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body" style={{ fontSize: "0.85rem" }}>
              By <span style={{ color: "var(--color-cream)" }}>{article.author}</span>
              {" · "}
              {article.authorRole} · {article.date}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-ink" style={{ paddingBottom: "5rem" }}>
        <div className="container-wide">
          <Reveal delay={0.1}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-3xl"
              style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-ink">
        <div className="container max-w-2xl">
          <div className="space-y-7">
            {article.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.02}>
                <p
                  className="body-lg"
                  style={{ color: "var(--color-cream)", fontSize: "1.0625rem" }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div
            className="mt-16 pt-8 flex flex-wrap items-center justify-between gap-6"
            style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
          >
            <p className="body" style={{ fontSize: "0.85rem" }}>
              Published {article.date}
            </p>
            <MagneticButton href="/journal">More from the Journal</MagneticButton>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Keep reading</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">More from the house.</h2>
            </Reveal>
          </div>

          <div className="grid-3">
            {more.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link href={`/journal/${a.slug}`} className="block h-full group">
                  <article
                    className="rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{
                      background: "var(--color-carbon)",
                      border: "1px solid rgba(245,241,232,0.08)",
                    }}
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full transition-transform duration-1000 group-hover:scale-105"
                      style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
                    />
                    <div className="p-6">
                      <p
                        className="eyebrow mb-3"
                        style={{ color: "var(--color-gold)" }}
                      >
                        {a.category}
                      </p>
                      <h3
                        className="heading transition-colors duration-300 group-hover:text-gold"
                        style={{ fontSize: "1.15rem", color: "var(--color-cream)" }}
                      >
                        {a.title}
                      </h3>
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
