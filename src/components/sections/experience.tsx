import { EXPERIENCE } from "@/data/experience";

import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

export function ExperienceSection() {
  return (
    <Section id="experience" index="03" label="Experience">
      <ol>
        {EXPERIENCE.map((role) => (
          <Reveal as="li" key={role.id} className="border-t border-line">
            <div className="grid grid-cols-4 gap-x-4 py-8 md:grid-cols-9 md:gap-x-6 md:py-10">
              <p className="type-meta col-span-4 text-muted md:col-span-2">
                <span className="whitespace-nowrap">{role.start}</span>
                <span aria-hidden="true"> — </span>
                <span className="whitespace-nowrap">{role.end}</span>
              </p>

              <div className="col-span-4 mt-3 md:col-span-3 md:mt-0">
                <h3 className="text-lg font-medium text-ink">{role.role}</h3>
                <p className="mt-1 text-sm text-muted">{role.company}</p>
              </div>

              <div className="col-span-4 mt-4 md:col-span-4 md:mt-0">
                <ul className="space-y-2 border-l border-line pl-4 text-sm leading-[1.65] text-muted">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="type-meta mt-4 text-muted">{role.skills.join(", ")}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
