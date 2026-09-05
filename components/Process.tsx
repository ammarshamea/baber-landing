import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Kennismaken",
    body: "Je stuurt ons een berichtje via WhatsApp. We bespreken je shop, je diensten en hoe je wilt werken.",
  },
  {
    n: "02",
    title: "Opbouwen",
    body: "Wij zetten jouw website op: foto's, diensten, prijzen, openingstijden en de online agenda — helemaal ingericht.",
  },
  {
    n: "03",
    title: "Live gaan",
    body: "We zetten de site live met je eigen adres, gekoppeld aan je socials en vindbaar in Google.",
  },
  {
    n: "04",
    title: "Volgeboekt raken",
    body: "Klanten boeken 24/7 online. Jij houdt overzicht via het dashboard, met herinneringen en rapportages.",
  },
];

export default function Process() {
  return (
    <section id="werkwijze" className="relative border-t border-white/5 py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="section-index">03</span>
            <span className="eyebrow">Werkwijze</span>
          </div>
          <h2 className="display-heading mt-6 text-[clamp(2rem,5vw,3.5rem)] text-white">
            Van berichtje tot volgeboekte agenda.
          </h2>
          <p className="mt-5 text-lg text-white/55">
            Vier heldere stappen. Geen technische kennis nodig — dat regelen wij.
          </p>
        </div>

        <ol className="mt-16 grid gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/40 font-display text-lg font-semibold text-brand">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-white/55">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
