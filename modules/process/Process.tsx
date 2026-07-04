/**
 * Owner: Anish (@anish)
 * Module rules: import only from data/, lib/, components/ui/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import type { ProcessStep } from "@/lib/types";

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We sit with your team, map the real workflow, and agree on what success measurably looks like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Flows, data models, and interfaces are sketched and pressure-tested before a line of production code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Short iterations with working software every week — you see progress, not status reports.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "We deploy to production, migrate data, and train the people who will use it daily.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Monitoring, fixes, and steady improvements after launch — we stay accountable for what we built.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-contour">
          How we work
        </p>
        <div className="mt-8 flex flex-col md:flex-row">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex flex-1 flex-col md:flex-row">
              {/* hairline divider between steps */}
              {i > 0 && (
                <div
                  className="my-6 h-px w-full bg-contour/30 md:mx-6 md:my-0 md:h-auto md:w-px md:self-stretch"
                  aria-hidden="true"
                />
              )}
              <div className="flex-1">
                <p className="font-mono text-sm text-contour">{step.number}</p>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm text-contour">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
