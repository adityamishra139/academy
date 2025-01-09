import vid from "../assets/4.mp4"; // Replace with a cricket-themed video
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/join");
  };

  return (
    <section className="relative text-white text-center min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 bg-black bg-opacity-50 p-4 md:p-8 rounded-lg w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1
          data-aos="zoom-out"
          data-aos-once="true"
          data-aos-duration="500"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
        >
          Welcome to KYCA Cricket Academy
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 px-4 sm:px-8 leading-relaxed"
        >
          Train with professionals and elevate your cricket game to the next
          level.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-6">
          <button
            onClick={handleClick}
            className="bg-green-500 text-white py-3 px-6 w-full sm:w-auto rounded-full transform transition duration-500 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Join Our Academy
          </button>
          <button
            className="bg-transparent border-2 border-white text-white py-3 px-6 w-full sm:w-auto rounded-full transform transition duration-500 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={() => navigate("/schedule")}
          >
            View Fixtures
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
