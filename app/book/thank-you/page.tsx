import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Reservation Received | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section-lg section-ink page-top" style={{ minHeight: "80vh" }}>
      <div className="container text-center flex flex-col items-center justify-center" style={{ minHeight: "60vh" }}>
        <Reveal>
          <p className="eyebrow mb-6">Received</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 max-w-3xl mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <BlurText text="Thank you." />
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="body-lg max-w-xl mb-10" style={{ marginLeft: "auto", marginRight: "auto" }}>
            A member of our reservations team will contact you within 15 minutes to confirm
            the details of your stay.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <MagneticButton href="/" primary>Return Home</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
