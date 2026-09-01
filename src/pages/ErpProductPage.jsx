import React, { useEffect } from 'react';
import { ArrowRight, Users, Package, Store, SlidersHorizontal } from 'lucide-react';
import ErpProductFeatures from '../components/ErpProductFeatures';
import ErpProductCta from '../components/ErpProductCta';
import './ErpProductPage.css';

const ErpProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="erp-product-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      
      {/* ================= HERO SECTION ================= */}
      <section className="erp-product-hero-section">
        <div className="container erp-product-hero-container">
          
          {/* Left Content */}
          <div className="erp-product-hero-left">
            <div className="erp-product-hero-badge">
              <span className="erp-product-blue-text-badge">MOSTECH ERP —</span>
            </div>

            <h1 className="erp-product-main-title">
              <span className="erp-product-blue-text">Switch to<br/>Smarter</span> ERP.
            </h1>

            <h3 className="erp-product-subtitle-bold">
              Manage Your Business With<br/>One Powerful Platform.
            </h3>

            <p className="erp-product-desc">
              Bring HR, Finance, Inventory, Sales, Procurement,<br/>
              and Operations together in one connected ERP platform.
            </p>

            <p className="erp-product-desc">
              Mostech ERP helps your business replace disconnected<br/>
              systems and manual processes with a <span className="erp-product-blue-text">single, intelligent</span><br/>
              platform built to manage <span className="erp-product-blue-text">everything in one place.</span>
            </p>

            {/* Action Buttons */}
            <div className="erp-product-action-buttons">
              <a href="/#demo" className="erp-product-btn-primary">
                Request a Demo <ArrowRight size={18} />
              </a>
              <a href="/#modules" className="erp-product-btn-secondary">
                Explore Modules
              </a>
            </div>
            
            {/* Bottom Icons List */}
            <div className="erp-product-hero-icons-list">
              <div className="erp-product-icon-item">
                <Users size={24} className="erp-product-blue-icon" />
                <span>HR & Payroll</span>
              </div>
              <div className="erp-product-icon-item">
                <DollarSign size={24} className="erp-product-blue-icon" />
                <span>Finance</span>
              </div>
              <div className="erp-product-icon-item">
                <Package size={24} className="erp-product-blue-icon" />
                <span>Inventory</span>
              </div>
              <div className="erp-product-icon-item">
                <Store size={24} className="erp-product-blue-icon" />
                <span>Sales</span>
              </div>
              <div className="erp-product-icon-item">
                <div className="erp-product-blue-icon erp-product-cart-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </div>
                <span>Procurement</span>
              </div>
              <div className="erp-product-icon-item">
                <SlidersHorizontal size={24} className="erp-product-blue-icon" />
                <span>Operations</span>
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="erp-product-hero-right">
            <img src="/erpsection1.png" alt="Mostech ERP Dashboard" className="erp-product-hero-img" />
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <ErpProductFeatures />

      {/* ================= FINAL CTA SECTION ================= */}
      <ErpProductCta />

    </main>
  );
};

export default ErpProductPage;
