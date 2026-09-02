import React from 'react';
import './AboutCeoMessage.css';

const AboutCeoMessage = () => {
  return (
    <section className="ceo-message-section">
      <div className="ceo-message-layout">
        
        {/* Left Content */}
        <div className="ceo-message-content">
          


          <h2 className="ceo-message-title">
            CEO'S <span className="text-blue">MESSAGE</span>
          </h2>
          
          <div className="ceo-message-divider"></div>

          <div className="ceo-message-text-group">
            <p>
              At Mostech Business Solutions, our journey began in Kannur in 2018 when I took the step to establish this company with a small team of four passionate youngsters and tech enthusiasts. With my background and experience in the banking sector, I aimed to create not just a business, but a platform where innovation, reliability, and value-driven solutions could thrive. What started as a modest dream has now grown into a dedicated family of 25+ professionals, each committed to excellence and innovation.
            </p>
            <p>
              In 2021, we expanded our footprint to the UAE, and today, Mostech proudly maintains a presence and representatives across the GCC. With more than 1,000 projects successfully delivered to over 1,000 satisfied clients, our story is one of vision, persistence, and trust.
            </p>
            <p>
              As the Founder and CEO, I remain deeply committed to leading this journey forward—empowering businesses with cutting-edge technology while building strong and lasting relationships that extend far beyond solutions.
            </p>
          </div>

          <div className="ceo-message-footer">
            <div className="ceo-signature-img-wrapper">
              <img src="/signature.png" alt="Ayoob K A Signature" className="ceo-signature-image" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              {/* Fallback if image doesn't exist */}
              <span className="signature-fallback" style={{display: 'none', fontFamily: 'cursive', fontSize: '2rem', color: '#051636'}}>Ayoob K A</span>
            </div>
            <h4 className="ceo-name-text">Ayoob K A</h4>
            <p className="ceo-role-text">Founder & CEO,</p>
            <p className="ceo-company-text">Mostech Business Solutions</p>
          </div>

        </div>

        {/* Right Image area with diagonal cut */}
        <div className="ceo-message-image-wrapper">
          <img src="/ceo2.jpeg" alt="Ayoob K A, CEO" className="ceo-photo" onError={(e) => { e.target.src = 'https://placehold.co/800x800/e2e8f0/64748b?text=CEO' }} />
        </div>

      </div>
    </section>
  );
};

export default AboutCeoMessage;
