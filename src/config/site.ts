/**
 * =============================================================================
 *  BABER — centrale configuratie
 * =============================================================================
 *  Pas hier álles aan wat vaak verandert: WhatsApp-nummer, prijzen en merk.
 *  Je hoeft nergens anders in de code te zoeken.
 * =============================================================================
 */

/**
 * WhatsApp-nummer in internationaal formaat ZONDER "+" of spaties.
 * Voorbeeld Nederland: "31600000000"  (31 = landcode, daarna 6-nummer).
 * Dit nummer wordt gebruikt voor ALLE koop- en contactknoppen.
 */
export const WHATSAPP_NUMBER = "31600000000";

/** Publieke basis-URL van de site (voor SEO / canonical / sitemap). */
export const SITE_URL = "https://baber.nivx.nl";

export const BRAND = {
  product: "Baber",
  company: "Nivx",
  /** Korte pay-off die op meerdere plekken terugkomt. */
  tagline: "Websites & online boekingen voor barbershops",
  email: "hello@nivx.nl",
  city: "Amsterdam, Nederland",
} as const;

/**
 * Bouwt een WhatsApp-link met een vooraf ingevuld Nederlands bericht.
 * Gebruikt op elke koopknop en de hoofd-CTA.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Standaard contact-CTA (bovenaan / algemeen). */
export const CONTACT_WHATSAPP_MESSAGE =
  "Hoi Baber! Ik wil graag meer weten over een website met online boekingen voor mijn barbershop.";

/* -------------------------------------------------------------------------- */
/*  PRIJZEN                                                                    */
/*  Bedragen zijn EUR-placeholders — pas ze hier in één keer aan.              */
/* -------------------------------------------------------------------------- */

export type BillingPeriodId = "maand" | "halfjaar" | "jaar";

export interface BillingPeriod {
  id: BillingPeriodId;
  /** Label op de schakelknop. */
  label: string;
  /** Suffix achter de prijs, bv. "/ maand". */
  suffix: string;
  /** Naam van de periode in het WhatsApp-bericht. */
  messageLabel: string;
}

export const BILLING_PERIODS: BillingPeriod[] = [
  { id: "maand", label: "1 maand", suffix: "/ maand", messageLabel: "1 maand" },
  { id: "halfjaar", label: "6 maanden", suffix: "/ 6 mnd", messageLabel: "6 maanden" },
  { id: "jaar", label: "1 jaar", suffix: "/ jaar", messageLabel: "1 jaar" },
];

export interface Package {
  id: string;
  name: string;
  description: string;
  /** Prijs (in hele euro's) per periode-id. */
  prices: Record<BillingPeriodId, number>;
  features: string[];
  mostPopular?: boolean;
}

export const PACKAGES: Package[] = [
  {
    id: "basis",
    name: "Basis",
    description: "Alles om online te starten met één shop.",
    prices: { maand: 29, halfjaar: 149, jaar: 279 },
    features: [
      "Eigen website voor je shop",
      "Diensten & prijzen",
      "Openingstijden",
      "Online boeken zonder account",
      "Portfolio met foto's",
      "Social media-links",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    description: "Voor shops die willen groeien en meten.",
    prices: { maand: 49, halfjaar: 259, jaar: 479 },
    mostPopular: true,
    features: [
      "Alles uit Basis",
      "SEO voor je shop-site",
      "Admin-dashboard",
      "Personeelsbeheer",
      "Herinneringen & notificaties",
      "Omzet & rapportages",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Voor ketens met meerdere vestigingen.",
    prices: { maand: 79, halfjaar: 419, jaar: 749 },
    features: [
      "Alles uit Plus",
      "Meerdere vestigingen",
      "Uitgebreide rapportages per filiaal",
      "Prioriteit-support",
      "Onboarding op maat",
      "Extra maatwerk mogelijk",
    ],
  },
];

/** WhatsApp-bericht voor een specifiek pakket + periode. */
export function packageMessage(pkgName: string, periodLabel: string, price: number): string {
  return `Hoi Baber! Ik wil graag het ${pkgName}-pakket (${periodLabel}) afnemen voor mijn barbershop — €${price}. Kunnen jullie mij helpen?`;
}

export const NAV_LINKS = [
  { href: "#over", label: "Over" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#diensten", label: "Wat je krijgt" },
  { href: "#werk", label: "Voorbeelden" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#contact", label: "Contact" },
] as const;
