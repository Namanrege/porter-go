// client/src/components/ServicesOffered.jsx
import React from 'react';
import './ServicesOffered.css';

const services = [
  {
    title: 'Local Shifting',
    icon: './assets/local.png',
  },
  {
    title: 'Intercity Shifting',
    icon: './assets/intercity.png',
  },
  {
    title: 'Mini Truck for Shifting',
    icon: './assets/mini-truck.png',
  },
  {
    title: 'Bike Shifting',
    icon: './assets/bike.png',
  },
  {
    title: 'Luggage Shifting',
    icon: './assets/luggage.png',
  },
  {
    title: 'Commercial Shifting',
    icon: './assets/commercial.png',
  },
];

const ServicesOffered = () => {
  return (
    <section className="services-section">
      <h2>House Shifting Services Offered</h2>
      <div className="services-scroll">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;
