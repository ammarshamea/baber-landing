import Image from "next/image";
import { whatsappLink, CONTACT_WHATSAPP_MESSAGE } from "@/src/config/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Achtergrondbeeld */}
      <div className="absolute inset-0">
        <Image
          src="/nawa-hero.png"
          alt="Sfeervol, premium barbershop-interieur met zwarte leren stoelen en rode accentverlichting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/35 to-transparent" />
      </div>

      <div className="noise absolute inset-0" />

      {/* Inhoud */}
      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-4xl animate-fade-up">
          <span className="eyebrow mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Baber — door Nivx
          </span>

          <h1 className="display-heading text-[clamp(3rem,9vw,7rem)] text-white">
            Elke stoel.
            <br />
            Altijd <span className="accent-serif">volgeboekt.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/65 md:text-xl">
            Een eigen premium website mét directe online boekingen — zónder dat
            je klanten een account hoeven aan te maken. Van foto&apos;s en prijzen
            tot agenda, dashboard en meerdere vestigingen.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(CONTACT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start via WhatsApp
            </a>
            <a href="#werkwijze" className="btn-ghost">
              Onze werkwijze
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "0", v: "accounts nodig" },
              { k: "24/7", v: "online boeken" },
              { k: "∞", v: "vestigingen" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-light text-white">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm font-light text-white/50">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll-hint */}
      <a
        href="#over"
        aria-label="Scroll naar Over Baber"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/25">
          <span className="mt-2 h-2 w-1 animate-fade-in rounded-full bg-brand" />
        </span>
      </a>
    </section>
  );
}
