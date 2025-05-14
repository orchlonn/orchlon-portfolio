"use client";
import Image from "next/image";
import { useState } from "react";
import Profile from "../../public/pypup_logo.webp";

const ExperienceItem = ({
  position,
  company,
  description,
  companyUrl,
  skills,
}: {
  position: string;
  company: string;
  companyUrl: string;
  description: string[];
  skills: string[];
}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const skillsToShow = showAllSkills ? skills : skills.slice(0, 3);
  return (
    <div className="flex flex-col gap-y-3 my-3 w-2/5 border-2 border-teal-300 rounded-3xl py-10 px-16">
      <div className="flex justify-center items-center">
        <Image
          src={Profile}
          width={65}
          height={65}
          alt="Picture of the author"
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-slate-200 text-center">{company}</p>
        <p className="text-slate-200 text-center">{position}</p>
      </div>
      <a
        className="text-center text-slate-200"
        href={companyUrl}
        target="_blank"
      ></a>
      {description.map((desc, index) => (
        <p className="mt-1 text-sm leading-normal text-slate-400" key={index}>
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
        {skills.length > 3 && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300"
          >
            {showAllSkills ? "Show Less" : `Show All (${skills.length - 3})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
