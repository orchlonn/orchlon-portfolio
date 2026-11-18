import { ArrowDown } from "lucide-react";
import type { CSSProperties } from "react";

import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

import { ExternalLink } from "../primitives/external-link";
import { HeroLandscape } from "./hero-landscape";

/* The hero is above the fold, so it animates with CSS from first paint rather
   than through <Reveal>, which holds content at opacity 0 until hydration and
   an intersection observer catch up. */
const RISE = "motion-safe:animate-rise";
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const lastLine = SITE.headlineLines.length - 1;

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative">
      {/* Decorative contour field in the whitespace right of the headline, lg
          and up. It sits behind the copy and never takes pointer events. */}
      <HeroLandscape />

      {/* One column on one left edge at every size. The bio is capped near the
          width of the headline's first line, so on desktop its right edge
          lines up with that line too. Relative so it paints above the field. */}
      <div className="relative mx-auto w-full max-w-(--container-page) px-5 pt-14 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:px-12 lg:pt-28 lg:pb-32">
        {/* The line breaks are the composition, so lines never rewrap. The longest
            line runs about 8.4em, and the size tracks the viewport to keep it
            inside the gutters down to a 320px phone. */}
        <h1
          id="hero-heading"
          className="text-[length:clamp(2rem,10.8vw_-_0.25rem,5.5rem)] leading-[0.95] font-normal tracking-[-0.045em] text-ink"
        >
          {SITE.headlineLines.map((line, i) => (
            <span
              key={line}
              style={delay(90 + i * 80)}
              className={cn(
                "block whitespace-nowrap",
                RISE,
                i === lastLine && "font-serif text-[1.12em] tracking-[-0.015em] italic",
              )}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          style={delay(380)}
          className={cn(
            "mt-10 max-w-[36rem] text-base leading-[1.65] text-muted md:mt-12 md:text-lg md:leading-[1.6]",
            RISE,
          )}
        >
          {SITE.bio}
        </p>

        <div
          style={delay(460)}
          className={cn("mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px] md:mt-10", RISE)}
        >
          <a
            href="#work"
            className="group/cta rule-link inline-flex items-center gap-1.5 text-ink"
          >
            Selected work
            <ArrowDown
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover/cta:translate-y-0.5"
            />
          </a>
          <ExternalLink href={SITE.resume} className="text-muted hover:text-ink">
            Résumé (PDF)
          </ExternalLink>
          <ExternalLink href={`mailto:${SITE.email}`} className="text-muted hover:text-ink">
            {SITE.email}
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
