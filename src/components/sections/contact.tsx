import { SITE, SOCIALS } from "@/data/site";

import { ExternalLink } from "../primitives/external-link";
import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

export function Contact() {
  return (
    <Section id="contact" index="06" label="Contact">
      <Reveal>
        <p className="max-w-[20ch] text-3xl font-medium tracking-[-0.03em] text-ink md:text-4xl">
          Let&rsquo;s build something interesting together.
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-10">
        <a
          href={`mailto:${SITE.email}`}
          className="text-xl tracking-[-0.02em] text-ink underline decoration-line-strong underline-offset-[8px] transition-[text-decoration-color] duration-200 hover:decoration-accent md:text-3xl"
        >
          {SITE.email}
        </a>
      </Reveal>

      <Reveal delay={0.12} className="mt-10">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <ExternalLink href={social.href} className="type-meta text-muted hover:text-ink">
                {social.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
