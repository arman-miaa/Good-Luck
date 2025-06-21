import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import img1 from "../assets/user1.png";
import img2 from "../assets/user2.png";
import img3 from "../assets/user3.png";
import img4 from "../assets/user4.png";
import img5 from "../assets/user5.png";

const reviews = [
  {
    name: "Neha Gupta",
    img: img1,
    rating: 5,
    text: "This app provides deep insights and personalized readings. It has become an essential part of my daily routine.",
  },
  {
    name: "Rahul Singh",
    img: img2,
    rating: 4,
    text: "I enjoy using this app for accurate predictions and guidance. It keeps me motivated throughout the day.",
  },
  {
    name: "Priya Sharma",
    img: img3,
    rating: 5,
    text: "This app is like my daily guide. The horoscopes are spot on, and the detailed birth chart analysis has helped me understand myself better.",
  },
  {
    name: "Vivek Roy",
    img: img4,
    rating: 5,
    text: "A well-designed app with detailed readings. It's user-friendly and insightful for astrology enthusiasts.",
  },
  {
    name: "Anjali Sen",
    img: img5,
    rating: 5,
    text: "The app offers precise predictions and valuable spiritual insights. A must-have for those into astrology.",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(2); // center image

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div id="review" className="text-center py-16 px-4">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

      {/* Image Row with arrows */}
      <div className="relative flex justify-center items-center my-6">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-12 w-9 h-9 rounded-full bg-[#fe8064] text-white flex items-center justify-center shadow-md"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Review Images */}
        <div className="flex items-center space-x-4">
          {reviews.map((review, index) => (
            <img
              key={index}
              src={review.img}
              alt={review.name}
              className={`w-16 h-16 object-cover rounded-full border-4 transition-all duration-300 ${
                index === current
                  ? "border-[#fe8064] shadow-xl scale-110"
                  : "opacity-60 border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 md:-right-12 w-9 h-9 rounded-full bg-[#fe8064] text-white flex items-center justify-center shadow-md"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Review Info */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-[#fe8064]">
          {reviews[current].name}
        </h3>
        <div className="flex justify-center mt-1 mb-2">
          {[...Array(reviews[current].rating)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        <p className="text-sm italic text-gray-600 max-w-xl mx-auto">
          “{reviews[current].text}”
        </p>
      </div>
    </div>
  );
};

export default Review;
