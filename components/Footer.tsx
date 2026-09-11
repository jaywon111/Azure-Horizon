import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-[6vw] py-16">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <p className="eyebrow mb-4">The Azure Horizon</p>
          <p className="body-lg max-w-md">
            100 Ocean Drive, Malibu, CA 90265<br />
            +1 555 0199 · stay@azurehorizon.com
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Stay</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--color-mist)" }}>
            <li><Link href="/rooms" className="hover:text-cream">Suites</Link></li>
            <li><Link href="/offers" className="hover:text-cream">Offers</Link></li>
            <li><Link href="/events" className="hover:text-cream">Events</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">House</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--color-mist)" }}>
            <li><Link href="/about" className="hover:text-cream">Story</Link></li>
            <li><Link href="/privacy" className="hover:text-cream">Privacy</Link></li>
            <li><Link href="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--color-mist)", opacity: 0.6 }}>© 2026 The Azure Horizon. All rights reserved.</p>
        <p className="text-xs" style={{ color: "var(--color-mist)", opacity: 0.6 }}>Forbes Five-Star · Relais & Châteaux</p>
      </div>
    </footer>
  );
}
