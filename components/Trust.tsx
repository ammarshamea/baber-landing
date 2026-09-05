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
    <section className="border-t border-white/5 py-20">
      <div className="container-x">
        <Reveal>
          <p className="label-muted text-center">
            Gemaakt voor barbershops door heel Nederland
          </p>
          <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="text-center font-display text-lg font-light tracking-tight text-white/25 transition-colors hover:text-white/55"
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
