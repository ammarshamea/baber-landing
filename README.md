# Baber — landingspagina

**Baber** is een product van **[Nivx](https://nivx.nl)**: premium websites met
directe online boekingen voor barbershops. Dit is de Nederlandstalige
marketing-landingspagina.

Gebouwd met **Next.js (App Router)**, **TypeScript** en **Tailwind CSS**.
Volledig statisch, mobile-first, toegankelijk en snel.

---

## Aan de slag

```bash
npm install
npm run dev      # ontwikkelserver op http://localhost:3000
npm run build    # productie-build
npm run start    # productieserver (na build)
```

`npm install && npm run build` moet zonder fouten slagen.

---

## Aanpassen — alles op één plek

Bijna alle inhoud die je wilt wijzigen staat in **één bestand**:

```
src/config/site.ts
```

### 1. WhatsApp-nummer wijzigen

Aankopen en contact verlopen via WhatsApp. Pas de constante `WHATSAPP_NUMBER`
aan (internationaal formaat, **zonder** `+` of spaties):

```ts
// src/config/site.ts
export const WHATSAPP_NUMBER = "31600000000"; // 31 = NL landcode
```

Alle knoppen (elke pakketkeuze én de hoofd-CTA's) gebruiken dit nummer
automatisch via `https://wa.me/<nummer>?text=<bericht>` met een vooraf
ingevuld Nederlands bericht.

### 2. Prijzen & pakketten wijzigen

De pakketten (**Basis / Plus / Pro**) en periodes
(**1 maand / 6 maanden / 1 jaar**) staan in dezelfde config:

```ts
// src/config/site.ts
export const PACKAGES = [
  {
    id: "basis",
    name: "Basis",
    prices: { maand: 29, halfjaar: 149, jaar: 279 }, // <- bedragen in hele euro's
    features: [ /* ... */ ],
  },
  // Plus (mostPopular: true), Pro ...
];
```

- Wijzig de bedragen in `prices`.
- Zet `mostPopular: true` op het pakket dat je wilt uitlichten.
- Pas de periode-labels aan in `BILLING_PERIODS`.

De prijzen in de JSON-LD (SEO) staan in `app/layout.tsx` en kun je daar
gelijktrekken.

### 3. Logo verwisselen

De officiële Nivx-logo's staan in:

```
public/brand/nivx-white.svg   # wit — voor donkere achtergronden (gebruikt in de UI)
public/brand/nivx-white.png   # wit — PNG-variant
public/brand/nivx-color.svg   # kleur/zwart — voor lichte achtergronden
```

Vervang deze bestanden (behoud de bestandsnamen) om het logo te wisselen. De
component `components/Logo.tsx` kiest automatisch de juiste variant. Wil je een
andere standaardvariant of grootte, pas dan de `variant`/`width`/`height`-props
aan waar `<Logo />` wordt gebruikt (`Header.tsx`, `Footer.tsx`).

---

## Afbeeldingen

De sfeerbeelden staan in `public/`:

| Bestand              | Gebruik                          |
| -------------------- | -------------------------------- |
| `nawa-hero.png`      | Hero-achtergrond (luxe salon)    |
| `nawa-cut.png`       | Vakmanschap / close-up knippen   |
| `nawa-tools.png`     | Gereedschap flat-lay             |
| `booking-phone.png`  | Boekings-UI op telefoon          |

Vervang een bestand (zelfde naam) om het beeld te wisselen. Alle afbeeldingen
hebben Nederlandse `alt`-teksten voor toegankelijkheid en SEO.

---

## Projectstructuur

```
app/
  layout.tsx      # SEO-metadata, Open Graph, Twitter, JSON-LD, lang="nl"
  page.tsx        # samenstelling van alle secties
  globals.css     # Tailwind + basisstijlen
  robots.ts       # /robots.txt
  sitemap.ts      # /sitemap.xml
components/        # Header, Hero, About, Values, Process, BookingHighlight,
                  # Features, Showcase, Trust, Pricing, Contact, Footer, Logo, Reveal
src/config/site.ts # WhatsApp-nummer, prijzen, merk, navigatie
public/           # afbeeldingen + public/brand/ (logo's)
```

---

## Merk & kleuren (Nivx)

| Rol             | Kleur      |
| --------------- | ---------- |
| Zwart           | `#000000`  |
| Wit             | `#FFFFFF`  |
| Primair (rood)  | `#E6050D`  |

Kleuren zijn gedefinieerd in `tailwind.config.ts` (`brand`, `ink`, `paper`).

---

## SEO

- Nederlandse `title`, `description`, `keywords`
- Open Graph + Twitter Cards
- Canonical, robots, sitemap
- JSON-LD: `SoftwareApplication` + `Organization`
- Semantische headings en Nederlandse `alt`-teksten
- `lang="nl"` op `<html>`

Stel de publieke URL in via `SITE_URL` in `src/config/site.ts`.
