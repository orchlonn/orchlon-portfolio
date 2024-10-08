import ExperienceSection from "@/Components/ExperienceSection";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <div className="overflow-y-auto h-screen w-screen bg-[#111729] px-[15vw] py-32">
      <div className=" flex flex-row text-white">
        <div className="w-1/2">
          <h1 className="">Oscar Chinbat</h1>
          <p className="">Full Stack software engineer</p>
          <p className="">
            Creating pixel-perfect, engaging, and accessible web and mobile
            applications.
          </p>
        </div>
        <div className="w-1/2">
          <p className="">
            I am a junior studying Computer Science at Central Washington
            University with a strong passion for software engineering. I have
            completed three internships, where I gained valuable experience in
            mobile app development, taking projects from concept to final
            product. My primary tools include React Native, Expo, Node.js,
            NextJS, and Firebase, which I use to build custom iOS, Android, and
            web applications.
          </p>

          {/* Github Section */}
          <div className="mt-5 mb-[13vh]">
            <p className="text-lg font-semibold mb-5">
              Here is my Github Contribution:
            </p>
            <GitHubCalendar username="orchlonn" />
          </div>

          {/* Work Experience Section */}
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}
