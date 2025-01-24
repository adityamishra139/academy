import { motion } from "framer-motion";
import HeroSection from "../components/Herosection";
import Banner from "../components/Banner";
import Socialhandles from "../components/Socialhandles";
import { AnimatedTooltipPreview } from "../components/AnimatedTooltipPreview";

function Home() {
  return (
    <div className="bg-gray-200">
      {/* Hero Section */}
      <HeroSection />
      <Banner />
      {/* Social Handles Section */}
      <Socialhandles />
      <AnimatedTooltipPreview></AnimatedTooltipPreview>
     
    </div>
  );
}

export default Home;
