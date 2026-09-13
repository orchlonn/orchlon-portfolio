import { SITE, SOCIALS } from "@/data/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    jobTitle: SITE.role,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Central Washington University",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Retrieval-Augmented Generation",
      "Large Language Models",
      "Full-Stack Web Development",
      "React Native",
    ],
    // The résumé PDF is not a profile — structured data wants linkable profiles only.
    sameAs: SOCIALS.filter((social) => social.href.startsWith("http")).map(
      (social) => social.href,
    ),
  };
}
