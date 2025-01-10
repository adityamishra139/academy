import React from "react";
import globe from "../assets/globe.mp4";
import { FloatingDockDemo } from "../components/FloatingDockDemo";

const SocialHandles = () => {
  return (
    <div className="relative w-full bg-black py-10" data-aos="fade-up" data-aos-duration="1200">
      {/* Video Container */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={globe} type="video/mp4" />
        </video>

        {/* Overlay: Text and Floating Dock */}
        <div
          className="absolute top-52 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-6"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h2 className="text-2xl md:text-4xl text-green-500 font-semibold mb-4">Connect With Us</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl">
            Follow us on social media to stay updated with the latest news, features, and updates. We’d love to hear from you!
          </p>

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
