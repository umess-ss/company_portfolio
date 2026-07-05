import type { TeamMember } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * TODO (owner: Ayush): drop 4 real photos into public/team/ — plain
 * background, consistent crop and lighting — and set `photo` to
 * "/team/<id>.jpg". Cards fall back to initials until then.
 */
export const team: TeamMember[] = [
  {
    id: "govinda",
    name: "Govinda Bhandari",
    role: "Full-stack",
    initials: "GB",
    skills: ["FastAPI", "LangChain", "PostgreSQL", "DevOps"],
    github: "https://github.com/govinda",
    linkedin: "https://www.linkedin.com/in/govinda",
    photo: null,
  },
  {
    id: "anish",
    name: "Anish Ghimire",
    role: "AI & Backend",
    initials: "AG",
    skills: ["Next.js", "TypeScript", "React", "Node.js"],
    github: "https://github.com/anish",
    linkedin: "https://www.linkedin.com/in/anish",
    photo: null,
  },
  {
    id: "umesh",
    name: "Umesh Rajbanshi",
    role: "Frontend & DevOps",
    initials: "UR",
    skills: ["React", "Tailwind", "Figma", "Motion"],
    github: "https://github.com/umess-ss",
    linkedin: "https://www.linkedin.com/in/umesh",
    photo: null,
  },
  {
    id: "ayush",
    name: "Ayush Khanal",
    role: "Mobile & Systems",
    initials: "AK",
    skills: ["React Native", "Flutter", "Firebase", "Docker"],
    github: "https://github.com/ayush",
    linkedin: "https://www.linkedin.com/in/ayush",
    photo: null,
  },
];
