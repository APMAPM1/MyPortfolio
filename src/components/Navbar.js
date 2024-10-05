import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-2" />
          <span className="text-white text-xl font-bold">Aditi Ajudia</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Right Section: Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 lg:bg-transparent bg-gray-800 lg:p-0 p-5 absolute lg:relative lg:top-0 top-full lg:w-auto w-full left-0 right-0 lg:shadow-none shadow-lg`}
        >
          <Link
            activeClass="border-b-2 border-blue-500"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-white hover:text-blue-400 cursor-pointer lg:mt-0 mt-4 lg:ml-0 ml-0"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-white hover:text-blue-400 cursor-pointer lg:mt-0 mt-4 lg:ml-0 ml-0"
          >
            About Me
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-white hover:text-blue-400 cursor-pointer lg:mt-0 mt-4 lg:ml-0 ml-0"
          >
            Experience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-white hover:text-blue-400 cursor-pointer lg:mt-0 mt-4 lg:ml-0 ml-0"
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-white hover:text-blue-400 cursor-pointer lg:mt-0 mt-4 lg:ml-0 ml-0"
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-white hover:text-blue-400 cursor-pointer lg:mt-0 mt-4 lg:ml-0 ml-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
