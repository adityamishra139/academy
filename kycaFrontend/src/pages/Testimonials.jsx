import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import axios from "axios"; // Assuming you're using Axios to fetch data

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedback data from backend
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/getFeedback");
        console.log(response.data)
        setFeedbacks(response.data.feedback);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true, // Animation occurs once on scroll
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-8">User Feedback</h2>
      {feedbacks.length > 0 ? (
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <motion.div
              key={feedback.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up" // AOS scroll animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-lg font-semibold text-gray-800">{feedback.name}</div>
                <div className="ml-4 text-sm text-yellow-500">
                  {Array.from({ length: feedback.rating }).map((_, index) => (
                    <span key={index} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{feedback.message}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No testimonials available.</p>
      )}
    </div>
  );
};

export default Testimonial;
