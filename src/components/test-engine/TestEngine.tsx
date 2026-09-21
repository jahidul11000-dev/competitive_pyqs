import { useEffect, useState } from "react";
import { Question, QuestionStatus, SectionId, TestConfig, TestResult, UserAnswer } from "../../types/test";
import { mockQuestions } from "../../data/mockQuestions";
import { TestHeader } from "./TestHeader";
import { QuestionArea } from "./QuestionArea";
import { QuestionPalette } from "./QuestionPalette";
import { TestSummaryModal } from "./TestSummaryModal";
import { ScoreReport } from "./ScoreReport";
import { PanelRightOpen } from "lucide-react";

interface TestEngineProps {
  testConfig: TestConfig;
  onExit: () => void;
}

export function TestEngine({ testConfig, onExit }: TestEngineProps) {
  // Filter or load questions according to test config
  const questions: Question[] = mockQuestions.filter((q) => {
    return testConfig.sections.some((sec) => sec.id === q.section);
  }).slice(0, testConfig.totalQuestions);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [timeRemaining, setTimeRemaining] = useState(testConfig.durationMinutes * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [hindi, setHindi] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
  const [isConfirmExitOpen, setIsConfirmExitOpen] = useState(false);

  const currentQuestion = questions[currentIndex] || questions[0];

  // Initialize questions status map
  const questionStatuses: Record<string, QuestionStatus> = {};
  questions.forEach((q) => {
    questionStatuses[q.id] = answers[q.id]?.status || "not-visited";
  });

  // Calculate section answered counts
  const sectionCounts: Record<SectionId, { answered: number; total: number }> = {
    quant: { answered: 0, total: 0 },
    reasoning: { answered: 0, total: 0 },
    english: { answered: 0, total: 0 },
    ga: { answered: 0, total: 0 },
  };

  questions.forEach((q) => {
    if (sectionCounts[q.section]) {
      sectionCounts[q.section].total++;
      if (answers[q.id]?.status === "answered" || answers[q.id]?.status === "answered-marked") {
        sectionCounts[q.section].answered++;
      }
    }
  });

  // Countdown timer effect
  useEffect(() => {
    if (isSubmitted || isPaused) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          calculateAndSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, isPaused]);

  // When changing question, mark the new question as 'not-answered' if previously 'not-visited'
  useEffect(() => {
    if (!currentQuestion) return;
    const currentAns = answers[currentQuestion.id];
    if (!currentAns || currentAns.status === "not-visited") {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          selectedOption: currentAns?.selectedOption ?? null,
          status: currentAns?.selectedOption !== null && currentAns?.selectedOption !== undefined ? "answered" : "not-answered",
          timeSpent: (currentAns?.timeSpent || 0),
        },
      }));
    }
  }, [currentIndex]);

  // Select Option
  const handleSelectOption = (optionIndex: number) => {
    const qId = currentQuestion.id;
    const prev = answers[qId];
    const isMarked = prev?.status === "marked" || prev?.status === "answered-marked";

    setAnswers((old) => ({
      ...old,
      [qId]: {
        selectedOption: optionIndex,
        status: isMarked ? "answered-marked" : "answered",
        timeSpent: (prev?.timeSpent || 0) + 1,
      },
    }));
  };

  // Clear Response
  const handleClearResponse = () => {
    const qId = currentQuestion.id;
    const prev = answers[qId];
    setAnswers((old) => ({
      ...old,
      [qId]: {
        selectedOption: null,
        status: prev?.status === "answered-marked" ? "marked" : "not-answered",
        timeSpent: prev?.timeSpent || 0,
      },
    }));
  };

  // Mark for Review & Next
  const handleMarkForReview = () => {
    const qId = currentQuestion.id;
    const prev = answers[qId];
    const hasAnswer = prev?.selectedOption !== null && prev?.selectedOption !== undefined;

    setAnswers((old) => ({
      ...old,
      [qId]: {
        selectedOption: prev?.selectedOption ?? null,
        status: hasAnswer ? "answered-marked" : "marked",
        timeSpent: prev?.timeSpent || 0,
      },
    }));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    }
  };

  // Save & Next
  const handleSaveAndNext = () => {
    const qId = currentQuestion.id;
    const prev = answers[qId];
    const hasAnswer = prev?.selectedOption !== null && prev?.selectedOption !== undefined;

    setAnswers((old) => ({
      ...old,
      [qId]: {
        selectedOption: prev?.selectedOption ?? null,
        status: hasAnswer ? "answered" : "not-answered",
        timeSpent: prev?.timeSpent || 0,
      },
    }));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    } else {
      setIsSummaryModalOpen(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
    }
  };

  const handleJumpToSection = (sectionId: SectionId) => {
    const targetIdx = questions.findIndex((q) => q.section === sectionId);
    if (targetIdx !== -1) {
      setCurrentIndex(targetIdx);
    }
  };

  // Calculate Result & Finish
  const calculateAndSubmit = () => {
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalAttempted = 0;
    let totalScore = 0;

    const sectionScores: Record<SectionId, any> = {
      quant: { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0 },
      reasoning: { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0 },
      english: { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0 },
      ga: { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0 },
    };

    questions.forEach((q) => {
      const ans = answers[q.id];
      const isAttempted = ans && ans.selectedOption !== null;
      sectionScores[q.section].total++;

      if (isAttempted) {
        totalAttempted++;
        sectionScores[q.section].attempted++;

        if (ans.selectedOption === q.correctIndex) {
          totalCorrect++;
          totalScore += testConfig.positiveMarks;
          sectionScores[q.section].correct++;
          sectionScores[q.section].score += testConfig.positiveMarks;
        } else {
          totalIncorrect++;
          totalScore -= testConfig.negativeMarks;
          sectionScores[q.section].incorrect++;
          sectionScores[q.section].score -= testConfig.negativeMarks;
        }
      }
    });

    Object.keys(sectionScores).forEach((sec) => {
      const s = sectionScores[sec as SectionId];
      s.accuracy = s.attempted > 0 ? (s.correct / s.attempted) * 100 : 0;
    });

    const maxScore = questions.length * testConfig.positiveMarks;
    const accuracy = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0;
    const totalTimeSpent = testConfig.durationMinutes * 60 - timeRemaining;

    // Simulated AIR and percentile based on score ratio
    const scoreRatio = Math.max(0, totalScore) / Math.max(1, maxScore);
    const percentile = Math.min(99.9, Math.max(45, 60 + scoreRatio * 39.5));
    const estimatedAir = Math.max(12, Math.round(280000 * (1 - percentile / 100)));

    const testResult: TestResult = {
      totalScore,
      maxScore,
      accuracy,
      totalAttempted,
      totalCorrect,
      totalIncorrect,
      totalUnattempted: questions.length - totalAttempted,
      totalTimeSpent,
      percentile,
      estimatedAir,
      sectionScores,
      answers,
    };

    setResult(testResult);
    setIsSubmitted(true);
    setIsSummaryModalOpen(false);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(testConfig.durationMinutes * 60);
    setIsPaused(false);
    setIsSubmitted(false);
    setResult(null);
  };

  // If submitted, show Score Report
  if (isSubmitted && result) {
    return (
      <ScoreReport
        testConfig={testConfig}
        questions={questions}
        result={result}
        onRetake={handleRetake}
        onExit={onExit}
      />
    );
  }

  const currentAns = answers[currentQuestion?.id];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-paper font-sans">
      {/* Test Header */}
      <TestHeader
        testConfig={testConfig}
        currentSection={currentQuestion.section}
        onSelectSection={handleJumpToSection}
        timeRemaining={timeRemaining}
        isPaused={isPaused}
        onTogglePause={() => setIsPaused((p) => !p)}
        hindi={hindi}
        onToggleLanguage={setHindi}
        onSubmitClick={() => setIsSummaryModalOpen(true)}
        onExitTest={() => setIsConfirmExitOpen(true)}
        sectionCounts={sectionCounts}
      />

      {/* Main Examination Stage */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Question Area */}
        <main className="flex-1 overflow-hidden">
          <QuestionArea
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            selectedOption={currentAns?.selectedOption ?? null}
            status={currentAns?.status || "not-visited"}
            hindi={hindi}
            onSelectOption={handleSelectOption}
            onClearResponse={handleClearResponse}
            onMarkForReview={handleMarkForReview}
            onSaveAndNext={handleSaveAndNext}
            onPrevious={handlePrevious}
            isFirstQuestion={currentIndex === 0}
            isLastQuestion={currentIndex === questions.length - 1}
          />
        </main>

        {/* Right Palette (Desktop & Mobile Drawer) */}
        <QuestionPalette
          questions={questions}
          currentQuestionIndex={currentIndex}
          questionStatuses={questionStatuses}
          onSelectQuestion={setCurrentIndex}
          currentSection={currentQuestion.section}
          onSelectSection={handleJumpToSection}
          isOpenMobile={isMobilePaletteOpen}
          onToggleMobile={() => setIsMobilePaletteOpen((o) => !o)}
        />

        {/* Mobile Toggle Button for Palette */}
        <button
          type="button"
          onClick={() => setIsMobilePaletteOpen(true)}
          className="fixed bottom-20 right-4 z-30 flex size-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl hover:scale-105 active:scale-95 lg:hidden"
          title="Open Question Palette"
        >
          <PanelRightOpen className="size-5" />
        </button>
      </div>

      {/* Summary Confirmation Modal before final submit */}
      {isSummaryModalOpen && (
        <TestSummaryModal
          testConfig={testConfig}
          questions={questions}
          questionStatuses={questionStatuses}
          onCancel={() => setIsSummaryModalOpen(false)}
          onConfirmSubmit={calculateAndSubmit}
        />
      )}

      {/* Exit Confirmation Modal */}
      {isConfirmExitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl border border-ink-950/[0.08] bg-paper p-6 shadow-2xl">
            <h3 className="font-display text-lg font-bold text-ink-950">Quit Mock Test?</h3>
            <p className="mt-2 text-sm text-ink-600">
              Are you sure you want to leave the test? Your current progress in this session will not be graded.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsConfirmExitOpen(false)}
                className="rounded-full border border-ink-950/15 px-4 py-2 text-xs font-semibold text-ink-700 hover:bg-ink-950/5"
              >
                Continue Test
              </button>
              <button
                type="button"
                onClick={onExit}
                className="rounded-full bg-rose-600 px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-rose-700"
              >
                Yes, Exit to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
