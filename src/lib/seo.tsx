import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Sans_Arabic, Amiri } from "next/font/google";
import { BRAND, PACKAGE_PRICES_EUR, SITE_URL, BASE_PATH } from "@/src/config/site";
import { LOCALES, dirOf, localePath, type Dict, type Locale } from "@/src/i18n";
import nl from "@/src/i18n/nl";
import en from "@/src/i18n/en";
import ar from "@/src/i18n/ar";
import "@/app/globals.css";

export const DICTS: Record<Locale, Dict> = { nl, en, ar };

const sans = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["300", "400", "500", "600"], variable: "--font-ar", display: "swap", preload: false });
const arabicDisplay = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-ar-display", display: "swap", preload: false });

const url = (l: Locale) => `${SITE_URL}${localePath(l)}`;

export const viewport: Viewport = { themeColor: "#070707", width: "device-width", initialScale: 1 };

export function buildMetadata(locale: Locale): Metadata {
  const t = DICTS[locale].meta;
  const og = `${SITE_URL}/img/hero-1536.webp`;
  return {
    metadataBase: new URL(SITE_URL + "/"),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    applicationName: BRAND.product,
    authors: [{ name: BRAND.company, url: BRAND.companyUrl }],
    alternates: {
      canonical: url(locale),
      languages: { nl: url("nl"), en: url("en"), ar: url("ar"), "x-default": url("nl") },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      url: url(locale),
      siteName: BRAND.product,
      title: t.title,
      description: t.description,
      locale: LOCALES.find((l) => l.id === locale)!.og,
      alternateLocale: LOCALES.filter((l) => l.id !== locale).map((l) => l.og),
      images: [{ url: og, width: 1536, height: 1024, alt: t.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [og] },
    icons: { icon: [{ url: `${BASE_PATH}/brand/nivx-color.svg`, type: "image/svg+xml" }] },
  };
}

function jsonLd(locale: Locale) {
  const t = DICTS[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: BRAND.company,
        url: BRAND.companyUrl,
        email: BRAND.email,
        logo: `${SITE_URL}/brand/nivx-color.svg`,
      },
      {
        "@type": "SoftwareApplication",
        name: BRAND.product,
        url: url(locale),
        inLanguage: locale,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Barbershop booking software",
        operatingSystem: "Web",
        description: t.meta.description,
        publisher: { "@id": `${SITE_URL}/#org` },
        featureList: t.features.tabs.flatMap((x) => x.items).join(", "),
        offers: t.pricing.packages.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: PACKAGE_PRICES_EUR[p.id as keyof typeof PACKAGE_PRICES_EUR].month,
          priceCurrency: "EUR",
          description: p.desc,
        })),
      },
      {
        "@type": "FAQPage",
        inLanguage: locale,
        mainEntity: t.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function Document({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html
      lang={locale}
      dir={dirOf(locale)}
      className={`${sans.variable} ${serif.variable} ${arabic.variable} ${arabicDisplay.variable}`}
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
