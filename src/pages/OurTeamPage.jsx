import React, { useState } from 'react';
import { User } from 'lucide-react';

const ProfileImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`fallback-avatar ${className || ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#e2e8f0', color: '#94a3b8' }}>
        <User size={64} />
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};

import './OurTeamPage.css';

const OurTeamPage = () => {
  return (
    <main className="our-team-page">
      <section className="team-hero-section">
        <div className="container">
          <div className="ceo-message-container">
            <div className="team-ceo-card">
              <div className="ceo-bg-text">CEO</div>
              <ProfileImage 
                src="/our team/CEO.png" 
                alt="Ayoob K A - Founder & CEO" 
                className="ceo-image" 
              />
              <div className="ceo-info">
                <h3>Ayoob K A</h3>
                <p>Chairman & CEO</p>
              </div>
            </div>
            
            <div className="team-ceo-card">
              <div className="ceo-bg-text">MD</div>
              <ProfileImage 
                src="/our team/shannobnew.png" 
                alt="Muhammed Shanoob - Managing Director" 
                className="ceo-image"
              />
              <div className="ceo-info">
                <h3>Muhammed Shanoob</h3>
                <p>Managing Director</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="team-departments-section">
        <div className="container">
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/safferna.png" alt="Safreena Salam" />
              </div>
              <h3>Safreena Salam</h3>
              <p>Operations Head</p>
            </div>
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/fazhil.png" alt="Fasil TP" />
              </div>
              <h3>Fasil TP</h3>
              <p>Sales Manager</p>
            </div>
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/sanjay.png" alt="Sanjay Bhaskar" />
              </div>
              <h3>Sanjay Bhaskar</h3>
              <p>Creative Head</p>
            </div>
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/anu.png" alt="Anu Mohan" />
              </div>
              <h3>Anu Mohan</h3>
              <p>Team Lead</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>M SQUAD - MARKETING TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/bilal.png" alt="Bilal Abdul Kareem" />
              </div>
              <h3>Bilal Abdul Kareem</h3>
              <p>Business Development Manager</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/Ajmal Abubakr.png" alt="Ajmal Abubakr" />
              </div>
              <h3>Ajmal Abubakr</h3>
              <p>Business Development Manager</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/sabeel.png" alt="Sabeel Hashim" />
              </div>
              <h3>Sabeel Hashim</h3>
              <p>Business Development Manager</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/saffer.png" alt="Safeer CM" />
              </div>
              <h3>Safeer CM</h3>
              <p>Business Development Manager</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>W SQUAD - WEB TEAM</h2>
          <div className="team-grid">

            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/fidha.png" alt="Fidha Fathima" />
              </div>
              <h3>Fidha Fathima</h3>
              <p>Product Manager (Web)</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/jeevan.png" alt="Jeevan Vishnu" />
              </div>
              <h3>Jeevan Vishnu</h3>
              <p>Web Developer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/albin.png" alt="Albin Alosious" className="zoomed-image" />
              </div>
              <h3>Albin Alosious</h3>
              <p>Web Developer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/rojin.png" alt="Rojin" className="zoomed-image" />
              </div>
              <h3>Rojin</h3>
              <p>Junior Web Developer</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>C SQUAD - CREATIVE TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/richard new.png" alt="Richard Denny" />
              </div>
              <h3>Richard Denny</h3>
              <p>Multi Media Designer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/harinadanp.png" alt="Harinandan P" />
              </div>
              <h3>Harinandan P</h3>
              <p>Graphical Designer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/syam.png" alt="Syam" />
              </div>
              <h3>Syam</h3>
              <p>Graphical Designer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/salman.png" alt="Salman Faris" />
              </div>
              <h3>Salman Faris</h3>
              <p>Video Editor</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>D SQUAD - DIGITAL MARKETING TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/Aswathi.png" alt="Aswathi Unnikrishnan" className="zoomed-image" />
              </div>
              <h3>Aswathi Unnikrishnan</h3>
              <p>Senior SEO Specialist</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/musliha.png" alt="Musliha" />
              </div>
              <h3>Musliha</h3>
              <p>Performance Marketer</p>
            </div>
            
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/misriya.png" alt="Misriya" />
              </div>
              <h3>Misriya</h3>
              <p>Digital Marketing Cordinator</p>
            </div>
          </div>

          <h2 className="team-heading" style={{ marginTop: '40px' }}>Accounts Admin HR</h2>
          <div className="team-grid" style={{ marginBottom: '40px', justifyContent: 'center' }}>
            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/sajad.png" alt="Sajad Ayoob" />
              </div>
              <h3>Sajad Ayoob</h3>
              <p>Finance Manager</p>
            </div>

            <div className="team-member">
              <div className="member-image-wrapper">
                <ProfileImage src="/our team/shamila.png" alt="Shamila M" />
              </div>
              <h3>Shamila M</h3>
              <p>Accounts Admin HR - Asst Manager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeamPage;
