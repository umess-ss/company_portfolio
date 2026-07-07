/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * About page: short studio story, mission & vision cards, and the
 * four working principles. Deliberately minimal — proof lives in
 * /work and /team, so this page stays prose-light.
 */
import {
  Handshake,
  Layers,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { SiteConfig } from "@/lib/types";

export interface AboutProps {
  site: SiteConfig;
}

const PRINCIPLES = [
  {
    icon: Handshake,
    title: "Senior only",
    description:
      "Every line of code is written by a founder. No juniors, no hand-offs, no account managers between you and the people building your system.",
  },
  {
    icon: Layers,
    title: "End to end",
    description:
      "We take work from the first call to production — design, build, launch — and stay on for support and maintenance after it ships.",
  },
  {
    icon: MessageSquareText,
    title: "Plain communication",
    description:
      "Honest estimates, regular demos, and progress you can see. If something slips or a cheaper path exists, you hear it from us first.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Proven technology over hype, tests over promises, and documentation that lets any engineer — ours or yours — pick the system up later.",
  },
] as const;

export function About({ site }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Who we are"
          title="A four-person senior studio in Kathmandu"
          intro={site.description}
        />

        {/* ── Story + mission / vision ─────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <Reveal className="space-y-5 font-body text-base leading-relaxed text-ink/85 md:text-lg">
            <p>
              {site.name} started in {site.foundedYear} when four engineers,
              each carrying years of production work across web platforms,
              mobile apps, and AI systems, decided to build together under one
              name. No layers, no outsourcing — the people you meet on the
              first call are the people who ship your product.
            </p>
            <p>
              We work with schools, hospitals, logistics companies, and
              startups across Nepal and abroad. The common thread: systems
              that have to work every day, for people who are not software
              experts. That shapes everything — what we build, how we test
              it, and how long we stick around after launch.
            </p>
            <p>
              We keep the team small on purpose. Small means senior, fast,
              and accountable: you always know who is building what, and
              nothing gets lost in translation.
            </p>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={80}>
              <div className="rounded-xl border border-contour/40 bg-contour/10 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                  Mission
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                  Give organisations software they can actually rely on —
                  designed carefully, built by seniors, priced honestly, and
                  supported for the long run.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-xl border border-contour/40 bg-contour/10 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                  Vision
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                  To be the team ambitious organisations in Nepal and beyond
                  call first when the software has to work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Working principles ───────────────────────────────── */}
        <div className="mt-20 md:mt-24">
          <SectionHeader
            eyebrow="How we operate"
            title="Four principles, every project"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-xl border border-contour/40 p-6 transition-colors hover:border-signal/40">
                  <principle.icon className="size-5 text-signal" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-contour-strong">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <Reveal className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-contour/40 bg-contour/10 p-8 md:mt-24 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
              Meet the four of us
            </h3>
            <p className="mt-2 max-w-xl font-body text-sm text-contour-strong">
              The whole team, their roles, and how we run a project from the
              first call to launch.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="px-6">
              <Link href="/team">Our team</Link>
            </Button>
            <Button asChild variant="outline" className="px-6">
              <Link href="/how-we-work">How we work</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
