import React, { useState } from 'react';
import { MdOutlineSportsCricket } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../atoms';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const resetUser = useResetRecoilState(userState);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  const handleLogout = () => {
    resetUser();
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtExpiry');
    navigate('/');
  };

  const checkTokenOnLoad = () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; 
        return decodedToken.exp > currentTime;
      } catch (error) {
        console.error("Invalid token.");
        return false;
      }
    }
    return false;
  };

  const user = useRecoilValue(userState);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex items-center">
            <MdOutlineSportsCricket className="text-emerald-500 text-3xl" />
            <Link to="/" className="ml-2 text-xl font-bold text-gray-900">
              KYCA
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/testimonial" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Testimonials
            </Link>
            <Link to="/gem" className="text-base font-medium text-gray-500 hover:text-gray-900">
              KYCA Gems
            </Link>
            {user.isAdmin && checkTokenOnLoad() && (
              <Link to="/adminpanel" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Admin Panel
              </Link>
            )}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {user.name === "" && !checkTokenOnLoad() ? (
              <button
                onClick={handleLogin}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MdOutlineSportsCricket className="text-emerald-500 text-3xl" />
                  <Link to="/" className="ml-2 text-xl font-bold text-gray-900">
                    KYCA
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="text-base font-medium text-gray-900">Home</span>
                  </Link>
                  <Link to="/about" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="text-base font-medium text-gray-900">About Us</span>
                  </Link>
                  <Link to="/testimonial" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="text-base font-medium text-gray-900">Testimonials</span>
                  </Link>
                  <Link to="/gem" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="text-base font-medium text-gray-900">KYCA Gems</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              {user.name === "" && !checkTokenOnLoad() ? (
                <button
                  onClick={handleLogin}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;