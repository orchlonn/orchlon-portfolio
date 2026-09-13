import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

const FACTS = [
  { label: "Focus", value: "AI/ML, RAG systems, full-stack" },
  { label: "Studied", value: "B.S. Computer Science, CWU" },
  { label: "Recently", value: "AI Engineer, Chimege Systems LLC" },
] as const;

export function About() {
  return (
    <Section id="about" index="02" label="About" surface>
      <div className="grid grid-cols-4 gap-x-4 md:grid-cols-9 md:gap-x-6">
        <Reveal className="col-span-4 md:col-span-6">
          <div className="max-w-[58ch] space-y-6 text-base leading-[1.6] text-muted-strong md:text-lg">
            <p>
              I&rsquo;m a software engineer working where machine learning meets
              product. Most of what I build starts as a hard retrieval or reasoning
              problem and ends as something people can actually use &mdash; a legal
              research assistant, a trading companion, a classroom platform.
            </p>
            <p>
              My work spans RAG pipelines and agent workflows, full-stack web and
              mobile development, and the infrastructure that keeps them running. I
              care about the unglamorous parts: evaluation, latency, correctness, and
              interfaces that stay legible under real data.
            </p>
            <p>
              I&rsquo;m finishing a B.S. in Computer Science at Central Washington
              University, where I&rsquo;ve also worked as an AI/ML researcher and
              taught data structures as a TA.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="col-span-4 mt-10 md:col-span-3 md:mt-0">
          <dl className="border-t border-line-strong">
            {FACTS.map((fact) => (
              <div key={fact.label} className="border-b border-line-strong py-4">
                <dt className="type-label text-muted-strong">{fact.label}</dt>
                <dd className="mt-1.5 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
