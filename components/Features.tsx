import Image from "next/image";
import Reveal from "./Reveal";

const FEATURES = [
  {
    n: "01",
    title: "Eigen website",
    body: "Een strakke, snelle site met jouw naam, jouw stijl en jouw eigen adres.",
  },
  {
    n: "02",
    title: "Shopfoto's",
    body: "Laat de sfeer van je zaak zien met een fotogalerij die klanten binnenhaalt.",
  },
  {
    n: "03",
    title: "Diensten & prijzen",
    body: "Overzichtelijke prijslijst met duur per behandeling — altijd actueel.",
  },
  {
    n: "04",
    title: "Openingstijden",
    body: "Duidelijke tijden, inclusief afwijkende dagen en feestdagen.",
  },
  {
    n: "05",
    title: "Online boeken zonder account",
    body: "Direct een afspraak maken — zonder registratie of extra gegevens.",
  },
  {
    n: "06",
    title: "Portfolio",
    body: "Toon je beste werk: fades, baarden en styling die voor zich spreken.",
  },
  {
    n: "07",
    title: "Social media",
    body: "Koppel Instagram, TikTok en meer, zodat volgers ook echt boeken.",
  },
  {
    n: "08",
    title: "SEO voor je shop",
    body: "Zo word je gevonden in Google als mensen zoeken naar een barbier in de buurt.",
  },
  {
    n: "09",
    title: "Admin-dashboard",
    body: "Beheer afspraken, diensten en teksten vanaf één overzichtelijke plek.",
  },
  {
    n: "10",
    title: "Personeelsbeheer",
    body: "Voeg barbiers toe, verdeel agenda's en koppel diensten aan je team.",
  },
  {
    n: "11",
    title: "Omzet & rapportages",
    body: "Zie in één oogopslag hoe je shop presteert, per periode en per vestiging.",
  },
  {
    n: "12",
    title: "Herinneringen & notificaties",
    body: "Minder no-shows dankzij automatische herinneringen aan je klanten.",
  },
  {
    n: "13",
    title: "Meerdere vestigingen",
    body: "Beheer al je filialen centraal, met eigen agenda's en teams per locatie.",
  },
];

export default function Features() {
  return (
    <section id="diensten" className="relative border-t border-white/5 py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span className="section-index">05</span>
              <span className="eyebrow">Wat je krijgt</span>
            </div>
            <h2 className="display-heading mt-6 text-[clamp(2rem,5vw,3.5rem)] text-white">
              Eén dienst. Alles inbegrepen.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/55">
              Baber is geen los stukje software, maar de complete online basis
              voor je barbershop — van eerste indruk tot herhaalbezoek.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.n}
              delay={(i % 3) * 80}
              className="group border-t border-white/10 pt-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand">
                  {f.n}
                </span>
                <span
                  className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-500 group-hover:bg-brand"
                  aria-hidden
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-white/55">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-[21/9]">
            <Image
              src="/nawa-tools.png"
              alt="Matzwarte barbiergereedschappen — tondeuse, schaar, kam en scheermes — netjes uitgelegd op zwarte leisteen"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
