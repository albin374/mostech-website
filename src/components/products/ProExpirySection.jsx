import React from 'react';
import { FileText, AlertTriangle, Calendar, RefreshCw, Bell } from 'lucide-react';
import './ProExpirySection.css';

const ProExpirySection = () => {
  return (
    <section className="pro-expiry-section">
      <div className="container pro-expiry-container">
        
        {/* Left Column - Content */}
        <div className="pro-expiry-content">
          

          
          <h2 className="pro-expiry-title">
            Never Miss an Important<br/>
            <span className="pro-expiry-blue">Document Expiry</span>
          </h2>
          
          <p className="pro-expiry-desc">
            Identify upcoming expiries before they become a problem and keep your operations on track.
          </p>

          {/* 2x2 Feature Grid */}
          <div className="pro-expiry-grid">
            
            <div className="expiry-grid-item">
              <div className="expiry-icon red-light-bg">
                <FileText size={24} color="#ef4444" />
              </div>
              <span>Documents<br/>expiring soon</span>
            </div>

            <div className="expiry-grid-item">
              <div className="expiry-icon red-light-bg">
                <AlertTriangle size={24} color="#ef4444" />
              </div>
              <span>Expired<br/>documents</span>
            </div>

            <div className="expiry-grid-item">
              <div className="expiry-icon blue-light-bg">
                <Calendar size={24} color="#3b82f6" />
              </div>
              <span>Days<br/>remaining</span>
            </div>

            <div className="expiry-grid-item">
              <div className="expiry-icon blue-light-bg">
                <RefreshCw size={24} color="#3b82f6" />
              </div>
              <span>Upcoming<br/>renewals</span>
            </div>

          </div>


          {/* Bottom Banner */}
          <div className="pro-expiry-banner">
            <div className="banner-icon-wrapper">
              <Bell size={28} color="#ffffff" />
            </div>
            <div className="banner-text">
              <p>Less checking. Less chasing.</p>
              <p className="banner-highlight">More control.</p>
            </div>
          </div>

        </div>

        {/* Right Column - Image & Filters */}
        <div className="pro-expiry-image-wrapper">
          <img src="/pro3.png" alt="Expiry & Renewal Management Dashboard" className="pro-expiry-img" />
          
          {/* Filters Section */}
          <div className="pro-expiry-filters-section">
            <h3>See What Needs Attention</h3>
            <div className="expiry-filters">
              <button className="expiry-filter-btn active">7 Days</button>
              <button className="expiry-filter-btn">30 Days</button>
              <button className="expiry-filter-btn">60 Days</button>
              <button className="expiry-filter-btn">90 Days</button>
            </div>
            <p className="expiry-filter-desc">
              Quickly identify which documents require action.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProExpirySection;
