import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Zet je site op",
    body: "Wij bouwen jouw website: foto's, diensten, prijzen, openingstijden en de online agenda — volledig ingericht en klaar voor gebruik.",
  },
  {
    n: "02",
    title: "Klanten boeken",
    body: "Bezoekers kiezen dienst, datum en tijd en bevestigen direct — zonder account, zonder gedoe, dag en nacht.",
  },
  {
    n: "03",
    title: "Beheer je salon",
    body: "Regel afspraken, personeel en teksten vanuit één overzichtelijk dashboard. Alles onder controle, op elk moment.",
  },
  {
    n: "04",
    title: "Groei verder",
    body: "Volg je omzet, stuur automatische herinneringen en breid moeiteloos uit naar meerdere vestigingen.",
  },
];

export default function Process() {
  return (
    <section
      id="werkwijze"
      className="relative border-t border-white/5 bg-neutral-950 py-28 md:py-40"
    >
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Werkwijze</span>
          <h2 className="display-heading mt-7 text-[clamp(2.5rem,6vw,4.5rem)] text-white">
            Onze <span className="accent-serif">werkwijze</span>
          </h2>
          <p className="mt-6 text-lg font-light text-white/55">
            Van eerste berichtje tot volgeboekte agenda — in vier heldere
            stappen. Technische kennis? Niet nodig, dat regelen wij.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 90}
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 transition-colors duration-500 hover:border-brand/40"
            >
              <span className="index-number text-6xl transition-colors duration-500 group-hover:text-brand/25">
                {s.n}
              </span>
              <div>
                <h3 className="text-xl font-normal text-white">{s.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
