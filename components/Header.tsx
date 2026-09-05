"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import {
  NAV_LINKS,
  whatsappLink,
  CONTACT_WHATSAPP_MESSAGE,
} from "@/src/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Baber — naar boven">
          <span className="font-display text-2xl font-semibold tracking-tightest text-white">
            Baber
          </span>
          <span className="hidden items-center gap-1.5 border-l border-white/15 pl-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45 sm:flex">
            door
            <Logo variant="white" width={62} height={16} className="translate-y-[1px] opacity-80" />
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdmenu">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(CONTACT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex"
          >
            Start via WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6" aria-label="Mobiel menu">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink(CONTACT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Start via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
