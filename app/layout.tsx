import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND, SITE_URL } from "@/src/config/site";

const title = "Baber — Websites & online boekingen voor barbershops | Nivx";
const description =
  "Baber geeft jouw barbershop een eigen premium website met directe online boekingen — zónder dat klanten een account hoeven aan te maken. Inclusief diensten, prijzen, openingstijden, portfolio, SEO, dashboard en meerdere vestigingen.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Baber",
  },
  description,
  applicationName: "Baber",
  keywords: [
    "barbershop website",
    "online afspraken barbier",
    "kapper boekingssysteem",
    "barber booking software",
    "afspraken zonder account",
    "barbershop reserveren",
    "kappers website laten maken",
    "online agenda barbier",
    "Nivx",
    "Baber",
  ],
  authors: [{ name: BRAND.company }],
  creator: BRAND.company,
  publisher: BRAND.company,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Baber",
    title,
    description,
    images: [
      {
        url: "/nawa-hero.png",
        width: 1200,
        height: 630,
        alt: "Premium barbershop-interieur met zwarte leren stoelen — Baber",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/nawa-hero.png"],
  },
  icons: {
    icon: [{ url: "/brand/nivx-color.svg", type: "image/svg+xml" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.company,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/nivx-color.svg`,
      email: BRAND.email,
      slogan: BRAND.tagline,
    },
    {
      "@type": "SoftwareApplication",
      name: "Baber",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "nl-NL",
      offers: [
        {
          "@type": "Offer",
          name: "Basis",
          price: "29",
          priceCurrency: "EUR",
          description: "Baber Basis — per maand",
        },
        {
          "@type": "Offer",
          name: "Plus",
          price: "49",
          priceCurrency: "EUR",
          description: "Baber Plus — per maand",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "79",
          priceCurrency: "EUR",
          description: "Baber Pro — per maand",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
