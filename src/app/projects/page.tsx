import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "@/Components/Project/SingleProject";

const ProjectSection = () => {
  return (
    <div className="text-slate-200">
      <SectionHeader desc="My Recent Projects" title="Portfolio" />
      <div className="flex items-center justify-center">
        <SingleProject />
      </div>
    </div>
  );
};

export default ProjectSection;
