import { motion } from "framer-motion";
import HeroSection from "../components/Herosection";
import Banner from "../components/Banner";
import Socialhandles from "../components/Socialhandles";

function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <HeroSection />
      <Banner />
      {/* Social Handles Section */}
      <Socialhandles />
     
    </div>
  );
}

export default Home;
