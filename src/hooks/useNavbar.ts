import { useEffect, useMemo, useRef, useState } from "react";
import { NavItem } from "../model/navbar.model";

export const useNavbar = (navItems: NavItem[]) => {
  const [activeId, setActiveId] = useState<string>("about");
  const [isOpen, setIsOpen] = useState(false);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionIds = useMemo(() => navItems.map((n) => n.id), [navItems]);

  const handleNavClick = (id: string) => {
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set the active state immediately
    setActiveId(id);

    // Block observer updates during smooth scroll
    isScrollingRef.current = true;

    // Scroll to the section
    const el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Re-enable observer after scroll completes (smooth scrolling typically takes 500-1000ms)
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const offset = 120;
      let currentId = sectionIds[0];

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          currentId = sectionIds[i];
        }

        // If this section's bottom is above the offset, advance to the next nav item
        // This handles gaps between sections (e.g. skills section between about and resume)
        const bottom = el.getBoundingClientRect().bottom;
        if (bottom <= offset && i + 1 < sectionIds.length) {
          currentId = sectionIds[i + 1];
        }
      }

      // If scrolled to the bottom, activate the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    activeId,
    isOpen,
    handleNavClick,
    toggleMenu,
    closeMenu,
  };
};
