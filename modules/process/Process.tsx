"use client";

/**

 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * "How we work" — seven-step delivery process rendered as a vertical
 * timeline whose spine fills in as the section scrolls past.
 */
import {
  ClipboardList,
  Code2,
  LifeBuoy,
  Map,
  Palette,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { ProcessStep } from "@/lib/types";

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Requirement Gathering",
    description:
      "We understand your needs, goals, and expectations to define the right solution.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "We create a roadmap with features, timelines, and technology to ensure smooth execution.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design Phase",
    description:
      "Our team designs a clean, modern, and user-friendly interface for your approval.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build the system — website, app, or software — using the latest tools and best coding practices.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing & Quality Check",
    description:
      "We thoroughly test for performance, security, speed, and user experience to ensure perfection.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deployment & Launch",
    description:
      "Your project goes live with complete setup and configuration.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Support & Maintenance",
    description:
      "We continue to assist with updates, improvements, and technical support whenever needed.",
    icon: LifeBuoy,
  },
];

export function Process() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="How we work"
          title="From first call to launch — and beyond."
          intro="A clear seven-step process so you always know where your project stands."
        />
        <ol ref={timelineRef} className="relative mx-auto max-w-3xl">
          {/* Timeline spine + scroll-linked progress fill */}
          <div
            className="absolute bottom-6 left-[1.4rem] top-2 w-px bg-contour"
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-6 left-[1.4rem] top-2 w-px origin-top bg-signal"
            style={{ scaleY: reduceMotion ? 1 : spineScale }}
            aria-hidden="true"
          />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="relative pb-12 pl-16 last:pb-0">
                <Reveal delay={i * 60}>
                  <span
                    className="absolute left-0 top-0 flex size-11 items-center justify-center rounded-full border border-contour/70 bg-card text-signal shadow-sm"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                  <p className="font-mono text-xs tracking-widest text-signal">
                    STEP {step.number}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-body text-sm leading-6 text-contour-strong">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
