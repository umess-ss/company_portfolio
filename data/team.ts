import type { TeamMember } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Photos: drop real images in public/team/ and set `photo`
 * on feat/team-real-profiles.
 */
export const team: TeamMember[] = [
  {
    id: "govinda",
    name: "Govinda",
    role: "Co-founder · AI & Backend",
    initials: "GV",
    skills: ["FastAPI", "LangChain", "PostgreSQL", "DevOps"],
    github: "https://github.com/govinda",
    linkedin: "https://www.linkedin.com/in/govinda",
    photo: null,
  },
  {
    id: "anish",
    name: "Anish",
    role: "Co-founder · Full-stack",
    initials: "AN",
    skills: ["Next.js", "TypeScript", "React", "Node.js"],
    github: "https://github.com/anish",
    linkedin: "https://www.linkedin.com/in/anish",
    photo: null,
  },
  {
    id: "umesh",
    name: "Umesh",
    role: "Co-founder · Frontend & Design",
    initials: "UM",
    skills: ["React", "Tailwind", "Figma", "Motion"],
    github: "https://github.com/umess-ss",
    linkedin: "https://www.linkedin.com/in/umesh",
    photo: null,
  },
  {
    id: "ayush",
    name: "Ayush",
    role: "Co-founder · Mobile & Systems",
    initials: "AY",
    skills: ["React Native", "Flutter", "Firebase", "Docker"],
    github: "https://github.com/ayush",
    linkedin: "https://www.linkedin.com/in/ayush",
    photo: null,
  },
];
