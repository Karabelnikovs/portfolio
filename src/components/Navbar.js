import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition duration-500"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition duration-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition duration-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
