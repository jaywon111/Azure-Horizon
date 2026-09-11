import { offers } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Offers | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Offers</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="Considered stays." /></h1>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((o, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: "var(--color-carbon)" }}>
              <img src={o.image} alt={o.name} className="w-full h-64 object-cover" />
              <div className="p-8">
                <p className="eyebrow mb-3">{o.nights} nights · from ${o.from}</p>
                <h3 className="text-2xl mb-4" style={{ fontFamily: "var(--font-display)" }}>{o.name}</h3>
                <p className="body-lg">{o.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
