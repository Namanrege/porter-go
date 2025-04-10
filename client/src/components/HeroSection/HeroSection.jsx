import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>India’s Largest Marketplace for Intra-City Logistics</h1>
        <p>Book reliable logistics services with ease</p>
        <div className="hero-form">
          <input type="text" placeholder="Pickup Location" />
          <input type="text" placeholder="Drop Location" />
          <button>Search Vehicles</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
