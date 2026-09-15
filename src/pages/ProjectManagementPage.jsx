import React, { useEffect } from 'react';
import { 
  Star, 
  ArrowRight,
  Users,
  CheckCircle2,
  UsersRound,
  TrendingUp
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './ProjectManagementPage.css';
import ProjectFeatures from '../components/products/ProjectFeatures';
import ProjectWorkflow from '../components/products/ProjectWorkflow';
import ProjectCta from '../components/products/ProjectCta';

const ProjectManagementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Project Management Software - Mostech</title>
        <meta name="description" content="Plan projects, assign tasks, track progress, and keep your team aligned from one powerful platform." />
      </Helmet>
      
      <main className="pm-page-wrapper">
        <section className="pm-hero-section">
          <div className="container pm-hero-container">
            
            {/* Left Content */}
            <div className="pm-hero-left">
              <div className="pm-badge">
                <Star size={16} className="pm-badge-icon" />
                <span>Smart Projects. Stronger Results.</span>
              </div>
              
              <h1 className="pm-title">
                Manage Projects.<br/>
                <span className="pm-text-blue">Align Teams.</span><br/>
                Deliver Better.
              </h1>
              
              <h3 className="pm-subtitle">
                Project Management Software<br/>
                Built for <span className="pm-text-blue">Smarter, More Organized Work</span>
              </h3>
              
              <p className="pm-desc">
                Plan projects, assign tasks, track progress, and keep your team aligned from one 
                powerful platform. Mostech Project Management helps businesses move from 
                scattered workflows to structured, efficient project delivery.
              </p>
              
              <div className="pm-actions">
                <a href="/#contact" className="pm-btn pm-btn-primary">
                  Get Started <ArrowRight size={18} />
                </a>
                <a href="/#contact" className="pm-btn pm-btn-secondary">
                  Explore Features <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="pm-hero-right">
              <img src="/project management.png" alt="Project Management Software" className="pm-hero-image" />
            </div>
          </div>
          

        </section>
        
        <ProjectFeatures />
        <ProjectWorkflow />
        <ProjectCta />
      </main>
    </>
  );
};

export default ProjectManagementPage;
