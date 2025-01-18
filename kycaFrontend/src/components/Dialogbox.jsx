import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms';
import axios from 'axios';

const Dialogbox = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const user = useRecoilValue(userState)
  const [formData, setFormData] = user.name === "" ? useState({ name: '', message: '' }): useState({name:user.name , message:''});

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(user.name !== "")
    {
      try{
        const response = await axios.post('http://localhost:3000/api/user/postFeedback',{email:user.email, name:formData.name , rating:rating , message:formData.message})
        alert('Feedback submitted! Thank you.');
      }
      catch(e)
      {
        alert('Failed to submit feedback.')
        console.error(e);
      }
    }
    else{
      alert("Please Login to give feedback!")
    }
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData.name)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialogbox;
