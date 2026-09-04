import React from 'react';
import './AboutLifecycle.css';

const AboutLifecycle = () => {
  const phases = [
    {
      num: "01",
      title: "Discovery & Scoping",
      desc: "Exhaustive analysis of commercial objectives, technical requirements, user workflows, and system integrations."
    },
    {
      num: "02",
      title: "Architecture & API",
      desc: "Comprehensive system layout, schema design, API protocol definitions, and infrastructure mapping."
    },
    {
      num: "03",
      title: "Agile Sprints",
      desc: "Iterative sprints with transparent code, CI/CD automation, and transparent client walkthroughs."
    },
    {
      num: "04",
      title: "QA & Security Audits",
      desc: "Automated test suites, penetration testing, load limits tests, and code optimization."
    },
    {
      num: "05",
      title: "Cloud & Support",
      desc: "Zero-downtime deployment, network monitoring, staff training, and 24/7 SLA maintenance."
    }
  ];

  return (
    <section className="about-lifecycle">
      <div className="container">
        
        <div className="lifecycle-header text-center">
          <div className="lifecycle-badge">
            <div className="badge-line"></div>
            <span>CORPORATE PLAYBOOK</span>
          </div>
          <h2 className="lifecycle-title">Our 5-Phase Software Lifecycle</h2>
        </div>

        <div className="lifecycle-grid">
          {phases.map((phase, index) => (
            <div className="lifecycle-card" key={index}>
              <div className="lifecycle-num">{phase.num}</div>
              <h4>{phase.title}</h4>
              <p>{phase.desc}</p>
              <div className="lifecycle-bottom-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutLifecycle;
