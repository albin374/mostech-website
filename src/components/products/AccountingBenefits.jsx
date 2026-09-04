import React from 'react';
import './AccountingBenefits.css';

const AccountingBenefits = () => {
  return (
    <section className="accounting-benefits-section">
      <div className="container accounting-benefits-container">
        
        {/* Left Side: Image */}
        <div className="benefits-image-col">
          <img 
            src="/accounting%20sofware2.png" 
            alt="Mostech Accounting Software Dashboard" 
            className="benefits-main-image" 
          />
        </div>

        {/* Right Side: Content */}
        <div className="benefits-content-col">
          
          <h2 className="benefits-title">
            Less Manual Work.<br/>
            <span className="benefits-blue-text">More Financial Control.</span>
          </h2>

          <p className="benefits-desc">
            Our accounting software helps you streamline your financial processes, reduce errors, and focus on what really matters — growing your business.
          </p>

          <div className="benefits-grid">
            
            {/* Box 1 */}
            <div className="benefit-box">
              <div className="benefit-header">
                <span className="benefit-number">01</span>
                <span className="benefit-line"></span>
              </div>
              <h4 className="benefit-box-title">Save Time</h4>
              <p className="benefit-box-desc">Automate repetitive accounting tasks and reduce manual work.</p>
            </div>

            {/* Box 2 */}
            <div className="benefit-box">
              <div className="benefit-header">
                <span className="benefit-number">02</span>
                <span className="benefit-line"></span>
              </div>
              <h4 className="benefit-box-title">Reduce Errors</h4>
              <p className="benefit-box-desc">Keep financial information organized and consistent.</p>
            </div>

            {/* Box 3 */}
            <div className="benefit-box">
              <div className="benefit-header">
                <span className="benefit-number">03</span>
                <span className="benefit-line"></span>
              </div>
              <h4 className="benefit-box-title">Make Better Decisions</h4>
              <p className="benefit-box-desc">Access clear financial data when you need it.</p>
            </div>

            {/* Box 4 */}
            <div className="benefit-box">
              <div className="benefit-header">
                <span className="benefit-number">04</span>
                <span className="benefit-line"></span>
              </div>
              <h4 className="benefit-box-title">Grow With Confidence</h4>
              <p className="benefit-box-desc">Build a stronger financial foundation as your business grows.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AccountingBenefits;
