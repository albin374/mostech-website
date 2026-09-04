import React from 'react';
import { Building2, Target, Users, ShieldCheck, Rocket, Eye, Briefcase, Settings } from 'lucide-react';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-new">
      <div className="container about-hero-container">
        
        {/* Left Column */}
        <div className="about-hero-left">
          <div className="about-badge-new">
            <div className="badge-line"></div>
            <span>WHO WE ARE</span>
          </div>
          <h1 className="about-title-new">
            Mostech Business<br />
            <span className="text-blue">Solutions Dubai</span>
          </h1>
          <p className="about-desc-new">
            We build smart digital solutions that help businesses operate better, move faster, and grow stronger.
          </p>
          
          <div className="about-list">
            <div className="about-list-item" style={{ borderTop: '2px solid #e2e8f0' }}>
              <div className="about-list-icon">
                <Building2 size={24} />
              </div>
              <div className="about-list-content">
                <h4>Who We Are</h4>
                <p>A Dubai-based software development and technology consultancy, delivering custom software, mobile apps, web platforms, ERP systems, and digital marketing solutions since 2018.</p>
              </div>
            </div>

            <div className="about-list-item">
              <div className="about-list-icon">
                <Briefcase size={24} />
              </div>
              <div className="about-list-content">
                <h4>What We Do</h4>
                <p>We use modern technologies and agile practices to build secure, scalable, and high-performance digital products that create real business impact.</p>
              </div>
            </div>

            <div className="about-list-item" style={{ borderBottom: '2px solid #e2e8f0' }}>
              <div className="about-list-icon">
                <Users size={24} />
              </div>
              <div className="about-list-content">
                <h4>Our Team</h4>
                <p>Our experts collaborate with clients across industries—from discovery to deployment and support—ensuring successful digital transformation at every step.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-hero-right">
          
          <div className="about-right-top">
            <img src="/aboutnew.png" alt="Mostech Solutions" className="about-right-image" />
          </div>

          <div className="about-right-bottom">
            <div className="about-cards-row">
              
              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <Target size={24} />
                </div>
                <h4>Our Mission</h4>
                <p>Deliver innovative and reliable solutions that help businesses grow smarter and faster.</p>
              </div>

              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <Eye size={24} />
                </div>
                <h4>Our Vision</h4>
                <p>Be a global leader in digital transformation through technology and creativity.</p>
              </div>

              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <ShieldCheck size={24} />
                </div>
                <h4>Our Promise</h4>
                <p>Quality, transparency, and innovation in everything we deliver.</p>
              </div>

              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <Settings size={24} />
                </div>
                <h4>Our Approach</h4>
                <p>Client-focused, agile, and results-driven solutions that make a real impact.</p>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;
