import React, { useState } from 'react';
import  Review  from '../models/Reviews';

interface ReviewFormProps {
  createReview: (newReview: Review) => void;
}

export const ReviewForm = ({ createReview }: ReviewFormProps) => {
  const [review, setReview] = useState({
    title: '',
    body: '',
  });

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
        border: '2px solid black',
        width: '400px',
        padding: '18px',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        createReview(review);
        setReview({ title: '', body: '' });
      }}
    >
      <h1>Leave a personal review</h1>
      <label htmlFor="to">Title</label>
      <input
        type="text"
        name="title"
        value={review.title}
        onChange={(e) => {
          setReview({ ...review, title: e.target.value });
        }}
      />
      <label htmlFor="to">Review</label>
      <input
        type="text"
        name="body"
        value={review.body}
        onChange={(e) => {
          setReview({ ...review, body: e.target.value });
        }}
      />
      <button type="submit">Submit Your Review</button>
    </form>
  );
};