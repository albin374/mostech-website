import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PosBenefits.css';

const PosBenefits = () => {
  return (
    <section className="pos-benefits-section">
      <div className="container pos-benefits-container">
        
        {/* Header */}
        <div className="pos-ben-header">
          <span className="pos-ben-badge">BUILT TO MAKE BUSINESS EASIER</span>
          <h2 className="pos-ben-title">
            Sell Faster. Manage Smarter. <span className="pos-ben-blue">Grow Better.</span>
          </h2>
          <p className="pos-ben-subtitle">
            Mostech POS brings your everyday operations together, giving you greater<br/>
            control over sales and business performance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="pos-ben-grid">
          
          {/* Card 01 - Large Left */}
          <div className="pos-ben-card card-01">
            <div className="card-01-content">
              <span className="ben-num-large">01</span>
              <h3 className="ben-card-title-large">FASTER<br/>OPERATIONS</h3>
              <div className="ben-divider-blue"></div>
              <p className="ben-card-desc">
                Speed up billing and<br/>
                reduce waiting time<br/>
                at checkout.
              </p>
            </div>
            <button className="ben-btn-dark">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Column Stack */}
          <div className="pos-ben-col-right">
            
            {/* Card 02 */}
            <div className="pos-ben-card card-small">
              <div className="ben-num-wrap">
                <span className="ben-num">02</span>
                <div className="ben-vert-divider"></div>
              </div>
              <div className="ben-card-body">
                <h4 className="ben-card-title">BETTER<br/>STOCK CONTROL</h4>
                <div className="ben-horiz-divider"></div>
                <p className="ben-card-desc-small">
                  Know what is selling and<br/>
                  keep track of available inventory.
                </p>
              </div>
              <button className="ben-btn-light">
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Card 03 */}
            <div className="pos-ben-card card-small">
              <div className="ben-num-wrap">
                <span className="ben-num">03</span>
                <div className="ben-vert-divider"></div>
              </div>
              <div className="ben-card-body">
                <h4 className="ben-card-title">CLEAR BUSINESS<br/>INSIGHTS</h4>
                <div className="ben-horiz-divider"></div>
                <p className="ben-card-desc-small">
                  View sales data and reports<br/>
                  to make smarter decisions.
                </p>
              </div>
              <button className="ben-btn-light">
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

          {/* Card 04 - Full Width Bottom */}
          <div className="pos-ben-card card-wide">
            <div className="ben-num-wrap-wide">
              <span className="ben-num-huge">04</span>
              <div className="ben-vert-divider-wide"></div>
            </div>
            <div className="ben-card-body-wide">
              <h4 className="ben-card-title">ONE CONNECTED SYSTEM</h4>
              <div className="ben-horiz-divider"></div>
              <p className="ben-card-desc-small">
                Keep your POS, products, payments,<br/>
                and business data connected.
              </p>
            </div>
            <div className="ben-wide-btn-wrap">
              <button className="ben-btn-light">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PosBenefits;
