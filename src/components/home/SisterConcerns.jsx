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
      title: "Mostech Information Technology LLC",
      desc: "Innovative IT services and technology solutions.",
      location: "Dubai, UAE",
      icon: <img src="/mostechlogo.png" alt="Mostech Information Technology" className="sc-img-logo" />,
      bgImage: "/uaemostech.png",
      link: "https://www.mostech.ae",
      linkText: "www.mostech.ae"
    },
    {
      id: 2,
      title: "Mostech Business Solutions LLP",
      desc: "Business setup and corporate solutions.",
      location: "Kannur, Kerala, India",
      icon: <img src="/logo.webp" alt="Mostech Business Solutions" className="sc-img-logo" />,
      logoBg: "#ffffff",
      bgImage: "/ChatGPT Image Sep 15, 2026, 01_08_36 PM.png",
      link: "https://www.mostech.in",
      linkText: "www.mostech.in"
    },
    {
      id: 3,
      title: "Mosbiz Corporate Services FZC",
      desc: "Corporate services for your growth.",
      location: "Sharjah, UAE",
      icon: <img src="/mosbiz.webp" alt="Mosbiz Corporate Services" className="sc-img-logo" />,
      bgImage: "/mosbiz.png",
      link: "https://www.mosbizuae.com",
      linkText: "www.mosbizuae.com"
    },
    {
      id: 4,
      title: "Mos Academy",
      desc: "Learning today for a brighter tomorrow.",
      location: "Thalassery, Kerala, India",
      icon: <img src="/mosacademyfinal.png" alt="Mos Academy" className="sc-img-logo" />,
      bgImage: "/mosacademy.png",
      link: "https://www.mosacademy.org",
      linkText: "www.mosacademy.org"
    },
    {
      id: 5,
      title: "Fath Creative",
      desc: "Creative solutions for a digital world.",
      location: "Jeddah, Saudi Arabia",
      icon: <img src="/fath-logo.webp" alt="Fath Creative" className="sc-img-logo" />,
      bgImage: "/exhibition.png",
      link: "https://www.fathcreative.com",
      linkText: "www.fathcreative.com"
    },
    {
      id: 6,
      title: "Mosmart General Trading",
      desc: "General trading for a smarter tomorrow.",
      location: "Dubai, UAE",
      icon: <img src="/mozmart.png" alt="Mosmart General Trading" className="sc-img-logo" />,
      bgImage: "/e commerce.png",
      link: "https://www.mosmart.me",
      linkText: "www.mosmart.me"
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
                    <div className="sc-logo-box" style={card.logoBg ? { backgroundColor: card.logoBg } : {}}>
                      {card.icon}
                    </div>
                    <div className="sc-text-box">
                      <h3 className="sc-card-title-new">{card.title}</h3>
                      <p className="sc-card-desc-new">{card.desc}</p>
                      {card.location && <div className="sc-card-location">{card.location}</div>}
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
