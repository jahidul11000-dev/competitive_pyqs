import { motion } from "framer-motion";
import { Clock, Sparkles, X } from "lucide-react";
import { TestConfig } from "../../types/test";
import { availableTests } from "../../data/mockQuestions";

interface PaperSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTest: (test: TestConfig) => void;
}

export function PaperSelectorModal({
  isOpen,
  onClose,
  onSelectTest,
}: PaperSelectorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-paper shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink-950/[0.08] bg-ink-950 p-6 text-white">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[11px] font-bold text-brand-300">
              <Sparkles className="size-3" />
              Live Test Simulator
            </span>
            <h3 className="mt-2 font-display text-lg sm:text-xl font-bold">Select a Mock Test</h3>
            <p className="text-xs text-white/50">
              Choose an authentic shift paper or focused speed drill to begin
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Papers List */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {availableTests.map((test) => (
            <div
              key={test.id}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-ink-950/[0.08] bg-white p-5 transition-all hover:border-brand-500/40 hover:shadow-md"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 font-display text-[10px] font-bold text-brand-700">
                    {test.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-ink-500">
                    <Clock className="size-3 text-ink-400" />
                    {test.durationMinutes} mins
                  </span>
                  <span className="text-[11px] font-mono text-ink-500">
                    · {test.totalQuestions} Questions
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">
                    · {test.totalMarks} Marks
                  </span>
                </div>

                <h4 className="font-display text-base font-bold text-ink-950 group-hover:text-brand-600 transition-colors">
                  {test.title}
                </h4>
                <p className="text-xs text-ink-500">{test.subtitle}</p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {test.sections.map((sec) => (
                    <span
                      key={sec.id}
                      className="rounded-md bg-ink-950/[0.04] px-2 py-0.5 text-[10px] font-medium text-ink-600"
                    >
                      {sec.label} ({sec.count} Qs)
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectTest(test);
                  onClose();
                }}
                className="btn-shine shrink-0 self-start sm:self-center rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-5 py-2.5 font-display text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]"
              >
                Launch Test
              </button>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-ink-950/[0.08] bg-ink-50/60 px-6 py-4 text-xs text-ink-500">
          <span>Free Tier: 3 full-length mocks included this month</span>
          <button
            type="button"
            onClick={onClose}
            className="font-semibold text-ink-700 hover:text-ink-950"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
