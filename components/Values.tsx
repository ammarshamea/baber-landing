import Reveal from "./Reveal";

const VALUES = [
  {
    n: "01",
    title: "Eenvoud",
    body: "Boeken zonder drempels — geen account, geen wachtwoord, geen onnodige gegevens.",
  },
  {
    n: "02",
    title: "Vakmanschap",
    body: "Een donkere, cinematische uitstraling die past bij een shop die z'n vak serieus neemt.",
  },
  {
    n: "03",
    title: "Betrouwbaarheid",
    body: "Een stabiel systeem met herinneringen en notificaties waar jij en je klanten op rekenen.",
  },
  {
    n: "04",
    title: "Samenwerking",
    body: "We groeien mee met jouw shop, je team en je klanten — van eerste stoel tot keten.",
  },
  {
    n: "05",
    title: "Impact",
    body: "We meten succes niet in klikken, maar in volle agenda's en minder no-shows.",
  },
];

export default function Values() {
  return (
    <section className="relative border-t border-white/5 py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Waar we voor staan</span>
          <h2 className="display-heading mt-7 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] text-white">
            Onze <span className="accent-serif">waarden</span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-white/10">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.n}
              delay={i * 70}
              className="group grid grid-cols-1 items-center gap-4 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="md:col-span-2">
                <span className="index-number text-5xl transition-colors duration-500 group-hover:text-brand/30 md:text-6xl">
                  {v.n}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-light text-brand md:text-3xl">
                  {v.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="max-w-xl text-base font-light leading-relaxed text-white/55 md:text-lg">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
