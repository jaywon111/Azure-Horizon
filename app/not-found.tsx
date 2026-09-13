import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="section-lg section-ink page-top" style={{ minHeight: "80vh" }}>
      <div className="container text-center flex flex-col items-center justify-center" style={{ minHeight: "60vh" }}>
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="display-1 max-w-3xl mb-8" style={{ marginLeft: "auto", marginRight: "auto" }}>
          Lost in paradise.
        </h1>
        <p className="body-lg max-w-xl mb-10" style={{ marginLeft: "auto", marginRight: "auto" }}>
          The page you were looking for has drifted out to sea.
        </p>
        <MagneticButton href="/" primary>Return Home</MagneticButton>
      </div>
    </section>
  );
}
