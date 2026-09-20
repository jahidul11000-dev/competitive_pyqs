export const dreamPosts = [
  "ASO, Ministry of External Affairs",
  "Income Tax Inspector, CBDT",
  "Inspector (Examiner), CBIC",
  "ASO, Central Secretariat Services",
  "Sub-Inspector, CBI",
  "Assistant Enforcement Officer",
  "AAO, C&AG",
  "Excise Inspector, CBIC",
  "Inspector (Preventive Officer)",
  "Auditor, C&AG",
  "Tax Assistant, CBDT",
  "Junior Statistical Officer",
  "Accountant, CGA",
  "Upper Division Clerk",
];

export const stats = [
  {
    value: 12500,
    suffix: "+",
    label: "Authentic PYQs",
    sub: "Every paper from 1999 to 2025, key-verified",
    format: (v: number) => Math.round(v).toLocaleString("en-IN"),
  },
  {
    value: 320,
    suffix: "+",
    label: "Full-length papers",
    sub: "Tier I & Tier II, every shift reproduced",
    format: (v: number) => Math.round(v).toLocaleString("en-IN"),
  },
  {
    value: 280000,
    suffix: "+",
    label: "Aspirants",
    sub: "attempt mocks here every single day",
    format: (v: number) => Math.round(v).toLocaleString("en-IN"),
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Aspirant rating",
    sub: "from 38,000+ verified reviews",
    format: (v: number) => v.toFixed(1),
  },
];

export interface Testimonial {
  name: string;
  initials: string;
  rank: string;
  post: string;
  quote: string;
  hue: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rahul Verma",
    initials: "RV",
    rank: "AIR 47 · CGL 2024",
    post: "ASO, MEA",
    quote:
      "I stopped buying new books in my second attempt. Just PYQs, mocked three times each. Over 40 questions in my Tier-I felt like déjà vu.",
    hue: "from-indigo-500 to-violet-500",
  },
  {
    name: "Sneha Kulkarni",
    initials: "SK",
    rank: "AIR 112 · CGL 2023",
    post: "Income Tax Inspector",
    quote:
      "Chapter-wise Quant drills took me from 18 attempts to 25. The auto error notebook became my last-10-days revision bible.",
    hue: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Amit Kumar Yadav",
    initials: "AY",
    rank: "AIR 203 · CGL 2024",
    post: "Inspector (Examiner), CBIC",
    quote:
      "Real interface, real timer, real −0.50 marking. On exam day it felt like my 74th mock of the year — not my first time in the chair.",
    hue: "from-amber-500 to-orange-500",
  },
  {
    name: "Priya Singh",
    initials: "PS",
    rank: "CGL 2023 Qualified",
    post: "ASO, CSS",
    quote:
      "Bilingual solutions meant I could revise GA in Hindi at 2x speed. Subject-wise tests before every Sunday — non-negotiable ritual.",
    hue: "from-emerald-500 to-teal-500",
  },
  {
    name: "Md. Arshad",
    initials: "MA",
    rank: "AIR 89 · CGL 2024",
    post: "Excise Inspector",
    quote:
      "The percentile graph after every mock told me exactly where I stood against 2 lakh serious aspirants. No inflated scores, no false comfort.",
    hue: "from-sky-500 to-indigo-500",
  },
  {
    name: "Kavita Rawat",
    initials: "KR",
    rank: "CGL 2022 Qualified",
    post: "Auditor, C&AG",
    quote:
      "Random question banks wasted my first attempt. PYQ-only prep is why my second attempt ended with a joining letter.",
    hue: "from-rose-500 to-fuchsia-500",
  },
  {
    name: "Deepak Saini",
    initials: "DS",
    rank: "AIR 31 · CGL 2023",
    post: "Sub-Inspector, CBI",
    quote:
      "Shift-wise papers from 2019 onwards are gold. I mocked one full shift every morning at 9 AM — exam slot muscle memory is real.",
    hue: "from-violet-500 to-purple-500",
  },
  {
    name: "Tanvi Deshmukh",
    initials: "TD",
    rank: "AIR 158 · CGL 2024",
    post: "AAO, C&AG",
    quote:
      "The weightage analytics showed me Geometry was quietly eating my score. Three weeks of chapter drills later, +22 marks in Tier-II.",
    hue: "from-amber-400 to-rose-500",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Are these really authentic previous year questions?",
    a: "Yes. Every question is sourced from official SSC CGL papers from 1999 to 2025, including the latest 2024–25 shifts, and cross-verified against SSC's official answer keys. Where SSC revised an answer after objections, we flag it and explain why.",
  },
  {
    q: "Does it follow the new SSC CGL pattern?",
    a: "Fully. Tier-I (100 Qs, 200 marks, 60 min) and the current Tier-II Paper-I — Mathematical Abilities, Reasoning & GI, English, GA, the Computer Knowledge Module, and DEST typing practice. As soon as SSC notifies any change for 2026, the platform updates within days.",
  },
  {
    q: "Is the content available in Hindi and English?",
    a: "Every question, option and detailed solution is available in both Hindi and English, and you can toggle mid-mock — exactly like the real SSC interface. Solutions include the standard method plus the shortcut toppers actually use in the hall.",
  },
  {
    q: "How is this better than free PYQ PDFs and Telegram channels?",
    a: "A PDF can't run a 60-minute clock, deduct −0.50 per error, normalise your percentile against 2,80,000 aspirants, or auto-build a notebook of your mistakes. CGL PYQs reproduces the exact exam interface and turns every attempt into measurable analytics — accuracy heatmaps, time-per-question, and chapter mastery.",
  },
  {
    q: "What's the difference between full, chapter-wise and subject-wise mocks?",
    a: "Full mocks reproduce an entire paper end-to-end for exam stamina. Chapter-wise drills isolate one topic (say, Profit & Loss — 214 PYQs) to fix a weak spot. Subject-wise tests bundle all chapters of one subject (Quant, Reasoning, English or GA) into a timed sectional battle. Toppers rotate all three.",
  },
  {
    q: "Will new SSC CGL 2026 papers and updates be added?",
    a: "Yes — new shifts are digitised, key-checked and published within 72 hours of the exam, free for all Champion members. Your subscription covers everything released during your plan period.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Every Champion plan comes with a 7-day, no-questions-asked refund. Mail support in Hindi or English and we process it within 48 hours. You can also stay on the Free plan forever — no card required.",
  },
];

export const overlapChart = [
  { year: "2020", pct: 52 },
  { year: "2021", pct: 58 },
  { year: "2022", pct: 61 },
  { year: "2023", pct: 65 },
  { year: "2024", pct: 71 },
];
