import React from 'react';
import './OurTeamPage.css';

const OurTeamPage = () => {
  return (
    <main className="our-team-page">
      <section className="team-hero-section">
        <div className="container">
          <div className="ceo-message-container">
            <div className="team-ceo-card">
              <div className="ceo-bg-text">CEO</div>
              <img 
                src="/our team/CEO.png" 
                alt="Ayoob K A - Founder & CEO" 
                className="ceo-image" 
              />
              <div className="ceo-info">
                <h3>Ayoob K A</h3>
                <p>Founder & CEO</p>
              </div>
            </div>
            
            <div className="ceo-quote">
              <h2>
                Empowering businesses with innovative technology—driving growth, inspiring change, putting people first.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="team-departments-section">
        <div className="container">
          <h2 className="team-heading">HR & ADMINISTRATION TEAM</h2>
          <div className="team-grid" style={{ marginBottom: '40px', justifyContent: 'flex-start' }}>
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/shamila.png" alt="Shamila M" />
              </div>
              <h3>Shamila M</h3>
              <p>Admin & HR Coordinator</p>
            </div>
          </div>

          <h2 className="team-heading">SOFTWARE DEVELOPMENT TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/anu.png" alt="Anu Mohan" />
              </div>
              <h3>Anu Mohan</h3>
              <p>Senior Software Engineer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/fidha.png" alt="Fidha Fathima M" />
              </div>
              <h3>Fidha Fathima M</h3>
              <p>Junior Software Engineer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/jeevan.png" alt="Jeevan Vishnu" />
              </div>
              <h3>Jeevan Vishnu</h3>
              <p>Junior Software Engineer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/albin.png" alt="Albin Alosious" />
              </div>
              <h3>Albin Alosious</h3>
              <p>Junior Software Engineer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/rojin.png" alt="Rojin Roy" />
              </div>
              <h3>Rojin Roy</h3>
              <p>Junior Software Engineer</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>GRAPHICS TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/sanjay.png" alt="Sanjay Bhaskar" />
              </div>
              <h3>Sanjay Bhaskar</h3>
              <p>Creative Head</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/richard.png" alt="Richard Benny" />
              </div>
              <h3>Richard Benny</h3>
              <p>Graphics Designer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/harinadanp.png" alt="Harinandanan p" />
              </div>
              <h3>Harinandanan p</h3>
              <p>Graphics Designer</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>SEO & MARKETING TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/Aswathi.png" alt="Aswathi Unnikrishnan" />
              </div>
              <h3>Aswathi Unnikrishnan</h3>
              <p>Senior SEO Specialist</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <img src="/our team/musliha.png" alt="Musliha Fathima" />
              </div>
              <h3>Musliha Fathima</h3>
              <p>Performance Marketer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeamPage;
