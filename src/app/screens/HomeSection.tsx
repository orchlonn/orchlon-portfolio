import ExperienceItem from "@/Components/ExperienceItem";

const HomeSection = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="flex section-header text-2xl font-bold mt-8 items-center">
        /home
        <span className="nav-indicator mr-4 h-[1px] w-32 bg-slate-600 transition-all ml-3"></span>
      </h1>
      <p className="text-slate-400 leading-relaxed">
        I am a junior studying Computer Science at Central Washington University
        with a strong passion for software engineering. I have completed three
        internships, where I gained valuable experience in mobile app
        development, taking projects from concept to final product. My primary
        tools include React Native, Expo, Node.js, NextJS, and Firebase, which I
        use to build custom iOS, Android, and web applications.
      </p>
    </div>
  );
};

export default HomeSection;
