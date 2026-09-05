import Image from "next/image";
import Reveal from "./Reveal";
import {
  whatsappLink,
  CONTACT_WHATSAPP_MESSAGE,
  BRAND,
} from "@/src/config/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-28 md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/nawa-hero.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[150px]"
        aria-hidden
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Klaar voor een fresh cut?
          </span>
          <h2 className="display-heading mt-7 text-[clamp(2.4rem,7vw,5rem)] text-white">
            Zet jouw shop
            <br />
            <span className="text-brand">vandaag online.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg text-white/65">
            Stuur ons een bericht via WhatsApp en we laten je zien hoe Baber jouw
            barbershop online laat knallen — met een agenda die zichzelf vult.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(CONTACT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Start via WhatsApp
            </a>
            <a href="#prijzen" className="btn-ghost text-base">
              Bekijk de pakketten
            </a>
          </div>

          <p className="mt-8 text-sm text-white/40">
            Of mail ons via{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="link-underline font-medium text-white/70"
            >
              {BRAND.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
