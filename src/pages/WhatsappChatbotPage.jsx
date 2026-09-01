import React, { useEffect } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import './WhatsappChatbotPage.css';
import WhatsappChatbotUseCases from '../components/WhatsappChatbotUseCases';
import WhatsappChatbotPersonalized from '../components/WhatsappChatbotPersonalized';
import WhatsappChatbotCTA from '../components/WhatsappChatbotCTA';

const WhatsappChatbotPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="whatsapp-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      
      {/* ================= HERO SECTION ================= */}
      <section className="whatsapp-hero-section">
        <div className="container whatsapp-hero-container">
          
          {/* Left Content */}
          <div className="whatsapp-hero-left">

            <h1 className="whatsapp-main-title">
              Turn Every WhatsApp<br/>
              Message Into a<br/>
              <span className="text-green">Business Conversation.</span>
            </h1>

            <div className="whatsapp-title-line"></div>

            <p className="whatsapp-desc">
              Give your customers an intelligent assistant that can answer questions, recommend products, share information, and handle enquiries — directly through WhatsApp.
            </p>

            <p className="whatsapp-desc">
              Connect your chatbot with your website, e-commerce store, product catalog, CRM, ERP, and business systems to deliver personalized responses based on your actual business data.
            </p>

            {/* Action Buttons */}
            <div className="whatsapp-action-buttons">
              <a href="#demo" className="whatsapp-btn-primary">
                <div className="btn-icon"><MessageCircle size={18} /></div>
                Request a Demo
              </a>
              <a href="#explore" className="whatsapp-btn-secondary">
                Explore Capabilities <ArrowRight size={18} />
              </a>
            </div>
            
          </div>

          {/* Right Content */}
          <div className="whatsapp-hero-right">
            <img src="/whatappbanner.png" alt="Mostech WhatsApp AI Chatbot" className="whatsapp-hero-img" />
          </div>

        </div>

        {/* Bottom Green Banner */}
        <div className="container">
          <div className="whatsapp-bottom-banner">
            
            {/* Feature 1 */}
            <div className="w-banner-feature feature-main">
              <div className="w-b-icon"><ShieldCheck size={28} /></div>
              <div className="w-b-text">
                <h4>One Intelligent Assistant.</h4>
                <p>Unlimited Possibilities.</p>
              </div>
            </div>
            
            <div className="w-banner-divider"></div>
            
            {/* Feature 2 */}
            <div className="w-banner-feature">
              <div className="w-b-text">
                <h4>24/7 Availability</h4>
                <p>Always here for your customers</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="w-banner-feature">
              <div className="w-b-text">
                <h4>Instant Responses</h4>
                <p>Quick and accurate replies</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="w-banner-feature">
              <div className="w-b-text">
                <h4>Stronger Engagement</h4>
                <p>Turn conversations into loyalty</p>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="w-banner-feature">
              <div className="w-b-text">
                <h4>Higher Conversions</h4>
                <p>More leads. More sales.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhatsappChatbotUseCases />
      <WhatsappChatbotPersonalized />
      <WhatsappChatbotCTA />

    </main>
  );
};

export default WhatsappChatbotPage;
