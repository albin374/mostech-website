import React from 'react';
import './ProjectFeatures.css';
import { 
  Map, 
  ClipboardList, 
  Users, 
  TrendingUp, 
  Clock, 
  FileText 
} from 'lucide-react';

const ProjectFeatures = () => {
  return (
    <section className="pm-features-section">
      <div className="container pm-features-container">
        
        {/* Left Column (Text + Cards) */}
        <div className="pm-features-left">
          <div className="pm-section-badge">
            <span className="pm-badge-number">02</span>
            <span className="pm-badge-text">Everything Your Projects Need</span>
          </div>
          
          <h2 className="pm-features-title">
            One Platform.<br/>
            <span className="pm-text-light-blue">Complete Project Control.</span>
          </h2>
          
          <p className="pm-features-desc">
            Keep every project, task, deadline, and team activity organized in one place.
          </p>

          <div className="pm-cards-grid">
            
            <div className="pm-card">
              <div className="pm-card-icon">
                <Map size={24} color="#ffffff" />
              </div>
              <h4>Project Planning</h4>
              <div className="pm-card-line"></div>
              <p>Define goals, milestones, timelines, and deliverables before work begins.</p>
            </div>
            
            <div className="pm-card">
              <div className="pm-card-icon">
                <ClipboardList size={24} color="#ffffff" />
              </div>
              <h4>Task Management</h4>
              <div className="pm-card-line"></div>
              <p>Create, assign, prioritize, and track tasks with clear ownership.</p>
            </div>
            
            <div className="pm-card">
              <div className="pm-card-icon">
                <Users size={24} color="#ffffff" />
              </div>
              <h4>Team Collaboration</h4>
              <div className="pm-card-line"></div>
              <p>Keep conversations, updates, and project information connected.</p>
            </div>
            
            <div className="pm-card">
              <div className="pm-card-icon">
                <TrendingUp size={24} color="#ffffff" />
              </div>
              <h4>Progress Tracking</h4>
              <div className="pm-card-line"></div>
              <p>Get a clear view of project status, upcoming deadlines, and completed work.</p>
            </div>
            
            <div className="pm-card">
              <div className="pm-card-icon">
                <Clock size={24} color="#ffffff" />
              </div>
              <h4>Time & Deadline Management</h4>
              <div className="pm-card-line"></div>
              <p>Stay ahead of schedules with timelines, due dates, and milestone tracking.</p>
            </div>
            
            <div className="pm-card">
              <div className="pm-card-icon">
                <FileText size={24} color="#ffffff" />
              </div>
              <h4>Reports & Insights</h4>
              <div className="pm-card-line"></div>
              <p>Understand project performance and identify areas that need attention.</p>
            </div>
            
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="pm-features-right">
          <img src="/project management2.png" alt="Project Control Dashboard" className="pm-dashboard-img" />
        </div>

      </div>
    </section>
  );
};

export default ProjectFeatures;
