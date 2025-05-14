"use client";

import HomeLeftSide from "@/Components/Home/HomeLeftSide";
import { useState } from "react";
import Experience from "./screens/Experience";
import AboutSection from "./screens/AboutSection";
import ProjectSection from "./screens/ProjectSection";
import Navbar from "@/Components/Navbar";
import Profile from "../../public/profile.jpeg";
import Image from "next/image";
import AboutMe from "@/Components/Home/AboutMe";
export default function Home() {
  const [section, setSection] = useState(1);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <AboutMe />
      {/* <div className="xl:flex xl:flex-row text-white">
        <HomeLeftSide setSection={setSection} />
        <div className="xl:w-1/2 pb-10">
          <div>
            {section == 1 ? <AboutSection /> : null}
            {section == 2 ? <Experience /> : null}
            {section == 3 ? <ProjectSection /> : null}
          </div>
        </div>
      </div> */}
    </div>
  );
}
