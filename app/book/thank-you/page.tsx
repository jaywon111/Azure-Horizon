import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = { title: "Reservation Received | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40 min-h-screen flex flex-col justify-center items-center text-center">
      <Reveal>
        <p className="eyebrow mb-6">Received</p>
        <h1 className="display-1 mb-10 max-w-4xl"><BlurText text="Thank you. We'll be in touch." /></h1>
        <p className="body-lg max-w-xl mx-auto mb-10">A member of our reservations team will contact you within 15 minutes to confirm the details.</p>
        <MagneticButton href="/" primary>Return Home</MagneticButton>
      </Reveal>
    </section>
  );
}
