import { gallery } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Gallery | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Gallery</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="The house, in light." /></h1>
      </Reveal>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {gallery.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <img src={src} alt={`Gallery image ${i + 1}`} className="w-full rounded-2xl mb-4" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
