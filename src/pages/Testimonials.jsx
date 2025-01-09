import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "The coaching here is phenomenal. I've improved my batting skills tremendously!",
  },
  {
    name: "Jane Smith",
    feedback: "A great place to learn cricket with supportive coaches and excellent facilities.",
  },
  {
    name: "Robert Brown",
    feedback: "The personal attention from the coaches has been invaluable for my growth.",
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <h4 className="mt-4 font-bold text-blue-600">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
