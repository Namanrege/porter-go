import React from "react";
import "./PackersAndMovers.css";
import packersImage from "./assets/packers.JPG";

const PackersAndMovers = () => {
  return (
    <div className="packers-page">
      {/* Hero Section */}
      <section className="hero-section">
      <img src={packersImage} alt="packers and movers" />
        <div className="hero-content">
          <h1>Top Packers and Movers in India</h1>
          <p>Manage your house shifting from packing to stacking, starting at ₹1200.</p>
        </div>
        <div className="price-checker">
          <input type="text" placeholder="Pickup Location" />
          <input type="text" placeholder="Drop Location" />
          <input type="text" placeholder="Phone Number" />
          <input type="date" />
          <button>Check Price</button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-features">
        <div className="feature">
          <h4>💯 Damage-Free Shifting</h4>
          <p>Reliable shifting at every step</p>
        </div>
        <div className="feature">
          <h4>💰 Affordable & Assured</h4>
          <p>Value for money</p>
        </div>
        <div className="feature">
          <h4>🎯 Expert Handling</h4>
          <p>Skilled professionals</p>
        </div>
      </section>

      {/* QR Section */}
      <section className="qr-section">
        <h3>Think Logistics, Think Porter!</h3>
        <p>Scan to download our app!</p>
        <img src="https://via.placeholder.com/100" alt="QR Code" />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h3>Need an Extra Hand?</h3>
        <div className="services-grid">
          <div>💼 Rope Pulling</div>
          <div>🧰 Installation of Appliances</div>
          <div>🔌 Electrician</div>
          <div>🪑 Carpenter</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>What our customers say</h3>
        <div className="testimonial">
          <p>"Fantastic service and punctual team!"</p>
          <span>- A Happy Customer</span>
        </div>
      </section>

      {/* Cities and Footer */}
      <section className="cities-section">
        <h3>Choose from our services in major cities</h3>
        <p>Packers and Movers in Mumbai | Delhi | Hyderabad | Pune | ...</p>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>Do packers and movers dismantle and assemble furniture?</summary>
          <p>Yes, most do. Confirm while booking.</p>
        </details>
      </section>
    </div>
  );
};

export default PackersAndMovers;
