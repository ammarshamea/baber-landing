import Reveal from "./Reveal";

const LOGOS = [
  "Fade & Co.",
  "The Black Chair",
  "Kapper 040",
  "Sharp Barbers",
  "Heren Salon",
  "Blade & Beard",
];

export default function Trust() {
  return (
    <section className="border-t border-white/5 py-16">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
            Gemaakt voor barbershops door heel Nederland
          </p>
          <div className="mt-9 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="text-center font-display text-lg font-semibold tracking-tight text-white/30 transition-colors hover:text-white/60"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
