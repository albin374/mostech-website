import React from 'react';
import { FilePlus, UserCheck, Flag, BarChart2, CheckCircle2, Star } from 'lucide-react';
import './TaskWorkflowSection.css';

const TaskWorkflowSection = () => {
  return (
    <section className="tm-workflow-section">
      <div className="container tm-workflow-container">
        
        {/* Left Column */}
        <div className="tm-workflow-left">
          <div className="tm-section-badge-left">
            03 — Keep Work Moving
          </div>
          
          <h2 className="tm-workflow-title">
            Know What Needs<br/>
            to Be Done. <span className="tm-text-blue" style={{ whiteSpace: 'nowrap' }}>Who Owns It.</span><br/>
            What Comes Next.
          </h2>
          
          <div className="tm-workflow-desc">
            <div className="tm-divider-line"></div>
            <p className="tm-desc-bold">
              Stop relying on scattered messages,<br/> spreadsheets, and endless follow-ups.
            </p>
            <p>
              Mostech Task Management gives every task<br/>
              a clear <span className="tm-text-blue-bold">owner</span>, <span className="tm-text-blue-bold">priority</span>, <span className="tm-text-blue-bold">deadline</span>, and <span className="tm-text-blue-bold">status</span>,<br/>
              helping teams stay accountable and focused<br/> throughout the workday.
            </p>
          </div>
          
          {/* Workflow Steps */}
          <div className="tm-workflow-steps">
            
            <div className="tm-w-step">
              <div className="tm-w-icon-wrap icon-blue-outline">
                <FilePlus size={24} color="#3b82f6" />
              </div>
              <h4>Create</h4>
              <p>Create tasks<br/>in seconds.</p>
            </div>
            
            <div className="tm-step-arrow"></div>
            
            <div className="tm-w-step">
              <div className="tm-w-icon-wrap icon-green-outline">
                <UserCheck size={24} color="#22c55e" />
              </div>
              <h4>Assign</h4>
              <p>Assign tasks to<br/>the right people.</p>
            </div>
            
            <div className="tm-step-arrow"></div>
            
            <div className="tm-w-step">
              <div className="tm-w-icon-wrap icon-orange-outline">
                <Flag size={24} color="#f97316" />
              </div>
              <h4>Prioritize</h4>
              <p>Set priorities and<br/>focus on what<br/>matters most.</p>
            </div>
            
            <div className="tm-step-arrow"></div>
            
            <div className="tm-w-step">
              <div className="tm-w-icon-wrap icon-purple-outline">
                <BarChart2 size={24} color="#8b5cf6" />
              </div>
              <h4>Track</h4>
              <p>Monitor progress<br/>in real time.</p>
            </div>
            
            <div className="tm-step-arrow"></div>
            
            <div className="tm-w-step">
              <div className="tm-w-icon-wrap icon-green2-outline">
                <CheckCircle2 size={24} color="#10b981" />
              </div>
              <h4>Complete</h4>
              <p>Finish on time and<br/>celebrate success.</p>
            </div>
            
          </div>
          
          {/* Bottom Bar */}
          <div className="tm-workflow-bottom-bar">
            <div className="tm-bottom-star">
              <Star size={20} color="#ffffff" fill="#ffffff" />
            </div>
            <p>
              <strong>Clear tasks.</strong> <span className="tm-text-blue">Focused teams.</span> <strong className="tm-text-blue">Work</strong> that gets done.
            </p>
          </div>
          
        </div>

        {/* Right Column (Image) */}
        <div className="tm-workflow-right">
          <img src="/taskmanagement3.png" alt="Task Management Workflow" className="tm-workflow-img" />
        </div>
        
      </div>
    </section>
  );
};

export default TaskWorkflowSection;
