    import React from 'react';
    import { MdOutlineSportsCricket } from "react-icons/md"
    const Navbar = () => {
    return (
        <nav className="bg-black text-white shadow-md py-1">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            
            <div className="flex items-center space-x-2">
            <MdOutlineSportsCricket className="text-2xl text-green-500" />
            <span className="text-xl font-bold text-green-500">KYCA</span>
            </div>

            
            <ul className="flex space-x-6 text-sm font-medium">
            <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer  ">Home</li>
            <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Matches</li>
            <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Players</li>
            <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">About Us</li>
            <li className="text-1xl hover:text-green-500 hover:scale-110 transition duration-200 cursor-pointer">Contact</li>
            </ul>

        
            <button className="bg-green-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white hover:scale-95 transition duration-200">
            Get Started
            </button>
        </div>
        </nav>
    );
    };

    export default Navbar