import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image Only */}
      <div className="hero-bg-image-wrapper">
        <img 
          src="/banner updated.png" 
          alt="Banner"
          className="hero-bg-image"
        />
      </div>

      {/* Text Content Overlay */}
      <div className="hero-content">
        <div className="hero-text-box">
          <h1 className="hero-main-title">
            <span style={{ display: 'block' }}>Smart Solutions.</span>
            <span style={{ display: 'block' }}>Smarter Business.</span>
            <span className="hero-navy-text" style={{ display: 'block' }}>Stronger Tomorrow.</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge AI, software, and digital<br />
            solutions designed to automate, optimize,<br />
            and accelerate your business growth.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="hero-btn hero-btn-primary">
              Explore Solutions <ArrowRight size={18} />
            </a>
            <button className="hero-btn hero-btn-secondary">
              <PlayCircle size={18} /> Watch Introduction
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
