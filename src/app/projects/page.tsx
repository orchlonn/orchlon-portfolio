import SectionHeader from "@/Components/SectionHeader";
import ProjectCard from "./Components/ProjectCard";
import SmallProjectCard from "./Components/SmallProjectCard";
import TiltCard from "@/Components/Three/TiltCard";
import InvestAppLogo from "../../../public/invest_ai_logo.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader desc="Selected Work" title="Projects" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        <TiltCard className="relative animate-scale-in">
          <ProjectCard
            title="Invest AI"
            image={InvestAppLogo}
            description="AI-powered trading assistant with real-time signals, watchlists, and multi-exchange support."
            tags={[
              "React Native",
              "TypeScript",
              "iOS",
              "Android",
              "Expo",
              "OpenAI",
              "AI Chatbot",
              "Large Language Model API",
              "Cloud Messaging API",
              "Firebase",
              "Google Cloud Platform",
            ]}
            appStoreLink="https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346"
            playStoreLink="https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346"
          />
        </TiltCard>

        <TiltCard className="relative animate-scale-in-delay">
          <ProjectCard
            title="LawByLoya — Legal Tech"
            image="/law_icon.svg"
            imageContain
            description="AI-powered platform for exploring Mongolian legislation with bilingual access, annotations, and intelligent legal assistance."
            tags={[
              "Next.js",
              "React",
              "Fast API",
              "Python",
              "AI Law Agents",
              "LangGraph",
              "RAG - Retrieval Augmented Generation",
              "Text Embedding",
              "Supabase",
              "TypeScript",
              "Tailwind",
              "AI Chatbot",
              "Large Language Model API",
            ]}
            demoLink="https://www.lawbyloya.com/"
          />
        </TiltCard>

        <TiltCard className="relative animate-scale-in">
          <ProjectCard
            title="EduTrack — Education Platform"
            image="/edutrack_icon.svg"
            imageContain
            description="Unified school management platform connecting administrators, teachers, parents, and students with real-time data sync."
            tags={[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind",
              "Supabase",
              "Real-time Sync",
            ]}
            demoLink="https://edutrack-landing.vercel.app/"
          />
        </TiltCard>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-4">
        <h3 className="text-sm font-mono text-slate-200 uppercase tracking-widest mb-2">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SmallProjectCard
            title="Gobicraft — 3D Sandbox"
            tags={["Three.js", "React", "TypeScript", "Gemini AI", "WebGL"]}
            githubLink="https://github.com/orchlonn/gobicraft"
            demoLink="https://gobicraft.vercel.app/"
          />
          <SmallProjectCard
            title="Bizzzy — Gig Economy"
            tags={["React Native", "Node.js", "Firebase", "TypeScript"]}
            githubLink="https://github.com/Bizzzy-software"
            demoLink="https://drive.google.com/file/d/1wuJXLsGQBIHQUbkEfV9y3TfLk_BmVOU-/view?usp=sharing"
          />
          <SmallProjectCard
            title="VR Sorting Algorithms"
            tags={["Unity", "C#", "VR"]}
            githubLink="https://github.com/CS-466-group-4/VR-Sorting-app"
          />
          <SmallProjectCard
            title="Andjintrans — Logistics"
            tags={["Next.js", "Tailwind", "Framer Motion", "Three.js"]}
            githubLink="https://github.com/orchlonn/andjintrans-LLC"
            demoLink="https://andjintrans.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
