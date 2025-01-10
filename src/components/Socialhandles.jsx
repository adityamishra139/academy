import React from "react";
import globe from "../assets/globe.mp4";
import { FloatingDockDemo } from "../components/FloatingDockDemo";

const SocialHandles = () => {
  return (
    <div className="relative w-full bg-black py-10" data-aos="fade-up" data-aos-duration="1200">
      {/* Video Container */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 sm:px-8 md:px-10"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-semibold mb-4">
            Connect With Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl">
            Follow us on social media to stay updated with the latest news, features, and updates. We’d love to hear from you!
          </p>

          {/* Floating Dock Component with Spacing */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHandles;
