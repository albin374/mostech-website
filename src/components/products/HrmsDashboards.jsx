import React from 'react';
import { Shield, User, CheckCircle2, ArrowRight, Users, Briefcase } from 'lucide-react';
import './HrmsDashboards.css';

const HrmsDashboards = () => {
  return (
    <section className="hrms-dashboards-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="dashboards-header">
          <div className="dashboards-badge">
            <Briefcase size={16} />
            Built for Every Role. Designed for Success.
          </div>
          <h2 className="dashboards-title">
            Powerful for <span className="text-blue">Admins.</span> Simple for <span className="text-blue">Employees.</span>
          </h2>
          <p className="dashboards-subtitle">
            HRMS brings administrators and employees onto one connected platform — giving everyone the tools they need without unnecessary complexity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="dashboards-grid">
          
          {/* Admin Dashboard Card */}
          <div className="dashboard-card admin-card">
            <div className="dashboard-card-content">
              <div className="card-icon-box admin-icon-box">
                <Shield size={24} color="#ffffff" />
              </div>
              <h4 className="card-label admin-label">ADMIN DASHBOARD</h4>
              <h3 className="card-heading">Complete control over your workforce</h3>
              <p className="card-desc">Advanced tools and real-time insights to manage your organization efficiently.</p>
              
              <ul className="dashboard-feature-list admin-list">
                <li><CheckCircle2 size={18} className="check-icon" /> Employees</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Onboarding & Offboarding</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Attendance</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Payroll</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Projects</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Roles & Permissions</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Reports & Analytics</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Organizations</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Documents</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Support Tickets</li>
              </ul>
              
              <button className="dashboard-btn admin-btn">
                <ArrowRight size={18} aria-hidden="true" /> Manage Your Workforce
              </button>
            </div>
            
            <div className="dashboard-card-image-wrapper">
              <div className="glow-effect navy-glow"></div>
              <img src="/hrmssection 2.png" alt="Admin Dashboard Interface" className="dashboard-mockup admin-mockup" />
            </div>
          </div>

          {/* Employee Dashboard Card */}
          <div className="dashboard-card employee-card">
            <div className="dashboard-card-content">
              <div className="card-icon-box employee-icon-box">
                <User size={24} color="#ffffff" />
              </div>
              <h4 className="card-label employee-label">EMPLOYEE DASHBOARD</h4>
              <h3 className="card-heading">Everything employees need, in one place</h3>
              <p className="card-desc">A simple and intuitive dashboard designed for everyday ease.</p>
              
              <ul className="dashboard-feature-list employee-list">
                <li><CheckCircle2 size={18} className="check-icon" /> View attendance</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Apply for leave</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Request WFH</li>
                <li><CheckCircle2 size={18} className="check-icon" /> View projects</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Submit task reports</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Access documents</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Raise tickets</li>
              </ul>
              
              <button className="dashboard-btn employee-btn">
                <ArrowRight size={18} aria-hidden="true" /> Empower Your Employees
              </button>
            </div>
            
            <div className="dashboard-card-image-wrapper">
              <div className="glow-effect blue-glow"></div>
              <img src="/hrms section2(2).png" alt="Employee Dashboard Interface" className="dashboard-mockup employee-mockup" />
            </div>
          </div>

        </div>

        {/* Bottom Badge */}
        <div className="dashboards-bottom-pill-wrapper">
           <div className="dashboards-bottom-pill">
             <div className="bottom-pill-icon">
               <Users size={20} className="text-blue-dark" />
             </div>
             <div className="bottom-pill-text">
               <strong>One Platform. Two Experiences.</strong>
               <span>Streamlined for admins. Simplified for employees.</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HrmsDashboards;
