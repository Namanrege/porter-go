import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
      <a href="/" className="logo">PORTER<sup>®</sup></a>
        <div className="nav-links">
          <a href="/enterprise">Enterprise</a>
          <a href="/partners">Partners</a>
          <a href="/support" className="support-link">Support</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
