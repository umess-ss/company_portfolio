"use client";

import { motion, useReducedMotion } from "motion/react";
import type { JSX } from "react";

export interface KineticTextProps {
  text: string;
  /** Words to render with the accent gradient. Matched case-insensitively. */
  highlight?: string[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Seconds before the first word animates in. */
  delay?: number;
}

/**
 * Kinetic word-by-word headline reveal: each word rises out of a
 * clipped line with a blur that resolves as it lands. Falls back to a
 * plain static heading under prefers-reduced-motion.
 */
export function KineticText({
  text,
  highlight = [],
  as: Tag = "h1",
  className = "",
  delay = 0,
}: KineticTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const highlightSet = new Set(highlight.map((w) => w.toLowerCase()));

  const isHighlighted = (word: string) =>
    highlightSet.has(word.toLowerCase().replace(/[^\p{L}\p{N}&]+/gu, ""));

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className={isHighlighted(word) ? "text-gradient" : undefined}>
            {word}{" "}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <motion.span
            className={`inline-block will-change-transform ${
              isHighlighted(word) ? "text-gradient" : ""
            }`}
            initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
