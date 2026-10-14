import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Accessibility | The Azure Horizon",
  description: "Our commitment to accessibility at The Azure Horizon.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Accessibility</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="Everyone is welcome here." />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container max-w-3xl">
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-4">Our commitment</p>
              <p className="body-lg">
                The Azure Horizon is committed to providing an experience that is
                accessible to all guests, regardless of ability. We continuously
                review our property, digital platforms, and service standards
                against WCAG 2.1 AA and the ADA.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">The property</p>
              <ul className="space-y-3 body-lg">
                <li>· The Garden Villa and The Cliff House are step-free and fully accessible.</li>
                <li>· The Ocean Suite is reached by a single flight of stairs. A lift is available on request.</li>
                <li>· Dining, spa, and grounds are accessible via ramps or lifts.</li>
                <li>· Two accessible parking spaces are available at the main entrance.</li>
                <li>· Service animals are welcome throughout the property.</li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">The website</p>
              <p className="body-lg">
                This website is designed to meet WCAG 2.1 AA. If you encounter any
                barrier while using it, please let us know — we fix these quickly
                and personally. Full keyboard navigation is supported. Motion is
                reduced automatically if your device prefers it.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Reaching us</p>
              <p className="body-lg mb-6">
                If you have a specific accessibility requirement, please contact us
                before your stay and we will arrange everything in advance.
              </p>
              <MagneticButton href="/contact" primary>
                Contact us
              </MagneticButton>
            </div>

            <p
              className="body"
              style={{ fontSize: "0.8rem", color: "var(--color-inkmuted)", paddingTop: "2rem" }}
            >
              Last reviewed: January 2026 · Next review: January 2027
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
