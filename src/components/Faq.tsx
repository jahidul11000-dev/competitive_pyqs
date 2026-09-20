import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { faqs } from "../lib/data";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-paper-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* left column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Doubts,{" "}
                  <span className="text-gradient-dark">cleared</span> — unlike
                  your basics before PYQs
                </>
              }
              sub="Everything aspirants ask before starting. Something specific? Mentors reply in under 4 hours."
            />
            <Reveal delay={0.2} className="mt-8">
              <a
                href="#top"
                className="group inline-flex items-center gap-3 rounded-2xl border border-ink-950/[0.08] bg-white p-4 pr-6 shadow-[0_2px_16px_-6px_rgba(18,16,28,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-[0_20px_45px_-24px_rgba(76,52,192,0.4)]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 shadow-md">
                  <MessageCircle className="size-5 text-white" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-950">
                    Chat with a mentor
                  </span>
                  <span className="block text-xs text-ink-400">
                    Average reply · 3 hr 42 min
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.05} y={20}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-white transition-all duration-500",
                      isOpen
                        ? "border-brand-300/70 shadow-[0_24px_50px_-28px_rgba(76,52,192,0.45)]"
                        : "border-ink-950/[0.07] hover:border-ink-950/20"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span
                        className={cn(
                          "font-display text-[15px] font-bold tracking-tight transition-colors duration-300 sm:text-base",
                          isOpen ? "text-brand-700" : "text-ink-900"
                        )}
                      >
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-45 border-brand-500 bg-brand-500 text-white"
                            : "border-ink-950/10 text-ink-400 group-hover:border-ink-950/30"
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-ink-500 sm:text-[15px]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
