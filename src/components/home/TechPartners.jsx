import React from 'react';
import './TechPartners.css';

const partnerLogos = [
  '1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7 (1).webp', '7.webp', 
  '8.webp', '9.webp', '10.webp', '11.webp', '12.webp', '13.webp', '14.webp', '15.webp', 
  '16.webp', '17.webp', '18.webp', '19.webp', '20.webp', '21.webp', '22.webp', '23.webp', 
  '24.webp', '25.webp', '26.webp', '27.webp', '28.webp', '29.webp', '30.webp', '31.webp', '32.webp'
];

const TechPartners = () => {
  return (
    <section className="section partners-section">
      <div className="container text-center">
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-1px', lineHeight: 1.2 }}>
          Our <span style={{ color: '#000080' }}>Technology Partners</span>
        </h2>
        <p className="section-subtitle" style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Collaborating with industry leaders to deliver the best solutions.
        </p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content">
            {partnerLogos.map((logo, index) => (
              <div key={`partner-${index}`} className="partner-logo-box">
                <img src={`/technology/${logo}`} alt={`Technology Partner ${index + 1}`} className="partner-logo-img" />
              </div>
            ))}
          </div>
          {/* Duplicate for infinite scrolling effect */}
          <div className="marquee-content" aria-hidden="true">
            {partnerLogos.map((logo, index) => (
              <div key={`partner-dup-${index}`} className="partner-logo-box">
                <img src={`/technology/${logo}`} alt={`Technology Partner ${index + 1}`} className="partner-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
