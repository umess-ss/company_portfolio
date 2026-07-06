export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image?: string;
}

export const blog: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable AI Systems in 2024",
    excerpt: "Learn best practices for architecting AI systems that can handle real-world scale and complexity.",
    content: "Building scalable AI systems requires careful consideration of architecture, infrastructure, and deployment strategies...",
    author: "Anish",
    date: "2024-12-15",
    readTime: 8,
    category: "AI & Machine Learning",
    tags: ["AI", "Architecture", "Scalability"],
  },
  {
    id: "2",
    title: "React Performance Optimization Tips",
    excerpt: "Practical techniques to optimize your React applications for better performance and user experience.",
    content: "React performance optimization is crucial for delivering fast, responsive user experiences...",
    author: "Umesh",
    date: "2024-12-10",
    readTime: 6,
    category: "Web Development",
    tags: ["React", "Performance", "Frontend"],
  },
  {
    id: "3",
    title: "Mobile App Development: Native vs Cross-platform",
    excerpt: "A detailed comparison of native and cross-platform app development approaches and when to use each.",
    content: "Choosing between native and cross-platform app development depends on your specific project requirements...",
    author: "Dev Team",
    date: "2024-12-05",
    readTime: 10,
    category: "Mobile Development",
    tags: ["Mobile", "Development", "Architecture"],
  },
  {
    id: "4",
    title: "Getting Started with TypeScript",
    excerpt: "A beginner's guide to TypeScript fundamentals and why you should consider using it in your next project.",
    content: "TypeScript is a powerful superset of JavaScript that adds static type checking and other great features...",
    author: "Anish",
    date: "2024-11-28",
    readTime: 7,
    category: "Web Development",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
  },
];
