import React from 'react';
import { Globe, Users, Briefcase, Headphones } from 'lucide-react';
import './GlobalPresence.css';

const GlobalPresence = () => {
  return (
    <section className="gp-section">
      <div className="container gp-container">
        
        <div className="gp-left">
          <div className="gp-badge">
            <Globe size={18} className="gp-badge-icon" />
            <span>GLOBAL PRESENCE</span>
          </div>
          
          <h2 className="gp-title">
            Connecting Ideas.<br/>
            <span className="gp-highlight">Delivering Impact.</span>
          </h2>
          <div className="gp-title-line"></div>
          
          <p className="gp-subtitle">
            We partner with businesses worldwide, delivering innovative digital solutions that drive growth and create lasting impact. Our global footprint reflects our commitment to excellence, collaboration, and customer success across borders.
          </p>

        </div>

        <div className="gp-right">
          <img src="/global.png" alt="Global Presence Map" className="gp-main-img" />
        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;
