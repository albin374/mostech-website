import React from 'react';
import './SeoWhyChooseUs.css';

const SeoWhyChooseUs = () => {
  return (
    <section className="seo-wcu-section">
      <div className="container">
        
        <div className="seo-wcu-header">
          <div className="seo-wcu-subtitle">
            <span className="dash-dot-line"><span className="dash"></span><span className="dot"></span></span>
            Why Choose Us?
            <span className="dash-dot-line"><span className="dot"></span><span className="dash"></span></span>
          </div>
          <h2 className="seo-wcu-title">Why Choose <span className="dark-blue">Us?</span></h2>
          <p className="seo-wcu-desc">
            Partner with <strong>Mostech Business Solutions</strong> and take your business to the next level with innovative technology 
            solutions and expert <span className="highlight-link">SEO Services in UAE</span>. We help businesses strengthen their online presence, drive qualified 
            traffic, and achieve long-term digital success through customized, results-driven strategies.
          </p>
        </div>

        <div className="seo-wcu-grid">
          
          {/* Card 1 */}
          <div className="seo-wcu-card">
            <div className="seo-wcu-card-number">01</div>
            <div className="seo-wcu-card-icon-wrapper">
              <img src="/seo1.png" alt="Innovative Technology" className="seo-wcu-icon" />
            </div>
            <div className="seo-wcu-card-content">
              <h3>Innovative Technology Solutions</h3>
              <p>We create innovative software, web applications, mobile apps, ERP solutions, and cloud technologies for organizations, to help them boost performance, automate their operations, and beat their competitors.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="seo-wcu-card">
            <div className="seo-wcu-card-number">02</div>
            <div className="seo-wcu-card-icon-wrapper">
              <img src="/seo22.png" alt="Customer-Centric Approach" className="seo-wcu-icon" />
            </div>
            <div className="seo-wcu-card-content">
              <h3>Customer-Centric Approach</h3>
              <p>Each business has its own uniqueness. We take the time to understand your objectives, difficulties, and industry standards before providing solutions tailored to your needs.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="seo-wcu-card">
            <div className="seo-wcu-card-number">03</div>
            <div className="seo-wcu-card-icon-wrapper">
              <img src="/seo3.png" alt="Experienced Team" className="seo-wcu-icon" />
            </div>
            <div className="seo-wcu-card-content">
              <h3>Experienced Team of Professionals</h3>
              <p>We have a team of talented developers, designers, digital marketers, and technology enthusiasts who collaborate with you to produce result-oriented digital solutions. Our approach is centered on innovation, excellence, and attention to detail throughout the entire process to ensure a successful outcome.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="seo-wcu-card">
            <div className="seo-wcu-card-number">04</div>
            <div className="seo-wcu-card-icon-wrapper">
              <img src="/seo4.png" alt="Reliable Support" className="seo-wcu-icon" />
            </div>
            <div className="seo-wcu-card-content">
              <h3>Reliable Support & Long-Term Partnership</h3>
              <p>Our dedication goes beyond project completion. We offer you ongoing technical support, maintenance, performance tuning, and strategic advice to enable your business to adapt and thrive amidst an ever-changing digital world.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeoWhyChooseUs;
