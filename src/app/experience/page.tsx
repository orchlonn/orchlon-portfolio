import Pypup from "../../../public/pypup_logo.webp";
import MocoLogo from "../../../public/moco_logo.jpeg";
import SteppelinkLogo from "../../../public/steppelink_logo.webp";
import CWULogo from "../../../public/CWU_logo.png";
import SectionHeader from "@/Components/SectionHeader";
import ExperienceItem from "./Components/ExperienceItem";

const Experience = () => {
  return (
    <div className="animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <SectionHeader
          desc="My personal & professional development"
          title="Work & Research"
        />
      </div>
      <div className="flex flex-col items-center gap-y-3 sm:gap-y-4 mt-6 sm:mt-8">
        <ExperienceItem
          image={CWULogo}
          position="Undergraduate Researcher | Apr 2025 - Present"
          company="Central Washington University"
          description={[
            <>
              ● Conducted in-depth SQL Injection testing in a controlled test
              environment using SQLMap and custom payloads, uncovering{" "}
              <span className="font-bold text-white"> 20 </span>
              critical vulnerabilities in a web-based financial application and
              guiding patch deployments that reduced potential breach risk by
              <span className="font-bold text-white"> 90%. </span>
            </>,
            <>
              ● Conducted network reconnaissance and port scanning in a
              virtualized test environment with Nmap and Zenmap across{" "}
              <span className="font-bold text-white"> 100+ </span>
              hosts, mapping <span className="font-bold text-white"> 250 </span>
              open ports and service configurations—resulting in tightened
              firewall rules and a{" "}
              <span className="font-bold text-white"> 70% </span> reduction in
              exposed attack surface.
            </>,
          ]}
          skills={[
            "Higher Education Research",
            "Cybersecurity",
            "Software Infrastructure",
            "MySQL",
            "SQL Injection",
            "Script Injection",
            "Penetration Testing",
            "Port Scanning",
          ]}
          initialSkillCount={4}
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={Pypup}
          position="Software Engineer Intern | Jun 2024 - Sep 2024"
          company="Pypup.com"
          description={[
            <>
              ● Implemented a flash-card feature for the platform, utilizing
              Angular and Tailwind CSS for the front end and NestJS for the back
              end, resulting in a
              <span className="font-bold text-white"> 30%</span> boost in
              website traffic and attracting approximately
              <span className="font-bold text-white"> 1500</span> daily users.
            </>,
            <>
              ● Developed and consistently updated comprehensive technical
              documentation for both frontend and backend components, leading to
              a<span className="font-bold text-white"> 20%</span> reduction in
              troubleshooting time and a{" "}
              <span className="font-bold text-white"> 15%</span> increase in
              onboarding efficiency for new team members.
            </>,
          ]}
          skills={[
            "TypeScript",
            "Angular",
            "MySQL",
            "NestJS",
            "Tailwind",
            "Daisy UI",
            "HTML",
            "CSS",
          ]}
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={MocoLogo}
          position="Software Engineer Intern | Jun 2023 - Sep 2023"
          company="Mongol Content"
          description={[
            <>
              ● Developed a mobile application for iOS, and Android using React
              Native.
            </>,
            <>
              ● Converted the MPT Pay banking application from its native
              language to React Native, allowing the company to cut development
              costs by
              <span className="font-bold text-white"> 50%.</span>
            </>,
          ]}
          skills={[
            "JavaScript",
            "React Native",
            "Figma",
            "React Native",
            "Node.js",
            "Expo",
            "Firebase",
            "HTML",
            "CSS",
          ]}
          initialSkillCount={4}
          className="animate-slide-in-delay w-full sm:w-4/5 lg:w-2/5"
        />
        <ExperienceItem
          image={SteppelinkLogo}
          position="Software Engineer Intern | Jun 2022 - Sep 2022"
          company="Steppe Link Holding"
          description={[
            "● Developed a mobile application for iOS, and Android using React Native.",
            "● Gained knowledge of React Native's lifecycle and hooks while creating pixel-perfect user interfaces.",
          ]}
          skills={[
            "JavaScript",
            "React Native",
            "Expo",
            "Firebase",
            "Node.js",
            "HTML",
            "CSS",
          ]}
          initialSkillCount={4}
          className="animate-fade-in-delay-2 w-full sm:w-4/5 lg:w-2/5"
        />
      </div>
    </div>
  );
};

export default Experience;
