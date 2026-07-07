/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Compact "industries we serve" grid: ten icon chips, no prose —
 * proof of breadth, not a wall of text.
 */
import {
  Banknote,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/reveal";

const INDUSTRIES: { name: string; icon: LucideIcon }[] = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Restaurant", icon: UtensilsCrossed },
  { name: "Retail", icon: ShoppingBag },
  { name: "Finance", icon: Banknote },
  { name: "Logistics", icon: Truck },
  { name: "Real Estate", icon: Building2 },
  { name: "Travel", icon: Plane },
  { name: "Manufacturing", icon: Factory },
  { name: "Government", icon: Landmark },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-24 bg-paper py-24 text-ink md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Industries we serve"
          title="Built for the sector you work in"
          intro="The same senior team, applied to very different problems — from patient queues to fleet telemetry."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 5) * 60}>
              <div className="group flex flex-col items-center gap-3 rounded-xl border border-contour/40 px-4 py-6 text-center transition-colors hover:border-signal/40">
                <industry.icon
                  className="size-6 text-signal"
                  aria-hidden="true"
                />
                <p className="font-body text-sm font-medium text-ink">
                  {industry.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
