import React, { useEffect } from 'react';
import { 
  Rocket, 
  TrendingUp, 
  Target, 
  ShieldCheck,
  ArrowRight,
  Package,
  Calculator,
  Store,
  Factory,
  Landmark,
  Utensils,
  Network,
  Users,
  Puzzle,
  SlidersHorizontal,
  GraduationCap,
  BarChart2,
  Handshake,
  Headphones,
  Gem,
  ChevronRight
} from 'lucide-react';
import './ErpPage.css';

const ErpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="erp-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="erp-hero-section">
        <div className="container erp-hero-container">
          
          {/* Left Content */}
          <div className="erp-hero-left">
            <div className="erp-hero-badge">
              <TrendingUp size={14} color="#0044cc" />
              <span>Smarter Operations. Stronger Growth.</span>
            </div>

            <h1 className="erp-main-title">
              Enterprise ERP Solutions<br/>
              That <span className="erp-blue-text">Drive Growth</span>
            </h1>

            <h3 className="erp-subtitle">
              Seamless, Scalable & High-Performance ERP Solutions
            </h3>

            <p className="erp-desc">
              At MOSTECH, we bring the world's most advanced ERP solutions to 
              businesses across industries. Our focus is on providing top-tier ERP 
              software that streamlines operations, improves efficiency, and enables 
              data-driven decision-making — all tailored to your organization's 
              unique needs.
            </p>

            <p className="erp-desc">
              We partner with global ERP leaders to deliver solutions trusted by 
              enterprises worldwide, helping you leverage cutting-edge technology 
              without compromise.
            </p>

            {/* Contact Action */}
            <div className="erp-contact-action">
              <a href="/#contact" className="erp-contact-btn">
                CONTACT US FOR DEMO <ArrowRight size={18} />
              </a>
            </div>

          </div>

          {/* Right Content */}
          <div className="erp-hero-right">
            <img src="/erp solution.png" alt="ERP Solution" className="erp-hero-img" />
          </div>

        </div>

      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="erp-services-section">
        <div className="container erp-services-container">
          
          {/* Left Content */}
          <div className="erp-services-left">
            <div className="erp-services-badge">
              <div className="erp-badge-icon">
                <Package size={14} color="#ffffff" />
              </div>
              <span>Global <span className="erp-blue-text-badge">ERP Solutions.</span> Local Impact.</span>
            </div>

            <h2 className="erp-services-title">
              Our ERP Distribution &<br/>
              <span className="erp-blue-text">Implementation</span> Services
            </h2>

            <p className="erp-services-desc">
              We provide access to the best ERP platforms globally,<br/>
              including solutions for:
            </p>

            <div className="erp-services-grid">
              
              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Calculator size={18} color="#ffffff" />
                </div>
                <span>Accounting & Finance</span>
              </div>

              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Landmark size={18} color="#ffffff" />
                </div>
                <span>Banking & Financial<br/>Operations</span>
              </div>

              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Package size={18} color="#ffffff" />
                </div>
                <span>Inventory & Supply Chain<br/>Management</span>
              </div>

              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Utensils size={18} color="#ffffff" />
                </div>
                <span>Restaurant & Hospitality<br/>Management</span>
              </div>

              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Store size={18} color="#ffffff" />
                </div>
                <span>Retail & Point of Sale (POS)</span>
              </div>

              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Network size={18} color="#ffffff" />
                </div>
                <span>Multi-Branch &<br/>Multi-Division Operations</span>
              </div>

              <div className="erp-service-card">
                <div className="erp-service-icon">
                  <Factory size={18} color="#ffffff" />
                </div>
                <span>Manufacturing, Production<br/>& Assembly</span>
              </div>

            </div>

            <div className="erp-services-footer-msg">
              <div className="erp-msg-icon">
                <ShieldCheck size={20} color="#ffffff" />
              </div>
              <p>We guide you in choosing the platform that best fits your<br/>business model and operational goals.</p>
            </div>

          </div>

          {/* Right Content */}
          <div className="erp-services-right">
            <img src="/erpsolution.png" alt="ERP Implementation Services" className="erp-services-img" />
          </div>

        </div>
      </section>

      {/* ================= CORE SERVICES SECTION ================= */}
      <section className="erp-core-section">
        <div className="container">
          
          <div className="erp-core-header">
            <h2 className="erp-core-title">
              Our <span className="erp-blue-text">Core ERP</span> Services
            </h2>
            <div className="erp-core-divider">
              <div className="erp-core-line"></div>
              <div className="erp-core-dot"></div>
            </div>
            <p className="erp-core-subtitle">
              End-to-end ERP solutions designed to optimize, integrate, and empower your business.
            </p>
          </div>

          <div className="erp-core-grid">
            
            {/* Card 1 */}
            <div className="erp-core-card">
              <div className="erp-core-card-badge">01</div>
              <div className="erp-core-img-wrapper">
                <img src="/erp1.png" alt="ERP Implementation & Customization" />
              </div>
              <div className="erp-core-card-content">
                <h3 className="erp-core-card-title">ERP IMPLEMENTATION &<br/>CUSTOMIZATION</h3>
                <p className="erp-core-card-desc">
                  Our certified experts handle complete implementation, from setup and 
                  configuration to customization. Whether you require single-branch, multi-branch, or 
                  multi-division setups, our team ensures your ERP works exactly as your business requires.
                </p>
              </div>
              <div className="erp-core-card-bottom-border"></div>
            </div>

            {/* Card 2 */}
            <div className="erp-core-card">
              <div className="erp-core-card-badge">02</div>
              <div className="erp-core-img-wrapper">
                <img src="/erp2.png" alt="Integration with Existing Systems" />
              </div>
              <div className="erp-core-card-content">
                <h3 className="erp-core-card-title">INTEGRATION WITH<br/>EXISTING SYSTEMS</h3>
                <p className="erp-core-card-desc">
                  We ensure smooth integration with your current software ecosystem, including CRM, 
                  accounting tools, legacy systems, and other enterprise applications — protecting your 
                  existing investments while modernizing your operations.
                </p>
              </div>
              <div className="erp-core-card-bottom-border"></div>
            </div>

            {/* Card 3 */}
            <div className="erp-core-card">
              <div className="erp-core-card-badge">03</div>
              <div className="erp-core-img-wrapper">
                <img src="/erp3.png" alt="Training & Support" />
              </div>
              <div className="erp-core-card-content">
                <h3 className="erp-core-card-title">TRAINING & SUPPORT</h3>
                <p className="erp-core-card-desc">
                  We provide structured corporate training for executives, managers, and end-users. Our 
                  support ensures your team can maximize the benefits of the ERP software, with 
                  ongoing assistance for updates, troubleshooting, and system optimization.
                </p>
              </div>
              <div className="erp-core-card-bottom-border"></div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="erp-why-choose-section">
        <div className="container">
          
          <div className="erp-why-header">
            <div className="erp-why-subtitle-wrapper">
              <span className="erp-why-line"></span>
              <span className="erp-why-subtitle">WHY CHOOSE MOSTECH</span>
              <span className="erp-why-line"></span>
            </div>
            <h2 className="erp-why-title">
              Why Choose MOSTECH for<br/>
              <span className="erp-blue-text">ERP Solutions?</span>
            </h2>
            <div className="erp-why-underline"></div>
          </div>

          <div className="erp-why-content-wrapper">
            {/* Left List */}
            <div className="erp-why-list">
              <div className="erp-why-list-item">
                <div className="erp-why-icon-box">
                  <ShieldCheck size={20} color="#ffffff" />
                </div>
                <div className="erp-why-item-text">
                  <ChevronRight size={16} color="#444" className="erp-chevron" />
                  <span>Trusted distributor of world-class ERP platforms</span>
                </div>
              </div>

              <div className="erp-why-list-item">
                <div className="erp-why-icon-box">
                  <Users size={20} color="#ffffff" />
                </div>
                <div className="erp-why-item-text">
                  <ChevronRight size={16} color="#444" className="erp-chevron" />
                  <span>Expert guidance in platform selection and deployment</span>
                </div>
              </div>

              <div className="erp-why-list-item">
                <div className="erp-why-icon-box">
                  <Puzzle size={20} color="#ffffff" />
                </div>
                <div className="erp-why-item-text">
                  <ChevronRight size={16} color="#444" className="erp-chevron" />
                  <span>Seamless integration with existing enterprise systems</span>
                </div>
              </div>

              <div className="erp-why-list-item">
                <div className="erp-why-icon-box">
                  <SlidersHorizontal size={20} color="#ffffff" />
                </div>
                <div className="erp-why-item-text">
                  <ChevronRight size={16} color="#444" className="erp-chevron" />
                  <span>Customization tailored to your workflows</span>
                </div>
              </div>

              <div className="erp-why-list-item">
                <div className="erp-why-icon-box">
                  <GraduationCap size={20} color="#ffffff" />
                </div>
                <div className="erp-why-item-text">
                  <ChevronRight size={16} color="#444" className="erp-chevron" />
                  <span>Comprehensive training and post-implementation support</span>
                </div>
              </div>

              <div className="erp-why-list-item">
                <div className="erp-why-icon-box">
                  <BarChart2 size={20} color="#ffffff" />
                </div>
                <div className="erp-why-item-text">
                  <ChevronRight size={16} color="#444" className="erp-chevron" />
                  <span>Scalable solutions designed for growth</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="erp-why-image">
              <img src="/ERPFINAL.png" alt="ERP Dashboard" />
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="erp-why-banner">
            <div className="erp-banner-left">
              <div className="erp-banner-icon-bg">
                <Handshake size={32} color="#ffffff" />
              </div>
              <p className="erp-banner-text">
                With MOSTECH, you don't just get software —<br/>
                you get a <span className="erp-blue-text font-bold">strategic partner</span> for<br/>
                digital transformation.
              </p>
            </div>
            
            <div className="erp-banner-right">
              <div className="erp-banner-stat">
                <div className="erp-stat-icon">
                  <Target size={24} color="#0044cc" />
                </div>
                <span>Proven<br/>Expertise</span>
              </div>
              <div className="erp-banner-stat">
                <div className="erp-stat-icon">
                  <Handshake size={24} color="#0044cc" />
                </div>
                <span>Reliable<br/>Partnership</span>
              </div>
              <div className="erp-banner-stat">
                <div className="erp-stat-icon">
                  <Headphones size={24} color="#0044cc" />
                </div>
                <span>Dedicated<br/>Support</span>
              </div>
              <div className="erp-banner-stat">
                <div className="erp-stat-icon">
                  <Gem size={24} color="#0044cc" />
                </div>
                <span>Measurable<br/>Results</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ErpPage;
