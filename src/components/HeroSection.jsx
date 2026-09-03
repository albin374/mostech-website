import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image Only */}
      <div className="hero-bg-image-wrapper">
        <img 
          src="/final banner 222.png" 
          alt="Banner"
          className="hero-bg-image"
        />
      </div>

      {/* Text Content Overlay */}
      <div className="hero-content">
        <div className="hero-text-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.2rem', justifyContent: 'center' }}>
            <div style={{ height: '1px', background: '#94a3b8', width: '30px' }}></div>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#94a3b8' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#020c4c' }}>SMART SOLUTIONS</span>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#94a3b8' }}></div>
            <div style={{ height: '1px', background: '#94a3b8', width: '30px' }}></div>
          </div>
          <h1 className="hero-main-title">
            <span style={{ display: 'block', color: '#020c4c' }}>Smarter Business.</span>
            <span style={{ display: 'block', color: '#020c4c' }}>Stronger Tomorrow.</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge AI, software, and digital<br />
            solutions designed to automate, optimize, and<br />
            accelerate your business growth.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="hero-btn hero-btn-primary">
              Explore Solutions <ArrowRight size={18} />
            </a>
            <button className="hero-btn hero-btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
