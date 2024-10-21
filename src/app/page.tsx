"use client";

import HomeLeftSide from "@/Components/Home/HomeLeftSide";
import { useState } from "react";
import Experience from "./screens/Experience";
import AboutSection from "./screens/AboutSection";
import ProjectSection from "./screens/ProjectSection";

export default function Home() {
  const [section, setSection] = useState(1);

  return (
    <div className="h-screen w-screen px-[15vw] py-28">
      <div className="flex flex-row text-white">
        <HomeLeftSide setSection={setSection} />
        <div className="w-1/2">
          <div>
            {section == 1 ? <AboutSection /> : null}
            {section == 2 ? <Experience /> : null}
            {section == 3 ? <ProjectSection /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
