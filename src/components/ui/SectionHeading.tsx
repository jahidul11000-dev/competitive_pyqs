import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]",
            dark
              ? "border-white/15 bg-white/5 text-brand-300"
              : "border-ink-950/10 bg-white text-brand-700 shadow-[0_1px_0_rgba(18,16,28,0.04)]"
          )}
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand-500" />
          </span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem]",
            dark ? "text-white" : "text-ink-950"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              dark ? "text-ink-300" : "text-ink-500"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
