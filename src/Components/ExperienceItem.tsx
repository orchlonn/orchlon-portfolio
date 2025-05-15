"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

const ExperienceItem = ({
  position,
  company,
  description,
  companyUrl,
  skills,
  image,
}: {
  position: string;
  company: string;
  companyUrl: string;
  description: string[];
  skills: string[];
  image: StaticImageData | string;
}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const skillsToShow = showAllSkills ? skills : skills.slice(0, 3);
  return (
    <div className="flex flex-col gap-y-2 my-3 w-2/5 border-2 border-teal-300 rounded-3xl py-5 px-20">
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
