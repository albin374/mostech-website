import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight, Users, Clock, CalendarX2, BadgeDollarSign, BarChart3 } from 'lucide-react';
import './HrmsHero.css';

const HrmsHero = () => {
  return (
    <section className="hrms-hero-section">
      <div className="container hrms-hero-container">
        {/* Left Content */}
        <div className="hrms-hero-content">
          <div className="hrms-badge">
            <span className="hrms-badge-dot"></span>
            Smart HR. Stronger Teams.
          </div>
          
          <h1 className="hrms-title">
            <span className="hrms-title-green">HRMS</span><br />
            <span className="hrms-title-black">One Platform.</span><br />
            <span className="hrms-title-black">Your Entire Workforce.</span>
          </h1>
          
          <p className="hrms-desc">
            Simplify HR management with a powerful platform built to manage employees, attendance, leaves, 
            projects, payroll, and everyday workforce operations — all in one place.
          </p>
          
          <div className="hrms-hero-buttons">
            <Link to="/contact" className="btn-primary hrms-btn" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              <CalendarDays size={18} />
              Request a Demo
            </Link>
            <button className="btn-secondary hrms-btn-outline">
              Explore Features
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="hrms-features-list">
            <div className="hrms-feature-item">
              <div className="hrms-feature-icon"><Users size={16} /></div>
              <span>Employee Management</span>
            </div>
            <span className="hrms-feature-dot"></span>
            
            <div className="hrms-feature-item">
              <div className="hrms-feature-icon"><Clock size={16} /></div>
              <span>Attendance</span>
            </div>
            <span className="hrms-feature-dot"></span>
            
            <div className="hrms-feature-item">
              <div className="hrms-feature-icon"><CalendarX2 size={16} /></div>
              <span>Leave Management</span>
            </div>
            <span className="hrms-feature-dot"></span>
            
            <div className="hrms-feature-item">
              <div className="hrms-feature-icon"><BadgeDollarSign size={16} /></div>
              <span>Payroll</span>
            </div>
            <span className="hrms-feature-dot"></span>
            
            <div className="hrms-feature-item">
              <div className="hrms-feature-icon"><BarChart3 size={16} /></div>
              <span>Reports</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hrms-hero-image">
          <div className="hrms-image-wrapper">
            <img src="/hrms banner.png" alt="HRMS Dashboard UI showing Employee Management, Attendance, Leave Management" />
            
            {/* Floating Cards */}
            <div className="hrms-floating-card card-employees">
              <div className="float-icon-wrapper bg-green-light">
                <Users size={20} className="text-green-dark" />
              </div>
              <div className="float-card-content">
                <h4 className="float-card-title">248</h4>
                <p className="float-card-subtitle">Employees</p>
                <p className="float-card-trend trend-up">↑ 12.5% <span>this month</span></p>
              </div>
            </div>

            <div className="hrms-floating-card card-attendance">
              <div className="float-icon-wrapper bg-green">
                <BarChart3 size={20} className="text-white" />
              </div>
              <div className="float-card-content">
                <h4 className="float-card-title">92%</h4>
                <p className="float-card-subtitle">Attendance</p>
                <p className="float-card-trend trend-up">↑ 8.3% <span>this month</span></p>
              </div>
            </div>

            <div className="hrms-floating-card card-analytics">
              <div className="float-icon-wrapper bg-purple">
                <BarChart3 size={20} className="text-white" />
              </div>
              <div className="float-card-content">
                <h4 className="float-card-title-sm">Workforce</h4>
                <p className="float-card-subtitle">Analytics</p>
                <p className="float-card-meta">Real-time insights</p>
              </div>
            </div>

            <div className="hrms-floating-card card-leaves">
              <div className="float-icon-wrapper bg-orange">
                <CalendarX2 size={20} className="text-white" />
              </div>
              <div className="float-card-content">
                <h4 className="float-card-title">12</h4>
                <p className="float-card-subtitle">Leave Requests</p>
                <p className="float-card-meta">Pending Approval</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrmsHero;
