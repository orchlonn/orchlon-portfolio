import { SITE } from "@/data/site";

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
    </Section>
  );
}
