import { Clock, Pause, Play } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { SectionId, TestConfig } from "../../types/test";
import { cn } from "../../utils/cn";

interface TestHeaderProps {
  testConfig: TestConfig;
  currentSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  timeRemaining: number; // in seconds
  isPaused: boolean;
  onTogglePause: () => void;
  hindi: boolean;
  onToggleLanguage: (hindi: boolean) => void;
  onSubmitClick: () => void;
  onExitTest: () => void;
  sectionCounts: Record<SectionId, { answered: number; total: number }>;
}

export function TestHeader({
  testConfig,
  currentSection,
  onSelectSection,
  timeRemaining,
  isPaused,
  onTogglePause,
  hindi,
  onToggleLanguage,
  onSubmitClick,
  onExitTest,
  sectionCounts,
}: TestHeaderProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isUrgent = timeRemaining < 180 && timeRemaining > 0;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-950/[0.08] bg-ink-950 text-white shadow-lg">
      {/* Top Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand & Test Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onExitTest}
            title="Exit to home"
            className="group flex items-center gap-2 rounded-xl transition-transform hover:scale-95"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-600 shadow-[0_4px_12px_rgba(106,93,240,0.4)]">
              <GraduationCap className="size-4 text-white" strokeWidth={2.2} />
            </span>
            <div className="text-left hidden sm:block">
              <span className="font-display text-sm font-bold tracking-tight text-white">
                CGL<span className="text-gradient"> PYQs</span>
              </span>
              <span className="block text-[10px] font-mono text-white/40 leading-none">
                Exam Simulator
              </span>
            </div>
          </button>

          <div className="hidden md:block h-6 w-px bg-white/10" />

          <div className="truncate max-w-[200px] sm:max-w-xs md:max-w-md">
            <h1 className="truncate font-display text-xs sm:text-sm font-bold text-white">
              {testConfig.title}
            </h1>
            <p className="truncate text-[10px] text-white/50">{testConfig.subtitle}</p>
          </div>
        </div>

        {/* Timer, Language, and Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5">
            <button
              type="button"
              onClick={() => onToggleLanguage(false)}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-bold transition-all",
                !hindi ? "bg-white text-ink-950 shadow" : "text-white/60 hover:text-white"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage(true)}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-bold transition-all",
                hindi ? "bg-white text-ink-950 shadow" : "text-white/60 hover:text-white"
              )}
            >
              हिं
            </button>
          </div>

          {/* Countdown Timer */}
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors",
              isUrgent
                ? "border-rose-500/50 bg-rose-500/20 text-rose-300 animate-pulse"
                : "border-white/15 bg-white/[0.08] text-white"
            )}
          >
            <Clock className={cn("size-3.5", isUrgent ? "text-rose-400" : "text-brand-300")} />
            <span>
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>

          {/* Pause Button */}
          <button
            type="button"
            onClick={onTogglePause}
            title={isPaused ? "Resume Test" : "Pause Timer"}
            className="grid size-8.5 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            {isPaused ? <Play className="size-3.5 fill-current" /> : <Pause className="size-3.5" />}
          </button>

          {/* Submit Test Button */}
          <button
            type="button"
            onClick={onSubmitClick}
            className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1.5 sm:px-4 sm:py-2 font-display text-xs sm:text-sm font-bold text-ink-950 shadow-[0_4px_16px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(16,185,129,0.5)]"
          >
            Submit Test
          </button>
        </div>
      </div>

      {/* Section Switcher Tabs */}
      <div className="border-t border-white/[0.07] bg-ink-900/60 px-4 sm:px-6 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-1 sm:gap-2 overflow-x-auto py-2 no-scrollbar">
          {testConfig.sections.map((section) => {
            const active = currentSection === section.id;
            const counts = sectionCounts[section.id] || { answered: 0, total: section.count };
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelectSection(section.id)}
                className={cn(
                  "group flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
                  active
                    ? "bg-brand-500 text-white shadow-[0_2px_10px_rgba(106,93,240,0.5)]"
                    : "bg-white/[0.04] text-white/60 hover:bg-white/[0.09] hover:text-white"
                )}
              >
                <span>{hindi ? section.labelHi : section.label}</span>
                <span
                  className={cn(
                    "rounded-md px-1.5 py-0.5 font-mono text-[10px] font-bold",
                    active
                      ? "bg-white/20 text-white"
                      : "bg-white/[0.06] text-white/50 group-hover:text-white/80"
                  )}
                >
                  {counts.answered}/{counts.total}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
