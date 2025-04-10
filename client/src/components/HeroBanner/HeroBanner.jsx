// client/src/components/HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-section"
        style={{
    backgroundImage: "url('/assets/packers.JPG')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Top Packers and Movers in India</h1>
          <p>Porter Packers and Movers manage your house shifting from packing to stacking, starting at ₹1200.</p>
        </div>

        <div className="quote-box">
        
          <div className="form-row">
            <input type="text" placeholder="Pickup Location*" />
            <input type="text" placeholder="Drop Location*" />
            <input type="text" placeholder="Phone Number*" />
            <input type="text" placeholder="Shifting Date*" />
            <button>Check Price</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
