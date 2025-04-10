// client/src/components/AppDownload.jsx
import React from 'react';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <section className="app-download-section">
      <div className="download-left">
        <h2>Think Logistics, Think Porter!</h2>
        <p>Download the app now and make your shifting experience smooth and hassle-free.</p>

        <div className="store-buttons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="store-btn"
          />
          <img
            src="./assets/porter-app.jpg"
            alt="Download on the App Store"
            className="store-btn"
          />
        </div>
      </div>

      <div className="download-right">
        <img
          src="./assets/qr.png"
          alt="QR Code"
          className="qr-image"
        />
      </div>
    </section>
  );
};

export default AppDownload;
