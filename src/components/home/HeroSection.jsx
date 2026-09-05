import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Calendar, Users, FileText } from 'lucide-react';
import './HeroSection.css';

const videos = [
  "/banner1watermark.mp4",
  "/banner2watermark.mp4",
  "/banner2 final (online-video-cutter.com).mp4"
];

const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (videoRefs[activeVideo] && videoRefs[activeVideo].current) {
      videoRefs[activeVideo].current.play().catch(e => console.log("Video auto-play prevented:", e));
    }
  }, [activeVideo]);

  const handleVideoEnd = () => {
    setActiveVideo(prev => (prev + 1) % videos.length);
  };

  return (
    <section className="hero-section">
      {/* Background Videos */}
      <div className="hero-bg-video-wrapper" style={{ position: 'relative', width: '100%', height: '85vh', minHeight: '600px', overflow: 'hidden', backgroundColor: '#030816' }}>
        {videos.map((src, index) => (
          <video
            key={index}
            ref={videoRefs[index]}
            src={src}
            muted
            playsInline
            autoPlay={index === 0}
            preload="auto"
            onEnded={index === activeVideo ? handleVideoEnd : undefined}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: activeVideo === index ? 1 : 0,
              zIndex: activeVideo === index ? 2 : 1,
              pointerEvents: 'none'
            }}
          />
        ))}
        {/* Blue Shade Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(2, 12, 76, 0.4)',
          zIndex: 5,
          pointerEvents: 'none'
        }}></div>
      </div>

      {/* Text Content Overlay */}
      <div className="hero-content">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', width: '100%' }}>
          {/* Left Side: Text */}
          <div className="hero-text-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.2rem', justifyContent: 'flex-start' }}>
              <div style={{ height: '1px', background: '#ffffff', width: '30px' }}></div>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ffffff' }}></div>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#ffffff' }}>SMART SOLUTIONS</span>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ffffff' }}></div>
              <div style={{ height: '1px', background: '#ffffff', width: '30px' }}></div>
            </div>
            <h1 className="hero-main-title">
              <span style={{ display: 'block', color: '#ffffff' }}>Smarter Business.</span>
              <span style={{ display: 'block', color: '#ffffff' }}>Stronger Tomorrow.</span>
            </h1>
            <p className="hero-subtitle">
              We deliver cutting-edge AI, software, and digital<br />
              solutions designed to automate, optimize, and<br />
              accelerate your business growth.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="hero-btn hero-btn-primary">
                Explore Solutions <ArrowRight size={18} />
              </a>
              <button className="hero-btn hero-btn-secondary">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side: Stats Cards */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <Globe size={22} />
              </div>
              <h3>25+</h3>
              <p>Countries</p>
              <div className="hero-stat-line"></div>
            </div>
            
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <Calendar size={22} />
              </div>
              <h3>8+</h3>
              <p>Years of Experience</p>
              <div className="hero-stat-line"></div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <Users size={22} />
              </div>
              <h3>1,000+</h3>
              <p>Clients</p>
              <div className="hero-stat-line"></div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <FileText size={22} />
              </div>
              <h3>10,000+</h3>
              <p>Projects</p>
              <div className="hero-stat-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
