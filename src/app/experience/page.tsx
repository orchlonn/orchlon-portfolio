import Pypup from "../../../public/pypup_logo.webp";
import MocoLogo from "../../../public/moco_logo.jpeg";
import SteppelinkLogo from "../../../public/steppelink_logo.webp";
import SCCLogo from "../../../public/SCC_logo.png";
import CWULogo from "../../../public/CWU_logo.png";
import SectionHeader from "@/Components/SectionHeader";
import ExperienceItem from "./Components/ExperienceItem";

const Experience = () => {
  return (
    <div>
      <SectionHeader
        desc="My personal & professional development"
        title="Work & Research"
      />
      <div className="flex flex-col items-center gap-y-3">
        <ExperienceItem
          image={CWULogo}
          position="Undergraduate Researcher | Apr 2025 - Present"
          company="Central Washington University"
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
          initialSkillCount={4}
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
        />
        <ExperienceItem
          image={SCCLogo}
          position="Cloud Research Assistant | May 2023- Feb 2024"
          company="Seattle Central College"
          description={[
            <>
              ● Leveraged AWS educational platform to evaluate cost and
              performance metrics for small e-commerce businesses using EC2,
              VPS, S3, CloudSearch, and DynamoDB, optimizing resource usage by
              <span className="font-bold text-white"> 20% </span>
              while maintaining zero cost.
            </>,
          ]}
          skills={[
            "EC2",
            "S3",
            "VPC",
            "DynamoDB",
            "AWS Lambda",
            "CloudSearch",
            "TypeScript",
            "React",
            "HTML",
            "CSS",
            "Node.js",
          ]}
          initialSkillCount={5}
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
        />
      </div>
    </div>
  );
};

export default Experience;
