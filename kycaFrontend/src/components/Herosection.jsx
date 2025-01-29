import { Link } from "react-router-dom";
import heroImage from "./../assets/HERO.jpg"; // Replace with your image path

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay for better text contrast */}
      <div className="relative z-10 flex items-center h-full px-8">
        <div className="bg-black bg-opacity-60 text-white rounded-xl p-8 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-emerald-400">CricketPro Academy</span>
          </h1>
          <p className="text-lg mb-6">
            Unlock your true potential with expert coaching, state-of-the-art facilities, and personalized training
            programs for every level.
          </p>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="#"
              className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-6 py-3 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
