import React from 'react';
import './ProjectCta.css';
import { Target, Users, Rocket, ArrowRight } from 'lucide-react';

const ProjectCta = () => {
  return (
    <section className="pm-cta-section">
      <div className="container pm-cta-container">
        
        {/* Left Column */}
        <div className="pm-cta-left">
          <div className="pm-section-badge">
            <span className="pm-badge-number">04</span>
            <span className="pm-badge-text">Final CTA</span>
          </div>
          
          <h2 className="pm-cta-title">
            Turn Every Project<br/>
            <span className="pm-text-light-blue">Into Progress.</span>
          </h2>
          
          <p className="pm-cta-desc">
            Bring your teams, tasks, timelines, and goals together with a smarter project management platform.
          </p>

          <div className="pm-cta-features">
            <div className="pm-cta-feature">
              <div className="pm-cta-icon bg-blue"><Target size={24} color="#ffffff" /></div>
              <h4 className="text-blue">Plan better.</h4>
              <p>Set clear goals and stay on track.</p>
            </div>
            
            <div className="pm-cta-feature">
              <div className="pm-cta-icon bg-green"><Users size={24} color="#ffffff" /></div>
              <h4 className="text-green">Work together.</h4>
              <p>Collaborate seamlessly across your team.</p>
            </div>
            
            <div className="pm-cta-feature">
              <div className="pm-cta-icon bg-purple"><Rocket size={24} color="#ffffff" /></div>
              <h4 className="text-purple">Deliver on time.</h4>
              <p>Meet deadlines and achieve more.</p>
            </div>
          </div>
          
          <a href="/#contact" className="pm-cta-btn">
            Start Managing Projects Smarter <ArrowRight size={20} />
          </a>
          
        </div>

        {/* Right Column (Image) */}
        <div className="pm-cta-right">
          <img src="/cta.png" alt="Project Dashboard" className="pm-cta-main-img" />
          
          <div className="pm-cta-robot-box">
            <img src="/cta robot.png" alt="Smart Robot" className="pm-cta-robot-img" />
            <div className="pm-robot-bubble">
              <p>
                Smarter planning.<br/>
                Stronger teams.<br/>
                <span className="pm-text-light-blue font-bold">Successful delivery.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectCta;
