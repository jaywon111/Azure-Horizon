"use client";
import { useState } from "react";
import { Reveal, BlurText } from "@/components/primitives";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 700);
  };

  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-5xl">
              <BlurText text="We reply within the hour." />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg mt-8 max-w-2xl">
              For reservations, press, events, or anything else — send us a note
              or call. A member of our team will respond personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Enquiry form */}
            <div>
              <p className="eyebrow mb-8">Send us a note</p>

              {sent ? (
                <div
                  className="p-8"
                  style={{
                    background: "var(--color-carbon)",
                    border: "1px solid rgba(245,241,232,0.1)",
                  }}
                >
                  <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>
                    Received
                  </p>
                  <h3 className="display-3 mb-4" style={{ color: "var(--color-cream)" }}>
                    Thank you.
                  </h3>
                  <p className="body" style={{ color: "rgba(245,241,232,0.7)" }}>
                    Your message has reached our team. We'll be in touch within 15
                    minutes during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8">
                  <Field label="Your name">
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      placeholder="+1 555 0100"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Message">
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="form-input"
                      style={{ resize: "vertical", minHeight: "140px" }}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="pill pill-primary"
                    style={{ opacity: submitting ? 0.6 : 1 }}
                  >
                    {submitting ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}

              {/* Contact details under the form */}
              <div
                className="mt-14 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
                style={{ borderTop: "1px solid rgba(26,26,29,0.15)" }}
              >
                <div>
                  <p className="eyebrow mb-3">Reservations</p>
                  <p className="body" style={{ color: "var(--color-inktext)" }}>
                    +1 555 0199
                  </p>
                  <p className="body" style={{ color: "var(--color-inktext)" }}>
                    stay@azurehorizon.com
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-3">Address</p>
                  <p className="body" style={{ color: "var(--color-inktext)" }}>
                    100 Ocean Drive
                    <br />
                    Malibu, CA 90265
                  </p>
                </div>
              </div>
            </div>

            {/* Map + directions */}
            <div>
              <p className="eyebrow mb-8">Find us</p>

              <div
                className="overflow-hidden mb-8"
                style={{ border: "1px solid rgba(26,26,29,0.15)" }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Malibu,CA&output=embed"
                  width="100%"
                  height="480"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.9) contrast(0.85)",
                    display: "block",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Azure Horizon location"
                />
              </div>

              <div
                className="pt-8"
                style={{ borderTop: "1px solid rgba(26,26,29,0.15)" }}
              >
                <p className="eyebrow mb-4">Directions from LAX</p>
                <p className="body">
                  Take I-405 N to CA-1 N (Pacific Coast Highway). North 15 miles.
                  Right onto Ocean Drive. We are the last house on the left.
                </p>
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
