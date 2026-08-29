import React from 'react';
import { ChevronRight } from 'lucide-react';
import './S3Model.css';

const S3Model = () => {
  return (
    <section className="s3-section">
      <div className="container s3-container">
        
        <div className="s3-header">
          <div className="s3-badge">
            <span className="s3-badge-dot"></span>
            Our Framework
          </div>
          <h2 className="s3-title">
            Productized S3+ <span className="s3-highlight">Services Model</span>
          </h2>
          <div className="s3-title-underline"></div>
          <p className="s3-subtitle">
            Our S3+ model ensures we deliver scalable, high-quality, and value-driven<br/>solutions tailored to your business needs.
          </p>
        </div>

        <div className="s3-cards-wrapper">
          
          {/* Card 1 */}
          <div className="s3-card card-purple">
            <div className="s3-floating-badge">S+</div>
            <div className="s3-image-wrapper">
              <img src="/s1.png" alt="Solution Assets" className="s3-card-img" />
            </div>
            <h3 className="s3-card-title">Solution Assets</h3>
            <div className="s3-card-divider"></div>
            <p className="s3-card-desc">
              Horizontal technology solutions and solution accelerators that drive efficiency and innovation.
            </p>
            <a href="#services" className="s3-card-link">
              <ChevronRight size={20} />
            </a>
          </div>

          {/* Card 2 */}
          <div className="s3-card card-green">
            <div className="s3-floating-badge">S+</div>
            <div className="s3-image-wrapper">
              <img src="/s2.png" alt="Services Lines" className="s3-card-img" />
            </div>
            <h3 className="s3-card-title">Services Lines</h3>
            <div className="s3-card-divider"></div>
            <p className="s3-card-desc">
              Robust methodologies, optimized delivery processes, and industry best practices.
            </p>
            <a href="#services" className="s3-card-link">
              <ChevronRight size={20} />
            </a>
          </div>

          {/* Card 3 */}
          <div className="s3-card card-orange">
            <div className="s3-floating-badge">S+</div>
            <div className="s3-image-wrapper">
              <img src="/s3.png" alt="Skills & Competency" className="s3-card-img" />
            </div>
            <h3 className="s3-card-title">Skills & Competency</h3>
            <div className="s3-card-divider"></div>
            <p className="s3-card-desc">
              Deep and diverse resource skills, combined with technical expertise to deliver exceptional outcomes.
            </p>
            <a href="#services" className="s3-card-link">
              <ChevronRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default S3Model;
