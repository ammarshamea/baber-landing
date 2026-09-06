"use client";

import { useState } from "react";
import {
  PACKAGES,
  BILLING_PERIODS,
  type BillingPeriodId,
  whatsappLink,
  packageMessage,
} from "@/src/config/site";

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriodId>("maand");
  const activePeriod = BILLING_PERIODS.find((p) => p.id === period)!;

  return (
    <section id="prijzen" className="relative border-t border-white/5 py-28 md:py-40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Prijzen</span>
          <h2 className="display-heading mt-7 text-[clamp(2.5rem,6vw,4.5rem)] text-white">
            Kies je <span className="accent-serif">pakket</span>
          </h2>
          <p className="mt-6 text-lg font-light text-white/55">
            Transparante prijzen, geen verrassingen. Afnemen doe je eenvoudig
            via WhatsApp — wij regelen de rest.
          </p>
        </div>

        {/* Periode-schakelaar */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Facturatieperiode"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {BILLING_PERIODS.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={period === p.id}
                onClick={() => setPeriod(p.id)}
                className={`rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  period === p.id
                    ? "bg-brand text-white shadow-[0_8px_30px_-8px_rgba(230,5,13,0.7)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pakketten */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((pkg) => {
            const price = pkg.prices[period];
            const href = whatsappLink(
              packageMessage(pkg.name, activePeriod.messageLabel, price)
            );
            const popular = pkg.mostPopular;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 ${
                  popular
                    ? "border-brand/50 bg-gradient-to-b from-brand/[0.14] to-white/[0.02] lg:-my-3 lg:pt-12"
                    : "border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01]"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    Meest gekozen
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-light text-white">
                    {pkg.name}
                  </h3>
                </div>
                <p className="mt-2 min-h-[48px] text-sm font-light leading-relaxed text-white/55">
                  {pkg.description}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-6xl font-extralight tracking-tight text-white">
                    €{price}
                  </span>
                  <span className="mb-2 text-sm font-light text-white/45">
                    {activePeriod.suffix}
                  </span>
                </div>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 w-full ${popular ? "btn-primary" : "btn-ghost"}`}
                >
                  Kies {pkg.name} via WhatsApp
                </a>

                <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light text-white/75">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand/15">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3 w-3 text-brand"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-light text-white/40">
          Alle bedragen in euro&apos;s. Aankoop verloopt via WhatsApp — je zit
          nergens direct aan vast.
        </p>
      </div>
    </section>
  );
}
