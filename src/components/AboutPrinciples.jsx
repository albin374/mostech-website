import React from 'react';
import { Layers, ShieldCheck, Zap, HeartHandshake, Lightbulb, Clock } from 'lucide-react';
import './AboutPrinciples.css';

const AboutPrinciples = () => {
  const principles = [
    {
      icon: <Layers size={20} />,
      title: "Engineering Excellence",
      desc: "Clean, maintainable, and modular code architecture adhering strictly to industry best practices, automated testing, and continuous integration/delivery frameworks."
    },
    {
      icon: <HeartHandshake size={20} />,
      title: "Integrity & Transparency",
      desc: "Honest communication, transparent milestone pricing, and dedicated project dashboards ensure the client is always informed and engaged at every step."
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Innovation & Design Thinking",
      desc: "Combining intuitive visual aesthetics with frictionless user journeys, we create applications users genuinely love, while ensuring future-scalable architecture standards."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Data Security & Privacy",
      desc: "Rigorous vulnerability testing, zero-trust access control, and strict data encryption protocols ensure full compliance with GCC cyber security & local data privacy."
    },
    {
      icon: <Zap size={20} />,
      title: "Speed & Scalability",
      desc: "Optimized cloud infrastructure, efficient database indexing, caching strategies, and responsive user interfaces for high-volume enterprise systems."
    },
    {
      icon: <Clock size={20} />,
      title: "On-Time Delivery",
      desc: "Unwavering commitment to project planning, predictable delivery timelines, clear acceptance criteria, and optimized resource allocation."
    }
  ];

  return (
    <section className="about-principles">
      <div className="container">
        
        <div className="principles-header text-center">
          <div className="principles-badge">
            <div className="badge-line"></div>
            <span>ENGINEERING GUIDELINES</span>
          </div>
          <h2 className="principles-title">Core Engineering Principles &<br/>Governance</h2>
          <p className="principles-subtitle">
            The foundational metrics and architectural standards that govern our IT architecture<br/>
            ecosystem and client deployments across the GCC.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div className="principle-card" key={index}>
              <div className="principle-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <a href="#more" className="principle-link">READ MORE &rarr;</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutPrinciples;
