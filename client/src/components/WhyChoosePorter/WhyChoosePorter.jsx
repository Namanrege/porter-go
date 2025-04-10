// client/src/components/WhyChoosePorter.jsx
import React from 'react';
import './WhyChoosePorter.css';

const reasons = [
  'Verified & Trained Partners',
  'Live order tracking',
  'Professional packing & unpacking',
  'On-time doorstep delivery',
  'Dedicated move manager support',
];

const WhyChoosePorter = () => {
  return (
    <section className="why-choose-section">
      <div className="why-left">
        <h2>Why Choose Porter Packers & Movers?</h2>
        <ul>
          {reasons.map((reason, idx) => (
            <li key={idx}>✅ {reason}</li>
          ))}
        </ul>
      </div>
      <div className="why-right">
        <img
          src="https://images.ctfassets.net/5n5pu5mmu2zj/2DNkJEMKqMdAFYMZwTDwVU/46caa4041093be70506eeb961a74351b/porterservice.webp"
          alt="Porter Service"
        />
      </div>
    </section>
  );
};

export default WhyChoosePorter;
