// client/src/components/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-text">
          <h2>House shifting with the best packers and movers in India</h2>
          <div className="features-list">
            <div className="feature-card">
              <img src="./assets/reward.png" alt="Price Icon" />
              <p>Affordable pricing with best quality service</p>
            </div>
            <div className="feature-card">
              <img src="./assets/verified.png" alt="Verified Icon" />
              <p>Verified & trained partners</p>
            </div>
            <div className="feature-card">
              <img src="./assets/support.png" alt="Support Icon" />
              <p>Dedicated move manager</p>
            </div>
          </div>
        </div>

        <div className="qr-banner">
          <img src="./assets/qr.png" alt="QR code for app download" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
