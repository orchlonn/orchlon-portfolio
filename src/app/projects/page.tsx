import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "@/Components/Project/SingleProject";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10 text-slate-200">
      <SectionHeader desc="My Recent Projects" title="Portfolio" />
      <div className="flex items-center justify-center gap-10">
        <SingleProject title="AI Nomad Navigator - AI Travel Assistant" />
        <SingleProject title="AI Nomad Navigator - AI Travel Assistant" />
        <SingleProject title="AI Nomad Navigator - AI Travel Assistant" />
      </div>
      <div className="flex items-center justify-center gap-10">
        <SingleProject title="AI Nomad Navigator - AI Travel Assistant" />
        <SingleProject title="AI Nomad Navigator - AI Travel Assistant" />
        <SingleProject title="AI Nomad Navigator - AI Travel Assistant" />
      </div>
    </div>
  );
};

export default ProjectSection;
