// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import WhyChooseUs from './components/WhyChooseUS/WhyChooseUs';
import ServicesOffered from './components/ServicesOffered/ServicesOffered';
import BookingSteps from './components/BookingSteps/BookingSteps';
import Testimonials from './components/Testimonials/Testimonals';
import AppDownload from './components/AppDownload/AppDownload';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <FeaturesSection />
      <WhyChooseUs />
      <ServicesOffered />
      <BookingSteps />
      <Testimonials />
      <AppDownload />
      <FAQ />
      <Footer />
      
      {/* Other sections will go here */}
    </>
  );
};

export default App;
