import React from 'react';
import { ShoppingBag, MessageSquare, ShoppingCart, ClipboardList, Zap, CheckCircle2, MessageCircle, Users, BarChart3, Clock, TrendingUp } from 'lucide-react';
import './WhatsappChatbotUseCases.css';

const WhatsappChatbotUseCases = () => {
  return (
    <section className="whatsapp-usecases-section">
      <div className="container">
        
        {/* Top Content Row */}
        <div className="usecases-top-row">
          
          {/* Left Side */}
          <div className="usecases-left-content">
            <div className="usecases-badge">
              <span className="badge-number">02</span>
              <span className="badge-text">One Chatbot. Multiple Business Use Cases.</span>
            </div>
            
            <h2 className="usecases-main-title">
              More Than a Chatbot.<br/>
              Your <span className="text-green">Digital Business Assistant.</span>
            </h2>
            
            <p className="usecases-desc">
              Your customers don't need to search through your website or wait for your team to respond.
            </p>
            <p className="usecases-desc">
              The chatbot can understand what customers are asking and provide the information they need.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="usecases-right-image">
            <img src="/chatbot.png" alt="Chatbot Business Assistant" className="usecases-graphic-img" onError={(e) => { e.target.src = 'https://placehold.co/600x500/e2e8f0/64748b?text=Robot+Phone+Graphic' }} />
          </div>

        </div>

        {/* 5 Cards Grid */}
        <div className="usecases-cards-grid">
          
          {/* Card 1 */}
          <div className="usecase-card">
            <div className="uc-card-icon icon-green"><ShoppingBag size={28} /></div>
            <h4 className="uc-card-title">Product Assistant</h4>
            <p className="uc-card-subtitle">Help customers discover products instantly.</p>
            <div className="uc-card-divider divider-green"></div>
            <ul className="uc-card-list list-green">
              <li><CheckCircle2 size={16} /> Product Details</li>
              <li><CheckCircle2 size={16} /> Specifications</li>
              <li><CheckCircle2 size={16} /> Pricing</li>
              <li><CheckCircle2 size={16} /> Availability</li>
              <li><CheckCircle2 size={16} /> Recommendations</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="usecase-card">
            <div className="uc-card-icon icon-blue"><MessageSquare size={28} /></div>
            <h4 className="uc-card-title">Customer Support</h4>
            <p className="uc-card-subtitle">Answer common customer questions automatically.</p>
            <div className="uc-card-divider divider-blue"></div>
            <ul className="uc-card-list list-blue">
              <li><CheckCircle2 size={16} /> FAQs</li>
              <li><CheckCircle2 size={16} /> Order Queries</li>
              <li><CheckCircle2 size={16} /> Service Information</li>
              <li><CheckCircle2 size={16} /> Support Requests</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="usecase-card">
            <div className="uc-card-icon icon-purple"><ShoppingCart size={28} /></div>
            <h4 className="uc-card-title">E-commerce Assistant</h4>
            <p className="uc-card-subtitle">Connect directly with your online store.</p>
            <div className="uc-card-divider divider-purple"></div>
            <ul className="uc-card-list list-purple">
              <li><CheckCircle2 size={16} /> Product Search</li>
              <li><CheckCircle2 size={16} /> Cart Assistance</li>
              <li><CheckCircle2 size={16} /> Order Status</li>
              <li><CheckCircle2 size={16} /> Product Recommendations</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="usecase-card">
            <div className="uc-card-icon icon-orange"><ClipboardList size={28} /></div>
            <h4 className="uc-card-title">Lead Generation</h4>
            <p className="uc-card-subtitle">Turn conversations into potential customers.</p>
            <div className="uc-card-divider divider-orange"></div>
            <ul className="uc-card-list list-orange">
              <li><CheckCircle2 size={16} /> Customer Enquiries</li>
              <li><CheckCircle2 size={16} /> Lead Capture</li>
              <li><CheckCircle2 size={16} /> Requirements</li>
              <li><CheckCircle2 size={16} /> Contact Details</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="usecase-card">
            <div className="uc-card-icon icon-teal"><Zap size={28} /></div>
            <h4 className="uc-card-title">Business Automation</h4>
            <p className="uc-card-subtitle">Automate repetitive conversations and processes.</p>
            <div className="uc-card-divider divider-teal"></div>
            <ul className="uc-card-list list-teal">
              <li><CheckCircle2 size={16} /> Notifications</li>
              <li><CheckCircle2 size={16} /> Follow-ups</li>
              <li><CheckCircle2 size={16} /> Enquiries</li>
              <li><CheckCircle2 size={16} /> Booking Requests</li>
              <li><CheckCircle2 size={16} /> Workflow Automation</li>
            </ul>
          </div>

        </div>

        {/* Bottom Dark Green Banner */}
        <div className="usecases-bottom-banner">
          <div className="uc-banner-left">
            <div className="uc-banner-icon">
              <MessageCircle size={32} color="#ffffff" />
            </div>
            <div className="uc-banner-text">
              Every conversation<br/>
              can become an <span className="text-light-green">opportunity.</span>
            </div>
          </div>

          <div className="uc-banner-stats">
            <div className="uc-stat-item">
              <Users size={24} className="stat-icon" />
              <div className="stat-text">
                <h5>Better Engagement</h5>
                <p>Build stronger relationships<br/>with every conversation.</p>
              </div>
            </div>
            
            <div className="uc-stat-item">
              <BarChart3 size={24} className="stat-icon" />
              <div className="stat-text">
                <h5>More Conversions</h5>
                <p>Turn conversations<br/>into loyal customers.</p>
              </div>
            </div>
            
            <div className="uc-stat-item">
              <Clock size={24} className="stat-icon" />
              <div className="stat-text">
                <h5>More Efficiency</h5>
                <p>Automate tasks and save<br/>valuable time.</p>
              </div>
            </div>
            
            <div className="uc-stat-item">
              <TrendingUp size={24} className="stat-icon" />
              <div className="stat-text">
                <h5>Higher Growth</h5>
                <p>More leads, more sales,<br/>more opportunities.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatsappChatbotUseCases;
