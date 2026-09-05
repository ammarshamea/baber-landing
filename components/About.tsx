import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="over" className="relative border-t border-white/5 py-28 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <span className="section-index">01</span>
              <span className="eyebrow">Over Baber</span>
            </div>
            <h2 className="display-heading mt-6 text-[clamp(2rem,5vw,3.5rem)] text-white">
              Vakmanschap in de stoel.
              <br />
              <span className="text-white/45">Rust eromheen.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-white/75 md:text-2xl">
              Jij bent op je best met een schaar in je hand — niet met een
              telefoon die blijft rinkelen of een agenda vol krassen. Baber
              neemt het regelwerk over, zodat jouw shop online net zo scherp
              oogt als jouw fades.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              We bouwen één strakke website voor jouw barbershop, met alles wat
              een klant nodig heeft om te kiezen en te boeken. Geen ingewikkelde
              systemen, geen accounts, geen gedoe. Alleen een uitstraling die
              past bij je vak — en een agenda die zichzelf vult.
            </p>

            <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/nawa-cut.png"
                  alt="Barbier knipt met een schaar en kam het haar van een klant onder sfeervolle belichting"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
