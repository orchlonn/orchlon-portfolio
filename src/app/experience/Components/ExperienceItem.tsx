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
  initialSkillCount = 3,
  className = "",
}: {
  position: string;
  company: string;
  description: (string | ReactNode)[];
  skills: string[];
  image: StaticImageData | string;
  initialSkillCount?: number;
  className?: string;
}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const skillsToShow = showAllSkills
    ? skills
    : skills.slice(0, initialSkillCount);

  return (
    <div
      className={`flex flex-col gap-y-2 my-3 border border-[#1a1a25] bg-[#1a1a25]/50 rounded-2xl py-4 sm:py-5 px-4 sm:px-8 lg:px-20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,85,0.1)] hover:border-[#8b5cf6]/30 cursor-pointer ${className}`}
    >
      <div className="flex justify-center items-center">
        <Image
          src={image}
          width={65}
          height={65}
          alt="Company logo"
          className="rounded-full my-1 w-12 h-12 sm:w-16 sm:h-16 md:w-[65px] md:h-[65px]"
        />
      </div>
      <div>
        <p className="text-slate-200 text-center font-semibold text-xs sm:text-sm my-1">
          {company}
        </p>
        <p className="text-slate-200 text-center font-semibold text-xs sm:text-sm">
          {position}
        </p>
      </div>
      {description.map((desc, index) => (
        <p
          className="mt-1 text-xs sm:text-sm leading-normal text-slate-400 text-base/6"
          key={index}
        >
          {desc}
        </p>
      ))}
      <div className="flex flex-row flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 sm:gap-y-3 my-3">
        {skillsToShow.map((skill, index) => (
          <p
            className="flex items-center rounded-full bg-[#8b5cf6]/5 border border-[#8b5cf6]/15 px-2 sm:px-3 py-1 text-xs font-mono font-medium leading-5 text-[#8b5cf6]/80"
            key={index}
          >
            {skill}
          </p>
        ))}
        {skills.length > initialSkillCount && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center px-2 sm:px-3 py-1 text-xs font-mono font-medium leading-5 text-[#8b5cf6]/60 hover:text-[#8b5cf6] transition-colors"
          >
            {showAllSkills
              ? "Show Less"
              : `Show All (+${skills.length - initialSkillCount})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
