import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  format?: (v: number) => string;
  className?: string;
}

/** Spring-driven counter that animates when scrolled into view. */
export function CountUp({ to, format, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 18, restDelta: 0.01 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = format
          ? format(v)
          : Math.round(v).toLocaleString("en-IN");
      }
    });
    return unsub;
  }, [spring, format]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
