import React from 'react';
import { Layers, Settings, Users } from 'lucide-react';
import './S3Model.css';

const S3Model = () => {
  const cards = [
    {
      number: "01",
      title: "Solution Assets",
      desc: "Horizontal technology solutions and solution accelerators that drive efficiency and innovation.",
      icon: <Layers size={24} strokeWidth={2.5} />
    },
    {
      number: "02",
      title: "Services Lines",
      desc: "Robust methodologies, optimized delivery processes, and industry best practices.",
      icon: <Settings size={24} strokeWidth={2.5} />
    },
    {
      number: "03",
      title: "Skills & Competency",
      desc: "Deep and diverse resource skills, combined with technical expertise to deliver exceptional outcomes.",
      icon: <Users size={24} strokeWidth={2.5} />
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
            Our S3+ model ensures we deliver scalable, high-quality, and value-driven solutions tailored to your business needs.
          </p>
        </div>

        <div className="s3-cards-wrapper">
          {cards.map((card, index) => {
            const isDark = index === 0 || index === 2;
            const cardClass = isDark ? "s3-card s3-card-dark" : "s3-card s3-card-light";
            return (
              <div className={cardClass} key={index}>
                <div className="s3-card-top-row">
                  <div className="s3-card-icon-circle">
                    {card.icon}
                  </div>
                  <div className="s3-card-connector">
                     <div className="s3-connector-line"></div>
                     <div className="s3-connector-dot"></div>
                  </div>
                  <div className="s3-card-number">
                    {card.number}
                  </div>
                </div>
                <div className="s3-card-content">
                  <h3 className="s3-card-title">{card.title}</h3>
                  <div className="s3-card-divider"></div>
                  <p className="s3-card-desc">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default S3Model;
