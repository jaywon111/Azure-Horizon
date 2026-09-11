import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GhostCursor from "@/components/GhostCursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "The Azure Horizon | Coastal Boutique Hotel, Malibu",
  description: "A quiet-luxury coastal retreat on the Pacific. Twelve suites, a subterranean spa, and a chef's table that changes with the tide.",
  openGraph: {
    title: "The Azure Horizon",
    description: "A quiet-luxury coastal retreat on the Pacific.",
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&h=630&q=80"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Resort",
              name: "The Azure Horizon",
              address: {
                "@type": "PostalAddress",
                streetAddress: "100 Ocean Drive",
                addressLocality: "Malibu",
                addressRegion: "CA",
                postalCode: "90265",
                addressCountry: "US",
              },
              telephone: "+1-555-0199",
              starRating: { "@type": "Rating", ratingValue: "5" },
            }),
          }}
        />
      </head>
      <body>
        <GhostCursor />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
