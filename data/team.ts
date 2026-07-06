import type { TeamMember } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Placeholder portraits live in public/team/<id>.svg — replace
 * each file with a real photo (same name, any of .svg/.jpg/.png with
 * matching path here) when available.
 */
export const team: TeamMember[] = [
  {
    id: "umesh",
    name: "Umesh Rajbanshi",
    role: "Frontend & DevOps",
    initials: "UR",
    skills: ["React", "Next.js", "Tailwind", "CI/CD"],
    linkedin: "https://www.linkedin.com/in/umeshrajbanshi/",
    photo: "/team/umesh.jpeg",
  },
  {
    id: "anish",
    name: "Anish Ghimire",
    role: "AI & Backend",
    initials: "AG",
    skills: ["Python", "Django", "LangChain", "PostgreSQL"],
    linkedin: "https://www.linkedin.com/in/anish-ghimire-79a525223/",
    photo: "/team/anish.jpeg",
  },
  {
    id: "govinda",
    name: "Govinda Bhandari",
    role: "Full-stack",
    initials: "GB",
    skills: ["Next.js", "Node.js", "Express", "Go"],
    linkedin: "https://www.linkedin.com/in/govinda-bhandari-4426142a1/",
    photo: "/team/govinda.jpeg",
  },
  {
    id: "ayush",
    name: "Ayush Khanal",
    role: "Mobile & Systems",
    initials: "AK",
    skills: ["React Native", "Flutter", "Firebase", "Docker"],
    linkedin: "https://www.linkedin.com/in/ayush-khanal-345647296/",
    photo: "/team/ayush.jpeg",
  },
];
