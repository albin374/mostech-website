import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Target } from 'lucide-react';
import './AccountingCta.css';

const AccountingCta = () => {
  return (
    <section className="accounting-cta-section">
      <div className="container accounting-cta-container">
        
        <div className="cta-content">
          <span className="cta-subtitle">TAKE CONTROL OF YOUR FINANCES</span>
          
          <h2 className="cta-title">
            Make Accounting<br />
            <span className="cta-blue-text">Simpler</span> With Mostech
          </h2>
          
          <p className="cta-desc">
            Bring your accounting, financial data, and business insights together in one powerful platform.
          </p>
          
          <Link to="/contact" className="cta-btn">
            Request a Demo <ArrowRight size={18} />
          </Link>
          
          <div className="cta-features-list">
            <div className="cta-feature-item">
              <BarChart3 size={24} className="cta-icon" />
              <div className="cta-feature-text">
                <span className="cta-feat-title">Better Visibility</span>
                <span className="cta-feat-desc">Know your numbers</span>
              </div>
            </div>
            
            <div className="cta-feature-divider"></div>
            
            <div className="cta-feature-item">
              <ShieldCheck size={24} className="cta-icon" />
              <div className="cta-feature-text">
                <span className="cta-feat-title">More Control</span>
                <span className="cta-feat-desc">Manage with confidence</span>
              </div>
            </div>
            
            <div className="cta-feature-divider"></div>
            
            <div className="cta-feature-item">
              <Target size={24} className="cta-icon" />
              <div className="cta-feature-text">
                <span className="cta-feat-title">A Brighter Tomorrow</span>
                <span className="cta-feat-desc">Grow without limits</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default AccountingCta;
