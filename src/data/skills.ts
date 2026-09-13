import type { SkillCategory } from "@/types/content";

/** AI/ML leads, ahead of Frontend, to match the positioning. */
export const SKILLS: readonly SkillCategory[] = [
  {
    id: "ai",
    title: "AI & ML",
    skills: [
      "LLMs",
      "RAG",
      "NLP",
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "scikit-learn",
      "Pandas",
      "Jupyter",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Three.js",
      "Vite",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "NestJS",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
    ],
  },
  {
    id: "infra",
    title: "Infrastructure & Tools",
    skills: ["AWS", "Google Cloud", "Vercel", "Docker", "Git", "Unity", "Cursor"],
  },
] as const;
