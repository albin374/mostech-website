import React from 'react';
import './AboutCeoMessage.css';

const AboutCeoMessage = () => {
  return (
    <section className="about-ceo-new">
      <div className="container">
        
        <div className="ceo-header-new text-center">
          <div className="ceo-badge-new">
            <div className="badge-line"></div>
            <span>LEADERSHIP VISION</span>
          </div>
          <h2 className="ceo-title-new">CEO'S <span className="text-blue">MESSAGE</span></h2>
        </div>

        <div className="ceo-card-new">
          <div className="ceo-image-col">
            <img src="/ceo2.jpeg" alt="Ayoob K A, CEO" className="ceo-photo-new" onError={(e) => { e.target.src = '/ceofinal222.png'; }} />
            <div className="ceo-name-plate">
              <h3>Ayoob K. A.</h3>
              <p>FOUNDER, MANAGING DIRECTOR & CEO</p>
            </div>
          </div>
          <div className="ceo-text-col">
            <p className="ceo-quote-text">
              "We commenced operations in 2018 with a focused collective of software engineers committed to building robust and efficient software components. Coming from a rigorous institutional banking background, I understood early on that corporate success is tied to zero-error code, fast go-to-market velocity, bulletproof continuity, and software that creates measurable business value."
            </p>
            <p className="ceo-quote-text">
              "As we have expanded across the region and beyond, our mission has remained the same: to orchestrate, refine, and deploy digital infrastructure. Today, we have successfully delivered over 1,000 systems. It is an honor to partner with forward-thinking enterprises, deliver profound engineering, and walk together through the ongoing, and truly exciting, journey that is the digital ecosystem. Thank you."
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCeoMessage;
