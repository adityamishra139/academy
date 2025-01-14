import React, { useState } from 'react';
import { MdOutlineSportsCricket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Dialogbox from './Dialogbox'; // Import Dialogbox

const Footer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <MdOutlineSportsCricket className="text-3xl text-green-500" />
              <span className="text-2xl font-bold text-green-500">KYCA</span>
            </div>
            <ul className="flex space-x-8 text-lg">
              <li>
                <Link to="/" className="hover:text-green-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400">Contact</Link>
              </li>
            </ul>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-500 hover:text-green-600 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-green-500 hover:text-green-600 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-green-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white transition duration-200"
              >
                Your Feedback
              </button>
            </div>
          </div>
        </div>
      </footer>
      {isDialogOpen && <Dialogbox onClose={() => setIsDialogOpen(false)} />}
    </>
  );
};

export default Footer;
