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
      bgImage: "/fathbackground.png",
      link: "https://Fathcreative.com",
      linkText: "Fathcreative.com"
    },
    {
      id: 2,
      title: "Mosbizuae",
      desc: "Business setup and corporate solutions in UAE.",
      icon: <img src="/mosbiz.webp" alt="Mosbizuae" className="sc-img-logo" />,
      bgImage: "/mosbiz background.png",
      link: "https://Mosbizuae.com",
      linkText: "Mosbizuae.com"
    },
    {
      id: 3,
      title: "Pixora Design",
      desc: "Designs that make an impact.",
      icon: <img src="/pixora-logo.webp" alt="Pixora Design" className="sc-img-logo" />,
      bgImage: "/pixora desgins.png",
      link: "https://Pixoradesign.in",
      linkText: "Pixoradesign.in"
    },
    {
      id: 4,
      title: "Mosmart",
      desc: "General trading for a smarter tomorrow.",
      icon: <img src="/mozmart.png" alt="Mosmart" className="sc-img-logo" />,
      bgImage: "/mosmartbg.png"
    },
    {
      id: 5,
      title: "MOS Academy",
      desc: "Learning today for a brighter tomorrow.",
      icon: <img src="/mozacademey.png" alt="MOS Academy" className="sc-img-logo" />,
      bgImage: "/mosacademy.png"
    },
    {
      id: 6,
      title: "Mosbiz",
      desc: "Corporate services for your growth.",
      icon: <img src="/mosbiz.webp" alt="Mosbiz" className="sc-img-logo" />,
      bgImage: "/mosbiz.png"
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
          {cards.map((card, index) => (
            <div className="sc-card-new" key={card.id}>
              <div className="sc-card-inner">
                {/* Background Image Layer */}
                {card.bgImage && (
                  <div className="sc-card-bg">
                    <img src={card.bgImage} alt="" />
                  </div>
                )}
                
                {/* Number on Top Right */}
                <div className="sc-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content Layer */}
                <div className="sc-content-layer">
                  <div className="sc-card-header">
                    <div className="sc-logo-box">
                      {card.icon}
                    </div>
                    <div className="sc-text-box">
                      <h3 className="sc-card-title-new">{card.title}</h3>
                      <p className="sc-card-desc-new">{card.desc}</p>
                    </div>
                  </div>
                  
                  <div className="sc-card-footer">
                    {card.link && (
                      <a href={card.link} target="_blank" rel="noopener noreferrer" className="sc-link-new">
                        {card.linkText}
                      </a>
                    )}
                  </div>
                </div>
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
