import Pypup from "../../../public/pypup_logo.webp";
import MocoLogo from "../../../public/moco_logo.jpeg";
import SteppelinkLogo from "../../../public/steppelink_logo.webp";
import CWULogo from "../../../public/CWU_logo.png";
import GobicraftLogo from "../../../public/gobicraft.jpeg";
import ExperienceItem from "./Components/ExperienceItem";

const Experience = () => {
  return (
    <div className="animate-fade-in px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Roadmap Header */}
      <div className="flex flex-col items-center gap-2 mt-24 mb-12">
        <p className="text-gray-500 font-mono font-semibold text-sm uppercase tracking-widest">
          My Journey
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
          EXPERIENCE
        </h2>
        <p className="text-slate-500 text-sm font-mono mt-1">
          Scroll to explore
        </p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-40 animate-bounce-slow mt-2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 sm:left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8b5cf6]/60 via-[#22d3ee]/40 to-[#8b5cf6]/10" />

        <div className="flex flex-col gap-y-12">
          {/* Item 1 - Left on desktop */}
          <div className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-10">
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6] pulse-dot border-2 border-[#0a0a0f]" />
            </div>
            <div className="ml-10 sm:ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] lg:mr-auto lg:pr-8 animate-slide-up">
              <ExperienceItem
                image={GobicraftLogo}
                dateBadge="SEP 2025 - DEC 2025"
                position="AI Software Engineer Co-Op"
                company="Gobicraft"
                description={[
                  <>
                    Developed an interactive{" "}
                    <span className="font-bold text-white">
                      3D visualization system
                    </span>{" "}
                    using{" "}
                    <span className="font-bold text-white">Three.js</span>,
                    generating and rendering{" "}
                    <span className="font-bold text-white">
                      3D matrices and shapes
                    </span>{" "}
                    with dynamic real-time updates.
                  </>,
                  <>
                    Integrated{" "}
                    <span className="font-bold text-white">Generative AI</span>{" "}
                    to automatically modify and extend the{" "}
                    <span className="font-bold text-white">3D codebase</span>,
                    allowing AI-driven creation and transformation of shapes.
                  </>,
                ]}
                skills={[
                  "Three.js",
                  "Generative AI",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Express.js",
                  "Python",
                  "PyTorch",
                  "TensorFlow",
                  "OpenAI",
                ]}
                initialSkillCount={4}
              />
            </div>
          </div>

          {/* Item 2 - Right on desktop */}
          <div className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-10">
              <div className="w-3 h-3 rounded-full bg-[#22d3ee] pulse-dot border-2 border-[#0a0a0f]" />
            </div>
            <div className="ml-10 sm:ml-14 lg:ml-auto lg:w-[calc(50%-2rem)] lg:pl-8 animate-slide-up">
              <ExperienceItem
                image={CWULogo}
                dateBadge="APR 2025 - JUN 2025"
                position="AI/ML Researcher"
                company="Central Washington University"
                description={[
                  <>
                    Implemented{" "}
                    <span className="font-bold text-white">KNN</span> to predict
                    housing prices based on location and property features,
                    improving model precision by{" "}
                    <span className="font-bold text-white">12%</span>.
                  </>,
                  <>
                    Applied{" "}
                    <span className="font-bold text-white">KNN</span> to
                    classify handwritten digits from image data, achieving{" "}
                    <span className="font-bold text-white">95%</span> prediction
                    accuracy.
                  </>,
                ]}
                skills={[
                  "PyTorch",
                  "Hugging Face",
                  "NLP",
                  "LLMs",
                  "RAG",
                  "Jupyter",
                  "Research",
                  "Fine-tuning",
                ]}
                initialSkillCount={4}
              />
            </div>
          </div>

          {/* Item 3 - Left on desktop */}
          <div className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-10">
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6] pulse-dot border-2 border-[#0a0a0f]" />
            </div>
            <div className="ml-10 sm:ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] lg:mr-auto lg:pr-8 animate-slide-up">
              <ExperienceItem
                image={Pypup}
                dateBadge="JUN 2024 - SEP 2024"
                position="Software Engineer Intern"
                company="Pypup.com"
                description={[
                  <>
                    Implemented a flash-card feature utilizing Angular and
                    Tailwind CSS for the front end and NestJS for the back end,
                    resulting in a{" "}
                    <span className="font-bold text-white">30%</span> boost in
                    website traffic and approximately{" "}
                    <span className="font-bold text-white">1500</span> daily
                    users.
                  </>,
                  <>
                    Developed comprehensive technical documentation for both
                    frontend and backend, leading to a{" "}
                    <span className="font-bold text-white">20%</span> reduction
                    in troubleshooting time and{" "}
                    <span className="font-bold text-white">15%</span> increase
                    in onboarding efficiency.
                  </>,
                ]}
                skills={[
                  "TypeScript",
                  "Angular",
                  "MySQL",
                  "NestJS",
                  "Tailwind",
                  "Daisy UI",
                  "HTML",
                  "CSS",
                ]}
                initialSkillCount={4}
              />
            </div>
          </div>

          {/* Item 4 - Right on desktop */}
          <div className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-10">
              <div className="w-3 h-3 rounded-full bg-[#22d3ee] pulse-dot border-2 border-[#0a0a0f]" />
            </div>
            <div className="ml-10 sm:ml-14 lg:ml-auto lg:w-[calc(50%-2rem)] lg:pl-8 animate-slide-up">
              <ExperienceItem
                image={MocoLogo}
                dateBadge="JUN 2023 - SEP 2023"
                position="Software Engineer Intern"
                company="Mongol Content"
                description={[
                  <>
                    Developed a mobile application for iOS and Android using
                    React Native.
                  </>,
                  <>
                    Converted the MPT Pay banking application from its native
                    language to React Native, allowing the company to cut
                    development costs by{" "}
                    <span className="font-bold text-white">50%</span>.
                  </>,
                ]}
                skills={[
                  "JavaScript",
                  "React Native",
                  "Figma",
                  "Node.js",
                  "Expo",
                  "Firebase",
                  "HTML",
                  "CSS",
                ]}
                initialSkillCount={4}
              />
            </div>
          </div>

          {/* Item 5 - Left on desktop */}
          <div className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-10">
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6] pulse-dot border-2 border-[#0a0a0f]" />
            </div>
            <div className="ml-10 sm:ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] lg:mr-auto lg:pr-8 animate-slide-up">
              <ExperienceItem
                image={SteppelinkLogo}
                dateBadge="JUN 2022 - SEP 2022"
                position="Software Engineer Intern"
                company="Steppe Link Holding"
                description={[
                  "Developed a mobile application for iOS and Android using React Native.",
                  "Gained knowledge of React Native's lifecycle and hooks while creating pixel-perfect user interfaces.",
                ]}
                skills={[
                  "JavaScript",
                  "React Native",
                  "Expo",
                  "Firebase",
                  "Node.js",
                  "HTML",
                  "CSS",
                ]}
                initialSkillCount={4}
              />
            </div>
          </div>
        </div>

        {/* Timeline end dot */}
        <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 -bottom-2">
          <div className="w-2 h-2 rounded-full bg-[#8b5cf6]/30" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
