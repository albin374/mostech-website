import React from 'react';
import './AboutCeoMessage.css';

const AboutCeoMessage = () => {
  return (
    <section className="about-ceo">
      <div className="container">

        {/* Section Header */}
        <div className="ceo-header animate-on-scroll">
          <div className="section-eyebrow">Leadership Vision</div>
          <h2 className="ceo-title">
            A Word From Our <span className="text-blue">Founder</span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="ceo-card animate-on-scroll">

          {/* ── Left: Photo Column ── */}
          <div className="ceo-image-col">
            <img
              src="/ceo2.jpeg"
              alt="Ayoob K. A., Founder & CEO"
              className="ceo-photo"
              onError={(e) => { e.target.src = '/ceofinal222.png'; }}
            />
            <div className="ceo-image-overlay">
              <div className="ceo-name-plate">
                <div className="gold-accent-line"></div>
                <h3>Ayoob K. A.</h3>
                <p>Founder, Managing Director &amp; CEO</p>
              </div>
            </div>
          </div>

          {/* ── Right: Quote Column ── */}
          <div className="ceo-text-col">
            {/* Big decorative quote */}
            <div className="quote-mark">"</div>

            {/* Quote icon */}
            <div className="quote-open-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Quote text */}
            <div className="quote-content">
              <p className="ceo-quote-text">
                We commenced operations in 2018 with a focused collective of software engineers committed to building
                robust and efficient software components. Coming from a rigorous institutional banking background,
                I understood early on that corporate success is tied to{' '}
                <strong>zero-error code, fast go-to-market velocity, bulletproof continuity</strong>, and software
                that creates measurable business value.
              </p>
              <p className="ceo-quote-text">
                As we have expanded across the region and beyond, our mission has remained the same: to orchestrate,
                refine, and deploy digital infrastructure. Today, we have successfully{' '}
                <strong>delivered over 1,000 systems</strong>. It is an honor to partner with forward-thinking
                enterprises, deliver profound engineering, and walk together through the ongoing, and truly exciting,
                journey that is the digital ecosystem. Thank you.
              </p>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCeoMessage;
