import ExperienceItem from "@/Components/ExperienceItem";
import SectionHeader from "@/Components/SectionHeader";

const Experience = () => {
  return (
    <>
      <SectionHeader title="experience" />
      <div className="flex flex-col gap-y-5 my-5">
        <ExperienceItem
          date="JUN – SEP 2024"
          position="Software Engineering Intern"
          company="Pypup.com"
          description={[
            "● Implemented a flash-card feature for the platform, utilizing Angular and Tailwind CSS for the front end and NestJS for the back end, resulting in a 30% boost in website traffic and attracting approximately 150 daily users.",
            "● Developed and consistently updated comprehensive technical documentation for both frontend and backend components, leading to a 20% reduction in troubleshooting time and a 15% increase in onboarding efficiency for new team members.",
          ]}
          companyUrl="https://pypup.com/"
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
          date="2023 – 2024"
          position="Cloud Research Assistant"
          company="Seattle Central College"
          description={[
            "● Leveraged AWS educational platform to evaluate cost and performance metrics for small e-commerce businesses using EC2, VPS, S3, CloudSearch, and DynamoDB, optimizing resource usage by 20% while maintaining zero cost.",
          ]}
          companyUrl="https://seattlecentral.edu/"
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
        />
        <ExperienceItem
          date="JUN – SEP 2023"
          position="Software Engineering Intern"
          company="Mongol Content"
          description={[
            "● Developed a mobile application for iOS, and Android using React Native.",
            "● Converted the MPT Pay banking application from its native language to React Native, allowing the company to cut development costs by 50%.",
          ]}
          companyUrl="https://www.mongolcontent.mn/"
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
        />
        <ExperienceItem
          date="JUN – SEP 2022"
          position="Software Engineering Intern"
          company="Steppe Link Holding"
          description={[
            "● Developed a mobile application for iOS, and Android using React Native.",
            "● Gained knowledge of React Native's lifecycle and hooks while creating pixel-perfect user interfaces.",
          ]}
          companyUrl="https://www.steppeholding.mn/en"
          skills={[
            "JavaScript",
            "React Native",
            "Expo",
            "Firebase",
            "Node.js",
            "HTML",
            "CSS",
          ]}
        />
      </div>
    </>
  );
};

export default Experience;
