// client/src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: './assets/tracking.png',
    text: 'Live tracking on your fingertips',
  },
  {
    icon: './assets/economical.png',
    text: 'Economical and safe shifting',
  },
  {
    icon: './assets/customizable.png',
    text: 'Customizable shifting solutions',
  },
  {
    icon: './assets/pan-india.png',
    text: 'Pan India presence',
  },
  {
    icon: './assets/experience.png',
    text: 'Experienced & trained professionals',
  },
  {
    icon: './assets/support-blue.png',
    text: 'Dedicated customer support',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2>Why Choose Porter Packers and Movers?</h2>
      <div className="why-choose-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <img src={feature.icon} alt="icon" />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
