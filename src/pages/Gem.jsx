import React from "react";
import Testimonial from "../components/Testimonial";


const Gem = () => {
  return (
    <div className="bg-black text-green-500 min-h-screen">
      {/* Gems Section */}
      <section className="py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide">KYCA Gems at the Representative Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[  
              { name: "SHARATH SRINIVAS", team: "Karnataka Ranji", img: "path_to_image1.jpg" },
              { name: "AJAY KRISHNA", team: "U-23 Kerala, net bowler for Chennai Super Kings", img: "path_to_image2.jpg" },
              { name: "ADITIYA NAIR", team: "U-19 Karnataka", img: "path_to_image3.jpg" },
              { name: "VISHAL ONAT", team: "U-19 Karnataka", img: "path_to_image4.jpg" },
              { name: "MOHSIN KHAN", team: "U-19 Karnataka", img: "path_to_image5.jpg" },
              { name: "PRAJWAL PAVAN", team: "U-19 Karnataka", img: "path_to_image6.jpg" },
              { name: "SOUMYA VERMA", team: "U-19 India Challengers", img: "path_to_image7.jpg" },
              { name: "DHANUSH GOWDA", team: "U-19 India Challengers", img: "path_to_image8.jpg" },
              { name: "VARUN NAYANAR", team: "U-19 India Challengers", img: "path_to_image9.jpg" },
              { name: "ANMOL MATHUR", team: "U-19 Punjab", img: "path_to_image10.jpg" },
              { name: "RIYA BASHEER", team: "U-19 Kerala", img: "path_to_image11.jpg" },
              { name: "AASHISH MAHESH", team: "U-16 Karnataka", img: "path_to_image12.jpg" },
              { name: "ARYAHI", team: "U-16 Karnataka", img: "path_to_image13.jpg" },
              { name: "ADHESH", team: "U-14 Karnataka", img: "path_to_image14.jpg" }
            ].map((gem, index) => (
              <div key={index} className="flex flex-col items-center gap-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="text-center">
                  <img src={gem.img} alt={`Gem ${gem.name}`} className="w-32 h-32 rounded-full shadow-lg mx-auto"/>
                  <h3 className="text-2xl font-bold mt-4">{gem.name}</h3>
                  <p className="mt-2 text-lg text-gray-300">{gem.team}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Testimonial></Testimonial> */}
    </div>
  );
};

export default Gem;
