import { PanelRightClose } from "lucide-react";
import { Question, QuestionStatus, SectionId } from "../../types/test";
import { cn } from "../../utils/cn";

interface QuestionPaletteProps {
  questions: Question[];
  currentQuestionIndex: number;
  questionStatuses: Record<string, QuestionStatus>;
  onSelectQuestion: (index: number) => void;
  currentSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  isOpenMobile: boolean;
  onToggleMobile: () => void;
}

export function QuestionPalette({
  questions,
  currentQuestionIndex,
  questionStatuses,
  onSelectQuestion,
  currentSection,
  onSelectSection,
  isOpenMobile,
  onToggleMobile,
}: QuestionPaletteProps) {
  // Count stats
  const stats = {
    answered: 0,
    notAnswered: 0,
    marked: 0,
    answeredMarked: 0,
    notVisited: 0,
  };

  questions.forEach((q) => {
    const s = questionStatuses[q.id] || "not-visited";
    if (s === "answered") stats.answered++;
    else if (s === "not-answered") stats.notAnswered++;
    else if (s === "marked") stats.marked++;
    else if (s === "answered-marked") stats.answeredMarked++;
    else stats.notVisited++;
  });

  const getStatusColor = (status: QuestionStatus, isCurrent: boolean) => {
    let base = "";
    if (status === "answered") {
      base = "bg-emerald-500 text-white font-bold";
    } else if (status === "not-answered") {
      base = "bg-rose-500 text-white font-bold";
    } else if (status === "marked") {
      base = "bg-violet-500 text-white font-bold";
    } else if (status === "answered-marked") {
      base = "bg-violet-600 text-white font-bold ring-2 ring-emerald-400";
    } else {
      base = "bg-ink-950/[0.05] text-ink-600 hover:bg-ink-950/[0.09]";
    }

    if (isCurrent) {
      return `${base} ring-3 ring-brand-500 ring-offset-2 ring-offset-paper scale-105 z-10`;
    }
    return base;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onToggleMobile}
          className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Palette Container */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-40 flex w-80 sm:w-88 flex-col border-l border-ink-950/[0.08] bg-paper-soft shadow-2xl transition-transform duration-300 lg:static lg:z-auto lg:shadow-none",
          isOpenMobile ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        {/* Mobile Header / Close */}
        <div className="flex items-center justify-between border-b border-ink-950/[0.08] p-4 lg:hidden">
          <span className="font-display text-sm font-bold text-ink-950">Question Palette</span>
          <button
            type="button"
            onClick={onToggleMobile}
            className="rounded-lg p-1.5 text-ink-600 hover:bg-ink-950/5"
          >
            <PanelRightClose className="size-5" />
          </button>
        </div>

        {/* Candidate Profile Strip */}
        <div className="flex items-center gap-3 border-b border-ink-950/[0.08] bg-white/70 p-4">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 font-display text-sm font-bold text-white shadow-md">
            CG
          </span>
          <div>
            <p className="font-display text-xs font-bold text-ink-950">Aspirant · CGL 2025</p>
            <p className="font-mono text-[11px] text-ink-500">Roll: 2201089421</p>
          </div>
        </div>

        {/* Legend */}
        <div className="border-b border-ink-950/[0.08] p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
            Legend Status
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-medium text-ink-700">
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-md bg-emerald-500 text-[10px] font-bold text-white">
                {stats.answered}
              </span>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-md bg-rose-500 text-[10px] font-bold text-white">
                {stats.notAnswered}
              </span>
              <span>Not Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-md bg-violet-500 text-[10px] font-bold text-white">
                {stats.marked}
              </span>
              <span>Marked</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-md bg-ink-950/[0.08] text-[10px] font-bold text-ink-700">
                {stats.notVisited}
              </span>
              <span>Not Visited</span>
            </div>
          </div>
        </div>

        {/* Section Quick Switch */}
        <div className="border-b border-ink-950/[0.08] px-4 py-2.5 bg-white/40">
          <p className="text-[10px] font-bold uppercase tracking-wider text-ink-400 mb-1.5">Active Section</p>
          <div className="flex flex-wrap gap-1.5">
            {(["quant", "reasoning", "english", "ga"] as SectionId[]).map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => onSelectSection(sec)}
                className={cn(
                  "px-2.5 py-1 rounded-full text-[10px] font-bold capitalize transition-all",
                  currentSection === sec
                    ? "bg-ink-950 text-white shadow-xs"
                    : "bg-ink-950/[0.04] text-ink-600 hover:bg-ink-950/[0.08]"
                )}
              >
                {sec === "ga" ? "GA" : sec}
              </button>
            ))}
          </div>
        </div>

        {/* Question Grid by Section */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-display text-xs font-bold text-ink-900">
              Questions in Test ({questions.length})
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const status = questionStatuses[q.id] || "not-visited";
              const isCurrent = idx === currentQuestionIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    onSelectQuestion(idx);
                    if (isOpenMobile) onToggleMobile();
                  }}
                  className={cn(
                    "grid aspect-square place-items-center rounded-xl font-mono text-xs transition-all duration-150",
                    getStatusColor(status, isCurrent)
                  )}
                  title={`Question ${idx + 1} (${q.sectionTitle}): ${status}`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Section Jump */}
        <div className="border-t border-ink-950/[0.08] bg-white/60 p-3 text-center text-xs text-ink-500">
          <span className="font-semibold text-ink-800">SSC CGL Standard Marking</span>: +2 / -0.5
        </div>
      </aside>
    </>
  );
}
