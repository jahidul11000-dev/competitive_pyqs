import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "../lib/data";
import { cn } from "../utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

function TopperCard({ t }: { t: Testimonial }) {
  return (
    <figure className="group w-[320px] shrink-0 rounded-3xl border border-ink-950/[0.07] bg-white p-6 shadow-[0_2px_16px_-6px_rgba(18,16,28,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300/70 hover:shadow-[0_30px_60px_-28px_rgba(76,52,192,0.4)] sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="rounded-full bg-ink-950 px-2.5 py-1 font-mono text-[10px] font-bold text-white">
          {t.rank}
        </span>
      </div>
      <blockquote className="mt-5 text-[15px] leading-relaxed text-ink-600">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-950/[0.06] pt-5">
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br font-display text-sm font-bold text-white shadow-lg",
            t.hue
          )}
        >
          {t.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-ink-950">{t.name}</p>
          <p className="truncate text-xs font-medium text-ink-400">{t.post}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const rowA = testimonials.slice(0, 4);
  const rowB = testimonials.slice(4);

  return (
    <section id="results" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-15%] top-[15%] h-[45vh] w-[45vh] rounded-full bg-brand-200/40 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Results, not claims"
          title={
            <>
              From PYQ practice to{" "}
              <span className="text-gradient-dark">joining letters</span>
            </>
          }
          sub="1,900+ selections in the 2024 cycle alone credit CGL PYQs as their primary practice ground. Here's what the merit list sounds like."
        />
      </div>

      {/* marquee rows */}
      <Reveal delay={0.2} className="mt-16 space-y-5">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((t, i) => (
              <TopperCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee-reverse gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((t, i) => (
              <TopperCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
