export const metadata = { title: "Privacy | The Azure Horizon" };

export default function Page() {
  return (
    <>
      <section className="section-lg section-ink page-top">
        <div className="container">
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="display-2 max-w-3xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="section-lg section-cream">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <p className="body-lg">
              The Azure Horizon collects only what is necessary to deliver your stay: name,
              contact details, dates, and preferences.
            </p>
            <p className="body-lg">
              We do not sell, rent, or share your information with third parties for marketing
              purposes. Payment data is processed by our PCI-compliant partner and is never
              stored on our systems.
            </p>
            <p className="body-lg">
              Cookies are limited to functional and analytics. You may opt out of analytics at
              any time by contacting us.
            </p>
            <p className="body-lg">
              To request deletion of your data, email privacy@azurehorizon.com.
            </p>
            <p className="body" style={{ fontSize: "0.85rem", color: "var(--color-inkmuted)" }}>
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
