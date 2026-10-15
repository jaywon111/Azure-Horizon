"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal, BlurText } from "@/components/primitives";
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
              Send us your dates and we'll confirm within 15 minutes. No deposit is
              taken online — everything is arranged by a member of our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <p className="eyebrow mb-6">1 · Your Stay</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Arrival">
                      <input type="date" required className="form-input" />
                    </Field>
                    <Field label="Departure">
                      <input type="date" required className="form-input" />
                    </Field>
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-6">2 · Details</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Guests">
                      <select required className="form-input" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5+">5+ guests</option>
                      </select>
                    </Field>
                    <Field label="Suite">
                      <select required className="form-input" defaultValue="">
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

                <div>
                  <p className="eyebrow mb-6">3 · Your Details</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Full name">
                      <input type="text" required placeholder="Jane Doe" className="form-input" />
                    </Field>
                    <Field label="Email">
                      <input type="email" required placeholder="jane@example.com" className="form-input" />
                    </Field>
                    <Field label="Phone">
                      <input type="tel" required placeholder="+1 555 0100" className="form-input" />
                    </Field>
                    <Field label="Country">
                      <input type="text" placeholder="United States" className="form-input" />
                    </Field>
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-6">4 · Special Requests</p>
                  <Field label="Anything we should know?">
                    <textarea
                      rows={5}
                      placeholder="Anniversary, dietary preferences, airport transfer…"
                      className="form-input"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </Field>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-6">
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

            <div className="md:col-span-4">
              <div
                className="lg:sticky lg:top-32"
                style={{
                  background: "var(--color-carbon)",
                  border: "1px solid rgba(245,241,232,0.08)",
                  padding: "2rem",
                }}
              >
                <p className="eyebrow mb-8">What happens next</p>
                <ul className="space-y-7">
                  {[
                    "A member of our team reviews your request.",
                    "We confirm availability and reply within 15 minutes.",
                    "You receive a private booking link and welcome note.",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-5">
                      <span
                        className="text-xs tracking-widest pt-1"
                        style={{ color: "var(--color-gold)", minWidth: "1.75rem" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="body"
                        style={{ color: "var(--color-cream)", lineHeight: 1.6 }}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="hairline my-8"
                  style={{ background: "rgba(245,241,232,0.08)" }}
                />

                <p className="eyebrow mb-4">Prefer to call?</p>
                <a
                  href="tel:+15550199"
                  className="heading transition-colors duration-300 hover:text-gold"
                  style={{ fontSize: "1.35rem" }}
                >
                  +1 555 0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
