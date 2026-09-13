import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <ExperienceSection />
      <Education />
      <TechStack />
      <Contact />
    </>
  );
}
