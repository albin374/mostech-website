import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './AboutCTA.css';

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="cta-wrapper">
          
          <div className="cta-content">

            <h2>Ready to architect your enterprise<br/>digital roadmap?</h2>
            <p>
              Engage our enterprise architects in Dubai for an initial discovery and<br/>
              technical feasibility evaluation.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">Talk to our Team &rarr;</button>
              <button className="btn-secondary">sales@mostech.ae</button>
            </div>
          </div>

          <div className="cta-info-card">
            <h4>Regional GCC Presence</h4>
            <ul className="cta-contact-list">
              <li>
                <div className="contact-icon-wrapper">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="contact-label">Dubai (HQ) Sales:</span>
                  <a href="tel:+971505370212" className="contact-value">+971 50 537 0212</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="contact-label">HQ Office (UAE):</span>
                  <span className="contact-value">Business Bay, Dubai</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Mail size={16} />
                </div>
                <div>
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
