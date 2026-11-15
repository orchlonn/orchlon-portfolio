import type { NavItem, SocialLink } from "@/types/content";

export const SITE = {
  name: "Oscar Chinbat",
  role: "Full-Stack & AI Software Engineer",
  url: "https://orchlon.dev",
  email: "ch.orchlon@gmail.com",
  headline: "I design and build AI-powered products, end to end.",
  bio: "I build LLM systems and the products around them: RAG pipelines, multi-agent backends, and the web and iOS apps people actually use. Most recently I built agent infrastructure at Chimege Systems; before that I was the founding engineer on Invest AI.",
  proof:
    "B.S. Computer Science, CWU ’26 · GPA 3.93 · Founding engineer, Invest AI (App Store) · Previously AI Engineer, Chimege Systems",
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
