import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "./Components/SingleProject";
import BizzzyLogo from "../../../public/Bizzzy_logo.png";
import SortingAppLogo from "../../../public/sorting_app_logo.png";
import LogisticCompanyLogo from "../../../public/logistic_company_logo.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader desc="My Recent Projects" title="Portfolio" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10">
        <SingleProject
          title="Bizzzy - Handy human helps you"
          image={BizzzyLogo}
          githubLink="https://github.com/Bizzzy-software"
          demoLink="https://drive.google.com/file/d/1wuJXLsGQBIHQUbkEfV9y3TfLk_BmVOU-/view?usp=sharing"
          className="animate-scale-in w-full sm:w-1/3 lg:w-1/5"
        />
        <SingleProject
          title="Sorting Application - VR Sorting algorithms"
          image={SortingAppLogo}
          demoLink=""
          githubLink="https://github.com/CS-466-group-4/VR-Sorting-app"
          className="animate-scale-in-delay w-full sm:w-1/3 lg:w-1/5"
        />
        <SingleProject
          title="Landing page - Logistic Company Website"
          image={LogisticCompanyLogo}
          demoLink="https://andjintrans.vercel.app/"
          githubLink="https://github.com/orchlonn/Andjintrans"
          className="animate-fade-in-delay w-full sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
