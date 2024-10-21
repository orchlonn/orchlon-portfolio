import SectionHeader from "@/Components/SectionHeader";
import GitHubCalendar from "react-github-calendar";

const HomeSection = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <SectionHeader title="home" />
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
