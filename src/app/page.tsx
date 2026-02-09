import ProjectsSection from "./projects/page";
import ExperienceSection from "./experience/page";
import ResumeSection from "./resume/page";
import SkillsSection from "./skills/SkillsSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="scroll-mt-24 relative min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="animate-fade-in flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6] pulse-dot" />
            <span className="text-[#a78bfa] text-sm font-mono">
              Available for opportunities
            </span>
          </div>

          {/* Glitch Title */}
          <h1
            className="glitch-text animate-slide-up text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight text-center mb-4"
            data-text="OSCAR CHINBAT"
          >
            OSCAR CHINBAT
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-delay text-lg sm:text-xl text-[#22d3ee] font-mono text-center mb-6">
            Full-Stack & AI Software Engineer
          </p>

          {/* About text */}
          <p className="animate-slide-up-delay text-slate-400 text-center text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
            I’m a software developer who builds end-to-end solutions across web,
            mobile, and AI/ML. I focus on applying machine learning and
            retrieval-augmented generation (RAG) to solve real-world problems,
            with a strong interest in developing secure, reliable, and scalable
            software.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      <SkillsSection />

      <section id="resume" className="scroll-mt-24">
        <ResumeSection />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>

      <section id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </section>
    </>
  );
}
