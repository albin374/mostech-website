import React from 'react';
import './ProjectWorkflow.css';
import { 
  ClipboardList, 
  UserCheck, 
  MessageSquare, 
  TrendingUp, 
  Send,
  Eye,
  Users,
  Clock,
  MessageCircle,
  Target,
  Quote
} from 'lucide-react';

const ProjectWorkflow = () => {
  return (
    <section className="pm-workflow-section">
      <div className="container pm-workflow-container">
        
        {/* Left Column (Text + Workflow + Quote) */}
        <div className="pm-workflow-left">
          <div className="pm-section-badge">
            <span className="pm-badge-number">03</span>
            <span className="pm-badge-text">Built to Keep Teams Moving</span>
          </div>
          
          <h2 className="pm-workflow-title">
            From Planning to Completion,<br/>
            <span className="pm-text-light-blue">Stay in Control.</span>
          </h2>
          
          <p className="pm-workflow-desc">
            Projects become easier when everyone knows <span className="pm-text-blue-bold">what needs to be done, who owns it,</span> and <span className="pm-text-blue-bold">when</span> it needs to be completed.
          </p>

          <div className="pm-workflow-steps">
            <div className="pm-step">
              <div className="pm-step-icon border-blue"><ClipboardList size={20} color="#3b82f6" /></div>
              <span>Plan</span>
            </div>
            <div className="pm-step-arrow">→</div>
            
            <div className="pm-step">
              <div className="pm-step-icon border-green"><UserCheck size={20} color="#22c55e" /></div>
              <span>Assign</span>
            </div>
            <div className="pm-step-arrow">→</div>
            
            <div className="pm-step">
              <div className="pm-step-icon border-purple"><MessageSquare size={20} color="#a855f7" /></div>
              <span>Collaborate</span>
            </div>
            <div className="pm-step-arrow">→</div>
            
            <div className="pm-step">
              <div className="pm-step-icon border-orange"><TrendingUp size={20} color="#f59e0b" /></div>
              <span>Track</span>
            </div>
            <div className="pm-step-arrow">→</div>
            
            <div className="pm-step">
              <div className="pm-step-icon bg-blue"><Send size={20} color="#ffffff" /></div>
              <span>Deliver</span>
            </div>
          </div>
          
          <p className="pm-workflow-desc-2">
            Mostech Project Management brings your entire workflow together, helping teams reduce delays, improve accountability, and deliver projects with greater confidence.
          </p>
        </div>

        {/* Right Column (Image) */}
        <div className="pm-workflow-right">
          <img src="/projectmanagement3.png" alt="Project Workflow" className="pm-workflow-img" />
          
          <div className="pm-quote-box">
            <Quote className="pm-quote-icon" size={24} fill="#1a56db" />
            <p><span className="pm-text-blue-bold">Less confusion.</span> Better collaboration. <span className="pm-text-blue-bold">Faster delivery.</span></p>
          </div>
        </div>

      </div>

      {/* Bottom Banner */}
      <div className="container">
        <div className="pm-bottom-banner-5">
          <div className="pm-feature-5">
            <div className="pm-icon-wrap blue-bg"><Eye size={20} color="#ffffff" /></div>
            <div className="pm-f-text-5">
              <span className="pm-f-title">Clear Visibility</span>
              <span className="pm-f-desc">See everything in real time and stay informed.</span>
            </div>
          </div>
          
          <div className="pm-feature-5">
            <div className="pm-icon-wrap green-bg"><Users size={20} color="#ffffff" /></div>
            <div className="pm-f-text-5">
              <span className="pm-f-title">Better Accountability</span>
              <span className="pm-f-desc">Everyone knows their role and responsibilities.</span>
            </div>
          </div>
          
          <div className="pm-feature-5">
            <div className="pm-icon-wrap purple-bg"><Clock size={20} color="#ffffff" /></div>
            <div className="pm-f-text-5">
              <span className="pm-f-title">On-Time Delivery</span>
              <span className="pm-f-desc">Track timelines and meet every deadline.</span>
            </div>
          </div>
          
          <div className="pm-feature-5">
            <div className="pm-icon-wrap orange-bg"><MessageCircle size={20} color="#ffffff" /></div>
            <div className="pm-f-text-5">
              <span className="pm-f-title">Stronger Collaboration</span>
              <span className="pm-f-desc">Communicate, share, and work together seamlessly.</span>
            </div>
          </div>
          
          <div className="pm-feature-5">
            <div className="pm-icon-wrap blue-bg-dark"><Target size={20} color="#ffffff" /></div>
            <div className="pm-f-text-5">
              <span className="pm-f-title">Better Results</span>
              <span className="pm-f-desc">Deliver projects efficiently and achieve goals.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectWorkflow;
