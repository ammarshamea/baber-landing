import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section className="relative border-t border-white/5 bg-neutral-950 py-28 md:py-40">
      <div className="container-x grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2">
        <Reveal className="bg-neutral-950 p-10 md:p-14">
          <span className="eyebrow">Onze visie</span>
          <h3 className="display-heading-md mt-7 text-[clamp(1.8rem,4vw,2.75rem)] text-white">
            Elke barbershop verdient een{" "}
            <span className="accent-serif">eigen podium.</span>
          </h3>
          <p className="mt-6 text-base font-light leading-relaxed text-white/55 md:text-lg">
            Online zichtbaar zijn zou geen luxe moeten zijn. Wij geloven in een
            wereld waarin elke shop — van één stoel tot een keten — er online net
            zo scherp uitziet als het werk dat er geleverd wordt.
          </p>
        </Reveal>

        <Reveal delay={120} className="bg-neutral-950 p-10 md:p-14">
          <span className="eyebrow">Onze missie</span>
          <h3 className="display-heading-md mt-7 text-[clamp(1.8rem,4vw,2.75rem)] text-white">
            Boeken zo simpel maken dat{" "}
            <span className="accent-serif">niemand afhaakt.</span>
          </h3>
          <p className="mt-6 text-base font-light leading-relaxed text-white/55 md:text-lg">
            We halen elke drempel weg tussen jouw klant en de stoel: geen
            accounts, geen gedoe. Eén website die boekingen binnenhaalt en jou de
            tools geeft om te groeien.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
