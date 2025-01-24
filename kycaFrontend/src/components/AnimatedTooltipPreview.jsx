"use client";
import React,{useState,useEffect} from "react";
import axios from "axios";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";


export function AnimatedTooltipPreview() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/coach");
        setCoaches(response.data); 
      } catch (error) {
        console.error("Error fetching coach:", error);
      }
    };

    fetchCoaches();
  }, []);
  return (
    <div className="flex flex-col bg-gray-200 items-center justify-center p-6 bg-  shadow-md ">
      <h2 className="text-4xl font-bold text-green-600 mb-16  " data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100">Our Coaches</h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={coaches} />
      </div>
    </div>
  );
}