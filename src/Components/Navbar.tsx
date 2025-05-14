const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-4">
            <a
              href="#about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              CV & Resume
            </a>
            <a
              href="#portfolio"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#experience"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
