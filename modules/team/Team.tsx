/**
 * Owner: Ayush (@ayush)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Clean team cards: rounded portrait photo, name, role, and skills
 * below. Inspired by modern SaaS team pages.
 */
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { TeamMember } from "@/lib/types";

/* lucide-react v1 dropped brand icons, so LinkedIn is inlined in the
   same 24px stroke style as the rest of the page. */
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
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Our team"
          title="Four engineers, no handoffs."
          intro="The people you talk to are the people who build your system."
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.id} delay={(i % 4) * 80} className="h-full">
              <article className="flex flex-col items-start">
                {/* Photo — rounded corners, subtle bg */}
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-contour/20">
                  <Image
                    src={member.photo ?? "/team/placeholder.svg"}
                    alt={`Photo of ${member.name}`}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Name & LinkedIn */}
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {member.name}
                  </h3>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-contour-strong transition-colors hover:text-signal"
                    >
                      <LinkedinIcon className="size-5" />
                    </a>
                  )}
                </div>

                {/* Role */}
                <p className="mt-1 font-body text-sm font-medium text-signal">
                  {member.role}
                </p>

                {/* Skills as description text */}
                {member.skills && (
                  <p className="mt-2 font-body text-sm leading-relaxed text-contour-strong">
                    {member.skills.join(", ")}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
