import React from 'react';
import banner1 from "../assets/banner2.jpg";
import { FaTrophy } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { GiBat } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className="relative flex justify-center items-center min-h-[600px] bg-gradient-to-r from-purple-900 via-black to-gray-900 text-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={banner1}
          alt="Cricket Academy"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* Text Section */}
    <div
      data-aos="fade-right"
      className="space-y-6 md:order-2" // Move this to the second column on medium screens and above
    >
      <h1 className="text-4xl text-center sm:text-5xl font-extrabold text-green-400 leading-tight">
        Join Our Cricket Academy
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
        Step up your cricket game with expert coaching and state-of-the-art
        facilities. Whether you're a beginner or a professional, our academy
        is designed to help you reach your full potential.
      </p>
      <div className="space-y-4">
        {[
          {
            Icon: MdSportsCricket,
            text: "Expert Coaching",
            bgColor: "bg-blue-500",
          },
          {
            Icon: FaTrophy,
            text: "Championships",
            bgColor: "bg-yellow-500",
          },
          {
            Icon: GiBat,
            text: "Top-notch Facilities",
            bgColor: "bg-red-500",
          },
          {
            Icon: MdSportsCricket,
            text: "Cricket Tournaments",
            bgColor: "bg-green-500",
          },
        ].map(({ Icon, text, bgColor }, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className={`text-white p-3 rounded-full shadow-md ${bgColor}`}
            >
              <Icon className="text-2xl" />
            </div>
            <p className="text-lg font-medium">{text}</p>
          </div>
        ))}
      </div>
    </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="hidden sm:block rounded-lg shadow-lg overflow-hidden"
          >
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
