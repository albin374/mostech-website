import React from 'react';
import { ShieldCheck, Cloud, Trophy, Rocket, Users } from 'lucide-react';
import './AboutTechnicalImpact.css';

const AboutTechnicalImpact = () => {
  return (
    <section className="about-technical-impact">
      <div className="container">
        
        <div className="impact-header">
          <div className="impact-badge">
            <div className="badge-line"></div>
            <span>QUANTIFIED TECHNICAL IMPACT</span>
          </div>
          <div className="impact-title-row">
            <h2>Quantified Technical Impact Across<br/>the Middle East</h2>
            <p>Playing an active role for high-growth start-ups to established corporate enterprises.</p>
          </div>
        </div>

        <div className="impact-circles-row">
          
          <div className="impact-circle-item">
            <div className="impact-icon-wrapper">
              <ShieldCheck size={20} className="impact-icon" />
            </div>
            <h3>25+</h3>
            <h4>In-House Architects</h4>
            <p>Deep engineering pools</p>
          </div>

          <div className="impact-circle-item">
            <div className="impact-icon-wrapper">
              <Cloud size={20} className="impact-icon" />
            </div>
            <h3>12+</h3>
            <h4>Cloud Modules</h4>
            <p>AWS, Azure & Google</p>
          </div>

          <div className="impact-circle-item">
            <div className="impact-icon-wrapper">
              <Trophy size={20} className="impact-icon" />
            </div>
            <h3>7+</h3>
            <h4>Years of Excellence</h4>
            <p>Established 2018</p>
          </div>

          <div className="impact-circle-item">
            <div className="impact-icon-wrapper">
              <Rocket size={20} className="impact-icon" />
            </div>
            <h3>1,000+</h3>
            <h4>Shipped Projects</h4>
            <p>Agile release cycle</p>
          </div>

          <div className="impact-circle-item">
            <div className="impact-icon-wrapper">
              <Users size={20} className="impact-icon" />
            </div>
            <h3>1,000+</h3>
            <h4>Corporate Clients</h4>
            <p>B2B enterprise focus</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutTechnicalImpact;
