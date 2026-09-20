import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}

/** Buttery scroll-reveal wrapper — fades + rises into view with a soft expo curve. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.9,
  className,
  style,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
