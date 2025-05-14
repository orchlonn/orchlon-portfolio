import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="flex space-x-4">
            <Link
              href="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/resume"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              CV & Resume
            </Link>
            <Link
              href="/projects"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
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
