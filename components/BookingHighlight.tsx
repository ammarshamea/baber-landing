import Image from "next/image";
import Reveal from "./Reveal";
import { whatsappLink, CONTACT_WHATSAPP_MESSAGE } from "@/src/config/site";

export default function BookingHighlight() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-28 md:py-36">
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]"
        aria-hidden
      />
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow">De kern</span>
          <h2 className="display-heading mt-7 text-[clamp(2.25rem,5.5vw,4rem)] text-white">
            Boeken zonder account.
            <br />
            <span className="accent-serif">Klaar in seconden.</span>
          </h2>
          <p className="mt-7 text-lg font-light leading-relaxed text-white/65">
            De grootste rem op online afspraken? Verplicht registreren. Baber
            haalt die drempel weg: je klant kiest dienst, datum en tijd, en
            bevestigt direct. Geen account, geen wachtwoord, geen onnodige
            vragen.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Kies dienst, datum en tijdstip",
              "Direct bevestigen — zonder inloggen",
              "Automatische herinnering per bericht",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-light text-white/80">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand/15">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-brand" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(CONTACT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Vraag een demo aan
          </a>
        </Reveal>

        <Reveal delay={120} className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[520px]">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-40px_rgba(230,5,13,0.5)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/booking-phone.png"
                  alt="Smartphone toont de Baber-boekingsapp in het Nederlands met kalender, tijdslots en de knop Bevestig afspraak"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
