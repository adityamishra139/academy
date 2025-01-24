import Banner from "../components/Banner";
import Socialhandles from "../components/Socialhandles";
import { AnimatedTooltipPreview } from "../components/AnimatedTooltipPreview";
import Hero from "../components/Herosection";
import Programs from "../components/Programs";

function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero></Hero>
      <Banner />
      <Programs></Programs>
      {/* Social Handles Section */}
     
    </div>
  );
}

export default Home;
