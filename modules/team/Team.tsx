/**
 * Owner: Ayush (@ayush)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { TeamMember } from "@/lib/types";

/* lucide-react v1 removed brand icons, so GitHub/LinkedIn are inlined
   with the same 24px stroke style the rest of the page uses. */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export interface TeamProps {
  members: TeamMember[];
}

export function Team({ members }: TeamProps) {
  return (
    <section id="team" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="The team"
          title="Four engineers, no handoffs."
          intro="The people you talk to are the people who build your system — from the first scoping call to the last deploy."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.id} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-xl border border-contour/20 bg-white p-6 transition hover:border-contour/50 hover:shadow-md">
                {member.photo ? (
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale transition hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-pine/5">
                    <Avatar className="size-20">
                      <AvatarFallback className="bg-pine/10 font-display text-2xl text-pine">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-contour-strong">
                    {member.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-pine/20 bg-pine/10 font-mono text-xs text-pine"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on GitHub`}
                    className="text-contour-strong transition-colors hover:text-signal"
                  >
                    <GithubIcon className="size-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="text-contour-strong transition-colors hover:text-signal"
                  >
                    <LinkedinIcon className="size-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
