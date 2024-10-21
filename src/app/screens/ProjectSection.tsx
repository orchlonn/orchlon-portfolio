import { Suspense } from "react";
import Image from "next/image";
import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "@/Components/Project/SingleProject";

const ProjectSection = () => {
  return (
    <div className="flex gap-10 my-5">
      <SingleProject
        title="Moves"
        description="Location-Based Event Discovery App."
      />
      <SingleProject
        title="Logbook"
        description="Location-Based Event Discovery App."
      />
    </div>
  );
};

export default ProjectSection;
