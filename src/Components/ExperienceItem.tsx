const ExperienceItem = ({
  date,
  position,
  company,
  description,
  companyUrl,
  skills,
}: {
  date: string;
  position: string;
  company: string;
  companyUrl: string;
  description: string[];
  skills: string[];
}) => {
  return (
    <div className="flex my-3">
      <p className="w-1/5 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {date}
      </p>
      <div className="w-4/5">
        <a
          className="font-medium leading-snug text-slate-200"
          href={companyUrl}
          target="_blank"
        >
          <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
            {position} • {company}
          </span>
        </a>
        {description.map((desc, index) => (
          <p className="mt-1 text-sm leading-normal text-slate-400" key={index}>
            {desc}
          </p>
        ))}
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-3 my-3">
          {skills.map((skill, index) => (
            <p
              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
              key={index}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
