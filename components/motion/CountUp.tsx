"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export interface CountUpProps {
  /** Raw stat string, e.g. "12+", "24h", "3 days". The first number
      animates; prefix/suffix render as-is. */
  value: string;
  className?: string;
  duration?: number;
}

/** Animates the numeric part of a stat when it scrolls into view. */
export function CountUp({ value, className, duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduceMotion = useReducedMotion();

  const match = value.match(/\d+/);
  const target = match ? parseInt(match[0], 10) : null;
  const prefix = match ? value.slice(0, match.index) : value;
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";

  const [animated, setAnimated] = useState(0);

  const shouldAnimate = target !== null && !reduceMotion;

  useEffect(() => {
    if (!shouldAnimate || !inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setAnimated(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, shouldAnimate, target, duration]);

  const display = shouldAnimate ? animated : target;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display ?? ""}
      {suffix}
    </span>
  );
}
