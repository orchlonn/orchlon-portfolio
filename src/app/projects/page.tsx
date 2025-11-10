import SectionHeader from "@/Components/SectionHeader";
import ProjectCard from "./Components/ProjectCard";
import BizzzyLogo from "../../../public/Bizzzy_logo.png";
import SortingAppLogo from "../../../public/sorting_app_logo.png";
import LogisticCompanyLogo from "../../../public/logistic_company_logo.png";
import GobicraftLogo from "../../../public/gobicraft.jpeg";
import InvestAppLogo from "../../../public/invest_ai_logo.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader desc="Selected Work" title="Projects" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
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
          className="animate-scale-in"
        />

        <ProjectCard
          title="Gobicraft — 3D Sandbox"
          image={GobicraftLogo}
          description="Voxel-based sandbox with building, terrain exploration, and interactive physics."
          tags={[
            "Three.js",
            "React",
            "AI Chatbot",
            "Large Language Model API",
            "TypeScript",
            "Gemini AI",
            "Vercel",
            "WebGL",
          ]}
          githubLink="https://github.com/orchlonn/gobicraft"
          demoLink="https://gobicraft.vercel.app/"
          className="animate-scale-in-delay"
        />

        <ProjectCard
          title="Bizzzy — Gig Economy"
          image={BizzzyLogo}
          description="Marketplace for on-demand services with escrow, reviews, and job tracking."
          tags={[
            "React Native",
            "Node.js",
            "Expo",
            "Firebase",
            "React",
            "TypeScript",
          ]}
          githubLink="https://github.com/Bizzzy-software"
          demoLink="https://drive.google.com/file/d/1wuJXLsGQBIHQUbkEfV9y3TfLk_BmVOU-/view?usp=sharing"
          className="animate-scale-in"
        />

        <ProjectCard
          title="VR Sorting Algorithms"
          image={SortingAppLogo}
          description="Immersive visualization of classic sorting algorithms in VR."
          tags={["Unity", "C#", "VR"]}
          githubLink="https://github.com/CS-466-group-4/VR-Sorting-app"
          className="animate-fade-in-delay-2"
        />

        <ProjectCard
          title="Logistics Landing Page"
          image={LogisticCompanyLogo}
          description="High-converting landing page for a logistics company with modern branding."
          tags={["Next.js", "Tailwind", "Vercel", "React", "TypeScript"]}
          demoLink="https://andjintrans.vercel.app/"
          githubLink="https://github.com/orchlonn/Andjintrans"
          className="animate-fade-in-delay-2"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
