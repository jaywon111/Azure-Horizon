import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="section pt-40 min-h-screen flex flex-col justify-center items-center text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="display-1 mb-8">Lost in paradise.</h1>
      <p className="body-lg max-w-md mx-auto mb-10">The page you were looking for has drifted out to sea.</p>
      <MagneticButton href="/" primary>Return Home</MagneticButton>
    </section>
  );
}
