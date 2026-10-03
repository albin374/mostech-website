import React from 'react';
import { Code2, Cloud, ShieldCheck } from 'lucide-react';
import './AboutOverview.css';

const AboutOverview = () => {
  return (
    <section className="about-overview">
      <div className="container">
        <div className="overview-grid">
          {/* Left Content */}
          <div className="overview-content animate-on-scroll">
            <h2 className="overview-title" style={{ color: '#2563eb' }}>
              Who We Are
            </h2>

            <p className="overview-desc">
              Mostech Business Solutions is a premier software development and digital marketing agency headquartered in Dubai, UAE. We specialize in digital design, enterprise software, bespoke ERP platforms, custom mobile applications, eCommerce solutions, and performance-driven digital marketing for the GCC’s fastest-growing businesses.
            </p>
            <p className="overview-desc">
              We operate at the intersection of technology, creativity, and human-centric design. Our approach combines scalable development, modern digital strategies, and agile methodologies to deliver secure, reliable, and impactful solutions. Scale your digital presence and business today.
            </p>

            <div className="overview-features">
              <div className="overview-feature-card">
                <div className="feature-icon">
                  <Code2 size={20} />
                </div>
                <div className="feature-text">
                  <h4>Custom Development</h4>
                  <p>Scalable web & mobile apps</p>
                </div>
              </div>
              
              <div className="overview-feature-card">
                <div className="feature-icon">
                  <Cloud size={20} />
                </div>
                <div className="feature-text">
                  <h4>Cloud Resilience</h4>
                  <p>High-availability cloud architecture</p>
                </div>
              </div>
              
              <div className="overview-feature-card">
                <div className="feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="feature-text">
                  <h4>Zero-Trust Security</h4>
                  <p>Aligned with UAE and GCC compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="overview-visual animate-on-scroll">
            <div className="overview-image-wrapper">
              <img src="/about burjhhalifa.png" alt="Mostech Dubai Headquarters" className="overview-main-image" />
              <div className="overview-image-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
