import { gallery } from "@/lib/data";
import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Gallery | The Azure Horizon" };

export default function Page() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Gallery</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="The house, in light." />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-ink" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {gallery.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="rounded-2xl overflow-hidden group">
                  <img
                    src={src}
                    alt={`Azure Horizon gallery image ${i + 1}`}
                    className="w-full transition-transform duration-1000 group-hover:scale-105"
                    style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
