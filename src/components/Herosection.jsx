import vid from "../assets/4.mp4"; // Replace with a cricket-themed video
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/join");
  };

  return (
    <section className="relative text-white text-center py-20 px-4 overflow-hidden min-h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={vid} type="video/mp4" />
      </video>

      <div className="relative z-10 bg-opacity-50 h-full flex flex-col justify-center items-center">
        {/* Heading */}
        <h1
          data-aos="zoom-out"
          data-aos-once="true"
          data-aos-duration="500"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
        >
          Welcome to Cricket Academy Pro
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="my-4 text-lg md:text-xl lg:text-2xl font-semibold"
        >
          Train with professionals and elevate your cricket game to the next
          level.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleClick}
            className="bg-green-500 text-white py-3 px-6 rounded-full transform transition duration-500 hover:bg-green-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Join Our Academy
          </button>
          <button
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full transform transition duration-500 hover:bg-white hover:text-black hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
