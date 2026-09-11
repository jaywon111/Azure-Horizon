export const metadata = { title: "Privacy | The Azure Horizon" };

export default function Page() {
  return (
    <section className="section pt-40 max-w-3xl">
      <p className="eyebrow mb-4">Legal</p>
      <h1 className="display-2 mb-12">Privacy Policy</h1>
      <div className="space-y-6 body-lg">
        <p>The Azure Horizon collects only what is necessary to deliver your stay: name, contact, dates, and preferences.</p>
        <p>We do not sell, rent, or share your information with third parties for marketing purposes. Payment data is processed by our PCI-compliant partner and is never stored on our systems.</p>
        <p>Cookies are limited to functional and analytics. You may opt out of analytics at any time by contacting us.</p>
        <p>To request deletion of your data, email privacy@azurehorizon.com.</p>
        <p className="text-sm" style={{ color: "var(--color-mist)" }}>Last updated: January 2026</p>
      </div>
    </section>
  );
}
