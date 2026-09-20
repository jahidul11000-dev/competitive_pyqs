import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper font-sans text-ink-900">
        <a
          href="#features"
          className="sr-only z-[60] rounded-full bg-ink-950 px-5 py-2.5 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <Features />
          <Showcase />
          <Benefits />
          <Testimonials />
          <Pricing />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
