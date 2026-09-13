"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal, BlurText } from "@/components/primitives";
import MagneticButton from "@/components/MagneticButton";
import { rooms } from "@/lib/data";

export default function BookPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => router.push("/book/thank-you"), 600);
  };

  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Reservations</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-4xl">
              <BlurText text="Reserve your stay." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              Send us your dates and we'll confirm within 15 minutes. No deposit is taken
              online — everything is arranged by a member of our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dates */}
                <div>
                  <p className="eyebrow mb-6">1 · Your Stay</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Arrival">
                      <input type="date" required className="input" />
                    </Field>
                    <Field label="Departure">
                      <input type="date" required className="input" />
                    </Field>
                  </div>
                </div>

                {/* Guests & Room */}
                <div>
                  <p className="eyebrow mb-6">2 · Details</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Guests">
                      <select required className="input" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5+">5+ guests</option>
                      </select>
                    </Field>
                    <Field label="Suite">
                      <select required className="input" defaultValue="">
                        <option value="" disabled>Select</option>
                        {rooms.map((r) => (
                          <option key={r.slug} value={r.slug}>
                            {r.name} — from ${r.price}
                          </option>
                        ))}
                        <option value="undecided">Not sure yet</option>
                      </select>
                    </Field>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <p className="eyebrow mb-6">3 · Your Details</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Full name">
                      <input type="text" required placeholder="Jane Doe" className="input" />
                    </Field>
                    <Field label="Email">
                      <input type="email" required placeholder="jane@example.com" className="input" />
                    </Field>
                    <Field label="Phone">
                      <input type="tel" required placeholder="+1 555 0100" className="input" />
                    </Field>
                    <Field label="Country">
                      <input type="text" placeholder="United States" className="input" />
                    </Field>
                  </div>
                </div>

                {/* Requests */}
                <div>
                  <p className="eyebrow mb-6">4 · Special Requests</p>
                  <Field label="Anything we should know?">
                    <textarea
                      rows={5}
                      placeholder="Anniversary, dietary preferences, airport transfer…"
                      className="input"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </Field>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="pill pill-primary"
                    style={{ opacity: submitting ? 0.6 : 1 }}
                  >
                    {submitting ? "Sending…" : "Send reservation request"}
                  </button>
                  <p className="body" style={{ fontSize: "0.85rem" }}>
                    No deposit taken online.
                  </p>
                </div>
              </form>
            </div>

            {/* Side panel */}
            <div className="md:col-span-4">
              <div
                className="p-8 rounded-2xl sticky md:top-32"
                style={{ background: "var(--color-carbon)", border: "1px solid rgba(245,241,232,0.08)" }}
              >
                <p className="eyebrow mb-6">What happens next</p>
                <ul className="space-y-5">
                  {[
                    "A member of our team reviews your request.",
                    "We confirm availability and reply within 15 minutes.",
                    "You receive a private booking link and welcome note.",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="text-xs tracking-widest"
                        style={{ color: "var(--color-gold)", minWidth: "1.5rem" }}
                      >
                        0{i + 1}
                      </span>
                      <span className="body" style={{ color: "var(--color-cream)" }}>
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="hairline my-8" />

                <p className="eyebrow mb-3">Prefer to call?</p>
                <a
                  href="tel:+15550199"
                  className="heading transition-colors duration-300 hover:text-gold"
                >
                  +1 555 0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local styles for form fields */}
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: var(--color-carbon);
          border: 1px solid rgba(245,241,232,0.12);
          border-radius: 12px;
          color: var(--color-cream);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 0.3s ease, background 0.3s ease;
          outline: none;
        }
        .input::placeholder { color: rgba(245,241,232,0.3); }
        .input:focus {
          border-color: var(--color-gold);
          background: var(--color-graphite);
        }
        .section-cream .input {
          background: var(--color-parch);
          border-color: rgba(26,26,29,0.15);
          color: var(--color-inktext);
        }
        .section-cream .input::placeholder { color: rgba(26,26,29,0.4); }
        .section-cream .input:focus {
          border-color: var(--color-inktext);
          background: var(--color-cream);
        }
        select.input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23C9A96E' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.25rem center;
          padding-right: 3rem;
        }
        input[type="date"].input::-webkit-calendar-picker-indicator {
          filter: invert(0.7) sepia(1) saturate(3) hue-rotate(5deg);
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span
        className="block mb-2 text-xs tracking-wider uppercase"
        style={{ color: "var(--color-inkmuted)" }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
