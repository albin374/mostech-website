import React from 'react';
import { UserPlus, Contact, CalendarClock, UserStar, BarChart3, Users, Calendar, Plane, Home, FileText, Folder, PieChart, LayoutDashboard, UserCheck } from 'lucide-react';
import './HrmsLifecycle.css';

const HrmsLifecycle = () => {
  return (
    <section className="hrms-lifecycle-section">
      <div className="container">
        
        {/* Header */}
        <div className="lifecycle-header">
          <div className="lifecycle-badge">
            <span className="badge-number">04</span> EMPLOYEE LIFECYCLE
          </div>
          <h2 className="lifecycle-title">
            From <span className="text-green">First Day</span> to <span className="text-blue">Every Day</span>
          </h2>
          <p className="lifecycle-subtitle">
            HRMS manages the complete employee journey.
          </p>
        </div>

        {/* 5-Step Process */}
        <div className="lifecycle-process-wrapper">
          {/* Top Dotted Connectors */}
          <div className="top-connectors">
            <div className="connector c-green"></div>
            <div className="connector c-teal"></div>
            <div className="connector c-blue"></div>
            <div className="connector c-purple"></div>
          </div>

          <div className="lifecycle-steps">
            
            {/* Step 1: Onboard */}
            <div className="lifecycle-step step-green">
              <div className="step-icon-wrapper">
                <span className="step-number">01</span>
                <div className="step-icon-circle"><UserPlus size={28} /></div>
              </div>
              <div className="step-card">
                <h3 className="step-title">Onboard</h3>
                <p className="step-desc">Bring new employees into your organization seamlessly.</p>
                <div className="step-graphic">
                   <div className="graphic-profile">
                      <div className="profile-avatar"><UserCheck size={20} color="#16a34a" /></div>
                      <div className="profile-lines">
                         <div className="line l-long"></div>
                         <div className="line l-short"></div>
                         <div className="line l-medium"></div>
                      </div>
                      <div className="profile-check"><CheckCircle size={14} color="#ffffff" /></div>
                   </div>
                </div>
              </div>
              <div className="bottom-dot"></div>
            </div>

            {/* Step 2: Manage */}
            <div className="lifecycle-step step-teal">
              <div className="step-icon-wrapper">
                <span className="step-number">02</span>
                <div className="step-icon-circle"><Contact size={28} /></div>
              </div>
              <div className="step-card">
                <h3 className="step-title">Manage</h3>
                <p className="step-desc">Maintain employee profiles, roles, documents, and organizational data.</p>
                <div className="step-graphic">
                   <div className="graphic-manage">
                      <div className="manage-header">
                         <div className="m-avatar"></div>
                         <div className="m-lines">
                            <div className="line l-long"></div>
                            <div className="line l-short"></div>
                         </div>
                      </div>
                      <div className="manage-folders">
                         <div className="m-box"><FileText size={16} color="#14b8a6" /></div>
                         <div className="m-box"><Folder size={16} color="#14b8a6" /></div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="bottom-dot"></div>
            </div>

            {/* Step 3: Track */}
            <div className="lifecycle-step step-blue">
              <div className="step-icon-wrapper">
                <span className="step-number">03</span>
                <div className="step-icon-circle"><CalendarClock size={28} /></div>
              </div>
              <div className="step-card">
                <h3 className="step-title">Track</h3>
                <p className="step-desc">Monitor attendance, leaves, WFH, projects, and daily activities.</p>
                <div className="step-graphic">
                   <div className="graphic-track">
                      <div className="track-icons">
                         <div className="t-icon"><Calendar size={14} color="#3b82f6"/></div>
                         <div className="t-icon"><Plane size={14} color="#3b82f6"/></div>
                         <div className="t-icon"><Home size={14} color="#3b82f6"/></div>
                      </div>
                      <div className="track-chart">
                         <svg viewBox="0 0 100 30" className="t-line">
                           <path d="M0,25 Q15,5 30,20 T60,15 T100,5" fill="none" stroke="#3b82f6" strokeWidth="2" />
                           <circle cx="100" cy="5" r="3" fill="#3b82f6" />
                         </svg>
                      </div>
                   </div>
                </div>
              </div>
              <div className="bottom-dot"></div>
            </div>

            {/* Step 4: Empower */}
            <div className="lifecycle-step step-purple">
              <div className="step-icon-wrapper">
                <span className="step-number">04</span>
                <div className="step-icon-circle"><UserStar size={28} /></div>
              </div>
              <div className="step-card">
                <h3 className="step-title">Empower</h3>
                <p className="step-desc">Give employees self-service tools and easy access to HR services.</p>
                <div className="step-graphic">
                   <div className="graphic-empower">
                      <div className="e-sidebar">
                         <div className="e-avatar"></div>
                         <div className="e-menu-line"></div>
                         <div className="e-menu-line"></div>
                         <div className="e-menu-line"></div>
                      </div>
                      <div className="e-content">
                         <div className="e-grid">
                            <div className="e-cell"><Users size={12} color="#8b5cf6"/></div>
                            <div className="e-cell"><FileText size={12} color="#8b5cf6"/></div>
                            <div className="e-cell"><Plane size={12} color="#8b5cf6"/></div>
                            <div className="e-cell"><div className="e-question">?</div></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="bottom-dot"></div>
            </div>

            {/* Step 5: Grow */}
            <div className="lifecycle-step step-orange">
              <div className="step-icon-wrapper">
                <span className="step-number">05</span>
                <div className="step-icon-circle"><BarChart3 size={28} /></div>
              </div>
              <div className="step-card">
                <h3 className="step-title">Grow</h3>
                <p className="step-desc">Use reports and workforce insights to make better decisions.</p>
                <div className="step-graphic">
                   <div className="graphic-grow">
                      <div className="g-chart">
                         <PieChart size={36} color="#f59e0b" strokeWidth={3} />
                      </div>
                      <div className="g-bars">
                         <div className="g-bar b1"></div>
                         <div className="g-bar b2"></div>
                         <div className="g-bar b3"></div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="bottom-dot"></div>
            </div>

          </div>

          {/* Bottom Curved Connecting Line */}
          <div className="bottom-curve">
            <svg viewBox="0 0 1000 50" preserveAspectRatio="none">
              <path d="M 100,25 Q 250,50 300,25 T 500,25 T 700,25 T 900,25" fill="none" stroke="#e5e7eb" strokeWidth="2" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

/* Helper component for the check circle */
const CheckCircle = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default HrmsLifecycle;
