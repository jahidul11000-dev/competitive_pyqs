import type { ComponentType, SVGProps } from "react";
import { GraduationCap } from "lucide-react";

/* brand icons (removed from lucide) — inline SVGs in lucide stroke style */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}

const columns = [
  {
    title: "Product",
    links: ["Full-length mocks", "Chapter-wise drills", "Subject-wise tests", "Error notebook", "Analytics dashboard"],
  },
  {
    title: "Resources",
    links: ["CGL 2026 syllabus", "Exam calendar", "Cut-off tracker", "Previous papers archive", "Weightage reports"],
  },
  {
    title: "Company",
    links: ["About us", "Results wall", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of use", "Refund policy", "Grievance officer"],
  },
];

const socials: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string }[] = [
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: TelegramIcon, label: "Telegram" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: XIcon, label: "Twitter / X" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink-950">
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 via-violet-600 to-fuchsia-600 shadow-[0_8px_20px_-6px_rgba(106,93,240,0.55)]">
                <GraduationCap className="size-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                CGL<span className="text-gradient"> PYQs</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              The PYQ operating system for SSC CGL. 25+ years of authentic
              papers, rebuilt as full mocks, chapter drills and subject
              battles — with analytics that treat you like a future rank-holder.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:bg-brand-500/10 hover:text-white"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © 2026 CGL PYQs Learning Pvt. Ltd. All rights reserved.
          </p>
          <p className="max-w-md text-center text-[11px] leading-relaxed text-white/25 sm:text-right">
            Not affiliated with the Staff Selection Commission. PYQs digitised
            from officially released papers &amp; answer keys.
          </p>
        </div>
      </div>

      {/* watermark */}
      <div aria-hidden className="pointer-events-none relative select-none overflow-hidden">
        <p className="mask-fade-b -mb-[4vw] text-center font-display text-[16.5vw] font-bold leading-none tracking-[-0.04em] text-white/[0.035]">
          CGL PYQs
        </p>
      </div>
    </footer>
  );
}
