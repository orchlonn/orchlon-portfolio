import SectionHeader from "@/Components/SectionHeader";
import SingleProject from "./Components/SingleProject";
import BizzzyLogo from "../../../public/Bizzzy_logo.png";
import SortingAppLogo from "../../../public/sorting_app_logo.png";
import LogisticCompanyLogo from "../../../public/logistic_company_logo.png";
import AppStoreProject from "./Components/AppStoreProject";
import InvestAppLogo from "../../../public/invest_ai_logo.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader desc="My Recent Projects" title="Portfolio" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        <AppStoreProject
          title="Invest App - Smarat Trading"
          image={InvestAppLogo}
          appStoreLink="https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346"
          playStoreLink="https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346"
          className="animate-scale-in"
        />
        <SingleProject
          title="Bizzzy - Gig economy app"
          image={BizzzyLogo}
          githubLink="https://github.com/Bizzzy-software"
          demoLink="https://drive.google.com/file/d/1wuJXLsGQBIHQUbkEfV9y3TfLk_BmVOU-/view?usp=sharing"
          className="animate-scale-in-delay"
        />
        <SingleProject
          title="VR Sorting Algorithms app"
          image={SortingAppLogo}
          demoLink=""
          githubLink="https://github.com/CS-466-group-4/VR-Sorting-app"
          className="animate-fade-in-delay"
        />
        <SingleProject
          title="Logistic Company Landing Page"
          image={LogisticCompanyLogo}
          demoLink="https://andjintrans.vercel.app/"
          githubLink="https://github.com/orchlonn/Andjintrans"
          className="animate-fade-in-delay-2"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
