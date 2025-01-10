// /src/components/SocialHandles.jsx
import React from "react";
import globe from "../assets/globe.mp4";
import { FloatingDockDemo } from '../components/FloatingDockDemo';


const SocialHandles = () => {
  return (
    <div className="w-full bg-black py-10" data-aos="fade-up" data-aos-duration="1200">
      <div
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 space-y-6 md:space-y-0 md:space-x-8"
        data-aos="fade-left" data-aos-duration="1500"
      >
        {/* Video Container */}
        <div
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] max-w-full"
          data-aos="fade-right" data-aos-duration="1500"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-lg shadow-lg"
          >
            <source src={globe} type="video/mp4" />
          </video>
        </div>

        {/* Text Container */}
        <div 
          className="text-white md:w-1/2 lg:w-1/3 px-4 md:px-0"
          data-aos="fade-up" data-aos-duration="1800"
        >
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            Follow us on social media to stay updated with the latest news, features, and updates. We’d love to hear from you!
          </p>
          </div>
          
          {/* Floating Dock Component */}
          <div className="mt-4">
          <FloatingDockDemo />
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default SocialHandles;
