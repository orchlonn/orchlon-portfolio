import SectionHeader from "@/Components/SectionHeader";
import GitHubCalendar from "react-github-calendar";

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-y-16 xl:ml-[-5vw]">
      <SectionHeader title="about" />
      <p className="text-slate-400 leading-relaxed">
        I am a junior studying Computer Science at Central Washington University
        with a strong passion for software engineering. I have completed three
        internships, where I gained valuable experience in mobile app
        development, taking projects from concept to final product. My primary
        tools include React Native, Expo, Node.js, NextJS, and Firebase, which I
        use to build custom iOS, Android, and web applications.
      </p>
      <div>
        <h2 className="mt-14 text-l mb-7">My contributions on GitHub:</h2>
        <div className="xl:w-[150%]">
          <GitHubCalendar username="orchlonn" />
        </div>
        <div className="flex mt-10">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="font-semibold">Resume</button>
          </a>
          <p className="ml-2 text-slate-400">Last updated: 2024-11-03</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
