"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";

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

const Navbar = () => {
  const pathname = usePathname();
  const [section, setSection] = useState(getInitialSection(pathname));

  useEffect(() => {
    setSection(getInitialSection(pathname));
  }, [pathname]);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <LayoutGroup>
            <div className="flex space-x-4 relative">
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
      </div>
    </nav>
  );
};

export default Navbar;
