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
    kicker: "Fintech · iOS · Android",
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
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.orchlon.SmartTradeAI",
        primary: true,
      },
    ],
  },
  {
    slug: "ai-ide",
    index: "03",
    title: "AI IDE",
    kicker: "Developer Tools · AI Agents",
    summary:
      "Browser-based code editor with an AI assistant that answers questions about your codebase, plus a built-in terminal.",
    outcome:
      "FastAPI multi-agent backend routes each request to a LangChain agent, with RAG over the codebase in Supabase pgvector.",
    tags: ["Next.js", "Monaco", "FastAPI", "LangChain", "Ollama (Llama 3.1)", "pgvector"],
    year: "2026",
    links: [
      { label: "Site", href: "https://ai-ide-landing.vercel.app/" },
      { label: "GitHub", href: "https://github.com/orchlonn/AI-IDE-frontend" },
    ],
  },
  {
    slug: "gobicraft",
    index: "04",
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
] as const;

export const ARCHIVE: readonly ArchiveProject[] = [
  {
    title: "EduTrack",
    note: "School management, Next.js + Supabase",
    href: "https://edutrack-landing.vercel.app/",
  },
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
