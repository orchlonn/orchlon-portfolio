import SectionHeader from "@/Components/SectionHeader";
import Link from "next/link";

const ProjectSection = ({ setSection }) => {
  return (
    <div className="w-1/2">
      <SectionHeader title="projects" />
      <p>My project section</p>
    </div>
  );
};

export default ProjectSection;
