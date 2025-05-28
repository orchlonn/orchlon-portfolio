"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <div className="flex space-x-4">
            <Link
              href="./"
              onClick={() => setSection(0)}
              className={`${
                section === 0 ? "bg-gray-700 text-white" : "text-gray-400"
              } hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
            >
              About
            </Link>
            <Link
              href="/resume"
              onClick={() => setSection(1)}
              className={`${
                section === 1 ? "bg-gray-700 text-white" : "text-gray-400"
              } hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
            >
              CV & Resume
            </Link>
            <Link
              href="/projects"
              onClick={() => setSection(2)}
              className={`${
                section === 2 ? "bg-gray-700 text-white" : "text-gray-400"
              } hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
            >
              Projects
            </Link>
            <Link
              onClick={() => setSection(3)}
              href="/experience"
              className={`${
                section === 3 ? "bg-gray-700 text-white" : "text-gray-400"
              } hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
