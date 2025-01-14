import React from "react";
import globe from "../assets/globe.mp4";
import { FloatingDockDemo } from "../components/FloatingDockDemo";

const SocialHandles = () => {
  return (
    <div
      className="relative w-full bg-black py-12 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {/* Video Background */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={globe} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-10"></div>

        {/* Text and Floating Dock Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight mb-4">
            <span className="text-green-400">Follow</span> KYCA Cricket Academy
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-300 max-w-2xl leading-relaxed mb-6">
            Stay connected and join the conversation. Follow us for the latest updates, tips, and community stories from our cricket academy.
          </p>

          {/* Floating Dock */}
          <div className="mt-6 sm:mt-8">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHandles;
