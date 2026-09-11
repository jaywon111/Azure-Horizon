import { events } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Events & Weddings | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Events & Weddings</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="Gather, quietly, at the edge of the Pacific." /></h1>
      </Reveal>
      <div className="space-y-8">
        {events.map((e, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="grid md:grid-cols-12 gap-8 items-center py-12 border-t border-white/10">
              <div className="md:col-span-4"><h3 className="display-2">{e.name}</h3></div>
              <div className="md:col-span-5"><p className="body-lg">{e.desc}</p></div>
              <div className="md:col-span-3 text-sm" style={{ color: "var(--color-gold)" }}>{e.capacity}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
