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
    <div className="flex">
      <div className="w-1/5">{date}</div>
      <div className="w-4/5">
        <p>
          {position} • {company}
        </p>
        <p>{description}</p>
        <div className="flex flex-row flex-wrap gap-x-5">
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
