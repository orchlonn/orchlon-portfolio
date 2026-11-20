/* Dark mode. <html data-theme> holds the theme in force; the colour tokens in
   globals.css follow it through color-scheme. A choice is saved only while it
   differs from the system setting, so choosing the system's theme again goes
   back to following the system. */

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const SYSTEM_DARK = "(prefers-color-scheme: dark)";

/**
 * Inlined in <head> so the attribute is set before first paint and the page
 * never flashes the wrong theme. It also tracks the system setting and other
 * tabs for the life of the page.
 */
export const themeScript = `(() => {
  const root = document.documentElement;
  const system = matchMedia("${SYSTEM_DARK}");
  const apply = () => {
    let saved = null;
    try { saved = localStorage.getItem("${STORAGE_KEY}"); } catch {}
    root.dataset.theme = saved === "light" || saved === "dark" ? saved : system.matches ? "dark" : "light";
  };
  apply();
  system.addEventListener("change", apply);
  addEventListener("storage", (event) => {
    if (event.key === null || event.key === "${STORAGE_KEY}") apply();
  });
})();`;

export function getTheme(): Theme | null {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : null;
}

/** Calls `onChange` whenever the theme changes, by any route. */
export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function setTheme(theme: Theme) {
  const system: Theme = matchMedia(SYSTEM_DARK).matches ? "dark" : "light";
  try {
    if (theme === system) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage is blocked: the switch still holds until the page is left.
  }

  const swap = () => withoutTransitions(() => {
    document.documentElement.dataset.theme = theme;
  });

  // A short crossfade where the browser has one, a cut under reduced motion.
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("startViewTransition" in document)) swap();
  else document.startViewTransition(swap);
}

/* Links and rules that ease their colour on hover would otherwise fade on
   their own 200ms clock while the rest of the page switched at once. */
function withoutTransitions(change: () => void) {
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.append(style);
  change();
  // Flush styles with transitions off, so restoring them starts none.
  window.getComputedStyle(document.body).getPropertyValue("color");
  requestAnimationFrame(() => style.remove());
}
