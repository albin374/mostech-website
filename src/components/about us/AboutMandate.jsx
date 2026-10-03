import React from 'react';
import { Target, Eye, Trophy, ArrowRight } from 'lucide-react';
import './AboutMandate.css';

const AboutMandate = () => {
  return (
    <section className="about-mandate">
      <div className="container">

        <div className="mandate-header text-center animate-on-scroll">
          <div className="section-eyebrow">Strategy & Architecture</div>
          <h2 className="mandate-title">
            Institutional Architecture & <span className="text-blue">Mandate</span>
          </h2>
        </div>

        <div className="mandate-cards">

          <div className="mandate-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="mandate-card-icon">
              <Target size={24} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver world-class digital solutions that empower businesses to grow, innovate, and achieve long-term success across industries.
            </p>
          </div>

          <div className="mandate-card featured-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="mandate-card-icon">
              <Eye size={24} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a globally recognized technology company that enables businesses to stay ahead through innovation, quality, and excellence.
            </p>
          </div>

          <div className="mandate-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="mandate-card-icon">
              <Trophy size={24} />
            </div>
            <h3>Our Goals</h3>
            <p>
              To drive innovation, deliver measurable value, ensure client success, foster sustainable growth, and uphold integrity in every solution we create.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMandate;
