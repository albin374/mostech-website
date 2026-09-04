import React from 'react';
import { Monitor, Cloud, ShieldCheck, Building } from 'lucide-react';
import './AboutOverview.css';

const AboutOverview = () => {
  return (
    <section className="about-overview">
      <div className="container">
        <div className="overview-grid">
          
          {/* Left Content */}
          <div className="overview-content">

            
            <h2 className="overview-title">
              Mostech Business<br/>
              <span className="text-blue">Solutions Dubai</span>
            </h2>
            
            <p className="overview-desc">
              Mostech Business Solutions is a premier software development and technology
              consultancy headquartered in Dubai, UAE. We specialize in digital
              design and scale enterprise cloud architectures, bespoke ERP platforms,
              custom mobile applications, and high-network SaaS platforms for the GCC's
              fastest growing enterprises.
            </p>
            <p className="overview-desc">
              We operate at the intersection of innovation, reliability, and human-centric
              design. Our core development practices are centered on Zero-Trust
              security, microservices architecture, and agile software development life cycles.
              Scale your digital operations today.
            </p>
            
            <div className="overview-features">
              <div className="overview-feature-card">
                <div className="feature-icon">
                  <Monitor size={20} />
                </div>
                <h4>Custom<br/>Development</h4>
                <p>Scalable web & mobile apps</p>
              </div>
              <div className="overview-feature-card">
                <div className="feature-icon">
                  <Cloud size={20} />
                </div>
                <h4>Cloud Resilience</h4>
                <p>High-availability cloud architecture</p>
              </div>
              <div className="overview-feature-card">
                <div className="feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <h4>Zero-Code<br/>Security</h4>
                <p>Aligned with UAE and GCC compliance</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="overview-visual">
            <img src="/about burjhhalifa.png" alt="Office Collaboration" className="overview-main-image" />
            
            <div className="location-card">
              <div className="location-icon">
                <Building size={20} color="#ffffff" />
              </div>
              <div className="location-info">
                <h4>Dubai Technology Center</h4>
                <p>O14 Tower, Business Bay, Dubai, UAE.</p>
              </div>
              <a href="#contact" className="location-link">Our Global Presence &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
