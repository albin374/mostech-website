import React from 'react';
import { Users, DollarSign, Package, ShoppingCart, ClipboardList, Settings, Infinity } from 'lucide-react';
import './ErpProductFeatures.css';

const ErpProductFeatures = () => {
  return (
    <section className="erp-features-section">
      <div className="container">
        
        {/* Top Header Section */}
        <div className="erp-features-header-row">
          
          {/* Left Text */}
          <div className="erp-features-text-content">
            <div className="features-badge">
              <span className="badge-bg-num">02</span>
              <span className="badge-text">02 ONE PLATFORM. EVERY BUSINESS FUNCTION. <span className="line"></span></span>
            </div>
            
            <h2 className="features-title">
              Everything Your<br />
              Business Needs. <span className="text-blue">Connected.</span>
            </h2>
            
            <p className="features-desc text-dark">
              Stop switching between different systems to manage different departments.
            </p>
            
            <p className="features-desc">
              <span className="text-blue font-semibold">Mostech ERP</span> connects your core business functions into <span className="text-blue font-semibold">one centralized platform</span>, allowing teams to share data, automate workflows, and work from a single source of truth.
            </p>
          </div>

          {/* Right Circular Graphic */}
          <div className="erp-features-circular-graphic">
            <img src="/mostech erp.png" alt="Mostech ERP" className="erp-graphic-img" />
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="erp-features-grid">
          
          {/* Card 1: HR */}
          <div className="erp-feature-card b-blue">
            <div className="card-top">
              <div className="card-header">
                <div className="card-icon bg-blue-light"><Users size={24} color="#0044cc" /></div>
                <div className="card-title-box">
                  <h3>Human Resources</h3>
                  <p>Manage your people and workforce.</p>
                </div>
              </div>
              <div className="card-graphic">
                <div className="g-ui-list">
                  <div className="g-ui-row"><div className="g-av"></div><div className="g-lines"><div className="l1"></div><div className="l2"></div></div></div>
                  <div className="g-ui-row"><div className="g-av"></div><div className="g-lines"><div className="l1"></div><div className="l2"></div></div></div>
                </div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-footer">
              <div className="tag-row">
                <span>Employees</span><span className="dot d-blue"></span>
                <span>Payroll</span><span className="dot d-blue"></span>
                <span>Attendance</span>
              </div>
              <div className="tag-row">
                <span>Leave</span><span className="dot d-blue"></span>
                <span>Recruitment</span>
              </div>
            </div>
          </div>

          {/* Card 2: Finance */}
          <div className="erp-feature-card b-green">
            <div className="card-top">
              <div className="card-header">
                <div className="card-icon bg-green-light"><DollarSign size={24} color="#16a34a" /></div>
                <div className="card-title-box">
                  <h3>Finance & Accounting</h3>
                  <p>Stay in control of your business finances.</p>
                </div>
              </div>
              <div className="card-graphic">
                <div className="g-chart-bars">
                  <div className="g-bar b1"></div>
                  <div className="g-bar b2"></div>
                  <div className="g-bar b3"></div>
                  <div className="g-pie"></div>
                </div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-footer">
              <div className="tag-row">
                <span>Accounting</span><span className="dot d-green"></span>
                <span>Expenses</span><span className="dot d-green"></span>
                <span>Invoices</span>
              </div>
              <div className="tag-row">
                <span>Payments</span><span className="dot d-green"></span>
                <span>Financial Reports</span>
              </div>
            </div>
          </div>

          {/* Card 3: Inventory */}
          <div className="erp-feature-card b-purple">
            <div className="card-top">
              <div className="card-header">
                <div className="card-icon bg-purple-light"><Package size={24} color="#8b5cf6" /></div>
                <div className="card-title-box">
                  <h3>Inventory Management</h3>
                  <p>Know what you have and where it is.</p>
                </div>
              </div>
              <div className="card-graphic">
                 <div className="g-boxes">
                    <div className="g-box"></div>
                    <div className="g-box"></div>
                    <div className="g-box"></div>
                 </div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-footer">
              <div className="tag-row">
                <span>Stock</span><span className="dot d-purple"></span>
                <span>Warehouses</span><span className="dot d-purple"></span>
                <span>Products</span>
              </div>
              <div className="tag-row">
                <span>Transfers</span><span className="dot d-purple"></span>
                <span>Inventory Reports</span>
              </div>
            </div>
          </div>

          {/* Card 4: Sales */}
          <div className="erp-feature-card b-orange">
            <div className="card-top">
              <div className="card-header">
                <div className="card-icon bg-orange-light"><ShoppingCart size={24} color="#f97316" /></div>
                <div className="card-title-box">
                  <h3>Sales Management</h3>
                  <p>Turn opportunities into revenue.</p>
                </div>
              </div>
              <div className="card-graphic">
                <div className="g-ui-list">
                  <div className="g-ui-row-simple"><div className="g-circle"></div><div className="l1"></div></div>
                  <div className="g-ui-row-simple"><div className="g-circle"></div><div className="l1"></div></div>
                </div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-footer">
              <div className="tag-row">
                <span>Customers</span><span className="dot d-orange"></span>
                <span>Quotations</span><span className="dot d-orange"></span>
                <span>Sales Orders</span>
              </div>
              <div className="tag-row">
                <span>Invoices</span><span className="dot d-orange"></span>
                <span>Sales Analytics</span>
              </div>
            </div>
          </div>

          {/* Card 5: Procurement */}
          <div className="erp-feature-card b-teal">
            <div className="card-top">
              <div className="card-header">
                <div className="card-icon bg-teal-light"><ClipboardList size={24} color="#14b8a6" /></div>
                <div className="card-title-box">
                  <h3>Procurement</h3>
                  <p>Make purchasing faster and more organized.</p>
                </div>
              </div>
              <div className="card-graphic">
                <div className="g-trolley">
                  <ShoppingCart size={32} color="#cbd5e1" strokeWidth={1.5} />
                  <div className="g-trolley-box"></div>
                </div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-footer">
              <div className="tag-row">
                <span>Suppliers</span><span className="dot d-teal"></span>
                <span>Purchase Requests</span><span className="dot d-teal"></span>
                <span>Purchase Orders</span>
              </div>
              <div className="tag-row">
                <span>Approvals</span><span className="dot d-teal"></span>
                <span>Vendor Management</span>
              </div>
            </div>
          </div>

          {/* Card 6: Operations */}
          <div className="erp-feature-card b-darkblue">
            <div className="card-top">
              <div className="card-header">
                <div className="card-icon bg-blue-light"><Settings size={24} color="#0044cc" /></div>
                <div className="card-title-box">
                  <h3>Operations</h3>
                  <p>Connect your everyday business operations.</p>
                </div>
              </div>
              <div className="card-graphic">
                <div className="g-ui-checks">
                  <div className="g-check-row"><div className="check">✓</div><div className="l1"></div></div>
                  <div className="g-check-row"><div className="check">✓</div><div className="l1"></div></div>
                  <div className="g-check-row"><div className="check">✓</div><div className="l1"></div></div>
                </div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-footer">
              <div className="tag-row">
                <span>Workflows</span><span className="dot d-blue"></span>
                <span>Tasks</span><span className="dot d-blue"></span>
                <span>Projects</span>
              </div>
              <div className="tag-row">
                <span>Resources</span><span className="dot d-blue"></span>
                <span>Operational Reports</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="erp-features-banner">
          <div className="banner-icon-circle">
             <Infinity size={28} color="#ffffff" />
          </div>
          <div className="banner-text">
             One ERP. Every department. <span className="text-blue">One connected business.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ErpProductFeatures;
