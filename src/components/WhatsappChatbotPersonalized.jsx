import React from 'react';
import { ShoppingBag, ShoppingCart, Factory, Headphones, Building2, Search, CheckCircle2, ListFilter, Star, Package, MapPin, SearchCheck, FileText, Database, ShieldCheck, Calendar, HelpCircle, MessagesSquare, Rocket, BarChart3, Users, Target, Zap } from 'lucide-react';
import './WhatsappChatbotPersonalized.css';

const WhatsappChatbotPersonalized = () => {
  return (
    <section className="whatsapp-personalized-section">
      <div className="container">
        
        {/* Top Content Row */}
        <div className="personalized-top-row">
          
          {/* Left Side */}
          <div className="personalized-left-content">
            <div className="personalized-badge">
              <span className="badge-number">04</span>
              <span className="badge-text">Personalized for Every Business</span>
            </div>
            
            <h2 className="personalized-main-title">
              One Platform.<br/>
              A Chatbot Built Around<br/>
              <span className="text-blue">Your Business.</span>
            </h2>
            
            <p className="personalized-desc">
              Every customer has different products, processes, customers, and requirements.
            </p>
            <p className="personalized-desc">
              MOSTECH AI Chatbot can be configured based on the business it serves.
            </p>
          </div>

          {/* Middle Graphic */}
          <div className="personalized-middle-graphic">
            <img src="/chatbotimge2.png" alt="Chatbot Customization" className="p-graphic-img" onError={(e) => { e.target.src = '/chatbot.png' }} />
          </div>

          {/* Right Dark Green Card */}
          <div className="personalized-right-card">
            <div className="p-card-icon"><Star size={28} /></div>
            <h3 className="p-card-title">Your chatbot learns your business context.</h3>
            <div className="p-card-divider"></div>
            <p className="p-card-subtitle">Different business.<br/>Different data.</p>
            <div className="p-card-divider"></div>
            <h4 className="p-card-footer-title">One intelligent<br/>chatbot platform.</h4>
          </div>

        </div>

        {/* 5 Cards Grid */}
        <div className="personalized-cards-grid">
          
          {/* Card 1 */}
          <div className="p-industry-card">
            <div className="p-icard-header">
              <div className="p-icard-icon bg-navy"><ShoppingBag size={20} /></div>
              <h4 className="p-icard-title text-navy">For Retail</h4>
            </div>
            <img src="/retail_gen.png" alt="Retail Store" className="p-icard-img" />
            <p className="p-icard-desc">Help customers find products, compare options and check availability.</p>
            <div className="p-icard-tags tag-navy">
              <span><Search size={14} /> Product Search</span>
              <span><CheckCircle2 size={14} /> Availability</span>
              <span><ListFilter size={14} /> Compare</span>
              <span><Star size={14} /> Recommendations</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-industry-card">
            <div className="p-icard-header">
              <div className="p-icard-icon bg-blue"><ShoppingCart size={20} /></div>
              <h4 className="p-icard-title text-blue">For E-commerce</h4>
            </div>
            <img src="/ecommerce_gen.png" alt="E-commerce Laptop" className="p-icard-img" />
            <p className="p-icard-desc">Assist customers with products, orders, delivery and shopping enquiries.</p>
            <div className="p-icard-tags tag-blue">
              <span><Package size={14} /> Order Tracking</span>
              <span><ShoppingCart size={14} /> Cart Support</span>
              <span><MapPin size={14} /> Delivery Info</span>
              <span><SearchCheck size={14} /> Product Suggestions</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-industry-card">
            <div className="p-icard-header">
              <div className="p-icard-icon bg-purple"><Factory size={20} /></div>
              <h4 className="p-icard-title text-purple">For Manufacturing</h4>
            </div>
            <img src="/manufacturing_gen.png" alt="Manufacturing Factory" className="p-icard-img" />
            <p className="p-icard-desc">Provide product specifications, technical information and catalogue details.</p>
            <div className="p-icard-tags tag-purple">
              <span><FileText size={14} /> Specifications</span>
              <span><Search size={14} /> Technical Info</span>
              <span><Database size={14} /> Catalogue</span>
              <span><ShieldCheck size={14} /> Compatibility</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-industry-card">
            <div className="p-icard-header">
              <div className="p-icard-icon bg-orange"><Headphones size={20} /></div>
              <h4 className="p-icard-title text-orange">For Services</h4>
            </div>
            <img src="/chatbot service.png" alt="Customer Services" className="p-icard-img" onError={(e) => { e.target.src = 'https://placehold.co/400x250/e2e8f0/64748b?text=Services' }} />
            <p className="p-icard-desc">Handle enquiries, bookings, FAQs and customer support.</p>
            <div className="p-icard-tags tag-orange">
              <span><Calendar size={14} /> Bookings</span>
              <span><HelpCircle size={14} /> FAQs</span>
              <span><Headphones size={14} /> Support</span>
              <span><MessagesSquare size={14} /> Enquiries</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-industry-card">
            <div className="p-icard-header">
              <div className="p-icard-icon bg-teal"><Building2 size={20} /></div>
              <h4 className="p-icard-title text-teal">For Enterprises</h4>
            </div>
            <img src="/chatbot enyterprize.png" alt="Enterprise Buildings" className="p-icard-img" onError={(e) => { e.target.src = 'https://placehold.co/400x250/e2e8f0/64748b?text=Enterprise' }} />
            <p className="p-icard-desc">Connect multiple systems and automate business workflows through conversations.</p>
            <div className="p-icard-tags tag-teal">
              <span><Database size={14} /> System Integration</span>
              <span><ListFilter size={14} /> Workflows</span>
              <span><CheckCircle2 size={14} /> Approvals</span>
              <span><Zap size={14} /> Automations</span>
            </div>
          </div>

        </div>

        {/* Bottom Benefits Banner */}
        <div className="personalized-bottom-banner">
          
          <div className="p-benefit-item">
            <Target size={28} className="p-benefit-icon" />
            <div className="p-benefit-text">
              <h5>Industry Specific</h5>
              <p>Solutions tailored to your<br/>industry and workflows.</p>
            </div>
          </div>
          
          <div className="p-benefit-item">
            <Users size={28} className="p-benefit-icon" />
            <div className="p-benefit-text">
              <h5>Better Experience</h5>
              <p>Deliver relevant answers<br/>customers actually need.</p>
            </div>
          </div>
          
          <div className="p-benefit-item">
            <BarChart3 size={28} className="p-benefit-icon" />
            <div className="p-benefit-text">
              <h5>Higher Efficiency</h5>
              <p>Automate conversations and<br/>reduce manual workload.</p>
            </div>
          </div>
          
          <div className="p-benefit-item">
            <ShieldCheck size={28} className="p-benefit-icon" />
            <div className="p-benefit-text">
              <h5>Stronger Relationships</h5>
              <p>Build trust and loyalty with every<br/>meaningful conversation.</p>
            </div>
          </div>
          
          <div className="p-benefit-item">
            <Rocket size={28} className="p-benefit-icon" />
            <div className="p-benefit-text">
              <h5>Business Growth</h5>
              <p>Turn conversations into<br/>loyal customers and leads.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatsappChatbotPersonalized;
