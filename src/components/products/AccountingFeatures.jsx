import React from 'react';
import { 
  ArrowRight, 
  ShoppingCart, 
  Plane, 
  Home, 
  Megaphone,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Clock,
  TrendingUp,
  FileText
} from 'lucide-react';
import './AccountingFeatures.css';

const AccountingFeatures = () => {
  return (
    <section className="accounting-features-section" id="features">
      <div className="container accounting-features-container">
        
        {/* Section Header */}
        <div className="features-header-top">
          <span className="features-badge-line"></span>
          <span className="features-badge-text">FEATURES</span>
        </div>
        <h2 className="features-main-title">
          Everything You Need.<br/>
          <span className="features-blue-text">One Powerful Platform.</span>
        </h2>
        <p className="features-subtitle">
          Simplify everyday accounting with tools designed to give your business better control and visibility.
        </p>

        {/* Features Grid */}
        <div className="features-grid">

          {/* Card 1: Invoicing */}
          <div className="feature-card">
            <div className="feature-card-content">
              <span className="card-number">01</span>
              <h3 className="card-title">Invoicing</h3>
              <p className="card-desc">Create, send, and track professional invoices with ease.</p>
              <button className="card-arrow-btn"><ArrowRight size={20} /></button>
            </div>
            <div className="feature-card-visual bg-light-blue">
              <div className="mini-ui mini-invoice">
                <div className="mini-invoice-header">
                  <span className="mini-invoice-title">Invoice</span>
                  <span className="mini-badge bg-green">Paid</span>
                </div>
                <div className="mini-invoice-body">
                  <div className="skeleton-line w-70"></div>
                  <div className="skeleton-line w-50"></div>
                  <div className="skeleton-line w-60"></div>
                </div>
                <div className="mini-invoice-footer">
                  <span className="mini-amount">AED 12,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Expense Management */}
          <div className="feature-card">
            <div className="feature-card-content">
              <span className="card-number">02</span>
              <h3 className="card-title">Expense Management</h3>
              <p className="card-desc">Record and organize business expenses in one place.</p>
              <button className="card-arrow-btn"><ArrowRight size={20} /></button>
            </div>
            <div className="feature-card-visual bg-white">
              <div className="mini-ui mini-expense-list">
                <div className="mini-expense-item">
                  <ShoppingCart size={14} className="icon-blue" />
                  <span className="expense-name">Office Supplies</span>
                  <span className="expense-amount">AED 450</span>
                </div>
                <div className="mini-expense-item">
                  <Plane size={14} className="icon-blue" />
                  <span className="expense-name">Travel</span>
                  <span className="expense-amount">AED 1,250</span>
                </div>
                <div className="mini-expense-item">
                  <Home size={14} className="icon-blue" />
                  <span className="expense-name">Utilities</span>
                  <span className="expense-amount">AED 320</span>
                </div>
                <div className="mini-expense-item">
                  <Megaphone size={14} className="icon-blue" />
                  <span className="expense-name">Marketing</span>
                  <span className="expense-amount">AED 680</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Financial Reports */}
          <div className="feature-card">
            <div className="feature-card-content">
              <span className="card-number">03</span>
              <h3 className="card-title">Financial Reports</h3>
              <p className="card-desc">Get clear insights with real-time financial reports.</p>
              <button className="card-arrow-btn"><ArrowRight size={20} /></button>
            </div>
            <div className="feature-card-visual bg-light-blue">
              <div className="mini-ui mini-chart-widget">
                <div className="chart-header">
                  <span className="chart-title">Income vs Expenses</span>
                  <span className="chart-dropdown">This Year ▾</span>
                </div>
                <div className="chart-bars">
                  <div className="bar-group"><div className="bar-income h-40"></div><div className="bar-expense h-20"></div></div>
                  <div className="bar-group"><div className="bar-income h-60"></div><div className="bar-expense h-30"></div></div>
                  <div className="bar-group"><div className="bar-income h-50"></div><div className="bar-expense h-40"></div></div>
                  <div className="bar-group"><div className="bar-income h-80"></div><div className="bar-expense h-50"></div></div>
                  <div className="bar-group"><div className="bar-income h-70"></div><div className="bar-expense h-30"></div></div>
                  <div className="bar-group"><div className="bar-income h-90"></div><div className="bar-expense h-60"></div></div>
                </div>
                <div className="chart-labels">
                  <span>Jan</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
                <div className="chart-legend">
                  <span><div className="legend-dot dot-blue"></div> Income</span>
                  <span><div className="legend-dot dot-gray"></div> Expenses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Tax Management */}
          <div className="feature-card">
            <div className="feature-card-content">
              <span className="card-number">04</span>
              <h3 className="card-title">Tax Management</h3>
              <p className="card-desc">Keep your financial records organized and ready for tax requirements.</p>
              <button className="card-arrow-btn"><ArrowRight size={20} /></button>
            </div>
            <div className="feature-card-visual bg-white">
              <div className="mini-ui mini-vat-summary">
                <div className="vat-header">
                  <span className="vat-title">VAT Summary</span>
                  <FileText size={16} className="icon-blue" />
                </div>
                <div className="vat-row">
                  <span className="vat-label">Output VAT</span>
                  <span className="vat-value">AED 12,400</span>
                </div>
                <div className="vat-row">
                  <span className="vat-label">Input VAT</span>
                  <span className="vat-value">AED 8,200</span>
                </div>
                <div className="vat-row vat-total-row">
                  <span className="vat-label bold text-blue">Net VAT</span>
                  <span className="vat-value bold text-blue">AED 4,200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Accounts & Transactions */}
          <div className="feature-card">
            <div className="feature-card-content">
              <span className="card-number">05</span>
              <h3 className="card-title">Accounts & Transactions</h3>
              <p className="card-desc">Manage income, payments, and transactions efficiently.</p>
              <button className="card-arrow-btn"><ArrowRight size={20} /></button>
            </div>
            <div className="feature-card-visual bg-light-blue">
              <div className="mini-ui mini-transactions">
                <div className="transactions-header">Recent Transactions</div>
                <div className="transaction-item">
                  <ArrowUpRight size={14} className="text-green" />
                  <span className="transaction-name">Client Payment</span>
                  <span className="transaction-amount text-green">+ AED 5,000</span>
                </div>
                <div className="transaction-item">
                  <ArrowDownRight size={14} className="text-red" />
                  <span className="transaction-name">Office Rent</span>
                  <span className="transaction-amount text-red">- AED 2,000</span>
                </div>
                <div className="transaction-item">
                  <ArrowUpRight size={14} className="text-green" />
                  <span className="transaction-name">Sales Revenue</span>
                  <span className="transaction-amount text-green">+ AED 3,500</span>
                </div>
                <div className="transaction-item">
                  <ArrowDownRight size={14} className="text-red" />
                  <span className="transaction-name">Utility Bill</span>
                  <span className="transaction-amount text-red">- AED 450</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Business Dashboard */}
          <div className="feature-card">
            <div className="feature-card-content">
              <span className="card-number">06</span>
              <h3 className="card-title">Business Dashboard</h3>
              <p className="card-desc">See your financial performance at a glance.</p>
              <button className="card-arrow-btn"><ArrowRight size={20} /></button>
            </div>
            <div className="feature-card-visual bg-white">
              <div className="mini-ui mini-donut-widget">
                <div className="donut-chart-container">
                  <div className="donut-chart">
                    <div className="donut-hole">
                      <span className="donut-title">AED</span>
                      <span className="donut-value">248,500</span>
                    </div>
                  </div>
                </div>
                <div className="donut-legend">
                  <div className="legend-item"><span className="legend-dot dot-blue"></span> Income</div>
                  <div className="legend-item"><span className="legend-dot dot-light-blue"></span> Expenses</div>
                  <div className="legend-item"><span className="legend-dot dot-red"></span> Tax</div>
                  <div className="legend-item"><span className="legend-dot dot-gray"></span> Others</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AccountingFeatures;
