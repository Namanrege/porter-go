// client/src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
        <a href="/" className="logo">PORTER<sup>®</sup></a>
          <p>Making logistics simple, fast and affordable.</p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Intra-city Logistics</li>
            <li>Packers & Movers</li>
            <li>Enterprise Solutions</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Porter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
