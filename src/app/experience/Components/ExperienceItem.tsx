"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState, ReactNode } from "react";

const ExperienceItem = ({
  position,
  company,
  description,
  skills,
  image,
  dateBadge,
  initialSkillCount = 3,
  className = "",
}: {
  position: string;
  company: string;
  description: (string | ReactNode)[];
  skills: string[];
  image: StaticImageData | string;
  dateBadge: string;
  initialSkillCount?: number;
  className?: string;
}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const skillsToShow = showAllSkills
    ? skills
    : skills.slice(0, initialSkillCount);

  return (
    <div
      className={`group relative flex flex-col gap-y-3 rounded-xl border border-[#1a1a25] bg-[#1a1a25]/60 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] hover:border-[#8b5cf6]/40 cursor-pointer ${className}`}
    >
      {/* Status Badge */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
          {dateBadge}
        </span>
      </div>

      {/* Company Header */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          width={48}
          height={48}
          alt={`${company} logo`}
          className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 object-cover border border-white/10"
        />
        <div>
          <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
            {company}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm font-medium">
            {position}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-y-2 mt-1">
        {description.map((desc, index) => (
          <p
            className="text-xs sm:text-sm leading-relaxed text-slate-400"
            key={index}
          >
            {desc}
          </p>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-row flex-wrap gap-2 mt-2">
        {skillsToShow.map((skill, index) => (
          <span
            className="inline-flex items-center rounded-full bg-[#22d3ee]/5 border border-[#22d3ee]/15 px-2.5 py-1 text-[10px] sm:text-xs font-mono font-medium text-[#22d3ee]/80 transition-colors group-hover:border-[#22d3ee]/30 group-hover:text-[#22d3ee]"
            key={index}
          >
            {skill}
          </span>
        ))}
        {skills.length > initialSkillCount && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="inline-flex items-center px-2.5 py-1 text-[10px] sm:text-xs font-mono font-medium text-[#22d3ee]/60 hover:text-[#22d3ee] transition-colors"
          >
            {showAllSkills
              ? "Show Less"
              : `+${skills.length - initialSkillCount} more`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
