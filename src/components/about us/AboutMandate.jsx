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
              To deliver world-class IT solutions and digital engineering services that maximize client ROI, operational speed, and business innovation. We prioritize long-term client partnerships, continuous technical excellence, and transparent delivery standards while maintaining strict compliance with global software benchmarks.
            </p>
            <a href="#mission" className="mandate-link">
              Read Mission Strategy <ArrowRight size={16} />
            </a>
          </div>

          <div className="mandate-card featured-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="mandate-card-icon">
              <Eye size={24} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted technology partner in the UAE and Middle East, empowering enterprises with resilient, secure, and intuitive digital applications that simplify complexity and drive sustainable competitive advantage in an evolving global market.
            </p>
            <a href="#vision" className="mandate-link">
              Read Vision Strategy <ArrowRight size={16} />
            </a>
          </div>

          <div className="mandate-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="mandate-card-icon">
              <Trophy size={24} />
            </div>
            <h3>Our Goals</h3>
            <p>
              Our goal is to assist companies of all sizes—from high-growth startups to established corporate enterprises—in digitizing core operations, expanding online market presence through performance marketing, and executing seamless digital transformation journeys.
            </p>
            <a href="#goals" className="mandate-link">
              Read Goals Strategy <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMandate;
