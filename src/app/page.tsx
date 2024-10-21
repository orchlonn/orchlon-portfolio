"use client";

import HomeLeftSide from "@/Components/Home/HomeLeftSide";
import { useState } from "react";
import Experience from "./screens/Experience";
import HomeSection from "./screens/HomeSection";
import AboutSection from "./screens/AboutSection";
import ProjectSection from "./screens/ProjectSection";

export default function Home() {
  const [section, setSection] = useState(3);

  return (
    <div className="h-screen w-screen px-[15vw] py-28">
      <div className="flex flex-row text-white">
        <HomeLeftSide setSection={setSection} />
        <div className="w-1/2">
          <div>
            <AboutSection />
            {/* <HomeSection /> */}
            <Experience />
            <ProjectSection />
          </div>
        </div>
      </div>
    </div>
  );
}
