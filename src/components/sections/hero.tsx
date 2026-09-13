import { SITE } from "@/data/site";

import { ExternalLink } from "../primitives/external-link";
import { Reveal } from "../primitives/reveal";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="mx-auto w-full max-w-(--container-page) px-5 pt-16 pb-20 sm:px-8 md:pt-28 md:pb-32 lg:px-12 lg:pt-36 lg:pb-40">
        <div className="grid grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6">
          <Reveal className="col-span-4 md:col-span-11 lg:col-span-10">
            <h1
              id="hero-heading"
              className="text-3xl font-medium tracking-[-0.035em] text-ink sm:text-4xl md:text-[3.5rem] md:leading-[0.98] lg:text-5xl"
            >
              {SITE.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="col-span-4 mt-10 md:col-span-6 lg:col-span-5">
            <p className="max-w-[52ch] text-base leading-[1.6] text-muted md:text-lg">
              {SITE.bio}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="col-span-4 mt-12 md:col-span-12">
            <p className="type-meta border-t border-line pt-5 text-muted">
              {SITE.proof}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="col-span-4 mt-10 md:col-span-12">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a href="#work" className="rule-link text-ink">
                Selected work
              </a>
              <ExternalLink href={`mailto:${SITE.email}`} className="rule-link text-ink">
                {SITE.email}
              </ExternalLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
