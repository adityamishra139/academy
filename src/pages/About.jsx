import React from "react";
import coach1 from "../assets/coach1.png";
import coach2 from "../assets/coach2.png";
import coach3 from "../assets/coach3.png";
import coach4 from "../assets/coach4.png";
import activity1 from "../assets/activity1.jpg";
import activity2 from "../assets/activity2.jpg";
import founder from "../assets/founder.jpg";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

AOS.init(); // Initialize AOS

function About() {
  return (
    <div className="bg-black text-green-500 min-h-screen">
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide">About Cricket Academy</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Karnataka Youth Cricket Academy was started on 23 December 2010 with the specific aim of focusing on the deliverance of top-quality,
            high-performance coaching in a professional manner with an eye on getting the best out of kids with fire, passion, ability, and the desire to make it big.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-green-500">Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={founder} alt="Founder" className="w-40 h-40 rounded-full shadow-lg mx-auto" />
            <div>
              <h3 className="text-2xl font-bold">Dr. Arjun Rao</h3>
              <p className="text-lg text-gray-300">
                Dr. Arjun Rao is the visionary behind Karnataka Youth Cricket Academy. With a deep passion for cricket and years of experience in sports management, 
                he started this academy to nurture young talent and make a lasting impact on cricket in the region.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                His vision is to provide a comprehensive environment that focuses not only on physical training but also on the mental well-being and overall development of young cricketers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">Meet Our Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {[coach1, coach2, coach3, coach4].map((coach, index) => (
              <div className="flex items-center gap-6" key={index}>
                <img src={coach} alt={`Coach ${index + 1}`} className="w-40 h-40 rounded-full shadow-lg transition-transform transform hover:scale-105" />
                <div>
                  <h3 className="text-2xl font-bold">
                    {["John Smith", "Jane Doe", "Robert Brown", "Emily Green"][index]}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {["Head Coach", "Batting Coach", "Bowling Coach", "Fielding Coach"][index]}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    {[
                      "With over 15 years of experience, John specializes in developing all-round skills in players and has mentored numerous national and international cricketers.",
                      "Jane is an expert batting coach with a proven track record of elevating players' techniques and enabling them to perform under pressure.",
                      "Robert's expertise in bowling strategies and techniques has helped players enhance their skills, making him a sought-after coach for budding bowlers.",
                      "Emily is renowned for her innovative drills and techniques that improve agility and fielding accuracy, crucial for modern cricket.",
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visited Coaches Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-green-500">Visited Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[coach1, coach2, coach3, coach4].map((coach, index) => (
              <div key={index} className="text-center">
                <img src={coach} alt={`Visited Coach ${index + 1}`} className="w-32 h-32 rounded-full shadow-md mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-green-500">
                  {["Coach A", "Coach B", "Coach C", "Coach D"][index]}
                </h3>
                <p className="text-sm text-gray-400">
                  {`Renowned for ${["leadership training", "batting drills", "pace strategies", "sharp fielding"][index]}.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">Activities</h2>
          <div className="flex flex-col gap-12">
            {[activity1, activity2].map((activity, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-6`}>
                <img src={activity} alt={`Activity ${index + 1}`} className="w-3/4 md:w-1/3 rounded-lg shadow-lg" />
                <div className="text-lg text-gray-300 md:w-1/2">
                  <p>
                    {[
                      "Personal one-on-one training sessions for budding cricketers, leveraging state-of-the-art technology such as Pitch Vision, StanceBeam, and bowling machines.",
                      "Regular domestic and international tours to provide exposure to trainees, ensuring they experience diverse playing conditions and cultures.",
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-green-500">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Pitches", description: "Matting, Astroturf, and turf pitches so that the kids are exposed to different kinds of playing surfaces early on." },
              { title: "Fitness Centre", description: "A newly constructed fitness centre with qualified professionals at hand to advocate the right methods of training, including Radha Krishnaswamy, the former fitness trainer of the India Women senior national team." },
              { title: "Hostel and Transportation", description: "Comfortable hostel accommodations and reliable transportation for a hassle-free experience." },
              { title: "Floodlit Facility", description: "Floodlit facility to ensure ease of practice without having to worry about constraints of time." },
              { title: "Technique Analysis", description: "Technique analysis from our array of coaches well-versed in the use of technology." },
            ].map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-lg text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
