import type { Education, Experience } from "@/types/content";

export const EXPERIENCE: readonly Experience[] = [
  {
    id: "chimege",
    start: "Apr 2026",
    end: "Aug 2026",
    role: "AI Engineer",
    company: "Chimege Systems LLC",
    bullets: [
      "Developed AI agent infrastructure, integrating LLMs, tool calling, and RAG pipelines for production use.",
      "Designed and implemented AI agents in n8n, enabling integration with an existing multi-agent architecture.",
    ],
    skills: ["LLMs", "RAG", "Tool Calling", "AI Agents", "n8n", "Multi-Agent Systems"],
  },
  {
    id: "gobicraft",
    start: "Sep 2025",
    end: "Dec 2025",
    role: "AI Software Engineer Co-Op",
    company: "Gobicraft",
    bullets: [
      "Developed an interactive 3D visualization system using Three.js, generating and rendering 3D matrices and shapes with dynamic real-time updates.",
      "Integrated generative AI to automatically modify and extend the 3D codebase, allowing AI-driven creation and transformation of shapes.",
    ],
    skills: [
      "Three.js",
      "Generative AI",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "PyTorch",
      "OpenAI",
    ],
  },
  {
    id: "cwu",
    start: "Apr 2025",
    end: "Jun 2025",
    role: "AI/ML Researcher",
    company: "Central Washington University",
    bullets: [
      "Implemented KNN to predict housing prices based on location and property features, improving model precision by 12%.",
      "Applied KNN to classify handwritten digits from image data, achieving 95% prediction accuracy.",
    ],
    skills: ["PyTorch", "Hugging Face", "NLP", "LLMs", "RAG", "Jupyter", "Fine-tuning"],
  },
  {
    id: "pypup",
    start: "Jun 2024",
    end: "Sep 2024",
    role: "Software Engineer Intern",
    company: "Pypup.com",
    bullets: [
      "Implemented a flash-card feature using Angular and Tailwind CSS on the front end and NestJS on the back end, resulting in a 30% boost in website traffic and approximately 1,500 daily users.",
      "Developed comprehensive technical documentation for both frontend and backend, leading to a 20% reduction in troubleshooting time and 15% increase in onboarding efficiency.",
    ],
    skills: ["TypeScript", "Angular", "NestJS", "MySQL", "Tailwind"],
  },
  {
    id: "mongol-content",
    start: "Jun 2023",
    end: "Sep 2023",
    role: "Software Engineer Intern",
    company: "Mongol Content",
    bullets: [
      "Developed a mobile application for iOS and Android using React Native.",
      "Converted the MPT Pay banking application from its native language to React Native, allowing the company to cut development costs by 50%.",
    ],
    skills: ["JavaScript", "React Native", "Node.js", "Expo", "Firebase", "Figma"],
  },
  {
    id: "steppe-link",
    start: "Jun 2022",
    end: "Sep 2022",
    role: "Software Engineer Intern",
    company: "Steppe Link Holding",
    bullets: [
      "Developed a mobile application for iOS and Android using React Native.",
      "Gained knowledge of React Native's lifecycle and hooks while creating pixel-perfect user interfaces.",
    ],
    skills: ["JavaScript", "React Native", "Expo", "Firebase", "Node.js"],
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    id: "cwu-bs",
    start: "2022",
    end: "2026",
    credential: "B.S. Computer Science",
    institution: "Central Washington University",
    detail: "Minor in Mathematics · GPA 3.93/4.00 · Dean's List",
  },
  {
    id: "cwu-ta",
    start: "Sep 2025",
    end: "Jun 2026",
    credential: "Teaching Assistant, CS 302 & CS 351",
    institution: "Central Washington University",
    detail: "Advanced Data Structures & Algorithms · Web Development II",
  },
  {
    id: "seattle-central-ta",
    start: "Jan 2024",
    end: "Mar 2024",
    credential: "Teaching Assistant, CS 143 Data Structures",
    institution: "Seattle Central College",
  },
] as const;
