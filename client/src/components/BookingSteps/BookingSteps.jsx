// client/src/components/BookingSteps.jsx
import React from 'react';
import './BookingSteps.css';

const steps = [
  {
    number: 1,
    title: 'Enter your shifting details',
    description: 'Fill pickup, drop & contact information',
  },
  {
    number: 2,
    title: 'Schedule & get quote',
    description: 'Get pricing and schedule your move',
  },
  {
    number: 3,
    title: 'Packing & loading',
    description: 'Professionals pack and load your items',
  },
  {
    number: 4,
    title: 'Delivery & unpacking',
    description: 'Timely delivery and unpacking at drop',
  },
];

const BookingSteps = () => {
  return (
    <section className="booking-steps-section">
      <h2>Book Packers & Movers in 4 Easy Steps</h2>
      <div className="steps-container">
        {steps.map((step, idx) => (
          <div key={idx} className="step-card">
            <div className="step-number">{step.number}</div>
            <div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingSteps;
