import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image Only */}
      <div className="hero-bg-image-wrapper">
        <img 
          src="/banner imge.png" 
          alt="Banner"
          className="hero-bg-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
