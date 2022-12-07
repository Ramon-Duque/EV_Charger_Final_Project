import React from 'react';
import  Review  from '../models/Reviews';

interface ReviewProps {
  review: Review;
}

export const ReviewComponent = ({ review }: ReviewProps) => {
  return (
    <div>
      <h2>Review</h2>
      <p>{review.title}</p>
      <p>{review.body}</p>
    </div>
  );
};