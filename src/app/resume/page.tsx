import SectionHeader from "@/Components/SectionHeader";
import ResumeBox from "./Components/ResumeBox";

const ProjectSection = () => {
  return (
    <div className="">
      <SectionHeader desc="My Resume and Cover Letter" title="CV & Resume" />
      <div className="flex w-full justify-center gap-10">
        <ResumeBox
          description="A concise, one-page overview of my experience and skills."
          title="Resume"
        />
        <ResumeBox
          description="A concise, one-page overview of my experience and skills."
          title="Cover Letter"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
