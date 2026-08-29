import React from 'react';
import { Target, LayoutTemplate, Code, ShieldCheck, Rocket, Headphones, Users, Clock, CheckCircle2 } from 'lucide-react';
import './WebDevSection.css';

const WebDevSection = () => {
  const cards = [
    {
      number: "01",
      icon: <Target className="wds-icon" />,
      title: "Strategy",
      desc: "We analyze your business, audience, and objectives to define a clear website strategy that aligns with your brand and goals."
    },
    {
      number: "02",
      icon: <LayoutTemplate className="wds-icon" />,
      title: "Plan",
      desc: "We structure content, design layouts, and user journeys to ensure a smooth, intuitive, and engaging user experience."
    },
    {
      number: "03",
      icon: <Code className="wds-icon" />,
      title: "Work",
      desc: "Our team designs and develops responsive, high-performance websites using modern technologies and best practices."
    },
    {
      number: "04",
      icon: <ShieldCheck className="wds-icon" />,
      title: "Quality",
      desc: "Every website is thoroughly tested for speed, security, and usability to deliver a reliable and polished final product."
    },
    {
      number: "05",
      icon: <Rocket className="wds-icon" />,
      title: "Launch",
      desc: "We handle the deployment process and ensure a smooth launch with proper setup, optimization, and performance checks."
    },
    {
      number: "06",
      icon: <Headphones className="wds-icon" />,
      title: "Support",
      desc: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to keep your website running at its best."
    }
  ];

  return (
    <section className="webdev-section">
      <div className="container webdev-container">
        
        <div className="wds-left">
          <h2 className="wds-title">Website Design and<br/>Development</h2>
          <p className="wds-subtitle">
            We create modern, responsive websites that combine strong visual design with seamless functionality to deliver meaningful digital experiences and drive business growth.
          </p>

          <div className="wds-features">
            <div className="wds-feature-item">
              <div className="wds-feature-icon">
                <CheckCircle2 size={22} fill="#0d6efd" color="#ffffff" />
              </div>
              <div className="wds-feature-text">
                <h4>User-Focused Approach</h4>
                <p>We design websites that not only look great, but also support your business goals and grow with your needs.</p>
              </div>
            </div>
            
            <div className="wds-feature-item">
              <div className="wds-feature-icon">
                <CheckCircle2 size={22} fill="#0d6efd" color="#ffffff" />
              </div>
              <div className="wds-feature-text">
                <h4>Strategic Design & Planning</h4>
                <p>We understand your brand, target audience, and objectives to create designs that connect and convert.</p>
              </div>
            </div>

            <div className="wds-feature-item">
              <div className="wds-feature-icon">
                <CheckCircle2 size={22} fill="#0d6efd" color="#ffffff" />
              </div>
              <div className="wds-feature-text">
                <h4>Modern Technology</h4>
                <p>We use the latest technologies and best practices to build fast, secure, and SEO-friendly websites across all devices.</p>
              </div>
            </div>

            <div className="wds-feature-item">
              <div className="wds-feature-icon">
                <CheckCircle2 size={22} fill="#0d6efd" color="#ffffff" />
              </div>
              <div className="wds-feature-text">
                <h4>Future-Ready Solutions</h4>
                <p>We integrate analytics, performance tracking, and scalable solutions to keep your website ahead of trends and your competitors.</p>
              </div>
            </div>
          </div>

          <a href="#build" className="wds-btn">Let's Build Your Website &rarr;</a>

          <div className="wds-image-wrapper">
            <img src="/4th section.png" alt="Website Design mockups" className="wds-main-img" />
          </div>
        </div>

        <div className="wds-right">
          <div className="wds-cards-grid">
            {cards.map((card, index) => (
              <div className="wds-card" key={index}>
                <div className="wds-card-header">
                  <div className="wds-icon-wrapper">{card.icon}</div>
                  <span className="wds-card-number">{card.number}</span>
                </div>
                <h4 className="wds-card-title">{card.title}</h4>
                <p className="wds-card-desc">{card.desc}</p>
                <div className="wds-card-arrow-wrapper">
                  <button className="wds-card-arrow">&rarr;</button>
                  <div className="wds-card-arrow-line"></div>
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default WebDevSection;
