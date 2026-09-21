import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const links = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#showcase" },
  { label: "Why PYQs", href: "#benefits" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onStartMock?: () => void;
}

export function Navbar({ onStartMock }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-ink-950/[0.06] bg-paper/85 shadow-[0_10px_40px_-18px_rgba(18,16,28,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="CGL PYQs home">
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 via-violet-600 to-fuchsia-600 shadow-[0_8px_20px_-6px_rgba(106,93,240,0.55)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
            <GraduationCap className="size-5 text-white" strokeWidth={2.2} />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight transition-colors duration-300",
              scrolled || open ? "text-ink-950" : "text-white"
            )}
          >
            CGL<span className="text-gradient-dark"> PYQs</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-px",
                  scrolled
                    ? "text-ink-500 hover:bg-ink-950/[0.05] hover:text-ink-950"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#pricing"
            className={cn(
              "text-sm font-semibold transition-colors duration-300",
              scrolled ? "text-ink-600 hover:text-ink-950" : "text-white/80 hover:text-white"
            )}
          >
            Sign in
          </a>
          <button
            type="button"
            onClick={onStartMock}
            className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(91,65,221,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(91,65,221,0.7)]"
          >
            Start free mock
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
            scrolled || open ? "text-ink-950 hover:bg-ink-950/5" : "text-white hover:bg-white/10"
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink-950/[0.06] bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-5">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-display text-lg font-semibold text-ink-800 transition-colors hover:bg-ink-950/[0.04] hover:text-ink-950"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onStartMock?.();
                  }}
                  className="btn-shine w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-5 py-3.5 font-display text-base font-semibold text-white"
                >
                  Start free mock
                  <ArrowRight className="size-4" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
