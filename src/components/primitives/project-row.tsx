import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/content";

interface ProjectRowProps {
  project: Project;
  featured?: boolean;
}

/**
 * The whole row is clickable via a stretched pseudo-element on the title link,
 * which keeps any secondary links (repo, demo) as real, focusable anchors —
 * something a row-wrapping <a> cannot do.
 */
export function ProjectRow({ project, featured = false }: ProjectRowProps) {
  const [primary, ...secondary] = project.links;

  return (
    <div className="group relative -mx-4 grid grid-cols-4 gap-x-4 px-4 py-8 transition-colors duration-200 hover:bg-surface md:grid-cols-12 md:gap-x-6 md:py-10">
      <div className="col-span-4 flex items-baseline justify-between md:col-span-1 md:block">
        <span className="type-label text-muted tabular-nums">{project.index}</span>
        <span className="type-meta text-muted md:hidden">{project.year}</span>
      </div>

      <div
        className={
          featured
            ? "col-span-4 mt-3 md:col-span-7 md:mt-0"
            : "col-span-4 mt-3 md:col-span-5 md:mt-0"
        }
      >
        <p className="type-label mb-2 text-muted">{project.kicker}</p>

        <h3
          className={
            featured
              ? "text-2xl font-medium tracking-[-0.03em] text-ink md:text-4xl"
              : "text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl"
          }
        >
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-transparent underline-offset-[6px] transition-[text-decoration-color] duration-200 group-hover:decoration-ink after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
            <span className="sr-only"> — {primary.label} (opens in a new tab)</span>
          </a>
        </h3>

        <p className="mt-3 max-w-[46ch] text-sm leading-[1.6] text-muted">
          {project.summary}
        </p>
        {project.outcome ? (
          <p className="mt-2 max-w-[46ch] text-sm leading-[1.6] text-ink">
            {project.outcome}
          </p>
        ) : null}
      </div>

      <div
        className={
          featured
            ? "col-span-4 mt-5 md:col-span-2 md:mt-0"
            : "col-span-4 mt-5 md:col-span-4 md:mt-0"
        }
      >
        {/* Comma-separated inline metadata, not pills — pills read as cards. */}
        <p className="type-meta text-muted">{project.tags.join(", ")}</p>
      </div>

      <div className="col-span-4 mt-5 flex items-center gap-4 md:col-span-2 md:mt-0 md:flex-col md:items-end md:gap-1.5">
        <span className="type-meta hidden text-muted md:block">{project.year}</span>

        <span className="type-meta inline-flex items-center gap-1 text-ink">
          {primary.label}
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>

        {secondary.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="type-meta relative z-10 inline-flex items-center gap-1 text-muted transition-colors duration-200 hover:text-ink"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </div>
  );
}
