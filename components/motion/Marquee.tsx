import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Full loop duration in seconds. */
  duration?: number;
  /** Fade the edges into the background. */
  fade?: boolean;
}

/**
 * Infinite horizontal marquee. Content is duplicated once and the track
 * translates -50%, so the loop is seamless. Pauses on hover; disabled
 * entirely under prefers-reduced-motion (globals.css).
 */
export function Marquee({
  children,
  className,
  duration = 32,
  fade = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee relative overflow-hidden",
        fade &&
          "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div
        className="marquee-track flex w-max items-center gap-12 pr-12"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {children}
        <div aria-hidden="true" className="flex items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
