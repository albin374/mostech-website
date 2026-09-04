import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Users, 
  Code, 
  BarChart, 
  Rocket, 
  Settings,
  Smartphone,
  Globe,
  Lightbulb,
  PenTool,
  Sliders,
  Award,
  Shield,
  Paintbrush,
  Wifi,
  Cloud,
  Layers,
  Cpu,
  Send
} from 'lucide-react';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import './MobileAppDevPage.css';

const MobileAppDevPage = () => {
  return (
    <main className="mobile-page-main">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="mobile-hero-section">
        {/* Decorative background elements */}
        <div className="mobile-hero-dots"></div>

        <div className="container mobile-hero-container">
          
          {/* Left Content */}
          <div className="mobile-hero-left">
            <div className="mobile-badge-pill">
              <Smartphone size={14} color="#2f6bd8" strokeWidth={2.5} />
              <span className="mobile-badge-text">MOBILE APP DEVELOPMENT EXPERTS</span>
            </div>
            
            <h1 className="mobile-main-title">
              We Design. Develop. Launch. Apps That Drive <span>Business Growth.</span>
            </h1>
            
            <div className="mobile-title-line"></div>
            
            <p className="mobile-description">
              At Mostech Business Solutions, we build innovative mobile applications that help 
              businesses connect with customers, improve operations, and accelerate digital 
              growth. Our expert team develops secure, scalable, and high-performance 
              Android, iOS, and cross-platform apps tailored to your unique business needs.
            </p>

            <div className="mobile-features-grid">
              <div className="mobile-feature-item">
                <div className="mobile-feature-icon">
                  <ShieldCheck size={20} color="#2f6bd8" strokeWidth={2} />
                </div>
                <span>Secure<br/>& Reliable</span>
              </div>
              <div className="mobile-feature-item">
                <div className="mobile-feature-icon">
                  <TrendingUp size={20} color="#2f6bd8" strokeWidth={2} />
                </div>
                <span>Scalable<br/>Solutions</span>
              </div>
              <div className="mobile-feature-item">
                <div className="mobile-feature-icon">
                  <Zap size={20} color="#2f6bd8" strokeWidth={2} />
                </div>
                <span>High<br/>Performance</span>
              </div>
              <div className="mobile-feature-item">
                <div className="mobile-feature-icon">
                  <Users size={20} color="#2f6bd8" strokeWidth={2} />
                </div>
                <span>User-Centric<br/>Design</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="mobile-hero-right">
            <img src="/mobile banner new .png" alt="Mostech Mobile Solutions" className="mobile-hero-banner-img" />
          </div>
        </div>
      </section>

      {/* ----------------- SERVICES SECTION ----------------- */}
      <section className="mobile-services-section">
        <div className="container">
          
          <div className="mobile-services-header">
            <h2>Complete Solutions. Seamless Experience.</h2>
            <div className="mobile-services-title-line"></div>
            <p>
              At Mostech, we provide complete mobile app development services — from concept and UI/UX design 
              to development, deployment, and continuous improvement.
            </p>
          </div>

          <div className="mobile-services-cards">
            
            {/* Android Card */}
            <div className="mobile-service-card">
              <div className="m-card-left">
                <div className="m-card-icon-box">
                  <FaAndroid size={32} color="#ffffff" />
                </div>
              </div>
              <div className="m-card-content">
                <h3>Android App Development</h3>
                <div className="m-card-line"></div>
                <p>
                  High-performance Android applications designed for speed, scalability, and reliability. 
                  Optimized to work seamlessly across devices and screen sizes.
                </p>
              </div>
              <div className="m-card-number">01</div>
            </div>

            {/* iOS Card */}
            <div className="mobile-service-card">
              <div className="m-card-left">
                <div className="m-card-icon-box">
                  <FaApple size={32} color="#ffffff" />
                </div>
              </div>
              <div className="m-card-content">
                <h3>iOS App Development</h3>
                <div className="m-card-line"></div>
                <p>
                  Clean, intuitive, and secure iOS applications built to meet Apple's latest development 
                  standards. Focused on performance, usability, and long-term stability.
                </p>
              </div>
              <div className="m-card-number">02</div>
            </div>

            {/* Hybrid Card */}
            <div className="mobile-service-card">
              <div className="m-card-left">
                <div className="m-card-icon-box">
                  <Globe size={32} color="#ffffff" />
                </div>
              </div>
              <div className="m-card-content">
                <h3>Hybrid & Cross-Platform Applications</h3>
                <div className="m-card-line"></div>
                <p>
                  Cost-effective cross-platform mobile applications that deliver native-like performance 
                  across Android and iOS using modern frameworks.
                </p>
              </div>
              <div className="m-card-number">03</div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- WHY CHOOSE US SECTION ----------------- */}
      <section className="mobile-why-section">
        {/* Background dots */}
        <div className="mobile-hero-dots" style={{ top: '10%', left: '5%' }}></div>
        <div className="mobile-hero-dots" style={{ top: '10%', right: '5%', left: 'auto' }}></div>
        
        <div className="container">
          <div className="mobile-services-header">
            <h2>Why Choose <span className="mobile-title-highlight">Mostech?</span></h2>
            <div className="mobile-services-title-line"></div>
            <p>
              We combine innovation, expertise, and commitment to deliver mobile solutions
              that drive real business impact.
            </p>
          </div>

          <div className="mobile-why-content">
            {/* Left side: Feature cards */}
            <div className="mobile-why-left">
              
              <div className="why-card">
                <div className="why-icon-box">
                  <Sliders size={24} color="#ffffff" />
                </div>
                <div className="why-card-text">
                  <h3>Customized Solutions</h3>
                  <p>We know that no two businesses are alike and provide custom solutions to meet individual requirements of our clients.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-box">
                  <Users size={24} color="#ffffff" />
                </div>
                <div className="why-card-text">
                  <h3>User Centered Design</h3>
                  <p>Our team at Mostech ensures to design engaging, visually appealing, and user-friendly interfaces which connect well with the target audience.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-box">
                  <Rocket size={24} color="#ffffff" />
                </div>
                <div className="why-card-text">
                  <h3>Full Service Development</h3>
                  <p>We offer complete development services for a project starting from analysis to testing. This way our approach to planning and execution is ensured to be comprehensive.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-box">
                  <Award size={24} color="#ffffff" />
                </div>
                <div className="why-card-text">
                  <h3>Skills & Expertise</h3>
                  <p>With years of experience in developing mobile apps, they are familiar with using the latest technologies to develop efficient apps.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-box">
                  <ShieldCheck size={24} color="#ffffff" />
                </div>
                <div className="why-card-text">
                  <h3>Quality Assurance & Support</h3>
                  <p>Our quality assurance team makes sure to test the app properly before releasing it to ensure there are no issues with the app. We conduct strict security tests for the protection of user data. Once the app goes live, we offer you support and maintenance services.</p>
                </div>
              </div>

            </div>

            {/* Right side: Image */}
            <div className="mobile-why-right">
              <img src="/why choose as.png" alt="Why Choose Mostech" className="why-choose-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- APP EXPERTS SECTION ----------------- */}
      <section className="mobile-experts-section">
        {/* Abstract background elements */}
        <div className="experts-bg-glow"></div>
        <div className="mobile-hero-dots" style={{ top: '20%', left: '10%', opacity: 0.05 }}></div>
        <div className="mobile-hero-dots" style={{ bottom: '20%', right: '10%', opacity: 0.05 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="experts-header">
            <h2>What Makes Our <span className="mobile-title-highlight">App Experts</span> Special?</h2>
            <p>
              We deliver powerful, secure, and user-centric mobile applications<br className="d-none d-md-block" />
              crafted with industry-best practices.
            </p>
          </div>

          <div className="experts-grid">
            
            {/* Card 1 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Shield size={24} color="#ffffff" />
              </div>
              <h4>ADVANCED<br/>DATA SECURITY</h4>
              <p>End-to-end security with secure coding, encrypted data, and protected API integrations.</p>
            </div>

            {/* Card 2 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Smartphone size={24} color="#ffffff" />
              </div>
              <h4>FULL DEVICE<br/>COMPATIBILITY</h4>
              <p>Flexible and responsive layouts that adapt perfectly to all mobile devices and screen sizes.</p>
            </div>

            {/* Card 3 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Paintbrush size={24} color="#ffffff" />
              </div>
              <h4>HIGH-IMPACT<br/>UI/UX DESIGN</h4>
              <p>User-centric designs that improve engagement, retention, and overall app usability.</p>
            </div>

            {/* Card 4 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Wifi size={24} color="#ffffff" />
              </div>
              <h4>IOT-ENABLED MOBILE<br/>APPLICATIONS</h4>
              <p>Smart apps that connect and control IoT-enabled devices with real-time data interaction.</p>
            </div>

            {/* Card 5 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Code size={24} color="#ffffff" />
              </div>
              <h4>CUSTOM MOBILE APP<br/>DEVELOPMENT</h4>
              <p>Tailor-made solutions built with custom modules to meet your exact business requirements.</p>
            </div>

            {/* Card 6 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Cloud size={24} color="#ffffff" />
              </div>
              <h4>CLOUD<br/>INTEGRATION</h4>
              <p>Cloud-native applications offering better performance, reliability, scalability, and security.</p>
            </div>

            {/* Card 7 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Globe size={24} color="#ffffff" />
              </div>
              <h4>MULTI-LANGUAGE &<br/>MULTI-CURRENCY SUPPORT</h4>
              <p>Applications built for global audiences with localization and regional adaptability.</p>
            </div>

            {/* Card 8 */}
            <div className="expert-card">
              <div className="expert-icon-wrap">
                <Rocket size={24} color="#ffffff" />
              </div>
              <h4>SCALABLE &<br/>FUTURE-READY SOLUTIONS</h4>
              <p>Apps designed with flexible architecture to scale effortlessly as your business grows.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- EXPLORE SERVICES SECTION ----------------- */}
      <section className="mobile-explore-section">
        {/* Background dots */}
        <div className="mobile-hero-dots" style={{ top: '10%', left: '3%' }}></div>
        <div className="mobile-hero-dots" style={{ bottom: '10%', right: '3%', left: 'auto' }}></div>

        <div className="container">
          <div className="mobile-explore-header">
            <div className="explore-badge-wrap">
              <span className="explore-badge-line"></span>
              <span className="explore-badge-text">OUR MOBILE APP DEVELOPMENT SERVICES</span>
              <span className="explore-badge-line"></span>
            </div>
            <h2>Explore <span className="mobile-title-highlight">Mobile App Development</span> Services</h2>
            <div className="mobile-services-title-line center-line"></div>
            <p>
              In the current times, having a mobile application is vital in helping increase customer engagement, business effectiveness, and growth. 
              With a well-developed mobile application, a business can maintain its competitiveness while at the same time ensuring a great experience for its users.
            </p>
            <p>
              <span className="text-highlight-blue">Mostech Business Solutions</span> provides mobile app development services for various platforms, including Android, iOS, 
              and cross-platform applications built using the latest technology such as Flutter.
            </p>
          </div>

          <div className="explore-cards-grid">
            
            {/* Left Card: Technologies & Approach */}
            <div className="explore-card">
              <div className="explore-card-header">
                <div className="explore-icon-box">
                  <Code size={24} color="#ffffff" />
                </div>
                <div>
                  <h3>Technologies & Approach</h3>
                  <div className="explore-card-line"></div>
                </div>
              </div>

              <div className="explore-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon-wrap">
                    <FaAndroid size={16} color="#0c2b7e" />
                    <FaApple size={16} color="#0c2b7e" />
                  </div>
                  <span className="timeline-text">Native Android & iOS Development</span>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon-wrap single-icon">
                    <Layers size={18} color="#0c2b7e" />
                  </div>
                  <span className="timeline-text">Modern Cross-Platform Frameworks</span>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon-wrap single-icon">
                    <Cloud size={18} color="#0c2b7e" />
                  </div>
                  <span className="timeline-text">Cloud-First & API-Driven Architecture</span>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon-wrap single-icon">
                    <Shield size={18} color="#0c2b7e" />
                  </div>
                  <span className="timeline-text">Secure Backend & Database Systems</span>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon-wrap single-icon">
                    <Cpu size={18} color="#0c2b7e" />
                  </div>
                  <span className="timeline-text">AI-Ready, Automation-Friendly Designs</span>
                </div>
              </div>
            </div>

            {/* Right Card: Let's Build Your Mobile App */}
            <div className="explore-card right-card-layout">
              <div className="explore-card-content-left">
                <div className="explore-card-header">
                  <div className="explore-icon-box">
                    <Rocket size={24} color="#ffffff" />
                  </div>
                  <div>
                    <h3>Let's Build Your Mobile App</h3>
                    <div className="explore-card-line" style={{ display: 'none' }}></div>
                  </div>
                </div>

                <p className="explore-right-desc">
                  Whether you're launching a startup app or developing a large-scale enterprise solution, 
                  Mostech delivers mobile applications that combine innovation, high performance, and reliability.
                </p>

                <div className="explore-pills">
                  <div className="explore-pill">
                    <Users size={18} color="#0c2b7e" />
                    <span>Consult with our Mobile App Experts</span>
                  </div>
                  <div className="explore-pill">
                    <Send size={18} color="#0c2b7e" />
                    <span>Turn your idea into a powerful mobile solution</span>
                  </div>
                </div>
              </div>

              <div className="explore-card-img-right">
                <img src="/mobile solutions.png" alt="Mobile Solutions" className="explore-phone-img" />
              </div>
            </div>

          </div>
        </div>
      </section>



    </main>
  );
};

export default MobileAppDevPage;
