"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiThreedotjs,
  SiNodedotjs,
  SiPython,
  SiSpringboot,
  SiSharp,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiFastapi,
  SiNestjs,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiUnity,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiLangchain,
  SiScikitlearn,
  SiJupyter,
  SiPandas,
  SiClaude,
  SiVercel,
  SiGooglecloud,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { TbBrain, TbMessageChatbot, TbDatabaseSearch } from "react-icons/tb";
import { HiDevicePhoneMobile, HiOutlineCursorArrowRays } from "react-icons/hi2";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineChip,
  HiOutlineCog,
} from "react-icons/hi";
import SectionHeader from "@/Components/SectionHeader";

const CATEGORIES = [
  {
    title: "Frontend",
    icon: HiOutlineCode,
    color: "#22d3ee",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "React Native", icon: HiDevicePhoneMobile },
      { name: "Three.js", icon: SiThreedotjs },
    ],
  },
  {
    title: "Backend",
    icon: HiOutlineServer,
    color: "#22d3ee",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "NestJS", icon: SiNestjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "C#", icon: SiSharp },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "AI / ML",
    icon: HiOutlineChip,
    color: "#22d3ee",
    skills: [
      { name: "LLMs", icon: TbMessageChatbot },
      { name: "NLP", icon: TbBrain },
      { name: "RAG", icon: TbDatabaseSearch },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "LangChain", icon: SiLangchain },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: HiOutlineCog,
    color: "#22d3ee",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "Unity", icon: SiUnity },
      { name: "Cursor", icon: HiOutlineCursorArrowRays },
      { name: "Claude CLI", icon: SiClaude },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const INITIAL_SKILL_COUNT = 4;

export default function SkillsSection() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionHeader title="Skills" desc="What I work with" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className="group relative rounded-xl border border-white/5 bg-[#1a1a25] p-6 transition-all duration-300 hover:border-[color:var(--hover-color)]/30 hover:shadow-[0_0_30px_var(--hover-glow)]"
            style={
              {
                "--hover-color": cat.color,
                "--hover-glow": `${cat.color}15`,
              } as React.CSSProperties
            }
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ backgroundColor: `${cat.color}15` }}
              >
                <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
              </div>
              <h3 className="text-white font-semibold text-base">
                {cat.title}
              </h3>
            </div>

            {/* Skill pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {(expanded[cat.title]
                ? cat.skills
                : cat.skills.slice(0, INITIAL_SKILL_COUNT)
              ).map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  initial={false}
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-mono transition-colors hover:border-[color:var(--hover-color)]/40 hover:text-white"
                >
                  <skill.icon className="w-3.5 h-3.5 opacity-70" />
                  {skill.name}
                </motion.div>
              ))}
              {cat.skills.length > INITIAL_SKILL_COUNT && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(cat.title)}
                  className="flex items-center px-3 py-1.5 text-sm font-mono transition-colors text-[#22d3ee]/60 hover:text-[#22d3ee]"
                >
                  {expanded[cat.title]
                    ? "Show Less"
                    : `Show All (+${cat.skills.length - INITIAL_SKILL_COUNT})`}
                </button>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
