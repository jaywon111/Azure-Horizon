import { experiences } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Experiences | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Experiences</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="The house arranges things. Quietly." /></h1>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((e, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="relative rounded-2xl overflow-hidden h-[520px] group">
              <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-ink), rgba(10,10,11,0.2) 50%, transparent)" }} />
              <div className="absolute bottom-0 p-10">
                <h3 className="text-3xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{e.title}</h3>
                <p className="body-lg max-w-md">{e.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
