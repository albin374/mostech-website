import React, { useEffect } from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  Code, 
  ShoppingCart, 
  Globe, 
  Layout, 
  BarChart, 
  Cloud,
  Gauge,
  User,
  Target,
  Shield,
  LineChart,
  CheckSquare,
  Banknote,
  Users,
  Monitor,
  Smartphone,
  Lock,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import './WebDevPage.css';

const WebDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="web-page">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="web-hero-section">
        {/* Decorative background elements */}
        <div className="web-hero-dots" style={{ top: '5%', left: '5%' }}></div>
        <div className="web-hero-dots" style={{ bottom: '5%', right: '5%' }}></div>

        <div className="container web-hero-container">
          
          {/* Left Content */}
          <div className="web-hero-left">
            <div className="web-badge-wrap">
              <span className="web-badge-dot"></span>
              <span className="web-badge-text">WEB SOLUTIONS THAT DRIVE BUSINESS</span>
            </div>
            
            <h1 className="web-main-title">
              Strategic Web Solutions<br />
              <span className="web-title-highlight">Built for Growth</span>
            </h1>
            
            <div className="web-title-line"></div>
            
            <p className="web-hero-desc">
              At Mostech, we design and develop web solutions that are intuitive, efficient, 
              and built around real user behavior. Our web applications and websites are 
              engineered to deliver seamless digital experiences while helping businesses 
              operate faster, smarter, and more efficiently.
            </p>

            {/* Dark Blue Highlight Box */}
            <div className="web-highlight-box dark">
              <div className="web-highlight-icon-wrap">
                <Rocket size={24} color="#ffffff" />
              </div>
              <p>
                We focus on usability, performance, and scalability — ensuring 
                every interaction feels seamless for users and powerful for 
                businesses.
              </p>
              <div className="web-highlight-right-border"></div>
            </div>

            {/* Light Blue Highlight Box */}
            <div className="web-highlight-box light" style={{ marginTop: '2rem' }}>
              <div className="web-highlight-icon-wrap-light">
                <ShieldCheck size={24} color="#ffffff" />
              </div>
              <p>
                Whether it's a simple business website or a complex web platform, 
                we build solutions that are secure, scalable, and future-ready.
              </p>
              <div className="web-highlight-left-border"></div>
            </div>

          </div>

          {/* Right Content */}
          <div className="web-hero-right">
            <div className="web-image-wrapper">
              <img src="/webdesginnew.png" alt="Mostech Web Design & Development" className="web-hero-img" />
            </div>

            {/* Services Grid Moved Here */}
            <div className="web-services-grid">
              <div className="web-service-item">
                <div className="web-service-icon">
                  <Code size={18} color="#ffffff" />
                </div>
                <span>Custom Web Application<br/>Development</span>
              </div>
              <div className="web-service-item">
                <div className="web-service-icon">
                  <ShoppingCart size={18} color="#ffffff" />
                </div>
                <span>eCommerce Platform<br/>Development</span>
              </div>
              <div className="web-service-item">
                <div className="web-service-icon">
                  <Globe size={18} color="#ffffff" />
                </div>
                <span>Corporate Website<br/>Development</span>
              </div>
              <div className="web-service-item">
                <div className="web-service-icon">
                  <Layout size={18} color="#ffffff" />
                </div>
                <span>UI/UX Design &<br/>Optimization</span>
              </div>
              <div className="web-service-item">
                <div className="web-service-icon">
                  <BarChart size={18} color="#ffffff" />
                </div>
                <span>Web Portal & Dashboard<br/>Development</span>
              </div>
              <div className="web-service-item">
                <div className="web-service-icon">
                  <Cloud size={18} color="#ffffff" />
                </div>
                <span>Cloud-Integrated, API-Driven<br/>Web Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- WHY WEB APPLICATIONS MATTER SECTION ----------------- */}
      <section className="web-matter-section">
        {/* Decorative background curves (optional/simplified) */}
        <div className="web-matter-bg-curve top-left"></div>
        <div className="web-matter-bg-curve bottom-right"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="matter-header">
            <div className="matter-top-icon-wrap">
              <div className="matter-top-icon-inner">
                <Globe size={28} color="#2f6bd8" />
              </div>
            </div>
            
            <h2>Why <span className="web-title-highlight">Web Applications</span> Matter</h2>
            <div className="matter-title-line"></div>
            
            <p>
              The purpose of web application development is to make processes easier, faster, and more manageable — not just 
              for businesses, but for users as well. Every business has unique workflows and challenges. That's why custom web 
              application development plays a critical role in improving productivity, performance, and operational efficiency. 
              These tailored solutions are built to match exact business needs, resulting in better outcomes and measurable 
              growth.
            </p>
          </div>

          <div className="matter-cards-container">
            {/* The horizontal connecting line */}
            <div className="matter-connecting-line"></div>

            {/* Card 1 */}
            <div className="matter-card-wrapper">
              <div className="matter-card">
                <div className="matter-card-icon">
                  <Gauge size={32} color="#2f6bd8" />
                </div>
                <h3>Easier Processes</h3>
                <div className="matter-card-line"></div>
                <p>Streamline operations and eliminate manual effort with smart web applications.</p>
              </div>
              <div className="matter-connector-dot"></div>
            </div>

            {/* Card 2 */}
            <div className="matter-card-wrapper">
              <div className="matter-card">
                <div className="matter-card-icon">
                  <Rocket size={32} color="#2f6bd8" />
                </div>
                <h3>Higher Performance</h3>
                <div className="matter-card-line"></div>
                <p>Built for speed and reliability to help your business perform at its best.</p>
              </div>
              <div className="matter-connector-dot"></div>
            </div>

            {/* Card 3 */}
            <div className="matter-card-wrapper">
              <div className="matter-card">
                <div className="matter-card-icon">
                  <ShieldCheck size={32} color="#2f6bd8" />
                </div>
                <h3>Better Efficiency</h3>
                <div className="matter-card-line"></div>
                <p>Automate workflows and manage tasks more effectively across your organization.</p>
              </div>
              <div className="matter-connector-dot"></div>
            </div>

            {/* Card 4 */}
            <div className="matter-card-wrapper">
              <div className="matter-card">
                <div className="matter-card-icon">
                  <BarChart size={32} color="#2f6bd8" />
                </div>
                <h3>Measurable Growth</h3>
                <div className="matter-card-line"></div>
                <p>Custom solutions that drive results and scale with your business growth.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- WHY CHOOSE MOSTECH SECTION ----------------- */}
      <section className="web-choose-section">
        <div className="container">
          <div className="web-choose-container">
            
            {/* Left Image */}
            <div className="web-choose-left">
              <img src="/web robot 3.png" alt="Mostech Web Development" className="web-choose-img" />
            </div>

            {/* Right Content */}
            <div className="web-choose-right">
              <h2>Why Choose Mostech for<br/><span className="web-title-highlight">Web Development?</span></h2>
              <div className="web-choose-title-line"></div>
              
              <p className="web-choose-desc">
                We create web solutions that stand out — not just visually, but functionally. 
                Our designs are clean, modern, and conversion-focused, while our 
                development approach ensures speed, security, and long-term scalability. 
                From corporate websites and web portals to advanced e-commerce 
                platforms, we bring ideas to life with precision and purpose.
              </p>

              <h4 className="web-choose-subtitle">At Mostech, every web solution is:</h4>

              <div className="web-choose-grid">
                {/* Card 1 */}
                <div className="web-choose-card">
                  <div className="choose-card-icon">
                    <User size={20} color="#ffffff" />
                  </div>
                  <div className="choose-card-text">
                    <h5>User-friendly<br/>and easy to use</h5>
                    <p>Intuitive interfaces that deliver a seamless experience.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="web-choose-card">
                  <div className="choose-card-icon">
                    <Gauge size={20} color="#ffffff" />
                  </div>
                  <div className="choose-card-text">
                    <h5>Performance-optimized<br/>and responsive</h5>
                    <p>Fast-loading, responsive websites that perform flawlessly on every device.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="web-choose-card">
                  <div className="choose-card-icon">
                    <Shield size={20} color="#ffffff" />
                  </div>
                  <div className="choose-card-text">
                    <h5>Secure, scalable,<br/>and maintainable</h5>
                    <p>Built with clean code and best practices for long-term security and scalability.</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="web-choose-card">
                  <div className="choose-card-icon">
                    <Target size={20} color="#ffffff" />
                  </div>
                  <div className="choose-card-text">
                    <h5>Designed for real<br/>business impact</h5>
                    <p>Solutions that convert visitors, automate workflows, and drive measurable results.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ----------------- BENEFITS SECTION ----------------- */}
      <section className="web-benefits-section">
        {/* Decorative BG */}
        <div className="benefits-bg-lines"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="benefits-header">
            <div className="benefits-badge">WHY IT MATTERS</div>
            <h2>Benefits of<br/><span className="web-title-highlight">Custom Web Applications</span></h2>
            <div className="benefits-title-line"></div>
          </div>

          <div className="benefits-grid">
            
            {/* Card 1 */}
            <div className="benefits-card">
              <div className="benefits-card-icon">
                <LineChart size={28} color="#2f6bd8" />
              </div>
              <h4>MAKES BUSINESS MORE<br/><span className="blue-text">EFFICIENT</span></h4>
              <div className="benefits-card-line"></div>
              <p>
                Custom web applications streamline operations, reduce manual work, and improve 
                overall productivity — helping businesses operate smarter and faster.
              </p>
            </div>

            {/* Card 2 */}
            <div className="benefits-card">
              <div className="benefits-card-icon">
                <CheckSquare size={28} color="#2f6bd8" />
              </div>
              <h4>MAKES DAILY WORK<br/><span className="blue-text">EASIER</span></h4>
              <div className="benefits-card-line"></div>
              <p>
                Automate routine tasks, simplify workflows, and enable teams to focus on 
                higher-value activities with agile, easy-to-use web applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="benefits-card">
              <div className="benefits-card-icon">
                <Banknote size={28} color="#2f6bd8" />
              </div>
              <h4>REDUCES OPERATIONAL<br/><span className="blue-text">COSTS</span></h4>
              <div className="benefits-card-line"></div>
              <p>
                By automating processes and improving efficiency, custom web apps help 
                reduce dependency on manual resources and lower long-term operational expenses.
              </p>
            </div>

            {/* Card 4 */}
            <div className="benefits-card">
              <div className="benefits-card-icon">
                <Users size={28} color="#2f6bd8" />
              </div>
              <h4>IMPROVES CLIENT &<br/><span className="blue-text">BUSINESS COLLABORATION</span></h4>
              <div className="benefits-card-line"></div>
              <p>
                Custom web applications enable smooth, real-time communication between 
                businesses and clients — building transparency, trust, and stronger relationships.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- APPROACH SECTION ----------------- */}
      <section className="web-approach-section">
        <div className="container">
          <div className="web-approach-container">
            
            {/* Column 1: Text & Buttons */}
            <div className="web-approach-text-col">
              <div className="approach-badge-wrap">
                <span className="approach-badge-text">OUR WEB DEVELOPMENT APPROACH</span>
                <span className="approach-badge-line"></span>
              </div>
              
              <h2>BUILD SMARTER WEB<br/>SOLUTIONS WITH<br/><span className="web-title-highlight">MOSTECH</span></h2>
              <div className="approach-title-line"></div>
              
              <p>
                Whether you need a powerful web application, a modern business website, 
                or a scalable digital platform, Mostech delivers web solutions that are 
                intuitive, reliable, and built for growth.
              </p>

              <div className="approach-buttons">
                <a href="/#contact" className="approach-btn dark">
                  <MessageCircle size={18} />
                  <span>Talk to Our Web Experts</span>
                  <ArrowRight size={16} />
                </a>
                <a href="/#contact" className="approach-btn outline">
                  <Rocket size={18} color="#2f6bd8" />
                  <span>Create a Seamless<br/>Web Experience</span>
                  <ArrowRight size={16} color="#2f6bd8" />
                </a>
              </div>
            </div>

            {/* Column 2: Timeline Cards */}
            <div className="web-approach-cards-col">
              <div className="approach-timeline-line"></div>
              
              {/* Card 1 */}
              <div className="approach-card-wrap">
                <div className="approach-dot"></div>
                <div className="approach-card">
                  <div className="approach-card-icon">
                    <Monitor size={24} color="#2f6bd8" />
                  </div>
                  <div className="approach-card-content">
                    <h5>User-Centric<br/>UI/UX Design</h5>
                    <p>Designing intuitive experiences that engage users and drive results.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="approach-card-wrap">
                <div className="approach-dot"></div>
                <div className="approach-card">
                  <div className="approach-card-icon">
                    <Smartphone size={24} color="#2f6bd8" />
                  </div>
                  <div className="approach-card-content">
                    <h5>Responsive &<br/>Mobile-First Development</h5>
                    <p>Building fully responsive web applications that deliver seamless performance on every device.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="approach-card-wrap">
                <div className="approach-dot"></div>
                <div className="approach-card">
                  <div className="approach-card-icon">
                    <Lock size={24} color="#2f6bd8" />
                  </div>
                  <div className="approach-card-content">
                    <h5>Secure & Scalable<br/>Architecture</h5>
                    <p>Creating robust, future-ready solutions with security and scalability at the core.</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="approach-card-wrap">
                <div className="approach-dot"></div>
                <div className="approach-card">
                  <div className="approach-card-icon">
                    <Cloud size={24} color="#2f6bd8" />
                  </div>
                  <div className="approach-card-content">
                    <h5>Cloud & Third-Party<br/>Integrations</h5>
                    <p>Integrating cloud services and third-party tools for smarter workflows and greater efficiency.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 3: Image Placeholder */}
            <div className="web-approach-img-col">
              <img src="/weblap.png" alt="Our Web Development Approach" className="approach-img" />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default WebDevPage;
