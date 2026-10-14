import Link from "next/link";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = {
  title: "Sitemap | The Azure Horizon",
  description: "Every page at The Azure Horizon, in one place.",
};

const sections = [
  {
    label: "Stay",
    links: [
      { href: "/rooms", label: "Suites & Villas" },
      { href: "/rooms/ocean-suite", label: "Ocean Suite" },
      { href: "/rooms/garden-villa", label: "Garden Villa" },
      { href: "/rooms/cliff-house", label: "The Cliff House" },
      { href: "/offers", label: "Offers" },
      { href: "/book", label: "Reserve" },
      { href: "/book/thank-you", label: "Reservation Received" },
    ],
  },
  {
    label: "Experience",
    links: [
      { href: "/dining", label: "Dining" },
      { href: "/spa", label: "Spa & Wellness" },
      { href: "/experiences", label: "Experiences" },
      { href: "/events", label: "Events & Weddings" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    label: "The House",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/journal", label: "Journal" },
      { href: "/press", label: "Press" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Sitemap</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Every page, in one place." />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {sections.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div>
                  <p className="eyebrow mb-6">{s.label}</p>
                  <ul className="space-y-3">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="body transition-colors duration-300 hover:text-gold"
                          style={{ color: "var(--color-inktext)" }}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
