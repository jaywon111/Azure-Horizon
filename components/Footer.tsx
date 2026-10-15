"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=34.0259&longitude=-118.7798&current=temperature_2m,weather_code&temperature_unit=celsius"
    )
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
        });
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const codeMap: Record<number, string> = {
    0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Cloudy",
    45: "Fog", 48: "Fog",
    51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
    61: "Rain", 63: "Rain", 65: "Heavy rain",
    71: "Snow", 73: "Snow", 75: "Heavy snow",
    80: "Showers", 81: "Showers", 82: "Heavy showers",
    95: "Storm", 96: "Storm", 99: "Storm",
  };

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      style={{
        background: "var(--color-ink)",
        borderTop: "1px solid rgba(245,241,232,0.08)",
      }}
    >
      <div className="container-wide py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">The Azure Horizon</p>
            <p className="body-lg mb-8" style={{ maxWidth: "28rem" }}>
              A quiet-luxury coastal retreat on the Pacific. Twelve suites, a
              subterranean spa, and a chef's table that changes with the tide.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:stay@azurehorizon.com"
                className="body transition-colors duration-300 hover:text-cream"
              >
                stay@azurehorizon.com
              </a>
              <a
                href="tel:+15550199"
                className="body transition-colors duration-300 hover:text-cream"
              >
                +1 555 0199
              </a>
              <p className="body">100 Ocean Drive, Malibu, CA 90265</p>

              {weather && (
                <p
                  className="body mt-4 flex items-center gap-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  <span style={{ color: "var(--color-gold)" }}>
                    {weather.temp}°
                  </span>
                  <span>Malibu · {codeMap[weather.code] || ""}</span>
                </p>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-6">Stay</p>
            <ul className="space-y-3">
              {[
                { href: "/rooms", label: "Suites & Villas" },
                { href: "/offers", label: "Offers" },
                { href: "/events", label: "Events & Weddings" },
                { href: "/book", label: "Reserve" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="body transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-6">House</p>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/dining", label: "Dining" },
                { href: "/spa", label: "Spa" },
                { href: "/journal", label: "Journal" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="body transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-6">Company</p>
            <ul className="space-y-3">
              {[
                { href: "/press", label: "Press" },
                { href: "/careers", label: "Careers" },
                { href: "/accessibility", label: "Accessibility" },
                { href: "/sitemap", label: "Sitemap" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="body transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-6">Legal</p>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "Privacy" },
                { href: "/sitemap", label: "All pages" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="body transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="mt-16 pt-12 grid md:grid-cols-2 gap-8 items-end"
          style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
        >
          <div>
            <p className="eyebrow mb-4">Letters from the house</p>
            <p className="body-lg max-w-md" style={{ fontSize: "1rem" }}>
              Occasional notes from Malibu — new menus, seasonal openings, and
              quiet stories. Never more than once a month.
            </p>
          </div>

          {subscribed ? (
            <div
              className="pb-4 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(201,169,110,0.4)" }}
            >
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-gold)" }}
              />
              <p className="body" style={{ color: "var(--color-gold)" }}>
                Thank you. We'll write soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubscribe}
              className="flex items-center gap-4 pb-4"
              style={{ borderBottom: "1px solid rgba(245,241,232,0.15)" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none body"
                style={{
                  color: "var(--color-cream)",
                  fontSize: "0.95rem",
                  padding: "0.5rem 0",
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-gold hover:text-ink flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "transparent",
                  border: "1px solid rgba(245,241,232,0.15)",
                  color: "var(--color-cream)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4"
          style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
        >
          <p
            className="text-xs tracking-wider uppercase"
            style={{ color: "rgba(245,241,232,0.4)" }}
          >
            © 2026 The Azure Horizon
          </p>
          <p
            className="text-xs tracking-wider uppercase"
            style={{ color: "rgba(245,241,232,0.4)" }}
          >
            Forbes Five-Star · Relais &amp; Châteaux
          </p>
        </div>
      </div>
    </footer>
  );
}
