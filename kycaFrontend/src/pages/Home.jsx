import Banner from "../components/Banner";
import Hero from "../components/Herosection";
import Programs from "../components/Programs";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero></Hero>
      <Banner />
      <Programs></Programs>
      <Testimonial></Testimonial>
      {/* Social Handles Section */}
     
    </div>
  );
}

export default Home;
