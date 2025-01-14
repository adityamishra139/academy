import React from 'react';
import { MdOutlineSportsCricket } from "react-icons/md";
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0">
          
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <MdOutlineSportsCricket className="text-3xl text-green-500" />
            <span className="text-2xl font-bold text-green-500">KYCA</span>
          </div>

          {/* Links */}
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link to="/" className="hover:text-green-400">Home</Link>
            </li>
            {/* <li>
              <Link to="/services" className="hover:text-green-400">Services</Link>
            </li> */}
            <li>
              <Link to="/about" className="hover:text-green-400">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400">Contact</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-green-500 hover:text-green-600 text-xl transition duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600 text-xl transition duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600 text-xl transition duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600 text-xl transition duration-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4 justify-center">
            <a href="#"  className="hidden md:block bg-green-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white hover:scale-95 transition duration-200">
              Enquiry
            </a>
          </div>
        </div>

        {/* Footer Bottom with Inquiry Button */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center flex flex-col md:flex-row items-center justify-center md:justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} KYCA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
