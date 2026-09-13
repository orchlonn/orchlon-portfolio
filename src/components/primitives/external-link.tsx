import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

/** Internal hrefs (the résumé PDF) skip the new-tab affordance and its hint. */
export function ExternalLink({
  href,
  children,
  className,
  showArrow = true,
}: ExternalLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/link inline-flex items-center gap-1 transition-colors duration-200",
        className,
      )}
    >
      {children}
      {showArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-3.5 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        />
      ) : null}
      {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
