import React from 'react';
import banner1 from "../assets/banner2.jpg";  // Replace with a cricket-related image
import { FaTrophy } from 'react-icons/fa';  // Trophy icon
import { MdSportsCricket } from 'react-icons/md';  // Cricket icon
import { GiBat } from 'react-icons/gi';  // Bat icon

const Banner = () => {
  return (
    <div className='min-h-[500px] flex justify-center py-12 sm:py-0'>
      <div className='container max-w-full bg-black py-8 px-4 sm:px-6 rounded-lg shadow-lg'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
          {/* Image Section */}
          <div data-aos="zoom-in" className='flex justify-center'>
            <img 
              src={banner1} 
              alt="Cricket Academy" 
              className='w-[90%] h-[700px] sm:h-[700px] object-cover shadow-xl rounded-xl' 
            />
          </div>
          {/* Text Section */}
          <div className='flex flex-col justify-center gap-6'>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-green-500">Join Our Cricket Academy</h1>
            <p data-aos="fade-up" className='text-sm sm:text-base text-gray-400 tracking-wide leading-6'>
              Step up your cricket game with expert coaching and training. Whether you're a beginner or a professional, our Cricket Academy offers the best facilities and experienced coaches to help you reach your full potential.
            </p>
            <div className='flex flex-col gap-6'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <MdSportsCricket className="text-4xl h-12 w-12 p-2 rounded-full bg-blue-100"/>
                <p className="text-gray-400 font-medium">Expert Coaching</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <FaTrophy className='text-4xl h-12 w-12 p-2 rounded-full bg-yellow-100'/>
                <p className="text-gray-400 font-medium">Championships</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiBat className='text-4xl h-12 w-12 p-2 rounded-full bg-red-100'/>
                <p className="text-gray-400 font-medium">Top-notch Facilities</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <MdSportsCricket className='text-4xl h-12 w-12 p-2 rounded-full bg-green-100'/>
                <p className="text-gray-400 font-medium">Cricket Tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
