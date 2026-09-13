export interface NavItem {
  id: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  /** Displayed, not derived — ordering stays explicit. */
  index: string;
  title: string;
  kicker: string;
  summary: string;
  /** Second line, featured rows only. */
  outcome?: string;
  tags: readonly string[];
  year: string;
  links: readonly ProjectLink[];
}

export interface ArchiveProject {
  title: string;
  note: string;
  href: string;
}

export interface Experience {
  id: string;
  start: string;
  end: string;
  role: string;
  company: string;
  /** Plain strings, never JSX — keeps the data layer serialisable. */
  bullets: readonly string[];
  skills: readonly string[];
}

export interface Education {
  id: string;
  start: string;
  end: string;
  credential: string;
  institution: string;
  detail?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: readonly string[];
}

export interface SocialLink {
  label: string;
  href: string;
}
