import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  CheckCircle,
  Clock,
  Flame,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import { Question, TestConfig, TestResult } from "../../types/test";
import { cn } from "../../utils/cn";

interface ScoreReportProps {
  testConfig: TestConfig;
  questions: Question[];
  result: TestResult;
  onRetake: () => void;
  onExit: () => void;
}

type FilterType = "all" | "incorrect" | "correct" | "unattempted";

export function ScoreReport({
  testConfig,
  questions,
  result,
  onRetake,
  onExit,
}: ScoreReportProps) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [hindi, setHindi] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const minutes = Math.floor(result.totalTimeSpent / 60);
  const seconds = result.totalTimeSpent % 60;

  // Filter questions based on selection
  const filteredQuestions = questions.filter((q) => {
    const ans = result.answers[q.id];
    const isAttempted = ans && ans.selectedOption !== null;
    const isCorrect = isAttempted && ans.selectedOption === q.correctIndex;

    if (filter === "correct") return isCorrect;
    if (filter === "incorrect") return isAttempted && !isCorrect;
    if (filter === "unattempted") return !isAttempted;
    return true;
  });

  return (
    <div className="min-h-screen bg-paper text-ink-900 pb-20">
      {/* Top sticky bar */}
      <div className="sticky top-0 z-30 border-b border-ink-950/[0.08] bg-white/80 backdrop-blur-md px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onExit}
              className="inline-flex items-center gap-2 rounded-xl border border-ink-950/10 px-3 py-1.5 text-xs font-semibold text-ink-700 hover:bg-ink-950/[0.04]"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Home</span>
            </button>
            <div className="hidden sm:block h-4 w-px bg-ink-950/10" />
            <span className="font-display text-xs sm:text-sm font-bold text-ink-900">
              Exam Analytics &amp; Solutions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setHindi((h) => !h)}
              className="rounded-full border border-ink-950/15 bg-white px-3 py-1 text-xs font-bold text-ink-800 shadow-xs hover:border-brand-500"
            >
              {hindi ? "Switch to English" : "हिन्दी में देखें"}
            </button>
            <button
              type="button"
              onClick={onRetake}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 font-display text-xs font-bold text-white shadow-sm hover:bg-brand-700"
            >
              <RotateCcw className="size-3.5" />
              <span>Retake</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 space-y-8">
        {/* Hero Scorecard Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="noise relative overflow-hidden rounded-3xl bg-ink-950 p-6 sm:p-10 text-white shadow-2xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-80 rounded-full bg-brand-600/30 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-16 size-80 rounded-full bg-fuchsia-600/20 blur-[110px]"
          />

          <div className="relative flex flex-wrap items-start justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-300">
                <Sparkles className="size-3.5" />
                Scorecard · Official SSC Marking
              </span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight">
                {testConfig.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-white/50">{testConfig.subtitle}</p>
            </div>

            {/* Score Pill */}
            <div className="text-right sm:text-right">
              <div className="flex items-baseline justify-end gap-1 font-display">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
                  {result.totalScore > 0 ? `+${result.totalScore.toFixed(1)}` : result.totalScore.toFixed(1)}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white/40">
                  / {result.maxScore}
                </span>
              </div>
              <p className="mt-1 text-xs font-semibold text-emerald-400">
                Qualifying cut-off probability:{" "}
                <span className="font-bold">
                  {result.totalScore >= result.maxScore * 0.65 ? "High (94%)" : "Moderate (68%)"}
                </span>
              </p>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-white/10 pt-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs">
              <p className="flex items-center gap-1.5 text-xs text-white/50">
                <Trophy className="size-3.5 text-amber-400" />
                Simulated AIR
              </p>
              <p className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                #{result.estimatedAir.toLocaleString()}
              </p>
              <p className="mt-0.5 text-[10px] text-white/40">vs 2.8L aspirants</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs">
              <p className="flex items-center gap-1.5 text-xs text-white/50">
                <Target className="size-3.5 text-brand-300" />
                Accuracy
              </p>
              <p className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                {result.accuracy.toFixed(1)}%
              </p>
              <p className="mt-0.5 text-[10px] text-white/40">
                {result.totalCorrect} correct / {result.totalAttempted} attempted
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs">
              <p className="flex items-center gap-1.5 text-xs text-white/50">
                <Flame className="size-3.5 text-rose-400" />
                Percentile
              </p>
              <p className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                {result.percentile.toFixed(1)}th
              </p>
              <p className="mt-0.5 text-[10px] text-white/40">Top tier performance</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs">
              <p className="flex items-center gap-1.5 text-xs text-white/50">
                <Clock className="size-3.5 text-emerald-400" />
                Time Spent
              </p>
              <p className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white font-mono">
                {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}s
              </p>
              <p className="mt-0.5 text-[10px] text-white/40">
                Avg: {Math.round(result.totalTimeSpent / Math.max(1, result.totalAttempted))}s / question
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Breakdown Grid */}
        <div className="rounded-3xl border border-ink-950/[0.08] bg-white p-6 sm:p-8 shadow-xs">
          <h3 className="font-display text-base sm:text-lg font-bold text-ink-950">
            Sectional Performance
          </h3>
          <p className="text-xs text-ink-500 mt-0.5">
            Detailed marks (+2 for correct, -0.50 for wrong) across all test sections
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testConfig.sections.map((sec) => {
              const secScore = result.sectionScores[sec.id] || {
                total: sec.count,
                attempted: 0,
                correct: 0,
                incorrect: 0,
                score: 0,
                accuracy: 0,
              };

              return (
                <div
                  key={sec.id}
                  className="rounded-2xl border border-ink-950/[0.08] bg-paper-soft p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-display text-xs font-bold text-ink-900 truncate">
                        {sec.label}
                      </p>
                      <span className="font-mono text-xs font-bold text-brand-600">
                        {secScore.score > 0 ? `+${secScore.score.toFixed(1)}` : secScore.score.toFixed(1)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-ink-600">
                      <span>Accuracy:</span>
                      <span className="font-bold text-ink-900">{secScore.accuracy.toFixed(0)}%</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-ink-600">
                      <span>Correct / Wrong:</span>
                      <span className="font-mono text-xs font-semibold">
                        <span className="text-emerald-600 font-bold">{secScore.correct}</span> /{" "}
                        <span className="text-rose-500">{secScore.incorrect}</span>
                      </span>
                    </div>
                  </div>

                  {/* Progress Meter */}
                  <div className="mt-4">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-950/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-500"
                        style={{ width: `${Math.max(0, Math.min(100, secScore.accuracy))}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Solutions Section */}
        <div className="rounded-3xl border border-ink-950/[0.08] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-950/[0.08] pb-5">
            <div>
              <h3 className="font-display text-lg font-bold text-ink-950">
                Detailed Solutions &amp; Shortcuts
              </h3>
              <p className="text-xs text-ink-500">
                Review verified solutions, explanations and topper shortcut methods
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-ink-950/10 bg-paper p-1 text-xs font-semibold">
              {(
                [
                  { id: "all", label: `All (${questions.length})` },
                  { id: "incorrect", label: `Incorrect (${result.totalIncorrect})` },
                  { id: "correct", label: `Correct (${result.totalCorrect})` },
                  { id: "unattempted", label: `Unattempted (${result.totalUnattempted})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    "rounded-full px-3 py-1.5 transition-all",
                    filter === tab.id
                      ? "bg-ink-950 text-white shadow-xs font-bold"
                      : "text-ink-600 hover:text-ink-950 hover:bg-white"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions List */}
          <div className="mt-6 space-y-6">
            {filteredQuestions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-ink-950/20 p-10 text-center text-ink-500">
                <CheckCircle className="size-8 mx-auto text-emerald-500/80 mb-2" />
                <p className="font-display text-sm font-bold text-ink-800">No questions found</p>
                <p className="text-xs text-ink-400 mt-1">
                  You had no questions matching this specific filter category.
                </p>
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const ans = result.answers[q.id];
                const isAttempted = ans && ans.selectedOption !== null;
                const isCorrect = isAttempted && ans.selectedOption === q.correctIndex;
                const isBookmarked = !!bookmarkedIds[q.id];
                const optionLetters = ["A", "B", "C", "D"];

                const qText = hindi ? q.questionHi : q.questionEn;
                const qOptions = hindi ? q.optionsHi : q.optionsEn;
                const qExpl = hindi ? q.explanationHi : q.explanationEn;

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-ink-950/[0.08] bg-paper-soft p-5 sm:p-6 transition-all hover:border-ink-950/20"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-950/[0.06] pb-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-ink-900">
                          Q.{questions.findIndex((item) => item.id === q.id) + 1}
                        </span>
                        <span className="rounded-md bg-ink-950/[0.05] px-2 py-0.5 font-medium text-ink-600">
                          {q.sectionTitle}
                        </span>
                        <span className="rounded-md bg-brand-500/10 px-2 py-0.5 font-semibold text-brand-700">
                          {q.topic}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isCorrect && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-bold text-emerald-700">
                            <CheckCircle className="size-3" /> Correct (+2.0)
                          </span>
                        )}
                        {isAttempted && !isCorrect && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 font-bold text-rose-600">
                            <XCircle className="size-3" /> Incorrect (-0.5)
                          </span>
                        )}
                        {!isAttempted && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 font-bold text-amber-700">
                            <HelpCircle className="size-3" /> Skipped (0.0)
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleBookmark(q.id)}
                          title="Save to error notebook"
                          className={cn(
                            "rounded-lg p-1.5 transition-colors",
                            isBookmarked
                              ? "bg-violet-600 text-white"
                              : "text-ink-400 hover:bg-ink-950/5 hover:text-ink-700"
                          )}
                        >
                          <Bookmark className="size-4 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Question Statement */}
                    <div className="mt-4">
                      <p className="text-sm sm:text-base font-medium text-ink-950 leading-relaxed whitespace-pre-line">
                        {qText}
                      </p>
                    </div>

                    {/* Options Comparison */}
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {qOptions.map((opt, optIdx) => {
                        const isChosen = ans && ans.selectedOption === optIdx;
                        const isRightAnswer = optIdx === q.correctIndex;

                        return (
                          <div
                            key={optIdx}
                            className={cn(
                              "flex items-center gap-3 rounded-xl border p-3 text-xs sm:text-sm font-medium transition-colors",
                              isRightAnswer
                                ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold"
                                : isChosen && !isRightAnswer
                                ? "border-rose-400 bg-rose-50/80 text-rose-950 font-semibold"
                                : "border-ink-950/[0.06] bg-white text-ink-700"
                            )}
                          >
                            <span
                              className={cn(
                                "grid size-6 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-bold",
                                isRightAnswer
                                  ? "bg-emerald-600 text-white"
                                  : isChosen
                                  ? "bg-rose-500 text-white"
                                  : "bg-ink-950/[0.04] text-ink-600"
                              )}
                            >
                              {optionLetters[optIdx]}
                            </span>
                            <span className="flex-1">{opt}</span>
                            {isRightAnswer && (
                              <span className="text-[11px] font-bold text-emerald-700">
                                Correct Key
                              </span>
                            )}
                            {isChosen && !isRightAnswer && (
                              <span className="text-[11px] font-bold text-rose-600">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step-by-Step Explanation Box */}
                    <div className="mt-4 rounded-xl border border-ink-950/[0.08] bg-white p-4 text-xs sm:text-sm">
                      <p className="flex items-center gap-1.5 font-display text-xs font-bold text-ink-900">
                        <Lightbulb className="size-3.5 text-amber-500" />
                        Step-by-Step Solution:
                      </p>
                      <p className="mt-2 text-ink-700 leading-relaxed whitespace-pre-line">
                        {qExpl}
                      </p>

                      {/* Topper's Shortcut Card */}
                      {q.topperShortcut && (
                        <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-3 text-amber-950">
                          <Zap className="size-4 shrink-0 text-amber-600 mt-0.5" />
                          <div className="text-xs">
                            <span className="font-bold text-amber-900">
                              Topper's Shortcut Method:
                            </span>{" "}
                            <span className="text-amber-950/90">{q.topperShortcut}</span>
                          </div>
                        </div>
                      )}

                      {/* Formula Card */}
                      {q.formula && (
                        <div className="mt-2 text-[11px] font-mono text-ink-500">
                          <span className="font-bold text-ink-700">Formula Used:</span>{" "}
                          <code className="rounded bg-ink-950/[0.04] px-1.5 py-0.5 text-ink-800">
                            {q.formula}
                          </code>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Bottom CTA to return or retake */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white border border-ink-950/[0.08] p-6 sm:p-8">
          <div>
            <h4 className="font-display text-base font-bold text-ink-950">
              Ready for the next drill?
            </h4>
            <p className="text-xs text-ink-500 mt-0.5">
              Consistent mocks are the fastest way to turn revision into an All-India Rank.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onRetake}
              className="rounded-full border border-ink-950/15 px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink-800 hover:bg-ink-950/[0.04]"
            >
              Retake This Paper
            </button>
            <button
              type="button"
              onClick={onExit}
              className="btn-shine rounded-full bg-gradient-to-r from-brand-600 via-violet-600 to-fuchsia-600 px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-white shadow-md hover:scale-[1.02]"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
