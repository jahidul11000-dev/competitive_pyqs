import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Brain,
  Calculator,
  Clock3,
  FileText,
  Globe2,
  Play,
  Target,
} from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/* ------------------------------------------------------------------ */

type TabId = "full" | "chapter" | "subject";

const tabs: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "full", label: "Full-length mocks", icon: FileText },
  { id: "chapter", label: "Chapter-wise drills", icon: Target },
  { id: "subject", label: "Subject-wise tests", icon: Brain },
];

const fullMocks = [
  { name: "SSC CGL Tier-I 2024 · 9 Sept · Shift 1", meta: "100 Qs · 200 marks · 60 min", state: "Best 168.5", pct: 84, tag: "Tier-I" },
  { name: "SSC CGL Tier-I 2024 · 10 Sept · Shift 3", meta: "100 Qs · 200 marks · 60 min", state: "Attempt", pct: 0, tag: "Tier-I" },
  { name: "SSC CGL Tier-II 2024 · Paper-I", meta: "150 Qs · 450 marks · 2 hr 15 min", state: "Best 312.5", pct: 69, tag: "Tier-II" },
  { name: "SSC CGL Tier-I 2023 · 14 July · Shift 2", meta: "100 Qs · 200 marks · 60 min", state: "Best 154.0", pct: 77, tag: "Tier-I" },
];

const chapters = [
  { name: "Profit, Loss & Discount", count: 214, pct: 82, tone: "from-brand-500 to-violet-500" },
  { name: "Trigonometry & Heights", count: 176, pct: 64, tone: "from-sky-500 to-indigo-500" },
  { name: "Reading Comprehension", count: 240, pct: 71, tone: "from-fuchsia-500 to-pink-500" },
  { name: "Polity & Constitution", count: 198, pct: 38, tone: "from-amber-400 to-orange-500" },
];

const subjects: { name: string; icon: LucideIcon; count: string; acc: number; tone: string }[] = [
  { name: "Quantitative Aptitude", icon: Calculator, count: "3,420 PYQs", acc: 71, tone: "from-rose-500 to-orange-500" },
  { name: "Reasoning & GI", icon: Brain, count: "2,980 PYQs", acc: 84, tone: "from-violet-500 to-purple-500" },
  { name: "English Comprehension", icon: BookOpen, count: "3,150 PYQs", acc: 77, tone: "from-sky-500 to-cyan-500" },
  { name: "General Awareness", icon: Globe2, count: "2,950 PYQs", acc: 58, tone: "from-emerald-500 to-teal-500" },
];

const panelMotion = {
  initial: { opacity: 0, y: 24, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.99 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
};

/* ------------------------------------------------------------------ */

export function Showcase() {
  const [tab, setTab] = useState<TabId>("full");

  return (
    <section id="showcase" className="relative overflow-hidden bg-paper-soft py-24 sm:py-32">
      <div className="grid-lines-light absolute inset-0 mask-fade-b" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-20%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-violet-200/40 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Inside the library"
          title={
            <>
              One PYQ library.{" "}
              <span className="text-gradient-dark">Three ways to conquer it.</span>
            </>
          }
          sub="Toppers rotate all three — full papers for stamina, chapters for depth, subjects for battle-readiness. Pick your weapon."
        />

        {/* Tab bar */}
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Product views"
            className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-ink-950/[0.07] bg-white p-1.5 shadow-[0_8px_30px_-14px_rgba(18,16,28,0.2)]"
          >
            {tabs.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-5",
                    active ? "text-white" : "text-ink-500 hover:text-ink-950"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="showcase-tab-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-ink-950 shadow-[0_10px_24px_-10px_rgba(18,16,28,0.6)]"
                    />
                  )}
                  <t.icon className="relative z-10 size-4" />
                  <span className="relative z-10 hidden sm:inline">{t.label}</span>
                  <span className="relative z-10 sm:hidden">{t.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Browser frame */}
        <Reveal delay={0.1} y={48} className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-[24px] bg-gradient-to-b from-ink-950/[0.12] via-ink-950/[0.05] to-transparent p-px">
            <div className="overflow-hidden rounded-[23px] bg-white shadow-[0_50px_100px_-40px_rgba(34,26,82,0.35)]">
              {/* chrome */}
              <div className="flex items-center gap-4 border-b border-ink-950/[0.06] bg-paper-soft px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="mx-auto flex items-center gap-2 rounded-full border border-ink-950/[0.06] bg-white px-4 py-1 text-[11px] font-semibold text-ink-400">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  app.cglpyqs.in/library
                </span>
                <span className="hidden text-[11px] font-mono text-ink-300 sm:block">
                  <Clock3 className="mr-1 inline size-3 -translate-y-px" />
                  synced
                </span>
              </div>

              {/* panels */}
              <div className="min-h-[420px] p-4 sm:p-7">
                <AnimatePresence mode="wait">
                  {tab === "full" && (
                    <motion.div key="full" {...panelMotion} className="grid gap-3">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        {["All shifts", "2024", "2023", "Tier-I", "Tier-II"].map((f, i) => (
                          <span
                            key={f}
                            className={cn(
                              "rounded-full px-3.5 py-1.5 text-xs font-bold",
                              i === 0
                                ? "bg-ink-950 text-white"
                                : "border border-ink-950/[0.08] text-ink-400"
                            )}
                          >
                            {f}
                          </span>
                        ))}
                        <span className="ml-auto hidden text-xs font-semibold text-ink-300 sm:block">
                          320 papers · updated weekly
                        </span>
                      </div>
                      {fullMocks.map((m, i) => (
                        <motion.div
                          key={m.name}
                          initial={{ opacity: 0, x: -18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="group flex flex-col gap-3 rounded-2xl border border-ink-950/[0.07] bg-white p-4 transition-all duration-300 hover:border-brand-300/70 hover:shadow-[0_18px_40px_-20px_rgba(76,52,192,0.35)] sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                        >
                          <div className="flex items-center gap-4 sm:w-[46%]">
                            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-violet-100 font-mono text-xs font-bold text-brand-700">
                              {m.tag === "Tier-I" ? "T1" : "T2"}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-ink-900">{m.name}</p>
                              <p className="mt-0.5 font-mono text-[11px] text-ink-400">{m.meta}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-center gap-3">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-950/[0.06]">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${m.pct}%` }}
                                transition={{ duration: 1, delay: 0.2 + 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"
                              />
                            </div>
                            {m.state === "Attempt" ? (
                              <button className="inline-flex items-center gap-1.5 rounded-full bg-ink-950 px-4 py-2 text-xs font-bold text-white transition-transform duration-300 hover:scale-105">
                                <Play className="size-3" /> Attempt
                              </button>
                            ) : (
                              <span className="whitespace-nowrap rounded-full bg-emerald-500/10 px-3 py-2 text-[11px] font-bold text-emerald-600">
                                {m.state}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {tab === "chapter" && (
                    <motion.div key="chapter" {...panelMotion}>
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        {["Quant", "Reasoning", "English", "GA"].map((s, i) => (
                          <span
                            key={s}
                            className={cn(
                              "rounded-full px-3.5 py-1.5 text-xs font-bold",
                              i === 0
                                ? "bg-ink-950 text-white"
                                : "border border-ink-950/[0.08] text-ink-400"
                            )}
                          >
                            {s}
                          </span>
                        ))}
                        <span className="ml-auto text-xs font-semibold text-ink-300">
                          120+ chapters · PYQs till 2025
                        </span>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {chapters.map((c, i) => (
                          <motion.div
                            key={c.name}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.07 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="group rounded-2xl border border-ink-950/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-[0_18px_40px_-20px_rgba(76,52,192,0.35)]"
                          >
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="text-sm font-bold text-ink-900">{c.name}</p>
                              <p className="font-mono text-[11px] font-semibold text-ink-400">
                                {c.count} Qs
                              </p>
                            </div>
                            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-950/[0.06]">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${c.pct}%` }}
                                transition={{ duration: 1, delay: 0.2 + 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                                className={cn("h-full rounded-full bg-gradient-to-r", c.tone)}
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <p className="text-[11px] font-semibold text-ink-400">
                                <span className="text-ink-800">{c.pct}%</span> mastery
                              </p>
                              <button className="rounded-full border border-ink-950/10 px-3.5 py-1.5 text-[11px] font-bold text-ink-700 transition-all duration-300 group-hover:border-ink-950 group-hover:bg-ink-950 group-hover:text-white">
                                Drill now →
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {tab === "subject" && (
                    <motion.div key="subject" {...panelMotion} className="grid gap-3 sm:grid-cols-2">
                      {subjects.map((s, i) => (
                        <motion.div
                          key={s.name}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.07 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="group relative overflow-hidden rounded-2xl border border-ink-950/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(76,52,192,0.4)]"
                        >
                          <div
                            aria-hidden
                            className={cn(
                              "absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.16]",
                              s.tone
                            )}
                          />
                          <div className="relative">
                            <div className="flex items-center justify-between">
                              <span className={cn("grid size-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg", s.tone)}>
                                <s.icon className="size-5" />
                              </span>
                              <span className="font-mono text-[11px] font-semibold text-ink-400">{s.count}</span>
                            </div>
                            <p className="mt-4 font-display text-lg font-bold text-ink-950">{s.name}</p>
                            <div className="mt-3 flex items-center gap-3">
                              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-950/[0.06]">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${s.acc}%` }}
                                  transition={{ duration: 1, delay: 0.2 + 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                                  className={cn("h-full rounded-full bg-gradient-to-r", s.tone)}
                                />
                              </div>
                              <span className="text-xs font-bold text-ink-700">{s.acc}%</span>
                            </div>
                            <p className="mt-2 text-[11px] font-semibold text-ink-400">
                              community avg. accuracy
                            </p>
                            <button className="mt-4 w-full rounded-full bg-ink-950 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-700">
                              Take a 25-min subject test
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
