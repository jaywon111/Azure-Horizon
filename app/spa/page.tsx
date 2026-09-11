import { spa } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";
import AccordionGallery from "@/components/AccordionGallery";

export const metadata = { title: "Spa | The Azure Horizon" };

export default function SpaPage() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Wellness</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="A spa carved into the cliff." /></h1>
      </Reveal>
      <AccordionGallery items={spa} />
      <div className="grid md:grid-cols-3 gap-12 mt-24">
        {spa.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="eyebrow mb-3">{s.duration} · ${s.price}</p>
            <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.name}</h3>
            <p className="body-lg">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
