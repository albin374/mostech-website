import React from 'react';
import { Target, Search, LineChart, ShieldCheck, Link, Users, BarChart } from 'lucide-react';
import './SeoSection.css';

const SeoSection = () => {
  const cards = [
    {
      number: "01",
      icon: <Target className="seo-icon" />,
      title: "Strategy",
      desc: "Data-driven SEO strategies built for your business."
    },
    {
      number: "02",
      icon: <Search className="seo-icon" />,
      title: "Intent Focused",
      desc: "Create content that matches search intent and delivers value."
    },
    {
      number: "03",
      icon: <LineChart className="seo-icon" />,
      title: "Continuous Monitoring",
      desc: "Track performance and adapt to stay ahead."
    },
    {
      number: "04",
      icon: <ShieldCheck className="seo-icon" />,
      title: "Measurable Results",
      desc: "Clear reporting and measurable growth that matters."
    }
  ];

  const bottomBanner = [
    {
      icon: <Target className="seo-banner-icon" />,
      title: "Higher Rankings",
      desc: "Improve visibility and reach."
    },
    {
      icon: <Link className="seo-banner-icon" />,
      title: "Quality Backlinks",
      desc: "Build authority with trusted links."
    },
    {
      icon: <Users className="seo-banner-icon" />,
      title: "More Conversions",
      desc: "Turn traffic into loyal customers."
    },
    {
      icon: <BarChart className="seo-banner-icon" />,
      title: "Sustainable Growth",
      desc: "Long-term results that compound."
    }
  ];

  return (
    <section className="seo-section">
      <div className="container seo-container">
        
        <div className="seo-top-content">
          <div className="seo-left">
            <div className="seo-badge">
              DATA-DRIVEN &bull; INTENT-FOCUSED &bull; RESULT-ORIENTED
            </div>
            
            <h2 className="seo-title">
              Best SEO Service in <span className="seo-highlight">Dubai</span>
            </h2>
            
            <p className="seo-subtitle">
              We help your business rank higher, drive qualified traffic, and grow with SEO strategies that deliver real results.
            </p>

            <div className="seo-cards-grid">
              {cards.map((card, index) => (
                <div className="seo-card" key={index}>
                  <div className="seo-card-header">
                    <div className="seo-icon-wrapper">{card.icon}</div>
                    <div className="seo-card-number-wrapper">
                      <span className="seo-card-number">{card.number}</span>
                      <div className="seo-number-underline"></div>
                    </div>
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
            </div>
          </div>
        </div>

        <div className="seo-bottom-banner">
          {bottomBanner.map((item, index) => (
            <div className="seo-banner-item" key={index}>
              <div className="seo-banner-icon-wrapper">
                {item.icon}
              </div>
              <div className="seo-banner-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeoSection;
