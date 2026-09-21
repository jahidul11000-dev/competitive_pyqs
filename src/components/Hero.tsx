import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BookMarked,
  ChevronDown,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { dreamPosts } from "../lib/data";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Interactive SSC-style exam window                                  */
/* ------------------------------------------------------------------ */

type Status = "answered" | "marked" | "skipped" | "unseen";

const questionEN =
  "A and B can complete a piece of work in 12 days and 18 days respectively. Working together, they will complete the same work in:";
const questionHI =
  "A और B किसी कार्य को क्रमशः 12 दिन और 18 दिन में पूरा कर सकते हैं। दोनों मिलकर वही कार्य कितने दिनों में पूरा करेंगे?";

const options = ["6.5 days", "7.2 days", "8 days", "9 days"];
const optionLabels = ["A", "B", "C", "D"];

function ExamWindow({ onStartMock }: { onStartMock?: () => void } = {}) {
  const [current, setCurrent] = useState(8); // 0-indexed → Q.09
  const [answers, setAnswers] = useState<Record<number, number>>({
    0: 2,
    1: 0,
    2: 3,
    4: 1,
    5: 2,
    6: 0,
  });
  const [marked, setMarked] = useState<number[]>([3, 7]);
  const [hindi, setHindi] = useState(false);
  const [secs, setSecs] = useState(37 * 60 + 42);

  useEffect(() => {
    const id = setInterval(
      () => setSecs((s) => (s > 0 ? s - 1 : 37 * 60 + 42)),
      1000
    );
    return () => clearInterval(id);
  }, []);

  const hh = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  const statusOf = (i: number): Status => {
    if (answers[i] !== undefined) return "answered";
    if (marked.includes(i)) return "marked";
    if (i < current) return "skipped";
    return "unseen";
  };

  const pick = (idx: number) =>
    setAnswers((a) => ({ ...a, [current]: idx }));

  const next = () => {
    setCurrent((c) => (c + 1) % 25);
  };

  const markAndNext = () => {
    setMarked((m) => (m.includes(current) ? m : [...m, current]));
    next();
  };

  return (
    <div className="relative">
      {/* gradient frame */}
      <div className="rounded-[26px] bg-gradient-to-b from-white/30 via-white/10 to-transparent p-px shadow-[0_60px_120px_-30px_rgba(5,4,15,0.9)]">
        <div className="overflow-hidden rounded-[25px] bg-ink-900/80 backdrop-blur-2xl">
          {/* window chrome */}
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-rose-500/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:block">
                SSC CGL · Tier-I · 2024 Shift-3
              </p>
            </div>
            <div className="flex items-center gap-2">
              {onStartMock && (
                <button
                  type="button"
                  onClick={onStartMock}
                  className="hidden sm:inline-flex items-center gap-1 rounded-full bg-brand-500/20 px-2.5 py-1 text-[10px] font-bold text-brand-300 hover:bg-brand-500/30 transition-colors"
                >
                  Enter Test Engine ↗
                </button>
              )}
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/60">
                +2.0 / −0.5
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] font-semibold tabular-nums text-emerald-300">
                {hh}:{mm}
                <span className="animate-tick">:</span>
                {ss}
              </span>
            </div>
          </div>

          <div className="grid gap-0 sm:grid-cols-[1fr_132px]">
            {/* main question area */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Q. {String(current + 1).padStart(2, "0")} / 25 · Quantitative Aptitude
                </p>
                {/* language toggle */}
                <div className="flex rounded-full border border-white/10 bg-white/5 p-0.5 text-[10px] font-bold">
                  {(["EN", "हिं"] as const).map((lng, i) => {
                    const active = hindi === (i === 1);
                    return (
                      <button
                        key={lng}
                        type="button"
                        onClick={() => setHindi(i === 1)}
                        aria-pressed={active}
                        className={cn(
                          "rounded-full px-2.5 py-1 transition-all duration-300",
                          active
                            ? "bg-white text-ink-950 shadow"
                            : "text-white/50 hover:text-white"
                        )}
                      >
                        {lng}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p
                className="mt-4 min-h-[72px] text-sm font-medium leading-relaxed text-white/85 sm:min-h-[84px] sm:text-[15px]"
                lang={hindi ? "hi" : "en"}
              >
                {hindi ? questionHI : questionEN}
                <span className="mt-2 block text-[11px] font-normal text-white/35">
                  PYQ · SSC CGL 2023 · Time &amp; Work
                </span>
              </p>

              {/* options */}
              <div className="mt-4 grid gap-2.5">
                {options.map((opt, i) => {
                  const selected = answers[current] === i;
                  return (
                    <motion.button
                      key={opt}
                      type="button"
                      whileTap={{ scale: 0.985 }}
                      onClick={() => pick(i)}
                      aria-pressed={selected}
                      className={cn(
                        "group/opt flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-300",
                        selected
                          ? "border-brand-400/60 bg-brand-500/15 text-white shadow-[0_0_0_1px_rgba(129,124,250,0.35),0_10px_30px_-12px_rgba(106,93,240,0.5)]"
                          : "border-white/[0.08] bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-md text-[11px] font-bold transition-colors duration-300",
                          selected
                            ? "bg-brand-400 text-ink-950"
                            : "bg-white/10 text-white/50 group-hover/opt:bg-white/15"
                        )}
                      >
                        {optionLabels[i]}
                      </span>
                      {opt}
                    </motion.button>
                  );
                })}
              </div>

              {/* actions */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    setAnswers((a) => {
                      const n = { ...a };
                      delete n[current];
                      return n;
                    })
                  }
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/50 transition-colors hover:border-white/25 hover:text-white"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={markAndNext}
                  className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300 transition-colors hover:bg-violet-500/20"
                >
                  Mark for review
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="btn-shine ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-5 py-2 text-xs font-bold text-ink-950 shadow-[0_10px_26px_-8px_rgba(16,185,129,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Save &amp; Next
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>

            {/* question palette */}
            <div className="border-t border-white/[0.07] p-5 sm:border-l sm:border-t-0 sm:p-4">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                Palette
              </p>
              <div className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: 25 }, (_, i) => {
                  const st = statusOf(i);
                  const isCurrent = i === current;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to question ${i + 1}, ${st}`}
                      className={cn(
                        "grid aspect-square place-items-center rounded-md text-[10px] font-bold transition-all duration-300",
                        st === "answered" &&
                          "bg-emerald-500/90 text-ink-950",
                        st === "marked" && "bg-violet-500/90 text-white",
                        st === "skipped" &&
                          "bg-rose-500/80 text-ink-950",
                        st === "unseen" &&
                          "border border-white/10 bg-white/[0.04] text-white/40 hover:border-white/30",
                        isCurrent &&
                          "ring-2 ring-white ring-offset-2 ring-offset-ink-900"
                      )}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 space-y-1.5 text-[10px] font-medium text-white/40">
                <p className="flex items-center gap-2">
                  <span className="size-2 rounded-[3px] bg-emerald-500/90" /> Answered
                </p>
                <p className="flex items-center gap-2">
                  <span className="size-2 rounded-[3px] bg-violet-500/90" /> Marked
                </p>
                <p className="flex items-center gap-2">
                  <span className="size-2 rounded-[3px] bg-rose-500/80" /> Not answered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating result chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-7 -left-6 hidden animate-float items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 shadow-2xl backdrop-blur-xl lg:flex"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
          <Trophy className="size-5 text-ink-950" />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-white">AIR 47 · CGL 2024</p>
          <p className="text-[11px] text-white/50">Rahul mocked 96 papers here</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-8 top-1/3 hidden animate-float-slow items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 shadow-2xl backdrop-blur-xl lg:flex"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg">
          <TrendingUp className="size-5 text-ink-950" />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-white">98.42 percentile</p>
          <p className="text-[11px] text-white/50">+64 marks in 90 days</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-8 -left-4 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 shadow-2xl backdrop-blur-xl animate-float lg:flex [animation-delay:-3s]"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 shadow-lg">
          <BookMarked className="size-5 text-white" />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-white">Error notebook</p>
          <p className="text-[11px] text-white/50">12 mistakes queued for revision</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero section                                                       */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

interface HeroProps {
  onStartMock?: () => void;
}

export function Hero({ onStartMock }: HeroProps = {}) {
  const mx = useMotionValue(-800);
  const my = useMotionValue(-800);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${sx}px ${sy}px, rgba(109,93,246,0.16), transparent 70%)`;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {/* ambient backdrop */}
      <div className="grid-lines pointer-events-none absolute inset-0 mask-fade-b" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] left-[8%] h-[55vh] w-[55vh] animate-aurora rounded-full bg-brand-600/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[60vh] w-[60vh] animate-aurora-late rounded-full bg-fuchsia-600/20 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-[30%] h-[50vh] w-[60vh] animate-aurora rounded-full bg-indigo-500/20 blur-[140px]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />
      <div className="noise pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] py-1.5 pl-2 pr-4 text-xs font-semibold text-white/75 backdrop-blur">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Sparkles className="size-3" />
                  New
                </span>
                SSC CGL 2025 papers added · every shift, key-verified
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 max-w-2xl font-display text-[2.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.35rem]"
            >
              Turn 25 years of PYQs into your{" "}
              <span className="text-gradient">All-India Rank.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              Attempt authentic SSC CGL previous-year papers as full-length
              mocks, drill them chapter-wise, and battle-test every subject —
              on the exact exam interface, with bilingual solutions and
              rank-level analytics.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartMock}
                className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 via-violet-600 to-fuchsia-600 px-7 py-4 font-display text-sm font-bold text-white shadow-[0_20px_50px_-12px_rgba(109,93,246,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-12px_rgba(109,93,246,0.8)]"
              >
                Attempt a free mock
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#showcase"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/35 hover:bg-white/5 hover:text-white"
              >
                See how it works
                <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* trust row */}
            <motion.div variants={item} className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center">
                {["AK", "PS", "RV", "TD", "+2L"].map((t, i) => (
                  <span
                    key={t}
                    className={cn(
                      "-ml-2 grid size-9 place-items-center rounded-full border-2 border-ink-950 text-[10px] font-bold text-white first:ml-0",
                      [
                        "bg-gradient-to-br from-indigo-500 to-violet-600",
                        "bg-gradient-to-br from-fuchsia-500 to-rose-500",
                        "bg-gradient-to-br from-amber-500 to-orange-500",
                        "bg-gradient-to-br from-emerald-500 to-teal-500",
                        "bg-ink-700",
                      ][i]
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-white">4.9</span>
                </div>
                <p className="mt-0.5 text-xs text-white/45">
                  Loved by 2,80,000+ SSC CGL aspirants · No card required
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive exam window */}
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <ExamWindow onStartMock={onStartMock} />
          </motion.div>
        </div>
      </div>

      {/* dream-posts marquee */}
      <div className="relative border-t border-white/[0.07]">
        <div className="mask-fade-x overflow-hidden py-5">
          <div className="flex w-max animate-marquee items-center gap-8">
            {[...dreamPosts, ...dreamPosts].map((post, i) => (
              <span
                key={i}
                className="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-white/35"
              >
                <span className="transition-colors duration-300 hover:text-white/80">
                  {post}
                </span>
                <Sparkles className="size-3.5 text-brand-400/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
