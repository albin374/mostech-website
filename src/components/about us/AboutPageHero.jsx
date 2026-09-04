import React from 'react';
import './AboutPageHero.css';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutHeroBg from '../../assets/about.png';

const AboutPageHero = () => {
  return (
    <section 
      className="about-hero animate-on-scroll"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 12, 76, 0.95) 0%, rgba(2, 12, 76, 0.82) 50%, rgba(11, 68, 135, 0.45) 100%), url(${aboutHeroBg})`
      }}
    >
      <div className="container about-hero-container">
        <div className="about-hero-content">
          <div className="section-eyebrow">About Mostech</div>
          <h1 className="about-hero-title">
            Building Tomorrow's Digital Infrastructure. <span>Today.</span>
          </h1>
          <p className="about-hero-subtitle">
            We are a premier digital transformation agency based in Dubai, empowering enterprises with scalable platforms, cloud solutions, and cutting-edge software engineering.
          </p>
          <div className="about-hero-actions">
            <Link to="/contact" className="btn btn-primary hero-btn">
              Talk to Our Team <MessageSquare size={15} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline hero-btn-outline">
              View Our Work <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;
