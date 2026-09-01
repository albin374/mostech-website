import React from 'react';
import { ArrowRight, Layers, Settings, ShieldCheck, Infinity } from 'lucide-react';
import './ErpProductCta.css';

const ErpProductCta = () => {
  return (
    <section className="erp-product-cta-section">
      <div className="container">
        
        {/* Top Row: Text and Image */}
        <div className="erp-cta-top-row">
          
          {/* Left Text Content */}
          <div className="erp-cta-text-content">
            <h2 className="erp-cta-title">
              Your Business.<br />
              <span className="text-blue">One Powerful ERP.</span>
            </h2>
            
            <h3 className="erp-cta-subtitle">
              Switch to Smarter ERP.
            </h3>
            
            <p className="erp-cta-desc">
              Bring your people, finances, inventory, sales, procurement, and operations together with <span className="font-semibold text-blue">Mostech ERP</span>.
            </p>
            
            <p className="erp-cta-desc">
              Simplify processes. Connect departments. Gain visibility. <span className="font-semibold text-blue">Grow your business from one powerful platform.</span>
            </p>
            
            <button className="erp-btn-primary mt-4">
              Request a Demo <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Right Image */}
          <div className="erp-cta-image-wrapper">
            <img src="/erp cta.png" alt="Mostech ERP Dashboard" className="erp-cta-img" />
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="erp-cta-bottom-banner">
          
          {/* Logo Block */}
          <div className="banner-logo-block">
            <Infinity size={48} color="#051636" strokeWidth={2.5} />
            <div className="logo-text">
              <strong>MOSTECH</strong><br/>
              <span>ERP</span>
            </div>
          </div>
          
          <div className="banner-divider"></div>
          
          {/* Feature 1 */}
          <div className="banner-feature">
            <div className="b-icon-wrapper"><Layers size={24} /></div>
            <div className="b-text">
              <h4>One Platform.</h4>
              <p>All your business functions in one place.</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="banner-feature">
            <div className="b-icon-wrapper"><Settings size={24} /></div>
            <div className="b-text">
              <h4>Every Process.</h4>
              <p>Automate workflows and eliminate silos.</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="banner-feature">
            <div className="b-icon-wrapper"><ShieldCheck size={24} /></div>
            <div className="b-text">
              <h4>Complete Business Control.</h4>
              <p>Real-time visibility. Smarter decisions. Better results.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ErpProductCta;
