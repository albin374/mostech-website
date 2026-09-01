import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, ArrowRight, Share2 } from 'lucide-react';
import './MobileSection.css';

const AndroidIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1" />
    <path d="M9.5 19v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1" />
    <path d="M5.5 13.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1" />
    <path d="M18.5 13.5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1" />
    <path d="M14.5 5.5 16 3" />
    <path d="M9.5 5.5 8 3" />
    <path d="M12 5.5c-4.14 0-7.5 2.69-7.5 6v2h15v-2c0-3.31-3.36-6-7.5-6Z" />
    <path d="M5.5 13.5h13v3a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-3Z" />
    <circle cx="9.5" cy="9.5" r="1" fill="currentColor" />
    <circle cx="14.5" cy="9.5" r="1" fill="currentColor" />
  </svg>
);

const AppleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

const MobileSection = () => {
  return (
    <section className="mobile-section">
      <div className="container">
        
        {/* Top Content Row */}
        <div className="mobile-top-row">
          <motion.div 
            className="mobile-text-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mobile-badge">
              <ShieldCheck size={16} className="badge-icon" />
              <span>SMART APPS. STRONGER BUSINESS.</span>
            </div>
            
            <h2 className="mobile-title">
              Mobile Application <br />
              <span style={{ color: 'navy' }}>Development</span>
            </h2>
            
            <h3 className="mobile-subtitle">
              Building powerful apps tailored to your business needs.
            </h3>
            
            <p className="mobile-desc">
              We design and develop mobile applications that are built for performance, usability, and long-term growth. Our process focuses on creating streamlined, engaging user experiences, reliable functionality, and smooth performance across devices. By understanding user behavior and business objectives, we deliver apps that are secure, scalable, and aligned with real-world needs—helping businesses engage users more effectively and operate more efficiently.
            </p>
            
            <div className="mobile-features">
              <div className="mobile-feature">
                <div className="feature-icon-wrapper">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4>Secure & Reliable</h4>
                  <p>Built with best practices</p>
                </div>
              </div>
              
              <div className="mobile-feature">
                <div className="feature-icon-wrapper">
                  <Zap size={20} />
                </div>
                <div>
                  <h4>High Performance</h4>
                  <p>Optimized for speed</p>
                </div>
              </div>
              
              <div className="mobile-feature">
                <div className="feature-icon-wrapper">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4>Scalable Solutions</h4>
                  <p>Grow without limits</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mobile-image-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/mobilesection.png" alt="Mobile App Development" className="mobile-hero-img" />
          </motion.div>
        </div>

        {/* Bottom Cards Row */}
        <motion.div 
          className="mobile-cards-row"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mobile-card">
            <div className="card-icon-container android-icon">
              <AndroidIcon size={28} />
            </div>
            <h4 className="card-title">ANDROID UX-DRIVEN DEVELOPMENT</h4>
            <p className="card-desc">
              We offer high-performance, customised Android app development services that satisfy all your business needs.
            </p>
            <button className="card-btn">
              Explore Android <ArrowRight size={16} className="btn-icon" />
            </button>
          </div>
          
          <div className="mobile-card">
            <div className="card-icon-container apple-icon">
              <AppleIcon size={28} />
            </div>
            <h4 className="card-title">IOS-FIRST MOBILE EXPERIENCES</h4>
            <p className="card-desc">
              Our rich expertise in iOS mobile app development helps to build beautiful and engaging iOS applications for our clients.
            </p>
            <button className="card-btn">
              Explore iOS <ArrowRight size={16} className="btn-icon" />
            </button>
          </div>
          
          <div className="mobile-card">
            <div className="card-icon-container cross-icon">
              <Share2 size={28} />
            </div>
            <h4 className="card-title">CROSS-PLATFORM APP DEVELOPMENT</h4>
            <p className="card-desc">
              We build consistent and cost effective hybrid mobility solutions that work equally well across multiple platforms.
            </p>
            <button className="card-btn">
              Explore Cross-Platform <ArrowRight size={16} className="btn-icon" />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default MobileSection;
