"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { getTheme, setTheme, subscribeToTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Shows the theme it switches to: a moon in light, a sun in dark. CSS picks
 * the icon from data-theme, so the right one paints before hydration; React
 * only needs the theme for aria-pressed.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => null);
  const dark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Dark theme"
      aria-pressed={theme ? dark : undefined}
      onClick={() => setTheme(dark ? "light" : "dark")}
      // Padding for a 32px target; the negative margin keeps it out of the layout.
      className={cn(
        "-m-2 inline-flex p-2 text-muted transition-colors duration-200 hover:text-ink",
        className,
      )}
    >
      <Moon aria-hidden="true" strokeWidth={1.5} className="size-4 dark:hidden" />
      <Sun aria-hidden="true" strokeWidth={1.5} className="hidden size-4 dark:block" />
    </button>
  );
}
