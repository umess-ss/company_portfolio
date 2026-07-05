"use client";

/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * The case study dialog is controlled from page.tsx (openSlug) so the
 * hero's contour markers can open it without cross-module imports.
 */
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";
import { ProductFrame } from "@/components/ProductFrame";
import { SectionHeader } from "@/components/SectionHeader";
import type { Project } from "@/lib/types";

export interface WorkProps {
  projects: Project[];
  /** Slug of the project whose case study modal is open, or null. */
  openSlug: string | null;
  onOpenChange: (slug: string | null) => void;
}

const CASE_STUDY_SECTIONS = [
  ["Problem", "problem"],
  ["Approach", "approach"],
  ["Solution", "solution"],
  ["Outcome", "outcomes"],
] as const;

function projectMeta(project: Project) {
  return `${project.serviceName} · ${project.year} · ${project.durationWeeks} weeks`;
}

export function Work({ projects, openSlug, onOpenChange }: WorkProps) {
  const openProject = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="work" className="scroll-mt-24 bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          dark
          eyebrow="Selected work"
          title="Systems that are running right now."
          intro="Four production systems across logistics, healthcare, legal, and finance — built end to end by this team."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90} className="h-full">
              <button
                type="button"
                onClick={() => onOpenChange(project.slug)}
                className="group h-full w-full cursor-pointer rounded-xl border border-paper/10 bg-paper/5 p-5 text-left transition hover:border-paper/30 hover:shadow-md"
                aria-label={`View case study: ${project.title}`}
              >
                <div className="relative aspect-8/5 w-full overflow-hidden rounded-lg">
                  <ProductFrame screen={project.screen} />
                </div>
                <p className="mt-5 font-mono text-xs text-contour">
                  {projectMeta(project)}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="font-body text-sm text-contour">
                    {project.clientName ?? "Confidential"}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-paper/20 bg-paper/10 font-mono text-xs text-paper"
                  >
                    {project.serviceName}
                  </Badge>
                </div>
                <h3 className="mt-2 font-display text-xl font-medium text-paper">
                  {project.title}
                </h3>
                <p className="mt-2 font-body text-sm text-contour">
                  {project.summary}
                </p>
                <span className="mt-4 inline-block font-body text-sm text-signal underline decoration-signal/40 underline-offset-4 transition group-hover:decoration-signal">
                  View case study →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case study modal — shadcn Dialog handles focus trap + Escape */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => {
          if (!open) onOpenChange(null);
        }}
      >
        {openProject && (
          <DialogContent className="max-h-[90svh] max-w-5xl overflow-y-auto sm:max-w-5xl lg:max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-start">
              <div className="space-y-6">
                <DialogHeader>
                  <p className="font-mono text-xs text-contour-strong">
                    {projectMeta(openProject)} · team of {openProject.teamSize}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-body text-sm text-contour-strong">
                      {openProject.clientName ?? "Confidential"}
                    </span>
                    <Badge
                      variant="outline"
                      className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                    >
                      {openProject.serviceName}
                    </Badge>
                  </div>
                  <DialogTitle className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                    {openProject.title}
                  </DialogTitle>
                  <DialogDescription className="max-w-2xl font-body text-sm text-contour-strong">
                    {openProject.summary}
                  </DialogDescription>
                </DialogHeader>

                {/* metrics strip — the headline numbers, before any prose */}
                <div className="grid grid-cols-1 gap-4 border-y border-contour/20 py-5 sm:grid-cols-3">
                  {openProject.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-mono text-xl text-ink md:text-2xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 font-body text-xs text-contour-strong">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {CASE_STUDY_SECTIONS.map(([heading, key]) => (
                  <div key={key}>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                      {heading}
                    </h4>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink">
                      {openProject[key]}
                    </p>
                  </div>
                ))}

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                    Tech stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {openProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-0 lg:self-start">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-contour/10 p-2 sm:aspect-[5/6] lg:aspect-auto lg:min-h-[32rem]">
                  <ProductFrame screen={openProject.screen} />
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
