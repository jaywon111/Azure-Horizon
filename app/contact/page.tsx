import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Contact | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40">
      <Reveal>
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="display-1 mb-20 max-w-4xl"><BlurText text="We reply within the hour." /></h1>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-16">
        <Reveal>
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-3">Reservations</p>
              <p className="text-lg">+1 555 0199</p>
              <p className="text-lg">stay@azurehorizon.com</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Address</p>
              <p className="text-lg">100 Ocean Drive<br />Malibu, CA 90265</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Directions</p>
              <p className="body-lg">From LAX, take I-405 N to CA-1 N (Pacific Coast Highway). North 15 miles. Right onto Ocean Drive.</p>
            </div>
            <MagneticButton href="/rooms" primary>Reserve a Suite</MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <iframe
            src="https://www.google.com/maps?q=Malibu,CA&output=embed"
            width="100%"
            height="600"
            style={{ border: 0, filter: "grayscale(1) invert(0.9)", borderRadius: "16px" }}
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
