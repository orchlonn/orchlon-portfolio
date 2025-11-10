"use client";
import Link from "next/link";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useNavbar } from "../hooks/useNavbar";

const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
];

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
  const { activeId, isOpen, handleNavClick, toggleMenu, closeMenu } =
    useNavbar(navItems);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-0">
      <div
        className={`max-w-lg mx-auto bg-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-gray-800/60 text-white border border-gray-700/50 shadow-md transition-all duration-200 ${
          isOpen ? "rounded-t-xl sm:rounded-xl" : "rounded-xl"
        }`}
      >
        <div className="relative flex h-16 items-center px-4 sm:px-0">
          <Link
            href="#about"
            className="sm:hidden text-white font-semibold text-lg tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
              closeMenu();
            }}
          >
            Oscar
          </Link>
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
            <LayoutGroup>
              <div className="flex justify-center space-x-4 relative">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className="relative px-3 py-2 text-center w-24 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {activeId === item.id && (
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
                        activeId === item.id
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
              onClick={toggleMenu}
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
            className="sm:hidden absolute top-16 left-4 right-4 bg-gray-800/95 border border-t-0 border-gray-700/50 shadow-lg z-50 overflow-hidden rounded-b-xl backdrop-blur"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <motion.div key={item.id} variants={mobileMenuItemVariants}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                      closeMenu();
                    }}
                    className={
                      activeId === item.id
                        ? "block px-4 py-2 rounded-md text-base font-medium bg-gray-700 text-white"
                        : "block px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
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
