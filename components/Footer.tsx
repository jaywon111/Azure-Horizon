"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);

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

  return (
    <footer
      style={{
        background: "var(--color-ink)",
        borderTop: "1px solid rgba(245,241,232,0.08)",
      }}
    >
      <div className="container-wide py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
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

          {/* Stay */}
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

          {/* House */}
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

          {/* Company */}
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

          {/* Legal */}
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

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4"
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
