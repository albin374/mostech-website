import React from 'react';
import { Code2, Cloud, ShieldCheck, MapPin } from 'lucide-react';
import './AboutOverview.css';

const AboutOverview = () => {
  return (
    <section className="about-overview">
      <div className="container">
        <div className="overview-grid">
          {/* Left Content */}
          <div className="overview-content animate-on-scroll">
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="overview-title">
              Mostech Business <span className="text-blue">Solutions</span>
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
              <div className="location-badge glass">
                <div className="location-icon">
                  <MapPin size={22} />
                </div>
                <div className="location-info">
                  <span className="location-tag">UAE Headquarters</span>
                  <h4>Dubai Technology Center</h4>
                  <p>O14 Tower, Business Bay, Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
