import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="over" className="relative border-t border-white/5 py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Over Baber</span>
          <h2 className="display-heading mt-7 text-[clamp(2.5rem,7vw,5rem)] text-white">
            Over <span className="accent-serif">Baber</span>
          </h2>
          <div className="mt-8 h-px w-24 bg-brand/60" />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-xl font-light leading-relaxed text-white/80 md:text-[1.7rem] md:leading-[1.5]">
                Jij bent op je best met een schaar in je hand — niet met een
                telefoon die blijft rinkelen of een agenda vol krassen.
              </p>
              <p className="mt-7 text-base font-light leading-relaxed text-white/55 md:text-lg">
                Baber geeft jouw barbershop één strakke website met alles wat een
                klant nodig heeft om te kiezen en te boeken. Geen ingewikkelde
                systemen, geen accounts, geen gedoe. Alleen een uitstraling die
                past bij je vak.
              </p>
              <p className="mt-5 text-base font-light leading-relaxed text-white/55 md:text-lg">
                Van foto&apos;s, diensten en prijzen tot een online agenda,
                dashboard en meerdere vestigingen — wij nemen het regelwerk over,
                zodat jij je kunt richten op de stoel. En een agenda die zichzelf
                vult.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/nawa-cut.png"
                    alt="Barbier knipt met een schaar en kam het haar van een klant onder sfeervolle belichting"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
