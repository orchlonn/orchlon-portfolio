import ExperienceItem from "@/Components/ExperienceItem";

const Experience = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 my-10">
      <ExperienceItem
        position="Software Engineering Intern | Jun 2024 - Sep 2024"
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
        position="Cloud Research Assistant | May 2023- Feb 2024"
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
        position="Software Engineering Intern | Jun 2023 - Sep 2023"
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
        position="Software Engineering Intern | Jun 2022 - Sep 2022"
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
  );
};

export default Experience;
