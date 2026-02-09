import Pypup from "../../../public/pypup_logo.webp";
import MocoLogo from "../../../public/moco_logo.jpeg";
import SteppelinkLogo from "../../../public/steppelink_logo.webp";
import CWULogo from "../../../public/CWU_logo.png";
import GobicraftLogo from "../../../public/gobicraft.jpeg";
import SectionHeader from "@/Components/SectionHeader";
import ExperienceItem from "./Components/ExperienceItem";

const Experience = () => {
  return (
    <div className="animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader
          desc="My personal & professional development"
          title="Work & Research"
        />
      </div>
      <div className="flex flex-col items-center gap-y-3 sm:gap-y-4 mt-6 sm:mt-8">
        <ExperienceItem
          image={GobicraftLogo}
          position="AI software engineer Co-Op | Sep 2025 - Dec 2025"
          company="Gobicraft"
          description={[
            <>
              ● Developed an interactive{" "}
              <span className="font-bold text-white">
                3D visualization system
              </span>
              using <span className="font-bold text-white">Three.js </span>,
              generating and rendering{" "}
              <span className="font-bold text-white">
                3D matrices and shapes
              </span>{" "}
              with dynamic real-time updates.
            </>,
            <>
              ● Integrated{" "}
              <span className="font-bold text-white">Generative AI</span> to
              automatically modify and extend the
              <span className="font-bold text-white"> 3D codebase</span>,
              allowing AI-driven creation and transformation of shapes within
              the scene.
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
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={CWULogo}
          position="AI/ML Researcher | Apr 2025 - Jun 2025"
          company="Central Washington University"
          description={[
            <>
              ● Implemented <span className="font-bold text-white"> KNN </span>{" "}
              to predict housing prices based on location and property features,
              improving model precision by{" "}
              <span className="font-bold text-white"> 12%. </span>
            </>,
            <>
              ● Applied <span className="font-bold text-white"> KNN </span> to
              classify handwritten digits from image data, achieving{" "}
              <span className="font-bold text-white"> 95% </span> prediction
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
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={Pypup}
          position="Software Engineer Intern | Jun 2024 - Sep 2024"
          company="Pypup.com"
          description={[
            <>
              ● Implemented a flash-card feature for the platform, utilizing
              Angular and Tailwind CSS for the front end and NestJS for the back
              end, resulting in a
              <span className="font-bold text-white"> 30%</span> boost in
              website traffic and attracting approximately
              <span className="font-bold text-white"> 1500</span> daily users.
            </>,
            <>
              ● Developed and consistently updated comprehensive technical
              documentation for both frontend and backend components, leading to
              a<span className="font-bold text-white"> 20%</span> reduction in
              troubleshooting time and a{" "}
              <span className="font-bold text-white"> 15%</span> increase in
              onboarding efficiency for new team members.
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
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={MocoLogo}
          position="Software Engineer Intern | Jun 2023 - Sep 2023"
          company="Mongol Content"
          description={[
            <>
              ● Developed a mobile application for iOS, and Android using React
              Native.
            </>,
            <>
              ● Converted the MPT Pay banking application from its native
              language to React Native, allowing the company to cut development
              costs by
              <span className="font-bold text-white"> 50%.</span>
            </>,
          ]}
          skills={[
            "JavaScript",
            "React Native",
            "Figma",
            "React Native",
            "Node.js",
            "Expo",
            "Firebase",
            "HTML",
            "CSS",
          ]}
          initialSkillCount={4}
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={SteppelinkLogo}
          position="Software Engineer Intern | Jun 2022 - Sep 2022"
          company="Steppe Link Holding"
          description={[
            "● Developed a mobile application for iOS, and Android using React Native.",
            "● Gained knowledge of React Native's lifecycle and hooks while creating pixel-perfect user interfaces.",
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
          className="animate-fade-in-delay-2 w-full sm:w-4/5 lg:w-2/5"
        />
      </div>
    </div>
  );
};

export default Experience;
