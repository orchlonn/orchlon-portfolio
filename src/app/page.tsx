"use client";

import HomeLeftSide from "@/Components/Home/HomeLeftSide";
import Link from "next/link";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import Experience from "./screens/Experience";
import HomeSection from "./screens/HomeSection";
import AboutSection from "./screens/AboutSection";
import ProjectSection from "./screens/ProjectSection";

export default function Home() {
  const [section, setSection] = useState(0);

  return (
    <div className="h-screen w-screen bg-[#111729] px-[15vw] py-20">
      <div className="flex flex-row text-white">
        <HomeLeftSide setSection={setSection} />
        <div className="w-1/2 h-[calc(100vh-8rem)] scrollbar-hide">
          <div>
            {section === 0 && <HomeSection />}
            {section === 1 && <AboutSection />}
            {section === 2 && <Experience />}
            {section === 3 && <ProjectSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
