import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Folder, Calendar, Bell, ShieldCheck } from 'lucide-react';
import './ProCtaSection.css';

const ProCtaSection = () => {
  return (
    <section className="pro-cta-section">
      <div className="container pro-cta-container">
        <div className="pro-cta-content">
          <div className="pro-cta-badge">
            STREAMLINE. ORGANIZE. STAY AHEAD.
          </div>

          <h2 className="pro-cta-title">
            Turn PRO Administration<br />
            <span className="text-light-blue">Into a Simpler Workflow</span>
          </h2>

          <p className="pro-cta-desc">
            Keep your customers, documents, and renewals<br />
            organized — all in one place.
          </p>

          <div className="pro-cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get Started with PRO Management <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Talk to Our Team
            </Link>
          </div>

          <div className="pro-cta-footer">
            <ShieldCheck size={20} className="shield-icon" />
            <span>Built for businesses that manage multiple customers,<br />documents, and renewal deadlines every day.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCtaSection;
