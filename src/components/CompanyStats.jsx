import React from 'react';
import { Globe, Shield, Users, Rocket, Target, Handshake, TrendingUp, Lightbulb } from 'lucide-react';
import './CompanyStats.css';

const CompanyStats = () => {
  return (
    <section className="stats-section" style={{ backgroundImage: 'url("/robot%20bannerrrr.png")', backgroundSize: 'cover', backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat' }}>
      <div className="stats-container">
        

        <div className="stats-visual-area">
          <div className="stats-badge badge-overlay">
            <span className="stats-badge-line"></span>
            <span className="stats-badge-text">OUR ACHIEVEMENTS</span>
            <span className="stats-badge-line"></span>
          </div>

          <div className="container stats-cards-wrapper">
            <div className="stats-glass-card">
              <div className="stats-icon-circle">
                <Globe size={28} />
              </div>
              <h3>16+</h3>
              <p>Countries</p>
              <div className="stats-card-underline"></div>
            </div>

            <div className="stats-glass-card">
              <div className="stats-icon-circle">
                <Shield size={28} />
              </div>
              <h3>8+</h3>
              <p>Years of Experience</p>
              <div className="stats-card-underline"></div>
            </div>

            <div className="stats-glass-card">
              <div className="stats-icon-circle">
                <Users size={28} />
              </div>
              <h3>1,000+</h3>
              <p>Clients</p>
              <div className="stats-card-underline"></div>
            </div>

            <div className="stats-glass-card">
              <div className="stats-icon-circle">
                <Rocket size={28} />
              </div>
              <h3>10,000+</h3>
              <p>Projects</p>
              <div className="stats-card-underline"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyStats;
