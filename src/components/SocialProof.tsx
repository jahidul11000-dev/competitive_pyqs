import { stats } from "../lib/data";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";

export function SocialProof() {
  return (
    <section aria-label="Platform statistics" className="relative border-b border-ink-950/[0.06] bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.09} className="group">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-4 top-1 hidden h-full w-px bg-gradient-to-b from-brand-500/50 to-transparent lg:block"
                />
                <p className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-[2.75rem]">
                  <CountUp to={s.value} format={s.format} />
                  <span className="text-gradient-dark">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm font-bold text-ink-800">{s.label}</p>
                <p className="mt-1 max-w-[22ch] text-[13px] leading-snug text-ink-400">
                  {s.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
