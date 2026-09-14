import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, FileText, Clock } from 'lucide-react';
import PosFeatures from './PosFeatures';
import ProFeaturesSection from '../components/products/ProFeaturesSection';
import ProExpirySection from '../components/products/ProExpirySection';
import './PosMachinePage.css';

const PosMachinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pos-machine-page">
      <Helmet>
        <title>PRO Solutions | Mostech</title>
        <meta name="description" content="Manage customers, documents and renewals in one simple platform." />
      </Helmet>

      {/* Hero Section */}
      <section className="pro-hero-section">
        {/* Background Decorative Elements */}
        <div className="pro-hero-bg">
        </div>

        <div className="container pro-hero-container">
          
          <div className="pro-hero-content">
            <div className="pro-top-badge">
              <div className="pro-top-badge-line"></div>
              <span>STREAMLINE • ORGANIZE • STAY AHEAD</span>
            </div>
            
            <h1 className="pro-hero-title">
              Simplify PRO Work.<br/>
              Stay <span className="pro-blue-text">Ahead.</span>
            </h1>
            
            <p className="pro-hero-desc">
              Manage customers, documents and renewals<br/>in one simple platform.
            </p>
            
            <div className="pro-hero-buttons">
              <Link to="/contact" className="pro-btn-primary">
                Explore Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="pro-btn-outline">
                Request a Demo
              </Link>
            </div>

            <div className="pro-hero-features">
              <div className="pro-feature">
                <div className="pro-feature-icon">
                  <Users size={24} />
                </div>
                <span>Manage<br/>Customers</span>
              </div>
              
              <div className="pro-feature-divider"></div>
              
              <div className="pro-feature">
                <div className="pro-feature-icon">
                  <FileText size={24} />
                </div>
                <span>Organize<br/>Documents</span>
              </div>

              <div className="pro-feature-divider"></div>

              <div className="pro-feature">
                <div className="pro-feature-icon">
                  <Clock size={24} />
                </div>
                <span>Track<br/>Expiries</span>
              </div>
            </div>
          </div>

          <div className="pro-hero-image-wrapper">
            <img src="/pro.png" alt="PRO Software Dashboard" className="pro-main-img" />
          </div>
        </div>
      </section>

      {/* Customers & Documents Features Section */}
      <ProFeaturesSection />

      {/* Expiry & Renewal Section */}
      <ProExpirySection />

    </main>
  );
};

export default PosMachinePage;
