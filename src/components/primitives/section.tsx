import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  /** Tonal break. Only About uses it; muted text inside must step up a tone. */
  surface?: boolean;
  className?: string;
}

export function Section({
  id,
  index,
  label,
  children,
  surface = false,
  className,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-16 border-t border-line",
        surface && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4 md:col-span-3">
            <Reveal>
              <h2
                id={headingId}
                className={cn(
                  "type-label flex items-baseline gap-3",
                  surface ? "text-muted-strong" : "text-muted",
                )}
              >
                <span className="tabular-nums">{index}</span>
                <span>{label}</span>
              </h2>
            </Reveal>
          </div>

          <div className="col-span-4 mt-8 md:col-span-9 md:mt-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
