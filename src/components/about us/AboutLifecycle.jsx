import React, { useEffect, useRef } from 'react';
import { Compass, Layers, Activity, ShieldCheck, CloudCog } from 'lucide-react';
import './AboutLifecycle.css';

const AboutLifecycle = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (lineRef.current) {
          lineRef.current.classList.add('animate-line-draw');
        }
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      num: "01",
      icon: <Compass size={28} />,
      title: "Discovery & Scoping",
      desc: "Exhaustive analysis of objectives, workflows, and system integrations."
    },
    {
      num: "02",
      icon: <Layers size={28} />,
      title: "Architecture & API",
      desc: "Comprehensive system layout, schema design, and infrastructure mapping."
    },
    {
      num: "03",
      icon: <Activity size={28} />,
      title: "Agile Sprints",
      desc: "Iterative sprints with CI/CD automation and constant client walkthroughs."
    },
    {
      num: "04",
      icon: <ShieldCheck size={28} />,
      title: "QA & Security",
      desc: "Automated test suites, penetration testing, and code optimization."
    },
    {
      num: "05",
      icon: <CloudCog size={28} />,
      title: "Cloud & Support",
      desc: "Zero-downtime deployment, network monitoring, and 24/7 SLA maintenance."
    }
  ];

  return (
    <section className="about-lifecycle">
      <div className="lifecycle-background-glow"></div>
      <div className="container">

        <div className="lifecycle-header text-center animate-on-scroll">
          <div className="section-eyebrow">Corporate Playbook</div>
          <h2 className="lifecycle-title">Our 5-Phase <span className="text-blue">Software Lifecycle</span></h2>
          <p className="lifecycle-subtitle">A proven methodology for delivering enterprise-grade software at scale.</p>
        </div>

        <div className="lifecycle-timeline">
          <div className="timeline-connector-track">
            <div className="timeline-connector-fill" ref={lineRef}></div>
          </div>

          <div className="lifecycle-nodes">
            {phases.map((phase, index) => {
              const isTop = index % 2 === 0;
              return (
                <div
                  className={`lifecycle-node-wrapper animate-on-scroll ${isTop ? 'align-top' : 'align-bottom'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  key={index}
                >
                  {isTop && (
                    <div className="lifecycle-content-box box-top">
                      <div className="phase-number">{phase.num}</div>
                      <div className="phase-icon">{phase.icon}</div>
                      <h4>{phase.title}</h4>
                      <p>{phase.desc}</p>
                    </div>
                  )}

                  <div className="lifecycle-node-point">
                    <div className="node-inner-dot"></div>
                  </div>

                  {!isTop && (
                    <div className="lifecycle-content-box box-bottom">
                      <div className="phase-number">{phase.num}</div>
                      <div className="phase-icon">{phase.icon}</div>
                      <h4>{phase.title}</h4>
                      <p>{phase.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutLifecycle;
