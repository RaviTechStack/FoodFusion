import React, { useState } from "react";
import { useFoodListContext } from "../Context/FoodListContext";


const Review = ({foodId}) => {
    const {postReview} = useFoodListContext()

  const [hoverRating, setHoverRating] = useState(0); // To track the hover state
  const [selectedRating, setSelectedRating] = useState(0); // To track the selected rating
  const [comment, setComment] = useState(""); // To track the comment

  const handleMouseOver = (value) => {
    setHoverRating(value); // Highlight stars on hover
  };

  const handleMouseOut = () => {
    setHoverRating(0); // Reset hover state when mouse leaves
  };

  const handleClick = (value) => {
    setSelectedRating(value); // Fix the selected rating
  };

  const handleSubmit = () => {
    if (selectedRating && comment) {
        postReview(selectedRating, comment, foodId)
    } else {
      alert("Please select a rating and write a comment.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 text-3xl mb-4">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`cursor-pointer ${
              value <= (hoverRating || selectedRating)
                ? "text-yellow-500"
                : "text-gray-400"
            }`}
            onMouseOver={() => handleMouseOver(value)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(value)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Review;