import { ARCHIVE, PROJECTS } from "@/data/projects";

import { ExternalLink } from "../primitives/external-link";
import { ProjectRow } from "../primitives/project-row";
import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

export function SelectedWork() {
  return (
    <Section id="work" index="01" label="Selected Work">
      <ol className="border-b border-line">
        {PROJECTS.map((project, i) => (
          <Reveal as="li" key={project.slug} className="border-t border-line">
            <ProjectRow project={project} featured={i === 0} />
          </Reveal>
        ))}
      </ol>

      <Reveal className="pt-8">
        <p className="type-meta text-muted">
          <span className="type-label mr-3 text-muted">Also</span>
          {ARCHIVE.map((item, i) => (
            <span key={item.title}>
              {i > 0 ? <span aria-hidden="true"> · </span> : null}
              <ExternalLink
                href={item.href}
                showArrow={false}
                className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
              >
                {item.title}
              </ExternalLink>
              <span className="text-muted"> ({item.note})</span>
            </span>
          ))}
        </p>
      </Reveal>
    </Section>
  );
}
