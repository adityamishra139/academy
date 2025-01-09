import React, { useState } from 'react';
import { MdOutlineSportsCricket } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu toggle

const Navbar = ({ scrollToBanner }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md py-1">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <MdOutlineSportsCricket className="text-2xl text-green-500" />
          <span className="text-xl font-bold text-green-500">KYCA</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Home</li>
          <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Matches</li>
          <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Players</li>
          <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">About Us</li>
          <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Contact</li>
        </ul>

        {/* Get Started Button */}
        <button 
          onClick={scrollToBanner} 
          className="hidden md:block bg-green-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white hover:scale-95 transition duration-200">
          Get Started
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
            <li className="hover:text-green-500 transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-green-500 transition duration-200 cursor-pointer">Matches</li>
            <li className="hover:text-green-500 transition duration-200 cursor-pointer">Players</li>
            <li className="hover:text-green-500 transition duration-200 cursor-pointer">About Us</li>
            <li className="hover:text-green-500 transition duration-200 cursor-pointer">Contact</li>
          </ul>
          <button 
            onClick={scrollToBanner} 
            className="mt-4 bg-green-500 text-black w-full py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white transition duration-200">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
