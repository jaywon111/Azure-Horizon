import { dining } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Dining | The Azure Horizon" };

export default function DiningPage() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Dining</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="Three kitchens. One tide." /></h1>
      </Reveal>
      {dining.map((d, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="grid md:grid-cols-2 gap-12 items-center py-16 border-t border-white/10">
            <img src={d.image} alt={d.name} className="w-full h-[500px] object-cover rounded-2xl" />
            <div>
              <p className="eyebrow mb-4">{d.hours}</p>
              <h2 className="display-2 mb-6">{d.name}</h2>
              <p className="body-lg">{d.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
