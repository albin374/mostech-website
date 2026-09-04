import React, { useEffect, useRef } from 'react';
import { UsersRound, Cloud, Trophy, Rocket, Users } from 'lucide-react';
import './AboutTechnicalImpact.css';

const AboutTechnicalImpact = () => {
  const sectionRef = useRef(null);

  // A simple counting animation hook for the numbers (doesn't float, just counts)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const counters = document.querySelectorAll('.about-page .counter-value');
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/,/g, '');
            const inc = target / 50;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc).toLocaleString();
              setTimeout(updateCount, 30);
            } else {
              counter.innerText = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
            }
          };
          updateCount();
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-technical-impact" ref={sectionRef}>
      <div className="container">
        
        <div className="impact-header animate-on-scroll">
          <div className="section-eyebrow">By The Numbers</div>
          <h2 className="impact-title">
            Quantified Technical Impact <span className="text-blue">Across the Middle East</span>
          </h2>
          <p className="impact-subtitle">
            Playing an active role for high-growth start-ups to established corporate enterprises.
          </p>
        </div>

        <div className="impact-cards-row">
          
          <div className="impact-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <UsersRound size={24} className="impact-icon" />
            <div className="impact-number">
              <span className="counter-value" data-target="25" data-suffix="+">0</span>
            </div>
            <h4 className="impact-label">In-House Architects</h4>
            <p className="impact-sublabel">Deep engineering pools</p>
          </div>

          <div className="impact-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <Cloud size={24} className="impact-icon" />
            <div className="impact-number">
              <span className="counter-value" data-target="12" data-suffix="+">0</span>
            </div>
            <h4 className="impact-label">Cloud Modules</h4>
            <p className="impact-sublabel">AWS, Azure & Google</p>
          </div>

          <div className="impact-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <Trophy size={24} className="impact-icon" />
            <div className="impact-number">
              <span className="counter-value" data-target="7" data-suffix="+">0</span>
            </div>
            <h4 className="impact-label">Years of Excellence</h4>
            <p className="impact-sublabel">Established 2018</p>
          </div>

          <div className="impact-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <Rocket size={24} className="impact-icon" />
            <div className="impact-number">
              <span className="counter-value" data-target="1000" data-suffix="+">0</span>
            </div>
            <h4 className="impact-label">Shipped Projects</h4>
            <p className="impact-sublabel">Agile release cycle</p>
          </div>

          <div className="impact-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
            <Users size={24} className="impact-icon" />
            <div className="impact-number">
              <span className="counter-value" data-target="1000" data-suffix="+">0</span>
            </div>
            <h4 className="impact-label">Corporate Clients</h4>
            <p className="impact-sublabel">B2B enterprise focus</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutTechnicalImpact;
