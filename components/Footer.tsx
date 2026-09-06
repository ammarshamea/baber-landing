import Logo from "./Logo";
import { NAV_LINKS, BRAND, whatsappLink, CONTACT_WHATSAPP_MESSAGE } from "@/src/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-light tracking-tight text-white">
                Baber
              </span>
              <span className="flex items-center gap-1.5 border-l border-white/15 pl-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
                door
                <Logo variant="white" width={60} height={15} className="translate-y-[1px] opacity-80" />
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/50">
              {BRAND.tagline}. Baber is een product van {BRAND.company} — premium
              websites met directe online boekingen voor de moderne barbershop.
            </p>
            <a
              href={whatsappLink(CONTACT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Start via WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <h3 className="label-muted">Navigatie</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm font-light text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label-muted">Contact</h3>
            <ul className="mt-6 space-y-3 text-sm font-light text-white/65">
              <li>
                <a href={`mailto:${BRAND.email}`} className="link-underline hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li>{BRAND.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {BRAND.company}. Alle rechten voorbehouden.
          </p>
          <p>Baber — {BRAND.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
