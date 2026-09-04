import React from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Lightbulb, 
  Clock 
} from 'lucide-react';
import './AboutPrinciples.css';

const AboutPrinciples = () => {
  const principles = [
    {
      icon: <Layers size={22} />,
      title: "Engineering Excellence",
      desc: "Clean, maintainable, and modular code architecture adhering strictly to industry best practices, automated testing, and continuous integration/delivery frameworks."
    },
    {
      icon: <HeartHandshake size={22} />,
      title: "Integrity & Transparency",
      desc: "Honest communication, transparent milestone pricing, and dedicated project dashboards ensure the client is always informed and engaged at every step."
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Innovation & Design Thinking",
      desc: "Combining intuitive visual aesthetics with frictionless user journeys, we create applications users genuinely love, while ensuring future-scalable architecture standards."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Data Security & Privacy",
      desc: "Rigorous vulnerability testing, zero-trust access control, and strict data encryption protocols ensure full compliance with GCC cyber security & local data privacy."
    },
    {
      icon: <Zap size={22} />,
      title: "Speed & Scalability",
      desc: "Optimized cloud infrastructure, efficient database indexing, caching strategies, and responsive user interfaces for high-volume enterprise systems."
    },
    {
      icon: <Clock size={22} />,
      title: "On-Time Delivery",
      desc: "Unwavering commitment to project planning, predictable delivery timelines, clear acceptance criteria, and optimized resource allocation."
    }
  ];

  return (
    <section className="about-principles">
      <div className="container">

        <div className="principles-header text-center animate-on-scroll">
          <div className="section-eyebrow">Engineering Guidelines</div>
          <h2 className="principles-title">
            Core Engineering Principles & <span className="text-blue">Governance</span>
          </h2>
          <p className="principles-subtitle">
            The foundational metrics and architectural standards that govern our IT architecture<br />
            ecosystem and client deployments across the GCC.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div 
              className="principle-card animate-on-scroll" 
              style={{ animationDelay: `${index * 0.06}s` }} 
              key={index}
            >
              <div className="principle-card-header">
                <div className="principle-icon-wrapper">
                  {item.icon}
                </div>
                <div className="principle-number font-mono">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
              <div className="principle-card-body">
                <h4 className="principle-card-title">{item.title}</h4>
                <p className="principle-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutPrinciples;

