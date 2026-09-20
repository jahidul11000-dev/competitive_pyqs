import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BookMarked,
  Cpu,
  Languages,
  Layers,
  MonitorPlay,
} from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const card =
  "group relative overflow-hidden rounded-3xl border border-ink-950/[0.06] bg-white p-7 shadow-[0_2px_16px_-6px_rgba(18,16,28,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300/70 hover:shadow-[0_36px_70px_-32px_rgba(76,52,192,0.4)]";

const iconBox =
  "grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-violet-100 text-brand-700 shadow-[inset_0_0_0_1px_rgba(106,93,240,0.15)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110";

function MasteryBar({ label, count, pct, color, delay }: { label: string; count: string; pct: number; color: string; delay: number }) {
  return (
    <div className="rounded-2xl border border-ink-950/[0.06] bg-paper-soft p-4">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-bold text-ink-900">{label}</p>
        <p className="font-mono text-[11px] font-semibold text-ink-400">{count} PYQs</p>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-950/[0.07]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
      <p className="mt-1.5 text-[11px] font-semibold text-ink-400">
        <span className="text-ink-800">{pct}%</span> mastered
      </p>
    </div>
  );
}

function BilingualMini() {
  const [hindi, setHindi] = useState(false);
  return (
    <div className="rounded-2xl border border-ink-950/[0.06] bg-paper-soft p-4">
      <div className="flex w-fit rounded-full border border-ink-950/[0.07] bg-white p-0.5 text-[10px] font-bold">
        {(["English", "हिंदी"] as const).map((l, i) => (
          <button
            key={l}
            type="button"
            onClick={() => setHindi(i === 1)}
            aria-pressed={hindi === (i === 1)}
            className={cn(
              "rounded-full px-3 py-1 transition-all duration-300",
              hindi === (i === 1) ? "bg-ink-950 text-white shadow" : "text-ink-400 hover:text-ink-950"
            )}
          >
            {l}
          </button>
        ))}
      </div>
      <p className="mt-3 min-h-[56px] text-[13px] leading-relaxed text-ink-600" lang={hindi ? "hi" : "en"}>
        {hindi
          ? "शॉर्टकट: LCM(12, 18) = 36 इकाई कार्य। A = 3/दिन, B = 2/दिन → साथ में 5/दिन ⇒ 36 ÷ 5 = 7.2 दिन।"
          : "Shortcut: LCM(12, 18) = 36 units. A = 3/day, B = 2/day → together 5/day ⇒ 36 ÷ 5 = 7.2 days."}
      </p>
      <p className="text-[11px] font-semibold text-brand-600">Topper's 8-second method · step-verified</p>
    </div>
  );
}

const sparkBars = [38, 46, 41, 56, 62, 58, 74, 82, 78, 91];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full bg-brand-200/30 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The PYQ operating system"
          title={
            <>
              Everything between{" "}
              <span className="text-gradient-dark">paper and posting</span>,
              engineered
            </>
          }
          sub="Not another question bank. A complete practice system built around the only material SSC keeps repeating — its own previous year questions."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Card 1 — full mocks */}
          <Reveal className="lg:col-span-7" y={40}>
            <article className={cn(card, "h-full")}>
              <div className="flex items-start justify-between gap-4">
                <div className={iconBox}>
                  <MonitorPlay className="size-5" strokeWidth={2} />
                </div>
                <ArrowUpRight className="size-5 text-ink-200 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-500" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-950">
                Full-length mocks that feel like the real hall
              </h3>
              <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-ink-500">
                320+ authentic Tier-I &amp; Tier-II papers, reproduced shift-by-shift with
                the genuine SSC interface — the 60-minute clock, −0.50 negative marking,
                palette and all. Exam day will feel like just another mock.
              </p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  { name: "CGL Tier-I 2024 · Shift 2", meta: "100 Qs · 200 marks · 60 min", tag: "Best 172.5 · AIR 96" },
                  { name: "CGL Tier-II 2023 · Paper 1", meta: "150 Qs · 450 marks · sectional", tag: "Best 341 · 99.1 %ile" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="rounded-2xl border border-ink-950/[0.06] bg-paper-soft p-4 transition-colors duration-300 group-hover:border-brand-200/60"
                  >
                    <p className="text-sm font-bold text-ink-900">{p.name}</p>
                    <p className="mt-1 font-mono text-[11px] text-ink-400">{p.meta}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                        {p.tag}
                      </span>
                      <span className="text-[11px] font-bold text-brand-600">Re-attempt →</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Card 2 — chapter drills */}
          <Reveal className="lg:col-span-5" delay={0.1} y={40}>
            <article className={cn(card, "h-full")}>
              <div className="flex items-start justify-between gap-4">
                <div className={iconBox}>
                  <Layers className="size-5" strokeWidth={2} />
                </div>
                <ArrowUpRight className="size-5 text-ink-200 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-500" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-950">
                Chapter-wise drills that build mastery
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-500">
                All 12,500+ PYQs sorted into 120+ chapters — Percentage to Trigonometry,
                Active Voice to Modern History. Fix one weak topic a day.
              </p>
              <div className="mt-6 grid gap-2.5">
                <MasteryBar label="Profit, Loss & Discount" count="214" pct={82} color="bg-gradient-to-r from-brand-500 to-violet-500" delay={0.15} />
                <MasteryBar label="Geometry & Mensuration" count="186" pct={47} color="bg-gradient-to-r from-amber-400 to-orange-500" delay={0.3} />
              </div>
            </article>
          </Reveal>

          {/* Card 3 — bilingual */}
          <Reveal className="lg:col-span-4" delay={0.05}>
            <article className={cn(card, "h-full")}>
              <div className={iconBox}>
                <Languages className="size-5" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950">
                Bilingual, topper-grade solutions
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                Every question solved in Hindi &amp; English — the textbook method and the
                8-second shortcut, side by side.
              </p>
              <div className="mt-5">
                <BilingualMini />
              </div>
            </article>
          </Reveal>

          {/* Card 4 — analytics */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <article className={cn(card, "h-full")}>
              <div className={iconBox}>
                <BarChart3 className="size-5" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950">
                Rank-level analytics, not just scores
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                Normalised percentile against 2,80,000+ aspirants, accuracy heatmaps and
                time-per-question — after every attempt.
              </p>
              <div className="mt-5 rounded-2xl border border-ink-950/[0.06] bg-paper-soft p-4">
                <div className="flex h-20 items-end gap-1.5">
                  {sparkBars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      style={{ height: `${h}%` }}
                      className={cn(
                        "flex-1 origin-bottom rounded-t-sm",
                        i === sparkBars.length - 1
                          ? "bg-gradient-to-t from-brand-600 to-fuchsia-500"
                          : "bg-brand-500/25"
                      )}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[11px] font-semibold text-ink-400">
                  Score trend · last 10 mocks ·{" "}
                  <span className="text-emerald-600">▲ 41 marks</span>
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 5 — error notebook */}
          <Reveal className="lg:col-span-4" delay={0.15}>
            <article className={cn(card, "h-full")}>
              <div className={iconBox}>
                <BookMarked className="size-5" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950">
                An error notebook that writes itself
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                Every wrong answer is auto-saved with your mistake, the right method and a
                one-tap re-attempt. Revision, automated.
              </p>
              <div className="mt-5 space-y-2">
                {[
                  { s: "Quant", c: "bg-rose-500", t: "Avg. of weighted mixtures" },
                  { s: "English", c: "bg-sky-500", t: "Idiom — 'to eat humble pie'" },
                  { s: "GA", c: "bg-amber-500", t: "Article 32 vs 226" },
                ].map((r) => (
                  <div
                    key={r.t}
                    className="flex items-center gap-3 rounded-xl border border-ink-950/[0.05] bg-paper-soft px-3.5 py-2.5"
                  >
                    <span className={cn("size-1.5 rounded-full", r.c)} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-400">{r.s}</span>
                    <span className="truncate text-[13px] font-medium text-ink-700">{r.t}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Card 6 — new pattern */}
          <Reveal className="lg:col-span-12" delay={0.05}>
            <article className={cn(card, "flex flex-col gap-6 sm:flex-row sm:items-center")}>
              <div className="flex-1">
                <div className={iconBox}>
                  <Cpu className="size-5" strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950 sm:text-2xl">
                  New 2026 pattern? Already covered.
                </h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-[15px]">
                  Tier-II Paper-I with the Computer Knowledge Module, DEST typing drills and
                  section-wise timing — the moment SSC changes the syllabus, your mocks change
                  with it. New shifts land within 72 hours of every exam.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-xs">
                {["Tier-I", "Tier-II", "Computer Module", "DEST Typing", "Sectional Timing", "Normalisation"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
