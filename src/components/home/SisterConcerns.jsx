import React from 'react';
import { 
  Link2, 
  BarChart2, 
  PenTool, 
  ShoppingBag, 
  GraduationCap, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import './SisterConcerns.css';

const SisterConcerns = () => {
  const cards = [
    {
      id: 1,
      title: "Fath Creative",
      desc: "Creative solutions for a digital world.",
      icon: <img src="/fath-logo.webp" alt="Fath Creative" className="sc-img-logo" />,
      theme: "sc-blue",
      link: "https://Fathcreative.com",
      linkText: "Fathcreative.com"
    },
    {
      id: 2,
      title: "Mosbizuae",
      desc: "Business setup and corporate solutions in UAE.",
      icon: <img src="/mosbiz.webp" alt="Mosbizuae" className="sc-img-logo" />,
      theme: "sc-green",
      link: "https://Mosbizuae.com",
      linkText: "Mosbizuae.com"
    },
    {
      id: 3,
      title: "Pixora Design",
      desc: "Designs that make an impact.",
      icon: <img src="/pixora-logo.webp" alt="Pixora Design" className="sc-img-logo" />,
      theme: "sc-orange",
      link: "https://Pixoradesign.in",
      linkText: "Pixoradesign.in"
    },
    {
      id: 4,
      title: "Mosmart",
      desc: "General trading for a smarter tomorrow.",
      icon: <img src="/mozmart.png" alt="Mosmart" className="sc-img-logo" />,
      theme: "sc-purple",
    },
    {
      id: 5,
      title: "MOS Academy",
      desc: "Learning today for a brighter tomorrow.",
      icon: <img src="/mozacademey.png" alt="MOS Academy" className="sc-img-logo" />,
      theme: "sc-light-blue",
    },
    {
      id: 6,
      title: "Mosbiz",
      desc: "Corporate services for your growth.",
      icon: <img src="/mosbiz.webp" alt="Mosbiz" className="sc-img-logo" />,
      theme: "sc-pink",
    }
  ];

  return (
    <section className="sister-concerns-section">
      <div className="container sc-container">
        
        {/* Header Section */}
        <div className="sc-header-row">
          <div className="sc-header-left">
            <div className="sc-badge">
              OUR SISTER CONCERNS
            </div>
            <div className="sc-badge-line"></div>
            
            <h2 className="sc-title">
              A Stronger Ecosystem for a <span className="sc-highlight">Smarter Tomorrow</span>
            </h2>
            
            <p className="sc-subtitle">
              Together, our sister concerns bring diverse expertise and shared<br/>
              values to deliver greater value, innovation, and growth.
            </p>
          </div>
          
        </div>

        {/* Grid Section */}
        <div className="sc-grid">
          {cards.map(card => (
            <div className={`sc-card ${card.theme}`} key={card.id}>
              <div className="sc-card-content">
                <div className="sc-card-header">
                  <div className="sc-icon-wrapper">
                    {card.icon}
                  </div>
                  <h3 className="sc-card-title">{card.title}</h3>
                </div>
                <p className="sc-card-desc">{card.desc}</p>
                {card.link && (
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="sc-card-link">
                    {card.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="sc-footer">
          <div className="sc-footer-line"></div>
          <span className="sc-footer-text">TOGETHER WE GROW</span>
          <div className="sc-footer-line"></div>
        </div>

      </div>
    </section>
  );
};

export default SisterConcerns;
