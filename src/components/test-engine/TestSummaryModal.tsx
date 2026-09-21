import { motion } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { Question, QuestionStatus, TestConfig } from "../../types/test";

interface TestSummaryModalProps {
  testConfig: TestConfig;
  questions: Question[];
  questionStatuses: Record<string, QuestionStatus>;
  onCancel: () => void;
  onConfirmSubmit: () => void;
}

export function TestSummaryModal({
  testConfig,
  questions,
  questionStatuses,
  onCancel,
  onConfirmSubmit,
}: TestSummaryModalProps) {
  // Aggregate stats per section
  const sectionStats = testConfig.sections.map((sec) => {
    const secQuestions = questions.filter((q) => q.section === sec.id);
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let notVisited = 0;

    secQuestions.forEach((q) => {
      const s = questionStatuses[q.id] || "not-visited";
      if (s === "answered") answered++;
      else if (s === "not-answered") notAnswered++;
      else if (s === "marked" || s === "answered-marked") marked++;
      else notVisited++;
    });

    return {
      name: sec.label,
      total: secQuestions.length,
      answered,
      notAnswered,
      marked,
      notVisited,
    };
  });

  const totalAnswered = sectionStats.reduce((acc, curr) => acc + curr.answered, 0);
  const totalQuestions = questions.length;
  const unattempted = totalQuestions - totalAnswered;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="w-full max-w-xl overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-paper shadow-2xl"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-ink-950/[0.08] bg-ink-950 px-6 py-4 text-white">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold">Submit Mock Test</h3>
            <p className="text-xs text-white/50">{testConfig.title}</p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {unattempted > 0 && (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-amber-900">
              <AlertCircle className="size-5 shrink-0 text-amber-600 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold">Notice: You have {unattempted} unattempted questions.</p>
                <p className="text-amber-800/80 mt-0.5">
                  Unanswered questions receive 0 marks, while incorrect answers deduct 0.50 marks.
                </p>
              </div>
            </div>
          )}

          {/* Breakdown Table */}
          <div className="overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-ink-950/[0.08] bg-ink-50/70 font-semibold text-ink-700">
                <tr>
                  <th className="p-3">Section</th>
                  <th className="p-3 text-center">Total</th>
                  <th className="p-3 text-center text-emerald-700">Answered</th>
                  <th className="p-3 text-center text-rose-600">Skipped</th>
                  <th className="p-3 text-center text-violet-700">Marked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/[0.05] font-medium text-ink-800">
                {sectionStats.map((sec, idx) => (
                  <tr key={idx} className="hover:bg-ink-50/40">
                    <td className="p-3 font-semibold text-ink-900">{sec.name}</td>
                    <td className="p-3 text-center font-mono">{sec.total}</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-600">
                      {sec.answered}
                    </td>
                    <td className="p-3 text-center font-mono text-rose-500">
                      {sec.notAnswered + sec.notVisited}
                    </td>
                    <td className="p-3 text-center font-mono text-violet-600">{sec.marked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Summary Pill Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-ink-950/[0.03] p-4 text-xs font-semibold text-ink-700">
            <span>
              Total Answered:{" "}
              <strong className="text-emerald-600 font-mono text-sm">{totalAnswered}</strong> /{" "}
              {totalQuestions}
            </span>
            <span>
              Marked for Review:{" "}
              <strong className="text-violet-600 font-mono text-sm">
                {sectionStats.reduce((a, c) => a + c.marked, 0)}
              </strong>
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 border-t border-ink-950/[0.08] bg-white/70 px-6 py-4">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-ink-950/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink-700 hover:bg-ink-950/[0.04]"
          >
            Resume Test
          </button>
          <button
            type="button"
            onClick={onConfirmSubmit}
            className="btn-shine rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            Yes, Final Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
}
