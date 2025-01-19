import React,{ useEffect, useState } from "react";
import axios from "axios"
import { FloatingDock } from "../components/ui/FloatingDock.jsx";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import WhatsAppIcon from "./ui/whatsappicon.jsx";
function FloatingDockDemo() {
   const [links,setLinks]=useState({});
  useEffect(()=>{  
    const fetchLinks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user/links");
      if(response.data[0]!==null){
        setLinks(response.data[0]);
      } 
      console.log(links);
    } catch (err) {
      console.error(err);
    }
  }
  fetchLinks();
  },[]);
  const websiteLinks = [
    {
      title: "Facebook",
      icon: (
        <FaFacebook className="h-full w-full text-black dark:text-neutral-300 hover:text-blue-500" />
      ),
      href: links.facebook,
    },
    
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-black dark:text-neutral-300 hover:text-pink-500" />
      ),
      href: links.instagram,
    },
    
    {
      title: "WhatsApp",
      icon: (
        <WhatsAppIcon className="h-full w-full text-black dark:text-neutral-300 hover:text-green-500" />
      ),
      href: links.whatsapp, // Your WhatsApp number
    },
    
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex justify-center items-center w-full max-w-4xl mt-10 md:mt-16">
        <FloatingDock mobileClassName="translate-y-20" items={websiteLinks} />
      </div>

      <div className="mt-10 md:mt-16">
        <p className="text-center text-gray-500 dark:text-neutral-400 text-sm md:text-base">
          Connect with us on your favorite platform!
        </p>
      </div>
    </div>
  );
}

export { FloatingDockDemo };
