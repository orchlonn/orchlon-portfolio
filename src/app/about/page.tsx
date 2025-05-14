import Image from "next/image";
import Profile from "../../../public/profile.jpeg";
import GitHubCalendar from "react-github-calendar";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="flex h-[18rem] max-w-3xl bg-[#F5F5F5] px-4 my-10 items-center rounded-lg">
        <div className="mx-6">
          <Image
            src={Profile}
            width={1000}
            height={1000}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-2">About Me</h1>
          <p>
            Hi, I'm Oscar—a passionate software developer driven by curiosity
            and innovation. My journey began with AI and emerging tech, and has
            grown to include cybersecurity and secure software development. I
            love learning, taking on diverse projects, and continuously
            expanding my skills across the tech landscape. I'm especially
            motivated by the opportunity to solve real-world problems through
            technology. Collaboration and adaptability are at the core of how I
            work and grow.
          </p>
        </div>
      </div>
      <div className="w-full xl:max-w-3xl mt-8">
        <GitHubCalendar username="orchlonn" />
      </div>
    </div>
  );
};

export default AboutMe;
