import React from 'react';
import { Rocket, Monitor, Users, Cloud, Layers, Code, TrendingUp, Calendar, Globe, ShieldCheck } from 'lucide-react';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="about-hero-grid">
          
          {/* Left Content */}
          <div className="about-hero-content">
            <span className="about-badge">ABOUT MOSTECH</span>
            <h1 className="about-hero-title">
              Mostech Business<br />
              <span className="text-blue">Solutions Dubai</span>
            </h1>
            <p className="about-hero-desc">
              Mostech Business Solutions is a premier software development company and digital technology consultancy headquartered in Dubai, United Arab Emirates. Founded in 2018, we specialize in delivering high-impact, custom software solutions, enterprise web applications, mobile app development (iOS & Android), bespoke ERP systems, e-commerce platforms, and data-driven digital marketing services across the GCC region and global markets.
            </p>
            
            <div className="about-features-list">
              <div className="feature-item">
                <div className="feature-icon-wrapper bg-blue-light">
                  <Rocket className="feature-icon blue" size={24} />
                </div>
                <div className="feature-text">
                  <h3>Elevate Business. Accelerate Growth.</h3>
                  <p>We believe technology should do more than automate tasks—it should elevate operations, streamline efficiency, unlock opportunities, and accelerate revenue growth.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper bg-blue-light">
                  <Monitor className="feature-icon blue" size={24} />
                </div>
                <div className="feature-text">
                  <h3>Modern Solutions. Real Impact.</h3>
                  <p>By combining human-centered UI/UX design, modern cloud architecture, and agile software development, we craft digital products that stand out for performance, security, and scalability.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper bg-blue-light">
                  <Users className="feature-icon blue" size={24} />
                </div>
                <div className="feature-text">
                  <h3>Experts You Can Rely On.</h3>
                  <p>Our team of senior engineers, architects, designers, and growth specialists bring deep industry expertise and work closely with clients—from discovery to launch and beyond.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-hero-visuals">
            <div className="image-and-floating-tags">
               <img src="/aboutsession fisrtt imge.png" alt="Mostech Solutions" className="main-visual" />
            </div>

            {/* Bottom Stats Banner */}
            <div className="about-stats-banner">
              <div className="stat-col">
                <Calendar size={24} strokeWidth={1.5} className="stat-icon" />
                <h4>2018</h4>
                <h5>Founded</h5>
                <p>Building digital solutions since 2018</p>
              </div>
              <div className="stat-col">
                <Users size={24} strokeWidth={1.5} className="stat-icon" />
                <h4>100+</h4>
                <h5>Projects Delivered</h5>
                <p>Successful solutions across industries</p>
              </div>
              <div className="stat-col">
                <Globe size={24} strokeWidth={1.5} className="stat-icon" />
                <h4>GCC & Global</h4>
                <p>Serving clients locally and globally</p>
              </div>
              <div className="stat-col">
                <ShieldCheck size={24} strokeWidth={1.5} className="stat-icon" />
                <h4>Quality & Trust</h4>
                <p>Committed to security, scalability & success</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
