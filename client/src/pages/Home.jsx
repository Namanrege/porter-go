import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Porter Clone</h1>
        <p>Intra-city Logistics, Made Easy</p>
        <Link to="/packers-and-movers" className="cta-btn">
          Book Packers & Movers
        </Link>
      </header>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <h3>🚚 Fast Deliveries</h3>
            <p>Quick pickup and drop within city limits</p>
          </div>
          <div className="feature-box">
            <h3>📦 Reliable Service</h3>
            <p>Verified and trained drivers</p>
          </div>
          <div className="feature-box">
            <h3>💰 Affordable Pricing</h3>
            <p>No hidden charges, pay what you see</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Porter Clone. Built with ❤️</p>
      </footer>
    </div>
  );
};

export default Home;
