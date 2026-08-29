import React from 'react';
import './TechPartners.css';

// Generating an array of numbers to simulate logos (from the original site 1 to 32)
const partnerLogos = Array.from({ length: 16 }, (_, i) => i + 1);

const TechPartners = () => {
  return (
    <section className="section partners-section">
      <div className="container text-center">
        <h2 className="section-title">
          Our <span className="text-secondary">Technology Partners</span>
        </h2>
        <p className="section-subtitle">
          Collaborating with industry leaders to deliver the best solutions.
        </p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content">
            {partnerLogos.map((logo) => (
              <div key={`partner-${logo}`} className="partner-logo-box">
                <div className="logo-placeholder">Partner {logo}</div>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite scrolling effect */}
          <div className="marquee-content" aria-hidden="true">
            {partnerLogos.map((logo) => (
              <div key={`partner-dup-${logo}`} className="partner-logo-box">
                <div className="logo-placeholder">Partner {logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
