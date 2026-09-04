import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './AboutCTA.css';

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="cta-wrapper animate-on-scroll">

          <div className="cta-content">
            <h2 className="cta-title">
              Ready to architect your enterprise<br />
              <span className="cta-highlight-blue">digital roadmap?</span>
            </h2>
            <p className="cta-subtitle">
              Engage our enterprise architects in Dubai for an initial discovery and
              technical feasibility evaluation.
            </p>
            <div className="cta-actions">
              <button className="btn-primary cta-btn">
                Talk to our Team <ArrowRight size={16} />
              </button>
              <a href="mailto:sales@mostech.ae" className="btn-outline cta-btn-outline">
                sales@mostech.ae
              </a>
            </div>
          </div>

          <div className="cta-info-card glass-panel">
            <h4>Regional GCC Presence</h4>
            <ul className="cta-contact-list">
              <li>
                <div className="contact-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Dubai (HQ) Sales:</span>
                  <a href="tel:+971505370212" className="contact-value">+971 50 537 0212</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">HQ Office (UAE):</span>
                  <span className="contact-value">O14 Tower, Business Bay, Dubai</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">General Inquiry:</span>
                  <a href="mailto:info@mostech.ae" className="contact-value">info@mostech.ae</a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
