"use client";
import SectionHeader from "@/Components/SectionHeader";
import ResumeBox from "./Components/ResumeBox";

const ProjectSection = () => {
  return (
    <div className="animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader desc="My Resume and Cover Letter" title="CV & Resume" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8">
        <ResumeBox
          description="A concise, one-page overview of my experience and skills."
          title="Resume"
          onPress={() => window.open("/resume.pdf", "_blank")}
          className="animate-scale-in w-full sm:w-1/5"
        />
        <ResumeBox
          description="A concise, one-page overview of my experience and skills."
          title="Cover Letter"
          onPress={() => window.open("/cv.pdf", "_blank")}
          className="animate-scale-in-delay w-full sm:w-1/5"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
