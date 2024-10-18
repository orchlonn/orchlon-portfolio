"use client";

import HomeLeftSide from "@/Components/Home/HomeLeftSide";
import { useState } from "react";
import Experience from "./screens/Experience";
import HomeSection from "./screens/HomeSection";
import AboutSection from "./screens/AboutSection";
import ProjectSection from "./screens/ProjectSection";

export default function Home() {
  const [section, setSection] = useState(0);

  return (
    <div className="h-screen w-screen px-[15vw] my-28">
      <div className="flex flex-row text-white">
        <HomeLeftSide setSection={setSection} />
        <div className="w-1/2">
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
