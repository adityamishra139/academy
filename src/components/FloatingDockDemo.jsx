import React from "react";
import { FloatingDock } from "../components/ui/FloatingDock.jsx";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"; // Import social media icons

function FloatingDockDemo() {
  const links = [
    { title: "Facebook", icon: <FaFacebook className="h-full w-full text-black dark:text-neutral-300 hover:text-green-500" />, href: "https://facebook.com" },
    { title: "Twitter", icon: <FaTwitter className="h-full w-full text-black dark:text-neutral-300 hover:text-green-500" />, href: "https://twitter.com" },
    { title: "Instagram", icon: <FaInstagram className="h-full w-full text-black dark:text-neutral-300 hover:text-green-500" />, href: "https://instagram.com" },
    { title: "LinkedIn", icon: <FaLinkedin className="h-full w-full text-black dark:text-neutral-300 hover:text-green-500" />, href: "https://linkedin.com" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Floating Dock Container */}
      <div className="flex justify-center items-center w-full max-w-4xl mt-10 md:mt-16">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>

      {/* Additional Spacing to Prevent Collision */}
      <div className="mt-10 md:mt-16">
        <p className="text-center text-gray-500 dark:text-neutral-400 text-sm md:text-base">
          Connect with us on your favorite platform!
        </p>
      </div>
    </div>
  );
}

// Named export
export { FloatingDockDemo };
