import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Repeat2, ScanSearch, Zap } from "lucide-react";
import { overlapChart } from "../lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const reasons = [
  {
    n: "01",
    icon: Repeat2,
    title: "SSC repeats concepts, not just questions",
    body: "71% of CGL 2024 Quant could be traced to PYQ concepts from 2018–23. The examiner has a favourite playlist — PYQs are it.",
  },
  {
    n: "02",
    icon: Crosshair,
    title: "Calibrate to the real difficulty",
    body: "Coaching mocks inflate difficulty to sell courses. PYQs are the only source that tells you exactly where the bar actually is.",
  },
  {
    n: "03",
    icon: ScanSearch,
    title: "Decode the examiner's blueprint",
    body: "Weightage shifts are visible only in PYQs — like Geometry quietly doubling since 2022 while Current Affairs thins out.",
  },
  {
    n: "04",
    icon: Zap,
    title: "Speed is just recognition",
    body: "Solving in 45 seconds what took 3 minutes isn't genius — it's having seen the pattern before. Seven times, ideally.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-[10%] h-[50vh] w-[50vh] animate-aurora rounded-full bg-amber-500/[0.07] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] bottom-[0%] h-[45vh] w-[45vh] animate-aurora-late rounded-full bg-brand-600/20 blur-[150px]"
      />
      <div className="noise pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* sticky heading column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              dark
              align="left"
              eyebrow="The topper's edge"
              title={
                <>
                  Why toppers solve PYQs{" "}
                  <span className="text-gradient">first</span> — and everything
                  else later
                </>
              }
              sub="Every serious rank-holder will tell you the same thing: the syllabus is huge, but the exam is predictable. The evidence is sitting in 25 years of papers."
            />
            <Reveal delay={0.2} className="mt-8">
              <a
                href="#showcase"
                className="group inline-flex items-center gap-2 text-sm font-bold text-brand-300 transition-colors hover:text-white"
              >
                See the three ways to practise them
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            {/* gold insight chart */}
            <Reveal delay={0.15} className="mt-12">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-bold text-white">
                    Concept overlap with earlier papers
                  </p>
                  <p className="font-mono text-[11px] font-semibold text-amber-300/80">
                    CGL Tier-I · Quant
                  </p>
                </div>
                <div className="mt-6 flex h-44 items-end gap-3 sm:gap-4">
                  {overlapChart.map((d, i) => (
                    <div
                      key={d.year}
                      className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="font-mono text-xs font-bold text-amber-300"
                      >
                        {d.pct}%
                      </motion.span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${d.pct * 0.85}%` }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full rounded-t-lg bg-gradient-to-t from-amber-500/40 via-amber-400/80 to-amber-300 shadow-[0_0_24px_-4px_rgba(251,191,36,0.5)]"
                      />
                      <span className="font-mono text-[10px] font-semibold text-white/40">
                        {d.year}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-white/[0.08] pt-4 text-xs leading-relaxed text-white/40">
                  Share of questions solvable directly from previous-year concepts,
                  measured across every shift. The trend only moves one way.
                </p>
              </div>
            </Reveal>
          </div>

          {/* numbered reasons */}
          <ol className="flex flex-col">
            {reasons.map((r, i) => (
              <li key={r.n} className="border-b border-white/[0.08] py-9 first:pt-0">
                <Reveal delay={i * 0.08} y={36}>
                  <div className="group flex gap-6 sm:gap-8">
                    <span className="font-mono text-sm font-bold text-brand-400/80 transition-colors duration-300 group-hover:text-amber-300">
                      {r.n}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <r.icon className="size-5 text-amber-300 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                        <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                          {r.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-300">
                        {r.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
            <li className="pt-9">
              <Reveal delay={0.1} y={20}>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_16px_40px_-12px_rgba(251,146,60,0.6)]">
                    <Zap className="size-6 text-ink-950" />
                  </span>
                  <p className="max-w-sm text-sm leading-relaxed text-white/55">
                    <span className="font-bold text-white">The compounding effect:</span>{" "}
                    every PYQ you solve makes the next paper 0.5% more familiar. 2,000
                    questions in, the exam has nowhere left to surprise you.
                  </p>
                </div>
              </Reveal>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
