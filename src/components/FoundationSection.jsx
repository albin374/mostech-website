import React from 'react';
import { Target, Eye, Trophy } from 'lucide-react';
import './FoundationSection.css';

const FoundationSection = () => {
  return (
    <section className="foundation-section">
      <div className="container">
        
        {/* Header Content */}
        <div className="foundation-header">
          <h2 className="foundation-title">
            Driven by <span className="text-blue">Purpose</span>. Focused on <span className="text-blue">Impact</span>.
          </h2>
          
          <p className="foundation-subtitle">
            Our mission, vision, and goals shape the way we build solutions,<br/>
            empower businesses, and create lasting value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="foundation-cards-wrapper">
          
          {/* Card 1: Mission */}
          <div className="foundation-card card-mission">
            <div className="card-top-content">
              <div className="card-icon-wrapper icon-mission">
                <Target size={36} color="#ffffff" strokeWidth={2} />
              </div>
              <h3>OUR MISSION</h3>
              <div className="card-divider divider-mission"></div>
              <p>
                To deliver world-class IT solutions and digital engineering services that maximize client ROI, operational speed, and business innovation. We prioritize long-term client partnerships, continuous technical excellence, and transparent delivery standards while maintaining strict compliance with global software benchmarks.
              </p>
            </div>
            <img src="/final%20mission.png" alt="Mission" className="card-bottom-image" />
          </div>

          {/* Card 2: Vision */}
          <div className="foundation-card card-vision">
            <div className="card-top-content">
              <div className="card-icon-wrapper icon-vision">
                <Eye size={36} color="#ffffff" strokeWidth={2} />
              </div>
              <h3>OUR VISION</h3>
              <div className="card-divider divider-vision"></div>
              <p>
                To be the most trusted technology partner in the UAE and Middle East, empowering enterprises with resilient, secure, and intuitive digital applications that simplify complexity and drive sustainable competitive advantage in an evolving global market.
              </p>
            </div>
            <img src="/about34.png" alt="Vision" className="card-bottom-image" />
          </div>

          {/* Card 3: Goals */}
          <div className="foundation-card card-goals">
            <div className="card-top-content">
              <div className="card-icon-wrapper icon-goals">
                <Trophy size={36} color="#ffffff" strokeWidth={2} />
              </div>
              <h3>OUR GOALS</h3>
              <div className="card-divider divider-goals"></div>
              <p>
                Our goal is to assist companies of all sizes—from high-growth startups to established corporate enterprises—in digitizing core operations, expanding online market presence through performance marketing, and executing seamless digital transformation journeys.
              </p>
            </div>
            <img src="/about3.png" alt="Goals" className="card-bottom-image" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
