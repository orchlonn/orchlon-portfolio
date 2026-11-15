import type { NavItem, SocialLink } from "@/types/content";

/* The hero breaks the headline exactly here and sets the last line in the
   italic serif. Keep the longest line about this length: the hero's type
   size is fitted to it so the lines never rewrap on a phone. */
const HEADLINE_LINES = [
  "I design and build",
  "AI-powered products,",
  "end to end.",
] as const;

export const SITE = {
  name: "Oscar Chinbat",
  role: "AI Engineer",
  url: "https://orchlon.dev",
  email: "ch.orchlon@gmail.com",
  headlineLines: HEADLINE_LINES,
  /** The same sentence on one line, for metadata and the OG image. */
  headline: HEADLINE_LINES.join(" "),
  bio: "Most of my work is AI agents: multi-agent systems, tool calling, and the RAG pipelines that keep them grounded. At Khan Bank I’m developing AI agents that automate research and loan proposal workflows for relationship managers; before that, production agent infrastructure at Chimege Systems.",
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
