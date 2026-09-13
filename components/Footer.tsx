import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-ink)", borderTop: "1px solid rgba(245,241,232,0.08)" }}>
      <div className="container-wide py-20 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-6">The Azure Horizon</p>
            <p className="body-lg mb-8" style={{ maxWidth: "28rem" }}>
              A quiet-luxury coastal retreat on the Pacific. Twelve suites, a subterranean spa,
              and a chef's table that changes with the tide.
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
            </div>
          </div>

          {/* Stay */}
          <div>
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
          <div>
            <p className="eyebrow mb-6">House</p>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/dining", label: "Dining" },
                { href: "/spa", label: "Spa" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy" },
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
