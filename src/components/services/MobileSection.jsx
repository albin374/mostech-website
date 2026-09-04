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
            
            <div className="mobile-cards-row">
              <div className="mobile-card">
                <div className="card-icon-container android-icon">
                  <AndroidIcon size={24} />
                </div>
                <h4 className="card-title">ANDROID UX-DRIVEN DEVELOPMENT</h4>
                <p className="card-desc">
                  We offer high-performance, customised Android app development services that satisfy all your business needs.
                </p>
                <button className="card-btn">
                  Explore Android <ArrowRight size={14} className="btn-icon" />
                </button>
              </div>
              
              <div className="mobile-card">
                <div className="card-icon-container apple-icon">
                  <AppleIcon size={24} />
                </div>
                <h4 className="card-title">IOS-FIRST MOBILE EXPERIENCES</h4>
                <p className="card-desc">
                  Our rich expertise in iOS mobile app development helps to build beautiful and engaging iOS applications for our clients.
                </p>
                <button className="card-btn">
                  Explore iOS <ArrowRight size={14} className="btn-icon" />
                </button>
              </div>
              
              <div className="mobile-card">
                <div className="card-icon-container cross-icon">
                  <Share2 size={24} />
                </div>
                <h4 className="card-title">CROSS-PLATFORM APP DEVELOPMENT</h4>
                <p className="card-desc">
                  We build consistent and cost effective hybrid mobility solutions that work equally well across multiple platforms.
                </p>
                <button className="card-btn">
                  Explore Cross-Platform <ArrowRight size={14} className="btn-icon" />
                </button>
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


        
      </div>
    </section>
  );
};

export default MobileSection;
