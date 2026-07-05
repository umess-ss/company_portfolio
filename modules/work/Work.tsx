"use client";

/**
 * Owner: Govinda (@govinda)
 * Module rules: import only from data/, lib/, components/ - never
 * from another module. All CSS custom properties live in globals.css.
 *
 * The case study dialog is controlled from page.tsx (openSlug) so the
 * hero's contour markers can open it without cross-module imports.
 */
import { ProductFrame } from "@/components/ProductFrame";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";
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
  return `${project.serviceName} - ${project.year} - ${project.durationWeeks} weeks`;
}

function CaseStudyCover({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-contour/20 bg-gradient-to-br from-ink via-ink/95 to-pine/80 p-4 text-paper shadow-sm sm:p-5 lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(228,87,46,0.18),_transparent_28%)]" />
      <div className="relative space-y-5">
        <div className="space-y-4">
          <div className="inline-flex rounded-full border border-paper/15 bg-paper/10 px-3 py-1 font-mono text-[11px] tracking-widest text-contour">
            CASE STUDY
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-contour/80">
              {project.serviceName} - {project.year}
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-tight text-paper sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-contour">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {project.metrics.slice(0, 3).map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-paper/10 bg-paper/10 p-3 backdrop-blur-sm"
            >
              <p className="font-mono text-base text-paper">{metric.value}</p>
              <p className="mt-1 font-body text-[11px] leading-tight text-contour">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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
          intro="Four production systems across logistics, healthcare, legal, and finance - built end to end by this team."
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
                <div className="mt-2 flex flex-wrap items-center gap-3">
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
                  View case study -&gt;
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case study modal - shadcn Dialog handles focus trap and Escape. */}
      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => {
          if (!open) onOpenChange(null);
        }}
      >
        {openProject && (
          <DialogContent className="!top-[4svh] !max-w-[min(56rem,calc(100vw-1rem))] !-translate-y-0 max-h-[92svh] w-[min(56rem,calc(100vw-1rem))] overflow-y-auto p-4 sm:p-6">
            <div className="space-y-6 pr-1">
              <DialogHeader className="pr-10">
                <p className="font-mono text-xs text-contour-strong">
                  {projectMeta(openProject)} - team of {openProject.teamSize}
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

              <CaseStudyCover project={openProject} />

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
                <div className="space-y-5">
                  {CASE_STUDY_SECTIONS.map(([heading, key]) => (
                    <section key={key}>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                        {heading}
                      </h4>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink">
                        {openProject[key]}
                      </p>
                    </section>
                  ))}
                </div>

                <aside className="space-y-5 rounded-lg border border-contour/20 bg-contour/10 p-4">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                      Results
                    </h4>
                    <div className="mt-3 space-y-3">
                      {openProject.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-mono text-xl text-ink">
                            {metric.value}
                          </p>
                          <p className="mt-1 font-body text-xs text-contour-strong">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-contour-strong">
                      Tech stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
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
                </aside>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
