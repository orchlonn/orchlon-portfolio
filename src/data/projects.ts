import type { ArchiveProject, Project } from "@/types/content";

export const PROJECTS: readonly Project[] = [
  {
    slug: "lawbyloya",
    index: "01",
    title: "LawByLoya",
    kicker: "Legal Tech · AI Agents",
    summary:
      "AI-powered platform for exploring Mongolian legislation with bilingual access, annotations, and intelligent legal assistance.",
    outcome:
      "Multi-agent RAG over statute text, with bilingual retrieval and inline annotation.",
    tags: ["Next.js", "FastAPI", "LangGraph", "RAG", "Text embeddings", "Supabase"],
    year: "2025",
    links: [{ label: "Live", href: "https://www.lawbyloya.com/" }],
  },
  {
    slug: "invest-ai",
    index: "02",
    title: "Invest AI",
    kicker: "Fintech · iOS",
    summary:
      "AI-powered trading assistant with real-time signals, watchlists, and multi-exchange support.",
    outcome:
      "Founding engineer. 5,300+ company dataset, 40% reduction in research time, 50–100 monthly actives.",
    tags: ["React Native", "TypeScript", "Expo", "OpenAI", "Firebase", "GCP"],
    year: "2025",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346",
      },
    ],
  },
  {
    slug: "gobicraft",
    index: "03",
    title: "Gobicraft",
    kicker: "Generative 3D",
    summary:
      "Browser-based 3D sandbox where generative AI writes and rewrites the scene's own code.",
    tags: ["Three.js", "React", "TypeScript", "Gemini AI", "WebGL"],
    year: "2025",
    links: [
      { label: "Live", href: "https://gobicraft.vercel.app/" },
      { label: "GitHub", href: "https://github.com/orchlonn/gobicraft" },
    ],
  },
  {
    slug: "edutrack",
    index: "04",
    title: "EduTrack",
    kicker: "Education Platform",
    summary:
      "Unified school management platform connecting administrators, teachers, parents, and students with real-time data sync.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Real-time sync"],
    year: "2024",
    links: [{ label: "Live", href: "https://edutrack-landing.vercel.app/" }],
  },
] as const;

export const ARCHIVE: readonly ArchiveProject[] = [
  {
    title: "Andjintrans",
    note: "Logistics, Next.js",
    href: "https://andjintrans.com",
  },
  {
    title: "Bizzzy",
    note: "Gig economy, React Native",
    href: "https://github.com/Bizzzy-software",
  },
  {
    title: "VR Sorting Algorithms",
    note: "Unity, C#",
    href: "https://github.com/CS-466-group-4/VR-Sorting-app",
  },
] as const;
