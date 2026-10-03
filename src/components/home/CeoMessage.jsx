import React from 'react';
import { Target, Binoculars, Rocket } from 'lucide-react';
import './CeoMessage.css';

const CeoMessage = () => {
  return (
    <section className="ceo-section">
      <img src="/ceoceo.png" alt="Ayoob K A - CEO" className="ceo-person-image" />
      <div className="container ceo-container">
        
        {/* Top Content */}
        <div className="ceo-top-content">
          <div className="ceo-left">

            
            <h2 className="ceo-title">
              A Vision for a<br/>Smarter Tomorrow
            </h2>
            
            <p className="ceo-description">
              At Mostech, our journey began in Kannur in 2018 with a small team of four passionate tech enthusiasts and a vision to build innovative digital solutions that create real business value.
            </p>
            <p className="ceo-description">
              With my background in the banking sector, I wanted to build more than just a technology company—I wanted to create a platform where innovation, reliability, and client success come together. Today, that vision has grown into a team of 25+ dedicated professionals committed to delivering excellence through technology.
            </p>
            <p className="ceo-description">
              As we continue to expand from our operations in Dubai, UAE, our focus remains the same: helping businesses grow with intelligent software, digital transformation, and performance-driven marketing solutions.
            </p>

            <div className="ceo-profile">
              <div className="ceo-profile-image-mobile">
                <img src="/ceoceo.png" alt="Ayoob K A - CEO" />
              </div>
              <div className="ceo-profile-details">
                <h4 className="ceo-name">Ayoob K A</h4>
                <p className="ceo-role">Chairman</p>
                <p className="ceo-company">Mostech Business Solutions</p>
              </div>
            </div>
          </div>

          <div className="ceo-right">
            {/* Image moved to absolute positioned element outside container */}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="ceo-cards-wrapper">
          
          <div className="ceo-card">
            <div className="ceo-card-header">
              <div className="ceo-card-icon-wrapper">
                <Target size={24} color="#ffffff" />
              </div>
              <h3 className="ceo-card-title">OUR MISSION</h3>
            </div>
            <p className="ceo-card-text">
              To deliver world-class digital solutions that empower businesses to grow, innovate, and achieve long-term success across industries.
            </p>
            <div className="ceo-card-bottom-line"></div>
          </div>

          <div className="ceo-card">
            <div className="ceo-card-header">
              <div className="ceo-card-icon-wrapper">
                <Binoculars size={24} color="#ffffff" />
              </div>
              <h3 className="ceo-card-title">OUR VISION</h3>
            </div>
            <p className="ceo-card-text">
              To be a globally recognized technology company that enables businesses to stay ahead through innovation, quality, and excellence.
            </p>
            <div className="ceo-card-bottom-line"></div>
          </div>

          <div className="ceo-card">
            <div className="ceo-card-header">
              <div className="ceo-card-icon-wrapper">
                <Rocket size={24} color="#ffffff" />
              </div>
              <h3 className="ceo-card-title">OUR GOALS</h3>
            </div>
            <p className="ceo-card-text">
              To drive innovation, deliver measurable value, ensure client success, foster sustainable growth, and uphold integrity in every solution we create.
            </p>
            <div className="ceo-card-bottom-line"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CeoMessage;
