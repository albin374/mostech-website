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
      </div>
    </section>
  );
};

export default ErpProductCta;
