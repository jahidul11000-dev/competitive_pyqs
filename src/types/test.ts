export type SectionId = "quant" | "reasoning" | "english" | "ga";

export type QuestionStatus =
  | "not-visited"
  | "not-answered"
  | "answered"
  | "marked"
  | "answered-marked";

export interface Question {
  id: string;
  section: SectionId;
  sectionTitle: string;
  topic: string;
  year: string;
  questionEn: string;
  questionHi: string;
  optionsEn: string[];
  optionsHi: string[];
  correctIndex: number;
  explanationEn: string;
  explanationHi: string;
  topperShortcut?: string;
  formula?: string;
  difficulty: "Easy" | "Moderate" | "Hard";
}

export interface UserAnswer {
  selectedOption: number | null;
  status: QuestionStatus;
  timeSpent: number;
}

export interface TestConfig {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  positiveMarks: number;
  negativeMarks: number;
  sections: {
    id: SectionId;
    label: string;
    labelHi: string;
    count: number;
  }[];
}

export interface SectionScore {
  total: number;
  attempted: number;
  correct: number;
  incorrect: number;
  score: number;
  accuracy: number;
}

export interface TestResult {
  totalScore: number;
  maxScore: number;
  accuracy: number;
  totalAttempted: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  totalTimeSpent: number;
  percentile: number;
  estimatedAir: number;
  sectionScores: Record<SectionId, SectionScore>;
  answers: Record<string, UserAnswer>;
}
