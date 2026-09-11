import { Reveal, BlurText } from "@/components/primitives";

export const metadata = { title: "Our Story | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Our Story</p>
        <h1 className="display-1 mb-20 max-w-5xl"><BlurText text="Built slowly. On purpose." /></h1>
      </Reveal>
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Reveal><p className="eyebrow">2019</p><p className="body-lg mt-2">The land is acquired</p></Reveal>
          <Reveal delay={0.1}><p className="eyebrow mt-10">2021</p><p className="body-lg mt-2">Ground is broken</p></Reveal>
          <Reveal delay={0.2}><p className="eyebrow mt-10">2023</p><p className="body-lg mt-2">The house opens</p></Reveal>
          <Reveal delay={0.3}><p className="eyebrow mt-10">2026</p><p className="body-lg mt-2">Forbes Five-Star</p></Reveal>
        </div>
        <div className="md:col-span-8 space-y-8">
          <Reveal><p className="body-lg text-xl" style={{ color: "var(--color-cream)" }}>We bought the land in 2019 — a forgotten stretch of cliff between two public beaches. The brief to our architect was one page: build something that looks like it has always been here.</p></Reveal>
          <Reveal delay={0.1}><p className="body-lg">It took four years and, at times, felt impossible. The cliff is unstable. The salt eats everything. We ended up with eleven engineers and one very patient stonemason.</p></Reveal>
          <Reveal delay={0.2}><p className="body-lg">What we built is a house, not a hotel. Twelve rooms. No lobby. No logo. A chef who cooks what the boats bring in. A spa you reach through a door in the cliff.</p></Reveal>
          <Reveal delay={0.3}><p className="body-lg">We don't advertise. Guests find us. They come back.</p></Reveal>
        </div>
      </div>
    </section>
  );
}
