import React, { useEffect } from 'react';
import { 
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  LayoutGrid,
  Target,
  Layout,
  Code,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './TaskManagementPage.css';
import TaskFeatures from '../components/TaskFeatures';
import TaskWorkflowSection from '../components/TaskWorkflowSection';

const TaskManagementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mostech | Task Management Software</title>
        <meta name="description" content="Turn Every Task Into Progress. Task Management Software Built for Focused, Productive Teams." />
      </Helmet>

      <main className="tm-page">
        {/* HERO SECTION */}
        <section className="tm-hero-section">
          <div className="container tm-hero-container">
            
            {/* Left Column */}
            <div className="tm-hero-left">
              <h1 className="tm-hero-title">
                Turn Every<br/>
                <span style={{ whiteSpace: 'nowrap' }}>Task Into <span className="tm-text-gradient">Progress.</span></span>
              </h1>
              
              <h3 className="tm-hero-subtitle">
                <span className="tm-text-blue-bold">Task Management Software</span> Built for Focused, Productive Teams
              </h3>
              
              <p className="tm-hero-desc">
                Create tasks, assign responsibilities, set priorities, track deadlines, and keep everyone focused on what matters most. Mostech Task Management gives your team one simple place to organize work and get things done.
              </p>
              
              <div className="tm-hero-actions">
                <a href="#get-started" className="tm-btn tm-btn-primary">
                  Get Started <ArrowRight size={20} />
                </a>
                <a href="#features" className="tm-btn tm-btn-secondary">
                  Explore Features <LayoutGrid size={20} />
                </a>
              </div>
              
              <div className="tm-hero-features">
                <div className="tm-feature-item">
                  <div className="tm-feature-icon icon-blue">
                    <CheckCircle2 size={20} color="#3b82f6" />
                  </div>
                  <div className="tm-feature-text">
                    <h4>Stay Organized</h4>
                    <p>Keep tasks and details all in one place.</p>
                  </div>
                </div>
                
                <div className="tm-feature-item">
                  <div className="tm-feature-icon icon-green">
                    <Users size={20} color="#22c55e" />
                  </div>
                  <div className="tm-feature-text">
                    <h4>Work Together</h4>
                    <p>Collaborate seamlessly with your team.</p>
                  </div>
                </div>
                
                <div className="tm-feature-item">
                  <div className="tm-feature-icon icon-purple">
                    <TrendingUp size={20} color="#2dd4bf" />
                  </div>
                  <div className="tm-feature-text">
                    <h4>Get More Done</h4>
                    <p>Track progress and achieve your goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="tm-hero-right">
              <div className="tm-floating-badge">
                <Target size={18} color="#0b1c3e" />
                <span><strong>Organize.</strong> Prioritize. <strong className="tm-text-purple">Complete.</strong></span>
              </div>
              <img src="/task management banner.png" alt="Task Management Dashboard" className="tm-hero-img" />
              
              {/* Floating Task Cards */}
              <div className="tm-floating-cards">
                {/* Card 1 */}
                <div className="tm-task-card card-1">
                  <div className="tm-task-card-header">
                    <Layout size={14} color="#3b82f6" />
                    <span className="tm-task-title">Design Homepage</span>
                  </div>
                  <div className="tm-task-card-body">
                    <div className="tm-task-avatars">
                      <div className="tm-avatar bg-1"></div>
                      <div className="tm-avatar bg-2"></div>
                    </div>
                    <div className="tm-task-date">
                      <Calendar size={12} />
                      <span>May 26</span>
                    </div>
                    <div className="tm-task-badge badge-blue">
                      <ArrowUp size={12} /> High
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="tm-task-card card-2">
                  <div className="tm-task-card-header">
                    <Code size={14} color="#3b82f6" />
                    <span className="tm-task-title">API Integration</span>
                  </div>
                  <div className="tm-task-card-body">
                    <div className="tm-task-avatars">
                      <div className="tm-avatar bg-3"></div>
                      <div className="tm-avatar bg-1"></div>
                      <div className="tm-avatar bg-2"></div>
                    </div>
                    <div className="tm-task-date">
                      <Calendar size={12} />
                      <span>May 24</span>
                    </div>
                    <div className="tm-task-badge badge-purple">
                      <ArrowUp size={12} /> High
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="tm-task-card card-3">
                  <div className="tm-task-card-header">
                    <span className="tm-task-title">Fix Login Issue</span>
                  </div>
                  <div className="tm-task-card-body">
                    <div className="tm-task-avatars">
                      <div className="tm-avatar bg-2"></div>
                    </div>
                    <div className="tm-task-date">
                      <Calendar size={12} />
                      <span>May 23</span>
                    </div>
                    <div className="tm-task-badge badge-red">
                      <ArrowDown size={12} /> Urgent
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <TaskFeatures />
        <TaskWorkflowSection />
      </main>
    </>
  );
};

export default TaskManagementPage;
