import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import PosFeatures from './PosFeatures';
import PosBenefits from './PosBenefits';
import PosCta from './PosCta';
import './PosMachinePage.css';

const PosMachinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pos-machine-page">
      <Helmet>
        <title>POS Machine & Software | Mostech</title>
        <meta name="description" content="Power your sales with reliable POS hardware and intuitive software designed to manage transactions, products, inventory, and business operations." />
      </Helmet>

      {/* Hero Section */}
      <section className="pos-hero-section">
        <div className="container pos-hero-container">
          
          <div className="pos-hero-content">
            <div className="pos-badge">
              <span className="pos-badge-line"></span>
              <span className="pos-badge-text">POS MACHINE & SOFTWARE</span>
            </div>
            
            <h1 className="pos-hero-title">
              Smart POS Solutions<br/>
              <span className="pos-blue-text">Built for Modern<br/>Businesses</span>
            </h1>
            
            <p className="pos-hero-desc">
              Power your sales with reliable POS hardware and intuitive software designed to manage transactions, products, inventory, and business operations from one connected system.
            </p>
            
            <div className="pos-hero-buttons">
              <Link to="/contact" className="pos-btn-primary">
                Request a Demo <ArrowRight size={18} />
              </Link>
              <a href="#features" className="pos-btn-outline">
                Explore POS Features
              </a>
            </div>
          </div>

          <div className="pos-hero-image">
            <img src="/pos.png" alt="POS Machine and Software Interface" />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <PosFeatures />

      {/* Benefits Section */}
      <PosBenefits />

      {/* CTA Section */}
      <PosCta />

    </main>
  );
};

export default PosMachinePage;
