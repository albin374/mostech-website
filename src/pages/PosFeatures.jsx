import React from 'react';
import { Zap, Package, Tag, CreditCard, BarChart2, Users } from 'lucide-react';
import './PosFeatures.css';

const PosFeatures = () => {
  return (
    <section className="pos-features-section">
      <div className="container pos-features-container">
        
        {/* Header */}
        <div className="pos-feat-header">
          <div className="pos-feat-badge">
            <span className="badge-line"></span>
            <span className="badge-text">MORE THAN A POS MACHINE</span>
          </div>
          <h2 className="pos-feat-title">
            Everything Your Business<br/>
            <span className="pos-feat-blue">Needs at the Counter</span>
          </h2>
          <p className="pos-feat-subtitle">
            Connect your sales, inventory, payments, and business data through one powerful POS system.
          </p>
        </div>

        {/* Body Layout */}
        <div className="pos-feat-body">
          
          {/* Left Column */}
          <div className="pos-feat-col left-col">
            
            {/* Card 01 - Dark */}
            <div className="pos-card dark-card">
              <div className="pos-card-left">
                <span className="pos-card-num">01</span>
                <span className="pos-card-divider"></span>
              </div>
              <div className="pos-card-content">
                <h4>Fast Billing</h4>
                <p>Create orders and complete transactions quickly.</p>
              </div>
              <div className="pos-card-icon-wrap">
                <Zap size={20} className="icon-light" />
              </div>
            </div>

            {/* Card 02 - Light */}
            <div className="pos-card light-card">
              <div className="pos-card-left">
                <span className="pos-card-num">02</span>
                <span className="pos-card-divider"></span>
              </div>
              <div className="pos-card-content">
                <h4>Inventory Management</h4>
                <p>Track products, stock levels, and inventory movements.</p>
              </div>
              <div className="pos-card-icon-wrap">
                <Package size={20} className="icon-blue" />
              </div>
            </div>

            {/* Card 05 - Dark */}
            <div className="pos-card dark-card">
              <div className="pos-card-left">
                <span className="pos-card-num">05</span>
                <span className="pos-card-divider"></span>
              </div>
              <div className="pos-card-content">
                <h4>Product Management</h4>
                <p>Organize products, prices, categories, and variations.</p>
              </div>
              <div className="pos-card-icon-wrap">
                <Tag size={20} className="icon-light" />
              </div>
            </div>

          </div>

          {/* Center Column for POS image */}
          <div className="pos-feat-center">
            <img src="/pos3.png" alt="POS Hardware System" className="center-pos-img" />
          </div>

          {/* Right Column */}
          <div className="pos-feat-col right-col">
            
            {/* Card 03 - Light */}
            <div className="pos-card light-card">
              <div className="pos-card-left">
                <span className="pos-card-num">03</span>
                <span className="pos-card-divider"></span>
              </div>
              <div className="pos-card-content">
                <h4>Multiple Payments</h4>
                <p>Accept different payment methods with ease.</p>
              </div>
              <div className="pos-card-icon-wrap">
                <CreditCard size={20} className="icon-blue" />
              </div>
            </div>

            {/* Card 04 - Dark */}
            <div className="pos-card dark-card">
              <div className="pos-card-left">
                <span className="pos-card-num">04</span>
                <span className="pos-card-divider"></span>
              </div>
              <div className="pos-card-content">
                <h4>Sales Reports</h4>
                <p>Understand sales, revenue, and product performance.</p>
              </div>
              <div className="pos-card-icon-wrap">
                <BarChart2 size={20} className="icon-light" />
              </div>
            </div>

            {/* Card 06 - Light */}
            <div className="pos-card light-card">
              <div className="pos-card-left">
                <span className="pos-card-num">06</span>
                <span className="pos-card-divider"></span>
              </div>
              <div className="pos-card-content">
                <h4>Customer Management</h4>
                <p>Keep customer information and purchase history organized.</p>
              </div>
              <div className="pos-card-icon-wrap">
                <Users size={20} className="icon-blue" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PosFeatures;
