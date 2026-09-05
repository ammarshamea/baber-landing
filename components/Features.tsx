import Image from "next/image";
import Reveal from "./Reveal";

interface Service {
  n: string;
  title: string;
  body: string;
  image?: string;
  alt?: string;
}

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Eigen website",
    body: "Een strakke, snelle site met jouw naam, jouw stijl en jouw eigen adres — cinematisch en volledig op maat.",
    image: "/nawa-hero.png",
    alt: "Premium barbershop-interieur met zwarte leren stoelen en rode accentverlichting",
  },
  {
    n: "02",
    title: "Online boeken zonder account",
    body: "Klanten kiezen dienst, datum en tijd en bevestigen direct. Geen registratie, geen wachtwoord, geen afhakers.",
  },
  {
    n: "03",
    title: "Diensten, prijzen & agenda",
    body: "Een overzichtelijke prijslijst met duur per behandeling, gekoppeld aan een online agenda die altijd klopt.",
  },
  {
    n: "04",
    title: "Portfolio & shopfoto's",
    body: "Toon de sfeer van je zaak en je beste werk: fades, baarden en styling die voor zich spreken.",
    image: "/nawa-tools.png",
    alt: "Matzwarte barbiergereedschappen — tondeuse, schaar, kam en scheermes — op zwarte leisteen",
  },
  {
    n: "05",
    title: "Dashboard & personeel",
    body: "Beheer afspraken, teksten en je team vanuit één plek. Verdeel agenda's en koppel diensten aan barbiers.",
  },
  {
    n: "06",
    title: "SEO, groei & meerdere vestigingen",
    body: "Word gevonden in Google, volg je omzet met rapportages en breid uit naar meerdere filialen.",
  },
];

const INCLUDED = [
  "Shopfoto's",
  "Diensten & prijzen",
  "Openingstijden",
  "Online boeken zonder account",
  "Portfolio",
  "Social media-links",
  "SEO voor je shop",
  "Admin-dashboard",
  "Personeelsbeheer",
  "Omzet & rapportages",
  "Herinneringen & notificaties",
  "Meerdere vestigingen",
];

export default function Features() {
  return (
    <section id="diensten" className="relative border-t border-white/5 py-28 md:py-40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Wat je krijgt</span>
          <h2 className="display-heading mt-7 text-[clamp(2.5rem,6vw,4.5rem)] text-white">
            Eén dienst.
            <br />
            <span className="accent-serif">Alles inbegrepen.</span>
          </h2>
          <p className="mt-6 text-lg font-light text-white/55">
            Baber is geen los stukje software, maar de complete online basis voor
            je barbershop — van eerste indruk tot herhaalbezoek.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.n}
              delay={(i % 2) * 100}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] transition-colors duration-500 hover:border-brand/40"
            >
              {s.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt ?? s.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="index-number absolute left-8 top-6 text-6xl text-white/20">
                    {s.n}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-8 md:p-10">
                {!s.image && (
                  <span className="index-number text-6xl transition-colors duration-500 group-hover:text-brand/25">
                    {s.n}
                  </span>
                )}
                <h3 className={`text-2xl font-normal text-white ${s.image ? "" : "mt-6"}`}>
                  {s.title}
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-white/55">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Volledige lijst met inbegrepen mogelijkheden */}
        <Reveal className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <p className="label-muted">Inbegrepen — bij elk pakket</p>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f) => (
              <li key={f} className="flex items-start gap-3 text-white/75">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand/15">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-light">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
