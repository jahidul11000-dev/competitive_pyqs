import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
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
import { TestEngine } from "./components/test-engine/TestEngine";
import { PaperSelectorModal } from "./components/test-engine/PaperSelectorModal";
import { TestConfig } from "./types/test";
import { availableTests } from "./data/mockQuestions";

export default function App() {
  const [isTesting, setIsTesting] = useState(false);
  const [showPaperSelector, setShowPaperSelector] = useState(false);
  const [selectedTest, setSelectedTest] = useState<TestConfig>(availableTests[0]);

  const handleStartMock = (testIndex?: number) => {
    if (typeof testIndex === "number" && availableTests[testIndex]) {
      setSelectedTest(availableTests[testIndex]);
      setIsTesting(true);
    } else {
      setShowPaperSelector(true);
    }
  };

  const handleSelectTestFromModal = (test: TestConfig) => {
    setSelectedTest(test);
    setShowPaperSelector(false);
    setIsTesting(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {isTesting ? (
          <motion.div
            key="test-engine-active"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestEngine
              testConfig={selectedTest}
              onExit={() => setIsTesting(false)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="landing-page-active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="min-h-screen bg-paper font-sans text-ink-900"
          >
            <a
              href="#features"
              className="sr-only z-[60] rounded-full bg-ink-950 px-5 py-2.5 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            >
              Skip to content
            </a>
            <Navbar onStartMock={() => handleStartMock()} />
            <main>
              <Hero onStartMock={() => handleStartMock()} />
              <SocialProof />
              <Features />
              <Showcase onStartMock={handleStartMock} />
              <Benefits />
              <Testimonials />
              <Pricing onStartMock={() => handleStartMock()} />
              <Faq />
              <Cta onStartMock={() => handleStartMock()} />
            </main>
            <Footer />

            <PaperSelectorModal
              isOpen={showPaperSelector}
              onClose={() => setShowPaperSelector(false)}
              onSelectTest={handleSelectTestFromModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
