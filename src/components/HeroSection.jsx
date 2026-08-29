import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video Only */}
      <div className="hero-bg-video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-bg-video"
        >
          <source src="/Robot_working_at_desk_1080p_202608281117.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
