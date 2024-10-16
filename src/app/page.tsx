"use client";

// import ExperienceSection from "@/Components/ExperienceSection";
import HomeLeftSide from "@/Components/Home/HomeLeftSide";
import Link from "next/link";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import ExperienceSection from "@/Components/ExperienceSection";

export default function Home() {
  const [section, setSection] = useState(0);

  return (
    <div className="h-screen w-screen bg-[#111729] px-[15vw] py-32 overflow-y-auto">
      <div className="flex flex-row text-white">
        <HomeLeftSide setSection={setSection} />
        <div className="w-1/2 h-[calc(100vh-8rem)] pb-32 scrollbar-hide">
          <p className="text-slate-400 leading-relaxed">
            I am a junior studying Computer Science at Central Washington
            University with a strong passion for software engineering. I have
            completed three internships, where I gained valuable experience in
            mobile app development, taking projects from concept to final
            product. My primary tools include React Native, Expo, Node.js,
            NextJS, and Firebase, which I use to build custom iOS, Android, and
            web applications.
          </p>
          <div>
            {/* {section === 0 && <Home />} */}
            {section === 1 && <ExperienceSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
