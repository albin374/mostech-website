import React from 'react';
import { TrendingUp, Target, Search, LineChart, ShieldCheck, Users, BarChart, Trophy, Headphones } from 'lucide-react';
import './SeoSection.css';

const SeoSection = () => {
  const cards = [
    {
      number: "01",
      icon: <Target className="seo-icon" />,
      title: "Data-Driven SEO Strategies",
      desc: "Our SEO strategies are data-driven and tailored to your industry. We create a roadmap that aligns with your audience's searches, their needs, and how search engines evaluate relevance and trust."
    },
    {
      number: "02",
      icon: <Search className="seo-icon" />,
      title: "Focus on Search Intent",
      desc: "We focus on understanding what your audience is genuinely looking for and create content that answers their questions with depth and authority."
    },
    {
      number: "03",
      icon: <LineChart className="seo-icon" />,
      title: "Continuous Monitoring",
      desc: "We monitor algorithm updates, keyword trends, and competitor movements to keep your SEO strategy agile and ahead of the curve."
    },
    {
      number: "04",
      icon: <ShieldCheck className="seo-icon" />,
      title: "Measurable Results",
      desc: "Every action is measured against real business outcomes, ensuring your investment in organic search delivers compounding, long-term returns."
    }
  ];

  return (
    <section className="seo-section">
      <div className="container seo-container">
        
        <div className="seo-top-content">
          <div className="seo-left">
            <div className="seo-badge">
              <TrendingUp size={16} />
              <span>RANK HIGHER. GROW FASTER.</span>
            </div>
            
            <h2 className="seo-title">
              Best SEO Service<br/>in <span className="seo-highlight">Dubai</span>
            </h2>
            <div className="seo-title-line"></div>
            
            <p className="seo-subtitle">
              Search Engine Optimization is at the core of sustainable digital growth. We help your business rank higher on search engines like Google by building a strong foundation of technical excellence, authoritative content, and meaningful backlinks — so customers find you exactly when they're looking.
            </p>

            <div className="seo-cards-grid">
              {cards.map((card, index) => (
                <div className="seo-card" key={index}>
                  <div className="seo-card-header">
                    <div className="seo-icon-wrapper">{card.icon}</div>
                    <span className="seo-card-number">{card.number}</span>
                  </div>
                  <h4 className="seo-card-title">{card.title}</h4>
                  <p className="seo-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="seo-right">
            <div className="seo-image-wrapper">
              <img src="/seo.png" alt="SEO Performance" className="seo-main-img" />
              {/* Optional: if the image doesn't include the floating badge, we could add it here via CSS, but usually it's in the image. */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoSection;
