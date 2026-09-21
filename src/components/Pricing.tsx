import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Users2, Wallet } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const freeFeatures = [
  "3 full-length PYQ mocks / month",
  "10 chapter-wise drills / month",
  "Basic score report after each test",
  "Hindi + English questions",
];

const championFeatures = [
  "Unlimited full mocks — all 320+ papers, all shifts",
  "Unlimited chapter-wise & subject-wise tests",
  "Rank, percentile & analytics vs 2,80,000+ aspirants",
  "Auto error notebook + bookmark revision mode",
  "Topper's shortcut solutions, bilingual",
  "Computer module & DEST typing practice",
  "2026 shifts added within 72 hours",
];

interface PricingProps {
  onStartMock?: () => void;
}

export function Pricing({ onStartMock }: PricingProps = {}) {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-15%] top-[5%] h-[45vh] w-[45vh] rounded-full bg-brand-200/40 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Costs less than one{" "}
              <span className="text-gradient-dark">coaching handout</span> a
              month
            </>
          }
          sub="Start free. Upgrade when the analytics get addictive. No auto-debit traps, no 'counsellor' calls — ever."
        />

        {/* billing toggle */}
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-ink-950/[0.07] bg-white p-1.5 shadow-[0_8px_30px_-14px_rgba(18,16,28,0.2)]">
            {(["Monthly", "Yearly"] as const).map((label) => {
              const isYear = label === "Yearly";
              const active = yearly === isYear;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setYearly(isYear)}
                  aria-pressed={active}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300",
                    active ? "text-white" : "text-ink-500 hover:text-ink-950"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-ink-950"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {label}
                    {isYear && (
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors duration-300",
                          active ? "bg-amber-400 text-ink-950" : "bg-amber-100 text-amber-700"
                        )}
                      >
                        −66%
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Free */}
          <Reveal y={40} className="lg:col-span-2">
            <article className="flex h-full flex-col rounded-[26px] border border-ink-950/[0.08] bg-white p-8 shadow-[0_2px_16px_-6px_rgba(18,16,28,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(18,16,28,0.3)]">
              <p className="font-display text-lg font-bold text-ink-950">Starter</p>
              <p className="mt-1 text-sm text-ink-400">Taste the real interface</p>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-bold tracking-tight text-ink-950">₹0</span>
                <span className="text-sm font-semibold text-ink-400">/ forever</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3.5">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-600">
                    <Check className="mt-0.5 size-4 shrink-0 text-ink-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onStartMock}
                className="mt-8 block w-full rounded-full border-[1.5px] border-ink-950 py-3.5 text-center font-display text-sm font-bold text-ink-950 transition-all duration-300 hover:bg-ink-950 hover:text-white"
              >
                Start for free
              </button>
            </article>
          </Reveal>

          {/* Champion */}
          <Reveal y={40} delay={0.12} className="lg:col-span-3">
            <div className="ring-conic relative rounded-[27px] p-[1.5px] shadow-[0_40px_90px_-35px_rgba(91,65,221,0.55)] transition-transform duration-500 hover:-translate-y-1">
              <span className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-950 shadow-lg">
                <Sparkles className="size-3" />
                91% of qualifiers chose Champion
              </span>
              <article className="noise relative flex h-full flex-col overflow-hidden rounded-[25.5px] bg-ink-950 p-8 sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand-600/30 blur-[90px]"
                />
                <div className="relative flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="font-display text-lg font-bold text-white">Champion</p>
                    <p className="mt-1 text-sm text-white/45">
                      Everything unlimited, till your joining letter
                    </p>
                  </div>
                  <div className="text-right">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={yearly ? "y" : "m"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-baseline gap-2"
                      >
                        <span className="font-display text-5xl font-bold tracking-tight text-white">
                          {yearly ? "₹999" : "₹249"}
                        </span>
                        <span className="text-sm font-semibold text-white/45">
                          {yearly ? "/ year" : "/ month"}
                        </span>
                      </motion.p>
                    </AnimatePresence>
                    <p className="mt-1 text-xs font-semibold text-amber-300">
                      {yearly ? "₹83/month · was ₹2,988" : "or ₹999/year — save 66%"}
                    </p>
                  </div>
                </div>

                <ul className="relative mt-9 grid flex-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {championFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-emerald-400/15">
                        <Check className="size-3 text-emerald-300" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={onStartMock}
                  className="btn-shine group relative mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-violet-600 to-fuchsia-600 py-4 font-display text-sm font-bold text-white shadow-[0_20px_50px_-12px_rgba(109,93,246,0.7)] transition-all duration-300 hover:shadow-[0_26px_60px_-12px_rgba(109,93,246,0.9)]"
                >
                  Become a Champion
                </button>
                <p className="relative mt-4 text-center text-xs text-white/35">
                  7-day no-questions refund · GST invoice for reimbursement
                </p>
              </article>
            </div>
          </Reveal>
        </div>

        {/* trust strip */}
        <Reveal delay={0.2} className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-ink-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-600" /> 7-day refunds
            </span>
            <span className="flex items-center gap-2">
              <Wallet className="size-4 text-brand-600" /> UPI · cards · no auto-debit
            </span>
            <span className="flex items-center gap-2">
              <Users2 className="size-4 text-brand-600" /> Support in Hindi &amp; English
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
