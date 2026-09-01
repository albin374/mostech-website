import React, { useEffect } from 'react';
import { 
  ShoppingCart, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone,
  MessageCircle,
  Paintbrush,
  Wrench,
  Sliders,
  ArrowRightLeft,
  ArrowRight,
  Star,
  Search,
  CreditCard,
  MonitorSmartphone,
  BarChart2,
  Puzzle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './EcommercePage.css';

const EcommercePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ecom-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="ecom-hero-section">
        <div className="container ecom-hero-container">
          
          {/* Left Content */}
          <div className="ecom-hero-left">
            <div className="ecom-hero-badge">
              <ShoppingCart size={16} color="#0044cc" />
              <span>SMART COMMERCE. LIMITLESS GROWTH.</span>
            </div>

            <h1 className="ecom-main-title">
              Revolutionizing Retail with<br/>
              <span className="ecom-blue-text">Multi-Platform</span> Ecommerce
            </h1>
            
            <div className="ecom-title-dash"></div>

            <h3 className="ecom-subtitle">
              End-to-End eCommerce Solutions Built for Growth
            </h3>

            <p className="ecom-desc">
              At <strong>MOSTECH</strong>, we design and develop unified eCommerce platforms that 
              deliver seamless shopping experiences across web, mobile, and all digital 
              touchpoints. Your eCommerce store is more than just a sales channel — 
              it is a direct reflection of your brand, performance, and customer trust.
            </p>

            <p className="ecom-desc">
              Our expert eCommerce developers build secure, scalable, and 
              high-converting online stores tailored to your business model — 
              whether single-vendor, multi-vendor, B2C, B2B, or marketplace platforms.
            </p>



            {/* Contact Action */}
            <div className="ecom-contact-action">
              <a href="/#contact" className="ecom-contact-btn">
                CONTACT US <FaWhatsapp size={20} />
              </a>
            </div>

          </div>

          {/* Right Content */}
          <div className="ecom-hero-right">
            <img src="/robot e commerce.png" alt="Robot Ecommerce" className="ecom-hero-img" />
            
            {/* 4 Feature Cards Moved Under Image */}
            <div className="ecom-feature-cards">
              
              <div className="ecom-feature-card">
                <div className="ecom-feature-icon">
                  <ShieldCheck size={28} color="#0044cc" />
                </div>
                <span>Secure &<br/>Reliable</span>
              </div>

              <div className="ecom-feature-card">
                <div className="ecom-feature-icon">
                  <TrendingUp size={28} color="#0044cc" />
                </div>
                <span>Scalable for<br/>Growth</span>
              </div>

              <div className="ecom-feature-card">
                <div className="ecom-feature-icon">
                  <ShoppingCart size={28} color="#0044cc" />
                </div>
                <span>High<br/>Conversions</span>
              </div>

              <div className="ecom-feature-card">
                <div className="ecom-feature-icon">
                  <Smartphone size={28} color="#0044cc" />
                </div>
                <span>Seamless Across<br/>All Platforms</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="ecom-services-section">
        <div className="container">
          
          <div className="ecom-services-header">
            <h2 className="ecom-section-title">Our eCommerce Development Services</h2>
            <p className="ecom-section-subtitle">Customer-Centric Solutions That Drive Sales</p>
          </div>

          <div className="ecom-services-grid">
            
            {/* Card 1 */}
            <div className="ecom-service-card color-blue">
              <div className="card-top-accent"></div>
              <div className="card-icon-wrapper">
                <ShoppingCart size={24} color="#fff" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Ecommerce<br/>Development</h3>
                <p className="card-desc">
                  Complete end-to-end eCommerce development tailored to your business needs — from product catalog setup to checkout, payment integration, and order management.
                </p>
                <a href="#learn-more" className="card-link">
                  Learn more <div className="link-icon"><ArrowRight size={16} /></div>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="ecom-service-card color-lightblue">
              <div className="card-top-accent"></div>
              <div className="card-icon-wrapper">
                <Paintbrush size={24} color="#fff" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Ecommerce Theme<br/>Integration</h3>
                <p className="card-desc">
                  Seamless theme integration and customization to match your brand identity. Choose your preferred theme or let our experts design the perfect storefront experience.
                </p>
                <a href="#learn-more" className="card-link">
                  Learn more <div className="link-icon"><ArrowRight size={16} /></div>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="ecom-service-card color-green">
              <div className="card-top-accent"></div>
              <div className="card-icon-wrapper">
                <Wrench size={24} color="#fff" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Ecommerce<br/>Maintenance & Support</h3>
                <p className="card-desc">
                  Ongoing support to keep your store running smoothly — performance optimization, bug fixes, security updates, and feature enhancements.
                </p>
                <a href="#learn-more" className="card-link">
                  Learn more <div className="link-icon"><ArrowRight size={16} /></div>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="ecom-service-card color-purple">
              <div className="card-top-accent"></div>
              <div className="card-icon-wrapper">
                <MessageCircle size={24} color="#fff" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Ecommerce<br/>Consultation</h3>
                <p className="card-desc">
                  Not sure how to start or scale your online store? Our consultants help you choose the right platform, architecture, and strategy for long-term growth.
                </p>
                <a href="#learn-more" className="card-link">
                  Learn more <div className="link-icon"><ArrowRight size={16} /></div>
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="ecom-service-card color-orange">
              <div className="card-top-accent"></div>
              <div className="card-icon-wrapper">
                <Sliders size={24} color="#fff" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Ecommerce<br/>Customization</h3>
                <p className="card-desc">
                  Fully customized eCommerce solutions built around your unique workflows, integrations, and customer experience requirements.
                </p>
                <a href="#learn-more" className="card-link">
                  Learn more <div className="link-icon"><ArrowRight size={16} /></div>
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="ecom-service-card color-teal">
              <div className="card-top-accent"></div>
              <div className="card-icon-wrapper">
                <ArrowRightLeft size={24} color="#fff" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Ecommerce<br/>Migration</h3>
                <p className="card-desc">
                  Safe and seamless migration from any existing eCommerce platform without data loss — including products, customers, orders, and SEO value.
                </p>
                <a href="#learn-more" className="card-link">
                  Learn more <div className="link-icon"><ArrowRight size={16} /></div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="ecom-features-section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container ecom-features-container">
          
          {/* Left Content */}
          <div className="ecom-features-left">
            <h2 className="ecom-features-title">
              Features of a<br/>
              High-Performing<br/>
              <span className="ecom-blue-text">eCommerce Store</span>
            </h2>
            
            <p className="ecom-features-desc">
              A successful eCommerce platform is designed<br/>
              for speed, simplicity, and conversions.
            </p>

            <ul className="ecom-features-list">
              <li>
                <div className="feature-list-icon">
                  <ShoppingCart size={18} color="#0044cc" />
                </div>
                <span>Fast and simplified checkout with minimal steps</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <Search size={18} color="#0044cc" />
                </div>
                <span>SEO-optimized structure for better product visibility</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <ShieldCheck size={18} color="#0044cc" />
                </div>
                <span>Strong brand identity reflected in design and functionality</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <CreditCard size={18} color="#0044cc" />
                </div>
                <span>Multiple secure payment gateway integrations</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <MonitorSmartphone size={18} color="#0044cc" />
                </div>
                <span>Fully responsive design across all devices</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <BarChart2 size={18} color="#0044cc" />
                </div>
                <span>Advanced reporting and product performance tracking</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <Puzzle size={18} color="#0044cc" />
                </div>
                <span>Optimized functionality using the right plugins and modules</span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="ecom-features-right">
            <img src="/e commerce robot.png" alt="Ecommerce Robot Features" className="ecom-features-img" />
          </div>

        </div>
      </section>

      {/* ================= REVERSED FEATURES SECTION ================= */}
      <section className="ecom-features-section" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
        <div className="container ecom-features-container">
          
          {/* Image Content (Left) */}
          <div className="ecom-features-right">
            <img src="/e commerceshopping.png" alt="Ecommerce Shopping" className="ecom-features-img" />
          </div>

          {/* Text Content (Right) */}
          <div className="ecom-features-left">
            <h2 className="ecom-features-title">
              Features of a<br/>
              High-Performing<br/>
              <span className="ecom-blue-text">eCommerce Store</span>
            </h2>
            
            <p className="ecom-features-desc">
              A successful eCommerce platform is designed<br/>
              for speed, simplicity, and conversions.
            </p>

            <ul className="ecom-features-list">
              <li>
                <div className="feature-list-icon">
                  <ShoppingCart size={18} color="#0044cc" />
                </div>
                <span>Fast and simplified checkout with minimal steps</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <Search size={18} color="#0044cc" />
                </div>
                <span>SEO-optimized structure for better product visibility</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <ShieldCheck size={18} color="#0044cc" />
                </div>
                <span>Strong brand identity reflected in design and functionality</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <CreditCard size={18} color="#0044cc" />
                </div>
                <span>Multiple secure payment gateway integrations</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <MonitorSmartphone size={18} color="#0044cc" />
                </div>
                <span>Fully responsive design across all devices</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <BarChart2 size={18} color="#0044cc" />
                </div>
                <span>Advanced reporting and product performance tracking</span>
              </li>
              <li>
                <div className="feature-list-icon">
                  <Puzzle size={18} color="#0044cc" />
                </div>
                <span>Optimized functionality using the right plugins and modules</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="ecom-cta-section">
        <div className="container">
          <div className="ecom-cta-card">
            <h2 className="ecom-cta-title">
              Let's Build Something<br/>
              <span className="ecom-blue-text">Exceptional</span> Together
            </h2>
            <p className="ecom-cta-desc">
              Ready to transform your vision into reality with unparalleled technical expertise?
            </p>
            <div className="ecom-cta-buttons">
              <a href="/#contact" className="btn-primary-dark">
                Request a Quote <ArrowRight size={18} />
              </a>
              <a href="/#contact" className="btn-secondary-light">
                Contact Our Experts <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default EcommercePage;
