import Reveal from "./Reveal";

const VALUES = [
  {
    n: "01",
    title: "Zonder drempels boeken",
    body: "Klanten boeken direct — geen account, geen wachtwoord, geen onnodige gegevens. Minder afhakers, meer afspraken.",
  },
  {
    n: "02",
    title: "Premium uitstraling",
    body: "Een donkere, cinematische look die vertrouwen wekt en past bij een shop die z'n vak serieus neemt.",
  },
  {
    n: "03",
    title: "Alles op één plek",
    body: "Foto's, diensten, prijzen, openingstijden en agenda — overzichtelijk samengebracht in één eigen website.",
  },
  {
    n: "04",
    title: "Gemaakt om te groeien",
    body: "Van één stoel tot meerdere vestigingen: Baber schaalt mee, met dashboard, rapportages en personeelsbeheer.",
  },
];

export default function Values() {
  return (
    <section className="relative border-t border-white/5 bg-neutral-950 py-28 md:py-36">
      <div className="container-x">
        <div className="flex items-center gap-4">
          <span className="section-index">02</span>
          <span className="eyebrow">Waar we voor staan</span>
        </div>
        <h2 className="display-heading mt-6 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-white">
          Vier principes die het verschil maken.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.n}
              delay={i * 80}
              className="group bg-neutral-950 p-8 transition-colors duration-500 hover:bg-neutral-900 md:p-11"
            >
              <span className="font-display text-5xl font-semibold text-white/10 transition-colors duration-500 group-hover:text-brand">
                {v.n}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-white/55">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
