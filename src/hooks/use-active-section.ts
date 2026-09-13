"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section occupies the vertical middle band of the viewport.
 * Replaces the old scroll-listener implementation, which forced a synchronous
 * layout on every scroll event via getBoundingClientRect().
 */
export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
  // Depend on the joined key so a fresh array literal each render is harmless.
  const key = ids.join(",");

  useEffect(() => {
    const sectionIds = key.split(",").filter(Boolean);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
