import React from 'react';
import { ArrowRight, BarChart2, Settings, Rocket } from 'lucide-react';
import './PosCta.css';

const PosCta = () => {
  return (
    <section className="pos-cta-section">
      <div className="container pos-cta-container">
        
        <div className="pos-cta-content">
          <div className="pos-cta-badge">
            <span className="cta-badge-line"></span>
            <span className="cta-badge-text">READY TO UPGRADE YOUR CHECKOUT?</span>
          </div>
          
          <h2 className="pos-cta-title">
            Power Your Business<br/>
            With <span className="pos-cta-blue">Mostech POS</span>
          </h2>
          
          <p className="pos-cta-desc">
            Bring sales, inventory, payments, and business management together with reliable POS hardware and powerful software.
          </p>
          
          <a href="#demo" className="pos-cta-btn">
            Request a Demo <ArrowRight size={18} />
          </a>
          
          <div className="pos-cta-features">
            <div className="pos-cta-feat-item">
              <BarChart2 size={18} className="cta-feat-icon" />
              <span>SMARTER SALES</span>
            </div>
            
            <div className="cta-feat-divider"></div>
            
            <div className="pos-cta-feat-item">
              <Settings size={18} className="cta-feat-icon" />
              <span>BETTER CONTROL</span>
            </div>
            
            <div className="cta-feat-divider"></div>
            
            <div className="pos-cta-feat-item">
              <Rocket size={18} className="cta-feat-icon" />
              <span>STRONGER BUSINESS</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PosCta;
