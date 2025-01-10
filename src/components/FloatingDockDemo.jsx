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
    <div className="flex mt-16 justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}

// Named export
export { FloatingDockDemo };
