import React from 'react';
import { Target, Binoculars, Rocket } from 'lucide-react';
import './CeoMessage.css';

const CeoMessage = () => {
  return (
    <section className="ceo-section">
      <div className="container ceo-container">
        
        {/* Top Content */}
        <div className="ceo-top-content">
          <div className="ceo-left">
            <div className="ceo-badge">
              <span className="ceo-badge-line"></span>
              <span className="ceo-badge-text">CEO MESSAGE</span>
            </div>
            
            <h2 className="ceo-title">
              A Vision for a<br/>Smarter Tomorrow
            </h2>
            
            <p className="ceo-description">
              At Mostech Business Solutions, our journey began in Kannur in 2018 when I took the step to establish this company with a small team of four passionate youngsters and tech enthusiasts. With my background and experience in the banking sector, I aimed to create not just a business, but a platform where innovation, reliability, and value-driven solutions could thrive. What started as a modest dream has now grown into a dedicated family of 25+ professionals, each committed to excellence and innovation.
            </p>

            <div className="ceo-profile">

              <div className="ceo-profile-details">
                <h4 className="ceo-name">Ayoob K A</h4>
                <p className="ceo-role">Founder & CEO</p>
                <p className="ceo-company">Mostech Business Solutions</p>
              </div>
            </div>
          </div>

          <div className="ceo-right">
            {/* If ceomessge.png includes the person, this might be redundant, but we keep it here just in case. */}
            <img src="/ceo2.jpeg" alt="CEO Message" className="ceo-main-image hidden-if-bg-has-ceo" />
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
              To deliver world-class digital solutions across industries, maximizing growth and value for our clients and empowering businesses.
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
              To be a globally recognised company empowering clients to outpace competition through innovation and excellence.
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
              Drive innovation, ensure client success, foster growth, deliver excellence, and uphold integrity in every digital solution we provide.
            </p>
            <div className="ceo-card-bottom-line"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CeoMessage;
