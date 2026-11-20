"use client";

import { useEffect, useState } from "react";

import { NAV, SITE } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

import { ExternalLink } from "../primitives/external-link";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

/* The hero ("top") is tracked too, so no nav item is underlined while it is in
   view. Without it the hook defaulted to "work" on load and stayed on the last
   section after scrolling back up. */
const SECTION_IDS = ["top", ...NAV.map((item) => item.id)];

export function SiteHeader() {
  const activeId = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="mx-auto w-full max-w-(--container-page) px-5 sm:px-8 lg:px-12">
        <div
          className={cn(
            "flex h-16 items-center justify-between border-b transition-colors duration-200",
            scrolled ? "border-line" : "border-transparent",
          )}
        >
          <a
            href="#top"
            className="text-[15px] font-medium tracking-[-0.02em] whitespace-nowrap text-ink"
          >
            {SITE.name}
          </a>

          {/* The toggle sits after Résumé on desktop and before Menu on a
              phone, where the nav is hidden. */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Tighter below lg: at gap-8 the nav overran a 768px tablet and
                pushed the name onto two lines. */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-8">
                {NAV.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "type-label relative block py-2 transition-colors duration-200 hover:text-ink",
                          isActive ? "text-ink" : "text-muted",
                        )}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-0 -bottom-px h-px origin-left bg-ink transition-transform duration-300 ease-out",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </a>
                    </li>
                  );
                })}
                <li className="border-l border-line pl-6 lg:pl-8">
                  <ExternalLink
                    href={SITE.resume}
                    className="type-label py-2 text-ink hover:text-muted"
                  >
                    Résumé
                  </ExternalLink>
                </li>
              </ul>
            </nav>

            <ThemeToggle />
            <MobileNav activeId={activeId} />
          </div>
        </div>
      </div>
    </header>
  );
}
