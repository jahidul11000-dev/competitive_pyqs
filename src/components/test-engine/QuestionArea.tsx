import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { Question, QuestionStatus } from "../../types/test";
import { cn } from "../../utils/cn";

interface QuestionAreaProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  status: QuestionStatus;
  hindi: boolean;
  onSelectOption: (optionIndex: number) => void;
  onClearResponse: () => void;
  onMarkForReview: () => void;
  onSaveAndNext: () => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export function QuestionArea({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  status,
  hindi,
  onSelectOption,
  onClearResponse,
  onMarkForReview,
  onSaveAndNext,
  onPrevious,
  isFirstQuestion,
  isLastQuestion,
}: QuestionAreaProps) {
  const isMarked = status === "marked" || status === "answered-marked";
  const optionLetters = ["A", "B", "C", "D"];

  const currentQuestionText = hindi ? question.questionHi : question.questionEn;
  const currentOptions = hindi ? question.optionsHi : question.optionsEn;

  return (
    <div className="flex flex-col h-full bg-paper">
      {/* Top Question Info Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-950/[0.07] bg-white/60 px-5 py-3.5 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-ink-900">
            Q.{String(currentIndex + 1).padStart(2, "0")} / {String(totalQuestions).padStart(2, "0")}
          </span>
          <span className="h-4 w-px bg-ink-950/10" />
          <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 font-display text-[11px] font-bold text-brand-700">
            {question.topic}
          </span>
          <span className="hidden sm:inline-block rounded-full bg-ink-950/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-ink-600">
            {question.year}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-700">
            +2.00
          </span>
          <span className="rounded-md bg-rose-500/10 px-2 py-0.5 font-bold text-rose-600">
            -0.50
          </span>
        </div>
      </div>

      {/* Question Content & Options Scroll Area */}
      <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-3xl">
          {/* Question Statement */}
          <motion.div
            key={question.id + (hindi ? "-hi" : "-en")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg font-medium leading-relaxed text-ink-950 select-text whitespace-pre-line">
              {currentQuestionText}
            </p>

            {/* Options List */}
            <div className="mt-6 space-y-3">
              {currentOptions.map((opt, i) => {
                const isSelected = selectedOption === i;
                return (
                  <motion.button
                    key={i}
                    type="button"
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onSelectOption(i)}
                    className={cn(
                      "group relative flex w-full items-center gap-4 rounded-2xl border p-4 sm:p-4.5 text-left transition-all duration-200",
                      isSelected
                        ? "border-brand-500 bg-brand-50/70 shadow-[0_4px_20px_-6px_rgba(106,93,240,0.3)] ring-1 ring-brand-500"
                        : "border-ink-950/[0.08] bg-white hover:border-brand-500/30 hover:bg-ink-50/40 shadow-xs"
                    )}
                  >
                    {/* Option Indicator letter */}
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold transition-colors",
                        isSelected
                          ? "bg-brand-600 text-white shadow-sm"
                          : "border border-ink-950/10 bg-ink-950/[0.03] text-ink-700 group-hover:border-brand-500/30 group-hover:text-brand-600"
                      )}
                    >
                      {optionLetters[i]}
                    </span>

                    {/* Option Text */}
                    <span
                      className={cn(
                        "flex-1 text-sm sm:text-base font-medium transition-colors",
                        isSelected ? "text-ink-950 font-semibold" : "text-ink-800"
                      )}
                    >
                      {opt}
                    </span>

                    {/* Selection Checkmark */}
                    <span
                      className={cn(
                        "size-5 rounded-full border-2 grid place-items-center transition-all",
                        isSelected
                          ? "border-brand-600 bg-brand-600 text-white"
                          : "border-ink-950/20 group-hover:border-ink-950/40"
                      )}
                    >
                      {isSelected && <CheckCircle2 className="size-3.5" strokeWidth={3} />}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Action Controls Bar */}
      <div className="sticky bottom-0 border-t border-ink-950/[0.08] bg-white/90 px-4 py-3.5 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2.5">
          {/* Left Actions: Clear & Mark for Review */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={onClearResponse}
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink-950/10 px-3 py-2 text-xs font-semibold text-ink-600 transition-colors hover:bg-ink-950/[0.04] disabled:opacity-40 disabled:pointer-events-none"
            >
              <RotateCcw className="size-3.5" />
              <span className="hidden sm:inline">Clear</span> Response
            </button>

            <button
              type="button"
              onClick={onMarkForReview}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all",
                isMarked
                  ? "border-violet-500 bg-violet-500/10 text-violet-700"
                  : "border-ink-950/10 text-ink-700 hover:bg-ink-950/[0.04]"
              )}
            >
              <Bookmark className="size-3.5" />
              <span>{isMarked ? "Marked" : "Mark for Review"}</span>
            </button>
          </div>

          {/* Right Actions: Previous & Save and Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={isFirstQuestion}
              onClick={onPrevious}
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink-950/10 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-ink-800 transition-colors hover:bg-ink-950/[0.04] disabled:opacity-40 disabled:pointer-events-none"
            >
              <ArrowLeft className="size-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={onSaveAndNext}
              className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 via-violet-600 to-fuchsia-600 px-5 py-2 sm:px-6 sm:py-2.5 font-display text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(106,93,240,0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_28px_-6px_rgba(106,93,240,0.8)]"
            >
              <span>{isLastQuestion ? "Save & View Summary" : "Save & Next"}</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
