import { useEffect, useMemo, useRef, useState } from "react";
import { NavItem } from "../model/navbar.model";

export const useNavbar = (navItems: NavItem[]) => {
  const [activeId, setActiveId] = useState<string>("about");
  const [isOpen, setIsOpen] = useState(false);
  const observersRef = useRef<IntersectionObserver | null>(null);
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
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      // Skip observer updates during user-initiated smooth scrolling
      if (isScrollingRef.current) return;

      // Find all intersecting sections
      const intersecting = entries.filter((e) => e.isIntersecting);

      if (intersecting.length === 0) return;

      // Sort by their position on the page (top to bottom)
      const sorted = intersecting.sort((a, b) => {
        const rectA = a.target.getBoundingClientRect();
        const rectB = b.target.getBoundingClientRect();
        return rectA.top - rectB.top;
      });

      // Find the section closest to the top of the viewport
      const closest = sorted.reduce((prev, curr) => {
        const prevRect = prev.target.getBoundingClientRect();
        const currRect = curr.target.getBoundingClientRect();
        const prevDistance = Math.abs(prevRect.top);
        const currDistance = Math.abs(currRect.top);
        return currDistance < prevDistance ? curr : prev;
      });

      if (closest?.target?.id) {
        setActiveId(closest.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-100px 0px -66% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    });

    observersRef.current = observer;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      observersRef.current = null;
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
