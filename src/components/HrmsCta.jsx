import React from 'react';
import { Star, ArrowRight, Users, ShieldCheck, UserCheck, BarChart2 } from 'lucide-react';
import './HrmsCta.css';

const HrmsCta = () => {
  return (
    <section className="hrms-cta-section">
      <div className="container">
        <div className="cta-wrapper">
          
          {/* Left Content */}
          <div className="cta-content">
            
            <h2 className="cta-title">
              Your People.<br />
              Your Processes.<br />
              <span className="text-blue">One Powerful HRMS.</span>
            </h2>
            
            <p className="cta-desc">
              Take control of your HR operations with a smarter, simpler, and more connected workforce management platform.
            </p>
            
            <button className="cta-button">
              Request a Demo <ArrowRight size={18} />
            </button>
            
            <div className="cta-footer-blurb">
              <div className="blurb-icon">
                <Users size={20} color="#1a56db" />
              </div>
              <div className="blurb-text">
                <strong>Built for modern teams.</strong>
                <span>Designed to scale with your organization.</span>
              </div>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="cta-visuals">
            {/* Background Graphic Elements */}
            <div className="bg-glow"></div>
            <svg className="bg-lines" viewBox="0 0 400 400">
               <circle cx="200" cy="200" r="150" fill="none" stroke="#d0e1fd" strokeWidth="1" strokeDasharray="4 4" />
               <circle cx="200" cy="200" r="190" fill="none" stroke="#d0e1fd" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Provided Image */}
            <div className="cta-provided-image-wrapper">
              <img src="/finalcta.png" alt="HRMS Dashboard CTA" className="cta-provided-image" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HrmsCta;
