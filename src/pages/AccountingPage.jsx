import React, { useEffect } from 'react';
import { ArrowRight, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import AccountingFeatures from '../components/products/AccountingFeatures';
import AccountingBenefits from '../components/products/AccountingBenefits';
import AccountingCta from '../components/products/AccountingCta';
import './AccountingPage.css';

const AccountingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="accounting-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* ================= HERO SECTION ================= */}
      <section className="accounting-hero-section">
        <div className="container accounting-hero-container">
          
          {/* Left Content */}
          <div className="accounting-hero-left">
            <div className="accounting-hero-badge">
              <span className="badge-line"></span>
              <span className="badge-text">ACCOUNTING SOFTWARE</span>
            </div>

            <h1 className="accounting-main-title">
              Powerful Accounting<br/>
              Software Built for<br/>
              <span className="accounting-blue-text">Smarter Business</span>
            </h1>

            <p className="accounting-desc">
              Manage finances, invoices, expenses, reports, and<br/>
              business transactions from one simple, connected platform.
            </p>

            {/* Action Buttons */}
            <div className="accounting-action-buttons">
              <a href="#demo" className="accounting-btn-primary">
                Request a Demo <ArrowRight size={18} />
              </a>
              <a href="#features" className="accounting-btn-secondary">
                Explore Features <ArrowRight size={18} />
              </a>
            </div>
            


          </div>

          {/* Right Content */}
          <div className="accounting-hero-right">
            <img src="/accounting.png" alt="Mostech Accounting Software" className="accounting-hero-img" />
            
            {/* Bottom Features List moved here */}
            <div className="accounting-hero-features-list">
              <div className="accounting-feature-item">
                <div className="accounting-icon-wrapper">
                  <Clock size={24} className="accounting-blue-icon" />
                </div>
                <div className="accounting-feature-text">
                  <span className="feature-title">Save Time</span>
                  <span className="feature-subtitle">AutomateTasks</span>
                </div>
              </div>
              <div className="accounting-feature-item">
                <div className="accounting-icon-wrapper">
                  <ShieldCheck size={24} className="accounting-blue-icon" />
                </div>
                <div className="accounting-feature-text">
                  <span className="feature-title">Stay Compliant</span>
                  <span className="feature-subtitle">UAE VAT Ready</span>
                </div>
              </div>
              <div className="accounting-feature-item">
                <div className="accounting-icon-wrapper">
                  <TrendingUp size={24} className="accounting-blue-icon" />
                </div>
                <div className="accounting-feature-text">
                  <span className="feature-title">Grow Faster</span>
                  <span className="feature-subtitle">With Better Insights</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <AccountingFeatures />

      {/* ================= BENEFITS SECTION ================= */}
      <AccountingBenefits />

      {/* ================= CTA SECTION ================= */}
      <AccountingCta />

    </main>
  );
};

export default AccountingPage;
