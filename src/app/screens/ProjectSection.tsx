import { Suspense } from "react";
import Image from "next/image";
import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "@/Components/Project/SingleProject";

const ProjectSection = () => {
  return (
    <>
      <SectionHeader title="projects" />
      <div className="flex gap-16 mt-10 ">
        <SingleProject
          title="Moves"
          description="Location-Based Event Discovery App."
        />
        <SingleProject
          title="Logbook"
          description="Users can pin their location on map."
        />
      </div>
    </>
  );
};

export default ProjectSection;
