import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Languages, Wallet } from "lucide-react";
import { Reveal } from "./ui/Reveal";

interface CtaProps {
  onStartMock?: () => void;
}

export function Cta({ onStartMock }: CtaProps = {}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 sm:py-36">
      {/* ambient */}
      <div className="grid-lines absolute inset-0 mask-fade-b opacity-70" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 animate-aurora rounded-full bg-brand-600/25 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[15%] top-[20%] h-[40vh] w-[40vh] animate-aurora-late rounded-full bg-fuchsia-600/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-dashed border-white/[0.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[52rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-white/[0.04] [animation-direction:reverse]"
      />
      <div className="noise pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            Attempt 001 · Starts now
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.5rem]">
            Your dream post is{" "}
            <span className="text-gradient">one mock away.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Join 2,80,000+ aspirants turning previous-year questions into
            present-day ranks. The first mock is free — the habit is priceless.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={onStartMock}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4.5 font-display text-base font-bold text-ink-950 shadow-[0_24px_70px_-18px_rgba(255,255,255,0.5)]"
            >
              Attempt your first free mock
              <span className="grid size-6 place-items-center rounded-full bg-ink-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-3.5" />
              </span>
            </motion.button>
          </div>
        </Reveal>
        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-semibold text-white/45">
            <span className="flex items-center gap-2">
              <Wallet className="size-4 text-emerald-400" /> No card required
            </span>
            <span className="flex items-center gap-2">
              <Languages className="size-4 text-emerald-400" /> Hindi + English
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-emerald-400" /> 2-minute setup
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
