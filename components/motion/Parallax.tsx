"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

export interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total vertical drift in px over the element's scroll journey.
      Positive = moves down slower than scroll (background feel). */
  offset?: number;
}

/**
 * Scroll-linked parallax wrapper: the child drifts vertically as it
 * moves through the viewport. No-op under prefers-reduced-motion.
 */
export function Parallax({ children, className, offset = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}
