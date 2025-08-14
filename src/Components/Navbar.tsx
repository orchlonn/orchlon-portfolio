"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "/" },
  { label: "CV & Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

const getInitialSection = (path: string) => {
  switch (path) {
    case "/":
      return 0;
    case "/resume":
      return 1;
    case "/projects":
      return 2;
    case "/experience":
      return 3;
    default:
      return 0;
  }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.06,
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { when: "afterChildren", duration: 0.15 },
  },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.15 } },
};

const Navbar = () => {
  const pathname = usePathname();
  const [section, setSection] = useState(getInitialSection(pathname));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSection(getInitialSection(pathname));
  }, [pathname]);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          <Link
            href="/"
            className="sm:hidden text-white font-semibold text-lg tracking-tight"
          >
            Oscar
          </Link>
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
            <LayoutGroup>
              <div className="flex justify-center space-x-4 relative">
                {navItems.map((item, idx) => (
                  <Link
                    href={item.href}
                    key={idx}
                    onClick={() => setSection(idx)}
                    className="relative px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {section === idx && (
                      <motion.span
                        layoutId="navHighlight"
                        className="absolute inset-0 bg-gray-700 rounded-md"
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        }}
                      />
                    )}
                    <span
                      className={
                        section === idx
                          ? "relative text-white"
                          : "relative text-gray-400 hover:text-white"
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </LayoutGroup>
          </div>

          <div className="flex sm:hidden ml-auto justify-end">
            <motion.button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="sm:hidden absolute top-16 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg z-50 overflow-hidden"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item, idx) => (
                <motion.div key={item.href} variants={mobileMenuItemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setSection(idx)}
                    className={
                      section === idx
                        ? "block px-3 py-2 rounded-md text-base font-medium bg-gray-700 text-white"
                        : "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    }
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
