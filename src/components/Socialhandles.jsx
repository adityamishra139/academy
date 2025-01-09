import React from "react";
import globe from "../assets/globe.mp4";

const Socialhandles = () => {
  return (
    <div className="w-full bg-black py-10">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 space-y-6 md:space-y-0 md:space-x-8">
        {/* Video Container */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] max-w-full">
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
        <div className="text-white md:w-1/2 lg:w-1/3 px-4 md:px-0">
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            Follow us on social media to stay updated with the latest news,
            features, and updates. We’d love to hear from you!
          </p>
          {/* aceturnity ui here */}
        </div>
      </div>
    </div>
  );
};

export default Socialhandles;
