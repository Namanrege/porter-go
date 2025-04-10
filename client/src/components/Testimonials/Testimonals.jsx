// client/src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ravi S.',
    city: 'Mumbai',
    review:
      'Smoothest shifting experience ever! The team was on time and handled everything with care.',
  },
  {
    name: 'Sneha M.',
    city: 'Bangalore',
    review:
      'Affordable, professional and fast! Highly recommended for any local moving.',
  },
  {
    name: 'Amit K.',
    city: 'Delhi',
    review:
      'From packing to unpacking – everything was flawless. Great app and support!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <p>“{t.review}”</p>
            <div className="author">- {t.name}, {t.city}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
