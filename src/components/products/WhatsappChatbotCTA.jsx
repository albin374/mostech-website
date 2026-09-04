import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Link as LinkIcon, Shield, TrendingUp, ArrowRight, Zap, GitMerge, Headphones, MessageCircle } from 'lucide-react';
import './WhatsappChatbotCTA.css';

const WhatsappChatbotCTA = () => {
  return (
    <section className="whatsapp-cta-section">
      <div className="container">
        
        {/* Top Content Row */}
        <div className="cta-top-row">
          
          {/* Left Side Content */}
          <div className="cta-left-content">
            <div className="cta-badge">
              <span className="badge-number">05</span>
              <span className="badge-text">Final CTA</span>
            </div>
            
            <h2 className="cta-main-title">
              Let Your Business<br/>
              Talk Smarter.
            </h2>
            
            <h3 className="cta-subtitle">
              Turn WhatsApp Into Your<br/>
              <span className="text-blue">Digital Business Assistant.</span>
            </h3>
            
            <p className="cta-desc">
              Give your customers instant access to products, services, answers, and support — while connecting conversations directly to the systems that run your business.
            </p>
            
            <p className="cta-desc">
              From a simple website chatbot to a fully integrated <span className="text-bold-blue">WhatsApp AI business assistant</span>, Mostech can build a solution around your requirements.
            </p>

            {/* 4 Feature Icons */}
            <div className="cta-features-grid">
              <div className="cta-feature-item">
                <div className="cta-f-icon bg-light-blue text-blue"><MessageSquare size={20} /></div>
                <h4>Smart Conversations</h4>
                <p>Understand. Respond.<br/>Engage.</p>
              </div>
              <div className="cta-feature-item">
                <div className="cta-f-icon bg-light-gray text-gray"><LinkIcon size={20} /></div>
                <h4>System Integration</h4>
                <p>Connect to the tools<br/>you already use.</p>
              </div>
              <div className="cta-feature-item">
                <div className="cta-f-icon bg-light-blue text-blue"><Shield size={20} /></div>
                <h4>Secure & Reliable</h4>
                <p>Enterprise-grade security<br/>you can trust.</p>
              </div>
              <div className="cta-feature-item">
                <div className="cta-f-icon bg-light-blue text-blue"><TrendingUp size={20} /></div>
                <h4>Built for Growth</h4>
                <p>Scale your business<br/>with every conversation.</p>
              </div>
            </div>
          </div>

          {/* Right Side Graphic */}
          <div className="cta-right-graphic">
            {/* Using finalcta.png from public folder */}
            <img src="/finalcta.png" alt="WhatsApp Business Integration" className="cta-graphic-img" onError={(e) => { e.target.src = '/chatbot.png' }} />
          </div>

        </div>

        {/* Bottom Dark CTA Banner */}
        <div className="cta-bottom-banner">
          
          {/* Banner Left */}
          <div className="cta-banner-left">
            <div className="cta-banner-logo">
              <div className="cta-logo-glow"></div>
              <MessageCircle size={48} color="white" />
            </div>
            <div className="cta-banner-titles">
              <h2>MOSTECH<br/><span className="text-light-blue">AI CHATBOT</span></h2>
              <p>One Conversation. <span className="text-light-blue">Endless Possibilities.</span></p>
            </div>
          </div>

          {/* Banner Right */}
          <div className="cta-banner-right">
            <h4 className="cta-banner-question">Ready to transform your customer conversations?</h4>
            
            <Link to="/contact" className="cta-btn-primary">
              <div className="btn-icon-wrapper"><ArrowRight size={20} className="btn-icon-arrow" /></div>
              Request a Demo <ArrowRight size={20} />
            </Link>
            
            <div className="cta-banner-features">
              <span><Zap size={16} /> Quick Setup</span>
              <span><GitMerge size={16} /> Easy Integration</span>
              <span><Headphones size={16} /> Expert Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatsappChatbotCTA;
