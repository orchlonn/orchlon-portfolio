import { Reveal } from "../primitives/reveal";
import { Section } from "../primitives/section";

const FACTS = [
  { label: "Focus", value: "AI agents & LLM systems" },
  { label: "Builds", value: "Full-stack web & mobile apps" },
  { label: "Education", value: "B.S. Computer Science, CWU ’26" },
] as const;

export function About() {
  return (
    <Section id="about" index="02" label="About">
      <div className="grid grid-cols-4 gap-x-4 md:grid-cols-9 md:gap-x-6">
        <Reveal className="col-span-4 md:col-span-6">
          <div className="max-w-[58ch] space-y-6 text-base leading-[1.6] text-muted md:text-lg">
            <p>
              I&rsquo;m an engineer focused on AI development. Most of my
              work is building agents and the systems around them: multi-agent
              workflows, tool calling, and retrieval pipelines that ground models in
              real data. I care about the unglamorous parts too: evaluation, latency,
              and correctness.
            </p>
            <p>
              On the web I work across the stack, from React and Next.js interfaces
              to Python and Node.js APIs, databases, and deployment, so an AI feature
              ships as a product people can use rather than a demo.
            </p>
            <p>
              I also build cross-platform mobile apps in React Native and Expo, from
              the first prototype to releases on the App Store and Google Play.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="col-span-4 mt-10 md:col-span-3 md:mt-0">
          <dl className="border-t border-line">
            {FACTS.map((fact) => (
              <div key={fact.label} className="border-b border-line py-4">
                <dt className="type-label text-muted">{fact.label}</dt>
                <dd className="mt-1.5 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
