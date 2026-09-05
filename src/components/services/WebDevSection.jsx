import React from 'react';
import { Code, Lightbulb, GitBranch, Shield, ArrowRight, Target, Rocket, Headphones } from 'lucide-react';
import './WebDevSection.css';

const WebDevSection = () => {
  const cards = [
    {
      number: "01",
      icon: <Lightbulb className="wds-card-icon" />,
      title: "Strategy",
      desc: "We analyze your business and audience to define a clear strategy that aligns with your goals."
    },
    {
      number: "02",
      icon: <GitBranch className="wds-card-icon" />,
      title: "Plan",
      desc: "We structure content, design layouts, and map user journeys for a smooth experience."
    },
    {
      number: "03",
      icon: <Code className="wds-card-icon" />,
      title: "Work",
      desc: "Our team designs and develops responsive, high-performance websites using modern technologies."
    },
    {
      number: "04",
      icon: <Shield className="wds-card-icon" />,
      title: "Quality",
      desc: "Every website is tested for speed, security, and usability to ensure a reliable final product."
    }
  ];

  return (
    <section className="webdev-section-dark" id="webdev">
      <div className="container webdev-container-dark">
        
        <div className="wds-left-dark">
          <div className="wds-eyebrow">
            <span className="wds-eyebrow-icon"><Code size={14} color="#ffffff" /></span>
            OUR SERVICE
          </div>
          <h2 className="wds-title-dark">Website Design and<br/>Development</h2>
          <p className="wds-subtitle-dark">
            We build modern, responsive websites that deliver seamless experiences and drive business growth.
          </p>

          <div className="wds-features-dark">
            <div className="wds-feature-item-dark">
              <div className="wds-feature-icon-dark">
                <Target size={22} color="#3b82f6" />
              </div>
              <div className="wds-feature-text-dark">
                <h4>User Focused</h4>
                <p>We design intuitive layouts that engage users and deliver meaningful experiences.</p>
              </div>
            </div>
            
            <div className="wds-feature-item-dark">
              <div className="wds-feature-icon-dark">
                <Shield size={22} color="#3b82f6" />
              </div>
              <div className="wds-feature-text-dark">
                <h4>High Performance</h4>
                <p>Built with best practices for speed, SEO, and seamless performance.</p>
              </div>
            </div>

            <div className="wds-feature-item-dark">
              <div className="wds-feature-icon-dark">
                <Rocket size={22} color="#3b82f6" />
              </div>
              <div className="wds-feature-text-dark">
                <h4>Future Ready</h4>
                <p>Scalable and adaptable solutions that grow with your business.</p>
              </div>
            </div>

            <div className="wds-feature-item-dark">
              <div className="wds-feature-icon-dark">
                <Headphones size={22} color="#3b82f6" />
              </div>
              <div className="wds-feature-text-dark">
                <h4>Reliable Support</h4>
                <p>We provide ongoing support to keep your website secure and up-to-date.</p>
              </div>
            </div>
          </div>


        </div>

        <div className="wds-right-dark">
          <div className="wds-cards-grid-dark">
            {cards.map((card, index) => (
              <div className="wds-card-dark" key={index}>
                <div className="wds-card-number-badge">{card.number}</div>
                <div className="wds-card-icon-wrapper">
                  {card.icon}
                </div>
                <h4 className="wds-card-title-dark">{card.title}</h4>
                <p className="wds-card-desc-dark">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDevSection;
