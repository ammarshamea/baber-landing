import Image from "next/image";
import Reveal from "./Reveal";

const ITEMS = [
  {
    src: "/nawa-hero.png",
    tag: "Salon",
    title: "The Black Chair",
    city: "Amsterdam",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/nawa-cut.png",
    tag: "Barbershop",
    title: "Precision Fades",
    city: "Rotterdam",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/nawa-tools.png",
    tag: "Grooming",
    title: "The Grooming Bar",
    city: "Utrecht",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/booking-phone.png",
    tag: "Boekingen",
    title: "Mobiel boeken",
    city: "Zonder account",
    ratio: "aspect-[4/3]",
  },
];

export default function Showcase() {
  return (
    <section
      id="werk"
      className="relative border-t border-white/5 bg-neutral-950 py-28 md:py-40"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow">Voorbeelden</span>
            <h2 className="display-heading mt-7 text-[clamp(2.5rem,6vw,4.5rem)] text-white">
              Geselecteerd <span className="accent-serif">werk</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-base font-light text-white/50">
              Een greep uit de sfeer en stijl die we voor barbershops neerzetten
              — jouw shop krijgt uiteraard z&apos;n eigen look.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 90}>
              <figure className="group">
                <div
                  className={`relative ${it.ratio} overflow-hidden rounded-3xl border border-white/10`}
                >
                  <Image
                    src={it.src}
                    alt={`${it.title} — ${it.tag} in ${it.city}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand/90">
                    {it.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-light text-white">
                    {it.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-light text-white/45">
                    {it.city}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
