"use client";

import { useEffect, useId, useRef, useState } from "react";

import { NAV, SOCIALS } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeId: string;
}

export function MobileNav({ activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close() : setOpen(true))}
        className="type-label py-2 text-muted transition-colors duration-200 hover:text-ink"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-bg px-5 pt-2 pb-10"
        >
          <nav aria-label="Mobile">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.id} className="border-t border-line">
                  <a
                    href={`#${item.id}`}
                    onClick={close}
                    aria-current={activeId === item.id ? "true" : undefined}
                    className={cn(
                      "flex items-baseline gap-4 py-5 text-2xl tracking-[-0.025em] transition-colors",
                      activeId === item.id ? "text-ink" : "text-muted",
                    )}
                  >
                    <span className="type-label text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="type-meta text-muted transition-colors hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
