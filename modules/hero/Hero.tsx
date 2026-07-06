"use client";

/**
 * Owner: Umesh (@umess-ss)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * GSAP-inspired hero: massive kinetic "Design. Build. Ship." type over
 * a faint grid with parallax accent orbs, an oversized outlined
 * marquee band, then the tech-logo marquee on the bottom edge.
 */
import type { CSSProperties } from "react";

import { Marquee } from "@/components/motion/Marquee";
import { Parallax } from "@/components/motion/Parallax";
import { Button } from "@/components/ui/button";
import { technologies } from "@/data/technologies";
import type { SiteConfig } from "@/lib/types";

export interface HeroProps {
  site: SiteConfig;
}

/** Near-black brand marks flip to currentColor so they read in dark mode. */
function isNearBlack(hex: string) {
  const n = parseInt(hex, 16);
  return ((n >> 16) & 255) + ((n >> 8) & 255) + (n & 255) < 90;
}


export function Hero({ site }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-paper text-ink"
    >
      {/* Blueprint grid, faded out radially so it frames the headline */}
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]"
        aria-hidden="true"
      />

      {/* Parallax accent orbs */}
      <Parallax
        offset={90}
        className="pointer-events-none absolute -top-24 right-[-10%]"
      >
        <div
          className="orb-float size-[26rem] rounded-full bg-signal/15 blur-3xl md:size-[34rem]"
          aria-hidden="true"
        />
      </Parallax>
      <Parallax
        offset={50}
        className="pointer-events-none absolute bottom-[-6rem] left-[-12%]"
      >
        <div
          className="orb-float-late size-[22rem] rounded-full bg-amber-soft/10 blur-3xl md:size-[30rem]"
          aria-hidden="true"
        />
      </Parallax>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-10 pt-32">

        <p
          className="intro-fade mt-7 max-w-xl font-body text-lg text-contour-strong md:text-xl"
          style={{ "--intro-step": 3 } as CSSProperties}
        >
           we ship AI systems, custom software, and mobile apps — designed, built, and shipped by one senior team.
        </p>

        <div
          className="intro-fade mt-10 flex flex-wrap items-center gap-4"
          style={{ "--intro-step": 4 } as CSSProperties}
        >
          <Button
            asChild
            size="lg"
            className="px-7 text-base"
          >
            <a href="#contact">Start a project</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-contour px-7 text-base"
          >
            <a href="#work">See our work →</a>
          </Button>
        </div>
      </div>


      {/* Tech stack marquee */}
      <div
        className="intro-fade relative z-10 border-t border-contour/50 py-5"
        style={{ "--intro-step": 6 } as CSSProperties}
      >
        <Marquee duration={28} className="mx-auto max-w-7xl px-6">
          {technologies.map((tech) => (
            <span
              key={tech.id}
              className="flex shrink-0 items-center gap-2.5 text-contour-strong"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 shrink-0"
                fill={isNearBlack(tech.hex) ? "currentColor" : `#${tech.hex}`}
                aria-hidden="true"
              >
                <path d={tech.iconPath} />
              </svg>
              <span className="font-mono text-sm">{tech.name}</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
