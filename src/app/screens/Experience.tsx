import ExperienceItem from "@/Components/ExperienceItem";
import SectionHeader from "@/Components/SectionHeader";

const Experience = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <SectionHeader title="experience" />
      <ExperienceItem
        date="JUN – SEP 2024"
        position="Software Engineering Intern"
        company="Pypup.com"
        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
        skills={[
          "JavaScript",
          "TypeScript",
          "React Native",
          "Expo",
          "Firebase",
        ]}
      />
      <ExperienceItem
        date="2023 – 2024"
        position="Cloud Research Assistant"
        company="Seattle Central College"
        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
        skills={[
          "JavaScript",
          "TypeScript",
          "React Native",
          "Expo",
          "Firebase",
        ]}
      />
      <ExperienceItem
        date="JUN – SEP 2023"
        position="Software Engineering Intern"
        company="Mongol Content LLC"
        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
        skills={[
          "JavaScript",
          "TypeScript",
          "React Native",
          "Expo",
          "Firebase",
        ]}
      />
      <ExperienceItem
        date="JUN – SEP 2023"
        position="Software Engineering Intern"
        company="Steppelink LLC"
        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
        skills={[
          "JavaScript",
          "TypeScript",
          "React Native",
          "Expo",
          "Firebase",
        ]}
      />
    </div>
  );
};

export default Experience;
