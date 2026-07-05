"use client";

/**
 * Owner: Umesh (@umess-ss)
 * Module rules: import only from data/, lib/, components/ui/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

export interface HeroProps {
  /** First 3 projects, rendered as labeled markers on the contour field. */
  markerProjects: Project[];
  /** Opens the project's case study modal (owned by the work module, wired in page.tsx). */
  onMarkerClick: (slug: string) => void;
}

/** Marker positions on the contour field, as percentages of the viewport.
    Labels flip to the left of the dot near the right edge so they never
    clip the viewport. */
const MARKER_POSITIONS = [
  { x: "18%", y: "30%", labelSide: "right" },
  { x: "72%", y: "22%", labelSide: "left" },
  { x: "60%", y: "68%", labelSide: "right" },
] as const;

export function Hero({ markerProjects, onMarkerClick }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden bg-paper text-ink"
    >
      {/* Topographic contour field — decorative; the drift, like all motion
          on the page, pauses under prefers-reduced-motion */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g
          className="contour-drift"
          fill="none"
          stroke="#8FA6B3"
          strokeOpacity="0.45"
          strokeWidth="1"
        >
          <path d="M-60 720 C 180 620, 360 760, 620 660 S 1100 560, 1500 660" />
          <path d="M-60 650 C 200 560, 380 700, 640 600 S 1120 500, 1500 590" />
          <path d="M-60 580 C 220 500, 400 640, 660 540 S 1140 440, 1500 520" />
          <path d="M-60 510 C 240 440, 420 580, 680 480 S 1160 380, 1500 450" />
          <path d="M-60 440 C 260 380, 440 520, 700 420 S 1180 320, 1500 380" />
          <path d="M-60 370 C 280 320, 460 460, 720 360 S 1200 260, 1500 310" />
          <path d="M-60 300 C 300 260, 480 400, 740 300 S 1220 200, 1500 240" />
          <path d="M-60 230 C 320 200, 500 340, 760 240 S 1240 140, 1500 170" />
          {/* nested contour rings — left peak */}
          <ellipse cx="270" cy="270" rx="150" ry="95" transform="rotate(-14 270 270)" />
          <ellipse cx="270" cy="270" rx="110" ry="66" transform="rotate(-14 270 270)" />
          <ellipse cx="270" cy="270" rx="72" ry="40" transform="rotate(-14 270 270)" />
          <ellipse cx="270" cy="270" rx="38" ry="19" transform="rotate(-14 270 270)" />
          {/* nested contour rings — upper right peak */}
          <ellipse cx="1040" cy="200" rx="180" ry="110" transform="rotate(10 1040 200)" />
          <ellipse cx="1040" cy="200" rx="132" ry="76" transform="rotate(10 1040 200)" />
          <ellipse cx="1040" cy="200" rx="88" ry="47" transform="rotate(10 1040 200)" />
          <ellipse cx="1040" cy="200" rx="46" ry="23" transform="rotate(10 1040 200)" />
          {/* nested contour rings — lower right basin */}
          <ellipse cx="870" cy="610" rx="160" ry="90" transform="rotate(-8 870 610)" />
          <ellipse cx="870" cy="610" rx="115" ry="60" transform="rotate(-8 870 610)" />
          <ellipse cx="870" cy="610" rx="70" ry="34" transform="rotate(-8 870 610)" />
        </g>
      </svg>

      {/* Project markers pinned onto the contour field */}
      {markerProjects.slice(0, 3).map((project, i) => {
        const position = MARKER_POSITIONS[i];
        return (
          <button
            key={project.slug}
            type="button"
            onClick={() => onMarkerClick(project.slug)}
            className={`group absolute z-10 hidden -translate-y-1/2 cursor-pointer items-center gap-2 md:flex ${
              position.labelSide === "left"
                ? "-translate-x-full flex-row-reverse"
                : ""
            }`}
            style={{ left: position.x, top: position.y }}
            aria-label={`Open case study: ${project.title}`}
          >
            <span
              className="size-3 shrink-0 rounded-full bg-signal ring-4 ring-signal/20 transition-transform group-hover:scale-125"
              aria-hidden="true"
            />
            <span className="whitespace-nowrap font-mono text-xs text-contour-strong transition-colors group-hover:text-ink">
              {project.title}
            </span>
          </button>
        );
      })}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <h1
          className="intro-fade max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl"
          style={{ "--intro-step": 0 } as CSSProperties}
        >
          AI systems, software &amp; mobile apps — engineered in Kathmandu.
        </h1>
        <p
          className="intro-fade mt-6 max-w-xl font-body text-lg text-contour-strong md:text-xl"
          style={{ "--intro-step": 1 } as CSSProperties}
        >
          We design it. We build it. We ship it. One senior team.
        </p>
        <div
          className="intro-fade mt-10 flex flex-wrap items-center gap-4"
          style={{ "--intro-step": 2 } as CSSProperties}
        >
          <Button asChild size="lg" className="px-6 text-base">
            <a href="#contact">Start a project</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-contour/40 px-6 text-base text-ink hover:border-contour"
          >
            <a href="#work">See our work →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
