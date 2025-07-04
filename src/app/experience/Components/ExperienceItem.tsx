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
      className={`flex flex-col gap-y-2 my-3 w-2/5 border border-teal-300 rounded-3xl py-5 px-20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-teal-400 cursor-pointer ${className}`}
    >
      <div className="flex justify-center items-center">
        <Image
          src={image}
          width={65}
          height={65}
          alt="Picture of the author"
          className="rounded-full my-1"
        />
      </div>
      <div>
        <p className="text-slate-200 text-center font-semibold text-sm my-1">
          {company}
        </p>
        <p className="text-slate-200 text-center font-semibold text-sm">
          {position}
        </p>
      </div>
      {description.map((desc, index) => (
        <p
          className="mt-1 text-sm leading-normal text-slate-400 text-base/6"
          key={index}
        >
          {desc}
        </p>
      ))}
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-3 my-3">
        {skillsToShow.map((skill, index) => (
          <p
            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
            key={index}
          >
            {skill}
          </p>
        ))}
        {skills.length > initialSkillCount && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300"
          >
            {showAllSkills
              ? "Show Less"
              : `Show All (${skills.length - initialSkillCount})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
