import { EDUCATION } from "@/data/experience";

import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

export function Education() {
  return (
    <Section id="education" index="04" label="Education">
      <ol>
        {EDUCATION.map((item) => (
          <Reveal as="li" key={item.id} className="border-t border-line">
            <div className="grid grid-cols-4 gap-x-4 py-8 md:grid-cols-9 md:gap-x-6 md:py-10">
              <p className="type-meta col-span-4 text-muted md:col-span-2">
                <span className="whitespace-nowrap">{item.start}</span>
                <span aria-hidden="true"> — </span>
                <span className="whitespace-nowrap">{item.end}</span>
              </p>

              <div className="col-span-4 mt-3 md:col-span-7 md:mt-0">
                <h3 className="text-lg font-medium text-ink">{item.credential}</h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                {item.detail ? (
                  <p className="type-meta mt-4 text-muted">{item.detail}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
