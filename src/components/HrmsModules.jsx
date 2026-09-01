import React from 'react';
import { Users, Clock, BarChart2, Folder, LayoutGrid, CheckCircle2 } from 'lucide-react';
import './HrmsModules.css';

const HrmsModules = () => {
  return (
    <section className="hrms-modules-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="modules-header">
          <div className="modules-badge">
            <LayoutGrid size={16} className="text-green" />
            All Your HR Operations, Connected
          </div>
          <h2 className="modules-title">
            Everything HR Needs. <span className="text-green">Nothing You Don't.</span>
          </h2>
          <p className="modules-subtitle">
            Manage your people, processes and performance with fully integrated HR modules designed to simplify every aspect of workforce management.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="modules-grid">
          
          {/* Card 1: People Management */}
          <div className="module-card">
            <div className="module-icon-box">
              <Users size={24} color="#ffffff" />
            </div>
            <h3 className="module-card-title text-green">People Management</h3>
            <p className="module-card-desc">Build a complete employee ecosystem.</p>
            <ul className="module-feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Employees</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Onboarding</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Offboarding</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Organizations</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Roles & Permissions</li>
            </ul>
            <div className="module-mockup-wrapper">
              <img src="/hrmssection3.png" alt="People Management Module" className="module-mockup-img crop-center" />
            </div>
          </div>

          {/* Card 2: Time & Attendance */}
          <div className="module-card">
            <div className="module-icon-box">
              <Clock size={24} color="#ffffff" />
            </div>
            <h3 className="module-card-title text-green">Time & Attendance</h3>
            <p className="module-card-desc">Stay on top of workforce activity.</p>
            <ul className="module-feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Attendance</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Leave Requests</li>
              <li><CheckCircle2 size={16} className="list-icon" /> WFH Requests</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Task Reports</li>
            </ul>
            <div className="module-mockup-wrapper">
              <img src="/hrms section33.png" alt="Time & Attendance Module" className="module-mockup-img crop-center" />
            </div>
          </div>

          {/* Card 3: Work & Operations */}
          <div className="module-card">
            <div className="module-icon-box">
              <BarChart2 size={24} color="#ffffff" />
            </div>
            <h3 className="module-card-title text-green">Work & Operations</h3>
            <p className="module-card-desc">Connect people with the work they do.</p>
            <ul className="module-feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Projects</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Project Assignments</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Reports & Analytics</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Payroll</li>
            </ul>
            <div className="module-mockup-wrapper">
              <img src="/hrmssection333.png" alt="Work & Operations Module" className="module-mockup-img crop-center" />
            </div>
          </div>

          {/* Card 4: Documents & Support */}
          <div className="module-card">
            <div className="module-icon-box">
              <Folder size={24} color="#ffffff" />
            </div>
            <h3 className="module-card-title text-green">Documents & Support</h3>
            <p className="module-card-desc">Keep everything organized and accessible.</p>
            <ul className="module-feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Documents</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Ticket Raise</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Admin Tickets</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Settings</li>
            </ul>
            <div className="module-mockup-wrapper">
              <img src="/hrms section3333.png" alt="Documents & Support Module" className="module-mockup-img crop-center" />
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="modules-bottom-banner">
          <div className="banner-left">
            <div className="banner-icon-large">
              <LayoutGrid size={32} color="#16a34a" />
            </div>
            <div className="banner-stat">
              <span className="stat-number">18+</span>
              <span className="stat-text">HR Modules</span>
            </div>
          </div>
          
          <div className="banner-separator"></div>

          <div className="banner-center">
            <h3 className="banner-title">
              One Unified Platform. <span className="text-green">Every HR Need.</span>
            </h3>
            <p className="banner-desc">
              All modules work seamlessly together to simplify HR and drive organizational success.
            </p>
          </div>

          <div className="banner-right">
            <div className="node-graphic">
              <svg viewBox="0 0 100 100" className="node-lines">
                <path d="M 20 80 Q 50 20 80 50" fill="none" stroke="#dcfce7" strokeWidth="3" strokeDasharray="5,5" />
                <path d="M 80 50 Q 60 80 20 80" fill="none" stroke="#dcfce7" strokeWidth="3" strokeDasharray="5,5" />
              </svg>
              <div className="node n1"><Users size={16} color="#16a34a"/></div>
              <div className="node n2"><Users size={20} color="#ffffff"/></div>
              <div className="node n3"><Users size={14} color="#16a34a"/></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HrmsModules;
