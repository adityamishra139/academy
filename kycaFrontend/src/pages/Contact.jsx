import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post("http://localhost:3000/api/inquiries", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.enquiry,
      });

      if (response.status === 201) {
        setResponseMessage("Your enquiry was submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiry: "",
        });
      }
    } catch (error) {
      console.error("Error submitting the enquiry:", error);
      setResponseMessage("There was an error submitting your enquiry. Please try again.");
    }
  };

  return (
    <div className="bg-black text-green-500 min-h-screen">
      {/* Contact Us Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions about
            enrolling in our programs, becoming a coach, or anything else, feel
            free to reach out to us using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-green-500">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-black p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 px-4 py-3 bg-gray-700 text-white rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 px-4 py-3 bg-gray-700 text-white rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="mt-2 px-4 py-3 bg-gray-700 text-white rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="enquiry" className="text-gray-300">
                  Enquiry
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.enquiry}
                  onChange={handleChange}
                  required
                  className="mt-2 px-4 py-3 bg-gray-700 text-white rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
              >
                Enquire
              </button>
            </form>
            {responseMessage && (
              <p className="text-center text-lg mt-4">{responseMessage}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
