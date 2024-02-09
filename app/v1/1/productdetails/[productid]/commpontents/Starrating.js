"use client"
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios';
import { BASE_URL } from '@/Constants';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useDispatch } from 'react-redux';
import { addreview } from '@/app/redux/remainingSlices/Reviews';

const StarRating = ({props, cancel}) => {
  const dispatch = useDispatch();
  const productId = props;
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');


  const createreveiw = useMutation({
    mutationFn: (data) => {
      return axios.post(`${BASE_URL}/api/v1/Reviews/createreview`, data)
    },
  })


  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    (
      async () => {
      const ansss = await createreveiw.mutateAsync({rating: rating, review: review, productId: productId });
     if(ansss.data.success) {
      Toastify({
        text: "Review Added Successfully", duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: "green", },
      }).showToast();
      cancel();
      dispatch(addreview(ansss.data.data))
     }
     else {
      Toastify({
        text: "Error   All fields are required", duration: 3000, close: true, gravity: "top", position: "left", stopOnFocus: true, style: { background: "red", },
      }).showToast();
     }
      }
    )()
   
  };

  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Product Rating</h2>
      <form>
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            key={value}
            className={`inline-block cursor-pointer star ${
              value <= rating ? 'text-yellow-500' : 'text-gray-400'
            }`}
          >
            <input
              type="radio"
              name="rating"
              value={value}
              onChange={() => handleRatingChange(value)}
              className="hidden"
            />
            <span className="text-2xl">★</span>
          </label>
        ))}
      </form>
      {rating && <p className="mt-4">You rated the product {rating} stars.</p>}

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Write a Review</h3>
        <form>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your review..."
            value={review}
            onChange={handleReviewChange}
            className="border p-2 w-full"
          />
          <button
            onClick={handleSubmitReview}
            className=" bg-blue-500 text-white p-2 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>

    </div>
  );
};

export default StarRating;
