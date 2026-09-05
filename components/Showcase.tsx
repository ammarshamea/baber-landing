import Image from "next/image";
import Reveal from "./Reveal";

const ITEMS = [
  {
    src: "/nawa-hero.png",
    tag: "Interieur",
    title: "The Black Chair — Amsterdam",
    body: "Cinematische shopfotografie die de sfeer meteen laat voelen.",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/nawa-cut.png",
    tag: "Vakmanschap",
    title: "Precision Fades — Rotterdam",
    body: "Portfolio dat de details van het werk laat spreken.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/nawa-tools.png",
    tag: "Detail",
    title: "The Grooming Bar — Utrecht",
    body: "Strakke productbeelden voor diensten en prijzen.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/booking-phone.png",
    tag: "Boeken",
    title: "Online agenda — mobiel",
    body: "Boeken zonder account, direct vanaf de telefoon.",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
];

export default function Showcase() {
  return (
    <section id="werk" className="relative border-t border-white/5 bg-neutral-950 py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="section-index">06</span>
              <span className="eyebrow">Voorbeelden</span>
            </div>
            <h2 className="display-heading mt-6 text-[clamp(2rem,5vw,3.5rem)] text-white">
              Hoe het eruit kan zien.
            </h2>
          </div>
          <p className="max-w-sm text-white/50">
            Een greep uit de sfeer en stijl die we voor barbershops neerzetten —
            jouw shop krijgt uiteraard z&apos;n eigen look.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 100} className={it.span}>
              <figure className="group relative overflow-hidden rounded-3xl border border-white/10">
                <div className={`relative ${it.ratio}`}>
                  <Image
                    src={it.src}
                    alt={`${it.title} — ${it.body}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                    {it.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{it.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
