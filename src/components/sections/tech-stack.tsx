import { SKILLS } from "@/data/skills";

import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

export function TechStack() {
  return (
    <Section id="stack" index="05" label="Stack">
      <dl className="border-b border-line">
        {SKILLS.map((category) => (
          <Reveal key={category.id} className="border-t border-line">
            <div className="grid grid-cols-4 gap-x-4 py-6 md:grid-cols-9 md:gap-x-6">
              <dt className="type-label col-span-4 text-muted md:col-span-2">
                {category.title}
              </dt>
              <dd className="col-span-4 mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink md:col-span-7 md:mt-0">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
