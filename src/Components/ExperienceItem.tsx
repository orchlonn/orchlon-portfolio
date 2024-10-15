const ExperienceItem = ({
  date,
  position,
  company,
  description,
  skills,
}: {
  date: string;
  position: string;
  company: string;
  description: string;
  skills: any;
}) => {
  return (
    <div className="flex my-3">
      <p className="w-1/5 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{date}</p>
      <div className="w-4/5">
      <h3 className="font-medium leading-snug text-slate-200">
        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
          {position} • {company}
        </span>
      </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
        <div className="flex flex-row flex-wrap gap-x-5 my-3">
          {skills.map((skill, index) => (
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300" key={index}>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
