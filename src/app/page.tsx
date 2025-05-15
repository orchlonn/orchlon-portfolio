"use client";
import Image from "next/image";
import Profile from "../../public/profile.jpeg";
import GitHubCalendar from "react-github-calendar";
import { AnimatedBeamCircle } from "@/Components/Home/CircleBeam";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto max-w-3xl">
        <div className="flex h-[18rem] bg-[#F5F5F5] px-4 my-10 items-center rounded-lg">
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
        <div className="text-white text-center mt-10">
          <p className="text-3xl font-bold mb-4">My Skills</p>
          <p>
            With experience in full-stack development, I&apos;ve built
            end-to-end projects for web and mobile platforms. I&apos;m
            passionate about AI/ML, especially NLP and LLMs, and have a strong
            interest in cybersecurity, focusing on secure architectures and
            authentication protocols.
          </p>
        </div>
      </div>
      <AnimatedBeamCircle />
      <div className="flex flex-col items-center mx-auto w-full mt-8 text-white">
        <GitHubCalendar username="orchlonn" />
      </div>
    </>
  );
}
