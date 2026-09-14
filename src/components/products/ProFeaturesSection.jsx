import React from 'react';
import { Users, FileText, User, Building, ShieldCheck, Phone, Database, UploadCloud, Search, FileMinus, Settings } from 'lucide-react';
import './ProFeaturesSection.css';

const ProFeaturesSection = () => {
  return (
    <section className="pro-feats-section">
      <div className="container pro-feats-container">
        
        {/* Header Section */}
        <div className="pro-feats-header">
          <h2 className="pro-feats-title">
            Everything Your PRO Office Needs, <span className="pro-feats-blue">in One Place</span>
          </h2>
          <p className="pro-feats-subtitle">
            Stop switching between spreadsheets, folders, emails, and paper files.
          </p>
        </div>

        {/* Cards Section */}
        <div className="pro-feats-cards">
          
          {/* Left Card - Blue Theme */}
          <div className="pro-feat-card blue-card">
            <div className="card-header">
              <div className="card-header-icon blue-icon-bg">
                <Users size={36} />
              </div>
              <div className="card-header-text">
                <h3>Manage Customers <span className="blue-text">Easily</span></h3>
                <p>Create and maintain a complete profile for every customer, including:</p>
              </div>
            </div>

            <div className="card-grid">
              
              <div className="card-grid-item">
                <div className="grid-icon blue-grid-icon">
                  <User size={20} />
                </div>
                <span>Customer details</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon blue-grid-icon">
                  <FileText size={20} />
                </div>
                <span>Associated documents</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon blue-grid-icon">
                  <Building size={20} />
                </div>
                <span>Company information</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon blue-grid-icon">
                  <ShieldCheck size={20} />
                </div>
                <span>Document status</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon blue-grid-icon">
                  <Phone size={20} />
                </div>
                <span>Contact information</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon blue-grid-icon">
                  <Database size={20} />
                </div>
                <span>Customer-specific records</span>
              </div>

            </div>
          </div>

          {/* Right Card - Orange Theme */}
          <div className="pro-feat-card orange-card">
            <div className="card-header">
              <div className="card-header-icon orange-icon-bg">
                <FileText size={36} />
              </div>
              <div className="card-header-text">
                <h3>Keep Documents <span className="blue-text">Organized</span></h3>
                <p>Upload and manage important documents directly against each customer.</p>
              </div>
            </div>

            <div className="card-grid">
              
              <div className="card-grid-item">
                <div className="grid-icon orange-grid-icon">
                  <Database size={20} />
                </div>
                <span>Centralized<br/>document storage</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon orange-grid-icon">
                  <UploadCloud size={20} />
                </div>
                <span>Easy upload<br/>and access</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon orange-grid-icon">
                  <Search size={20} />
                </div>
                <span>Fast document<br/>search</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon orange-grid-icon">
                  <FileMinus size={20} />
                </div>
                <span>Reduced<br/>paperwork</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon orange-grid-icon">
                  <Users size={20} />
                </div>
                <span>Customer-wise<br/>organization</span>
              </div>

              <div className="card-grid-item">
                <div className="grid-icon orange-grid-icon">
                  <Settings size={20} />
                </div>
                <span>Less manual<br/>tracking</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Section */}
        <div className="pro-feats-footer">
          <div className="footer-line"></div>
          <span>SIMPLER PROCESSES. HAPPIER CUSTOMERS.</span>
          <div className="footer-line"></div>
        </div>

      </div>
    </section>
  );
};

export default ProFeaturesSection;
