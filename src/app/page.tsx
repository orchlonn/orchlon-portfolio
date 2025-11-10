import Image from "next/image";
import Profile from "../../public/profile.jpeg";
// import GitHubCalendar from "react-github-calendar";
import { AnimatedBeamCircle } from "@/Components/About/CircleBeam";
import ProjectsSection from "./projects/page";
import ExperienceSection from "./experience/page";
import ResumeSection from "./resume/page";

export default function Home() {
  return (
    <>
      <section id="about" className="scroll-mt-24">
        <div className="flex flex-col items-center mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row h-auto sm:h-[18rem] bg-slate-800 px-4 sm:px-6 my-6 sm:my-10 items-center rounded-lg text-slate-50 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-slate-700 border border-transparent animate-slide-up">
            <div className="mx-4 sm:mx-6 mb-4 sm:mb-0 animate-scale-in">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <Image
                  src={Profile}
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center sm:text-left animate-fade-in-delay">
              <h1 className="text-xl sm:text-2xl font-bold mb-2">About Me</h1>
              <p className="text-sm sm:text-base leading-relaxed">
                Hi, I&apos;m Oscar—a passionate software developer driven by
                curiosity and innovation. My journey began with AI and emerging
                tech, and has grown to include cybersecurity and secure software
                development. I love learning, taking on diverse projects, and
                continuously expanding my skills across the tech landscape.
                I&apos;m especially motivated by the opportunity to solve
                real-world problems through technology. Collaboration and
                adaptability are at the core of how I work and grow.
              </p>
            </div>
          </div>
          <div className="text-white text-center mt-6 sm:mt-10 px-4 sm:px-0 animate-slide-up-delay">
            <p className="text-2xl sm:text-3xl font-bold mb-4">My Skills</p>
            <p className="text-sm sm:text-base leading-relaxed">
              With experience in full-stack development, I&apos;ve built
              end-to-end projects for web and mobile platforms. I&apos;m
              passionate about AI/ML, especially NLP and LLMs, and have a strong
              interest in cybersecurity, focusing on secure architectures and
              authentication protocols.
            </p>
          </div>
        </div>
        <div className="animate-fade-in-delay-2">
          <AnimatedBeamCircle />
        </div>
      </section>

      <section id="resume" className="scroll-mt-24">
        <ResumeSection />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>

      <section id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </section>
      {/* <div className="flex flex-col items-center mx-auto w-full mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 lg:px-8 animate-fade-in-delay-2">
        <div className="animate-bounce-in w-full max-w-4xl">
          <GitHubCalendar username="orchlonn" />
        </div>
      </div> */}
    </>
  );
}
