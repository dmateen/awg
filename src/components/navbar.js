import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent border-none z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <span className="bg-black text-white px-2 py-1">A</span>
          <span className="bg-black text-white px-2 py-1 ml-1">W</span>
          <span className="bg-black text-white px-2 py-1 ml-1">G</span>
          <span className="text-black ml-2">- Abdul Waheed Group</span>
        </div>

        {/* Hamburger Menu Icon (visible on small devices) */}
        <div className="block md:hidden hidden">
          <button>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (hidden on small devices) */}
        <ul className="hidden md:flex space-x-6">
          {/* <li>
            <a
              href="#"
              className="text-black hover:text-gray-800 hover:underline transition-all duration-300 ease-in-out"
            >
              Home
            </a>
          </li> */}
          <li>
            <a
              href="#about"
              className="text-black hover:text-gray-800 hover:underline transition-all duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-black hover:text-gray-800 hover:underline transition-all duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-gray-800 hover:underline transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
