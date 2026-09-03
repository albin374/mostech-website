import React from 'react';
import { ArrowRight } from 'lucide-react';
import './S3Model.css';

const S3Model = () => {
  const cards = [
    {
      number: "01",
      title: "Solution Assets",
      desc: "Horizontal technology solutions and solution accelerators that drive efficiency and innovation."
    },
    {
      number: "02",
      title: "Services Lines",
      desc: "Robust methodologies, optimized delivery processes, and industry best practices."
    },
    {
      number: "03",
      title: "Skills & Competency",
      desc: "Deep and diverse resource skills, combined with technical expertise to deliver exceptional outcomes."
    }
  ];

  return (
    <section className="s3-section">
      <div className="container s3-container">
        
        <div className="s3-header">
          <div className="s3-badge">
            <span className="s3-badge-line"></span>
            OUR FRAMEWORK
            <span className="s3-badge-line"></span>
          </div>
          <h2 className="s3-title">
            Productized <span className="s3-highlight">S3+ Services</span> Model
          </h2>
          <div className="s3-title-underline"></div>
          <p className="s3-subtitle">
            Our S3+ model ensures we deliver scalable, high-quality,<br/>and value-driven solutions tailored to your business needs.
          </p>
        </div>

        <div className="s3-cards-wrapper">
          {cards.map((card, index) => (
            <div className="s3-card" key={index}>
              <div className="s3-card-number-box">
                {card.number}
              </div>
              <div className="s3-card-content">
                <h3 className="s3-card-title">{card.title}</h3>
                <div className="s3-card-divider"></div>
                <p className="s3-card-desc">{card.desc}</p>
              </div>
              <a href="#learn-more" className="s3-card-footer">
                <span className="s3-card-footer-text">Learn More</span>
                <ArrowRight size={20} className="s3-card-footer-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default S3Model;
