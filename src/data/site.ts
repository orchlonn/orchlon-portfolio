import type { NavItem, SocialLink } from "@/types/content";

export const SITE = {
  name: "Oscar Chinbat",
  role: "Full-Stack & AI Software Engineer",
  url: "https://orchlon.dev",
  email: "ch.orchlon@gmail.com",
  headline: "I design and build AI-powered products, end to end.",
  bio: "I'm a software developer who builds end-to-end solutions across web, mobile, and AI/ML. I focus on applying machine learning and retrieval-augmented generation (RAG) to solve real-world problems, with a strong interest in developing secure, reliable, and scalable software.",
  proof:
    "B.S. Computer Science, Central Washington University · GPA 3.93 · Founding engineer at Invest AI, live on the App Store",
  resume: "/resume.pdf",
} as const;

export const NAV: readonly NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export const SOCIALS: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/orchlonn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/orchlonc/" },
  { label: "Résumé", href: "/resume.pdf" },
] as const;
