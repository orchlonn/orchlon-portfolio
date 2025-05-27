import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "./Components/SingleProject";
import BizzzyLogo from "../../../public/Bizzzy_logo.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10 text-slate-200">
      <SectionHeader desc="My Recent Projects" title="Portfolio" />
      <div className="flex items-center justify-center gap-10">
        <SingleProject
          title="Bizzzy - Handy human helps you"
          image={BizzzyLogo}
          githubLink="https://github.com/Bizzzy-software"
          demoLink="https://drive.google.com/file/d/1wuJXLsGQBIHQUbkEfV9y3TfLk_BmVOU-/view?usp=sharing"
        />
        <SingleProject
          title="Bizzzy - Handy human helps you"
          image={BizzzyLogo}
          demoLink="https://github.com/Bizzzy-software"
          githubLink="https://github.com/Bizzzy-software"
        />
        <SingleProject
          title="Bizzzy - Handy human helps you"
          image={BizzzyLogo}
          demoLink="https://github.com/Bizzzy-software"
          githubLink="https://github.com/Bizzzy-software"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
