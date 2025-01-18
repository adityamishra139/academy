import React, { useEffect, useState } from "react";
import axios from "axios";

const Gem = () => {
  const [gems, setGems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/gems");
        setGems(response.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gems:", error);
        setLoading(false); 
      }
    };

    fetchGems();
  }, []);

  return (
    <div className="bg-black text-green-500 min-h-screen">
      {/* Gems Section */}
      <section className="py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
            KYCA Gems at the Representative Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {loading ? (
              <p className="text-center text-gray-300">Loading gems...</p>
            ) : (
              gems.map((gem, index) => (
                <div key={index} className="flex flex-col items-center gap-6" data-aos="fade-up" data-aos-duration="1000">
                  <div className="text-center">
                    <img
                      src={`http://localhost:3000${gem.img}`}
                      alt={`Gem ${gem.name}`}
                      className="w-32 h-32 rounded-full shadow-lg mx-auto"
                    />
                    <h3 className="text-2xl font-bold mt-4">{gem.name}</h3>
                    <p className="mt-2 text-lg text-gray-300">{gem.team}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gem;
