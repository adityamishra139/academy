import React, { useState } from 'react';
import { MdOutlineSportsCricket } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToBanner }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md py-1">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <MdOutlineSportsCricket className="text-2xl text-green-500" />
          <Link to="/" className="text-xl font-bold text-green-500 no-underline">
            KYCA
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/" className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer no-underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer no-underline">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/gem" className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer no-underline">
              KYCA Gems
            </Link>
          </li>
          <li>
            <Link to="/adminpanel" className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer no-underline">
              Admin Panel
            </Link>
          </li>
          {/* Add other links similarly */}
        </ul>

        {/* Get Started Button (Keep as a regular button if it's an in-page action) */}
        <button
          onClick={scrollToBanner}
          className="hidden md:block bg-green-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white hover:scale-95 transition duration-200"
        >
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-green-500 transition duration-200 cursor-pointer no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500 transition duration-200 cursor-pointer no-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-green-500 transition duration-200 cursor-pointer no-underline">
                Testimonials
              </Link>
            </li>
            {/* Add other links similarly */}
          </ul>
          <button
            onClick={scrollToBanner}
            className="mt-4 bg-green-500 text-black w-full py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white transition duration-200"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;