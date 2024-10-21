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
          imageUrl="https://firebasestorage.googleapis.com/v0/b/orchlon-portfolio.appspot.com/o/work1.mp4?alt=media&token=a635f0f3-c860-4445-ad8d-70113c768d32"
        />
        <SingleProject
          title="Logbook"
          description="Users can pin their location on map."
          imageUrl="https://firebasestorage.googleapis.com/v0/b/orchlon-portfolio.appspot.com/o/Simulator%20Screen%20Recording%20-%20iPhone%2015%20Pro%20-%202024-10-20%20at%2021.29.55.mp4?alt=media&token=5ec40229-ea71-43ef-b708-309c1718fdd6"
        />
      </div>
    </>
  );
};

export default ProjectSection;
