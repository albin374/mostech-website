import React, { useEffect } from 'react';
import { 
  Rocket, 
  LineChart, 
  Users, 
  Trophy, 
  ArrowRight,
  Search,
  ThumbsUp,
  MousePointerClick,
  Mail,
  FileText,
  BarChart2,
  Target,
  Monitor,
  Megaphone,
  TrendingUp,
  CircleDollarSign,
  MapPin,
  PenTool,
  ChevronsRight,
  Play,
  Settings,
  ShieldCheck,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './DigitalMarketingPage.css';

const DigitalMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="dm-page">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="dm-hero-section">
        <div className="container dm-hero-container">
          
          {/* Left Text Content */}
          <div className="dm-hero-text">
            
            <div className="dm-badge">
              <Rocket size={16} color="#2f6bd8" />
              <span>DRIVE GROWTH ONLINE</span>
            </div>

            <h1 className="dm-main-title">
              Digital Marketing<br/>
              Services in <span className="dm-title-highlight">Dubai</span>
            </h1>

            <h3 className="dm-subtitle">
              Get Noticed. Get Leads. Grow Your Business.
            </h3>

            <p className="dm-desc">
              We create data-driven digital marketing strategies that put your brand 
              in front of the right people, at the right time — helping you achieve 
              measurable results and long-term business growth.
            </p>

            <div className="dm-metrics-bar">
              <div className="dm-metric-item">
                <LineChart size={18} color="#2f6bd8" />
                <span>More Visibility</span>
              </div>
              <div className="dm-metric-divider"></div>
              <div className="dm-metric-item">
                <Users size={18} color="#2f6bd8" />
                <span>Engaged Audience</span>
              </div>
              <div className="dm-metric-divider"></div>
              <div className="dm-metric-item">
                <Trophy size={18} color="#2f6bd8" />
                <span>Higher ROI</span>
              </div>
            </div>

            <p className="dm-desc">
              From SEO and social media to performance campaigns and creative 
              content, we tailor every strategy to match your business goals in Dubai 
              and beyond.
            </p>

            <div className="dm-hero-buttons">
              <a href="/#contact" className="dm-btn primary">
                Let's Grow Together <ArrowRight size={16} />
              </a>
              <a href="/#contact" className="dm-btn secondary">
                Explore Our Services
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="dm-hero-img-col">
            <img src="/digital marketingnew.png" alt="Digital Marketing Dubai" className="dm-hero-img" />
          </div>

        </div>

        {/* ----------------- BOTTOM FEATURES ROW ----------------- */}
        <div className="container">
          <div className="dm-features-row">
            
            <div className="dm-feature-card">
              <div className="dm-feature-icon">
                <img src="/seo2.png" alt="SEO" className="dm-feature-img-icon" />
              </div>
              <h5>SEO</h5>
              <p>Rank Higher</p>
            </div>

            <div className="dm-feature-card">
              <div className="dm-feature-icon">
                <img src="/marketing.png" alt="Social Media Marketing" className="dm-feature-img-icon" />
              </div>
              <h5>Social Media Marketing</h5>
              <p>Build Your Brand</p>
            </div>

            <div className="dm-feature-card">
              <div className="dm-feature-icon">
                <img src="/ppc.png" alt="PPC Advertising" className="dm-feature-img-icon" />
              </div>
              <h5>PPC Advertising</h5>
              <p>Reach the Right Audience</p>
            </div>

            <div className="dm-feature-card">
              <div className="dm-feature-icon">
                <img src="/mail.png" alt="Email Marketing" className="dm-feature-img-icon" />
              </div>
              <h5>Email Marketing</h5>
              <p>Turn Interest into Customers</p>
            </div>

            <div className="dm-feature-card">
              <div className="dm-feature-icon">
                <img src="/content marketing.png" alt="Content Marketing" className="dm-feature-img-icon" />
              </div>
              <h5>Content Marketing</h5>
              <p>Create Impactful Content</p>
            </div>

            <div className="dm-feature-card">
              <div className="dm-feature-icon">
                <img src="/maxmize roi.png" alt="Analytics & Reporting" className="dm-feature-img-icon" />
              </div>
              <h5>Analytics & Reporting</h5>
              <p>Results You Can Measure</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS SECTION ================= */}
      <section className="dm-matter-section">
        <div className="container">
          
          <div className="dm-matter-top">
            {/* Left Content */}
            <div className="dm-matter-text">
              <div className="dm-matter-badge">
                <div className="dm-badge-line"></div>
                <span>DRIVE GROWTH ONLINE</span>
              </div>
              
              <h2>
                Why Digital<br/>
                Marketing<br/>
                <span className="dm-blue-text">Matters</span>
              </h2>

              <p>
                Modern customers search, compare, and purchase online. Digital 
                marketing ensures your brand appears at the right time, on the right 
                platform, with the right message.
              </p>

              <p>
                Instead of generic promotion, we focus on targeted strategies that 
                improve engagement, generate conversions, and maximize return 
                on investment.
              </p>

              <a href="/#contact" className="dm-btn primary">
                Start Your Digital Marketing Journey <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Image */}
            <div className="dm-matter-image-col">
              <img src="/digital marketing2.png" alt="Digital Marketing Analytics" className="dm-matter-img" />
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="dm-matter-cards-row">
            
            <div className="dm-matter-card">
              <div className="dm-matter-icon">
                <Target size={24} color="#2f6bd8" />
              </div>
              <h4>Right Time</h4>
              <p>Reach your audience when they're most likely to act.</p>
            </div>

            <div className="dm-matter-card">
              <div className="dm-matter-icon">
                <Monitor size={24} color="#2f6bd8" />
              </div>
              <h4>Right Platform</h4>
              <p>Be visible where your customers search, engage, and decide.</p>
            </div>

            <div className="dm-matter-card">
              <div className="dm-matter-icon">
                <Megaphone size={24} color="#2f6bd8" />
              </div>
              <h4>Right Message</h4>
              <p>Deliver relevant content that connects and builds trust.</p>
            </div>

            <div className="dm-matter-card">
              <div className="dm-matter-icon">
                <TrendingUp size={24} color="#2f6bd8" />
              </div>
              <h4>Better Engagement</h4>
              <p>Build meaningful interactions that turn visitors into customers.</p>
            </div>

            <div className="dm-matter-card">
              <div className="dm-matter-icon">
                <CircleDollarSign size={24} color="#2f6bd8" />
              </div>
              <h4>Maximize ROI</h4>
              <p>Data-driven strategies that drive conversions and grow returns.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="dm-services-section">
        <div className="container">
          
          <div className="dm-services-header">
            <div className="dm-section-badge">
              <div className="dm-badge-dash"></div>
              <span>OUR DIGITAL MARKETING SERVICES</span>
              <div className="dm-badge-dash"></div>
            </div>
            <h2>
              Data-Driven Strategies. <span className="dm-blue-text">Measurable Results.</span>
            </h2>
            <p>
              Data-driven digital marketing campaigns designed to expand your online reach,<br/>
              attract targeted leads, and maximize ROI.
            </p>
          </div>

          <div className="dm-services-grid">
            
            {/* Card 1 */}
            <Link to="/seo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="dm-service-card" style={{ cursor: 'pointer', height: '100%' }}>
                <div className="dm-service-icon-wrapper">
                  <div className="dm-icon-bg-shape"></div>
                  <Search size={28} color="#2f6bd8" />
                </div>
                <h4>Search Engine Optimization (SEO)</h4>
                <div className="dm-card-divider"></div>
                <p>
                  Improve your organic rankings and drive high-quality traffic with 
                  ethical SEO strategies focused on long-term growth.
                </p>
                <div className="dm-card-bottom-bar"></div>
              </div>
            </Link>

            {/* Card 2 */}
            <div className="dm-service-card">
              <div className="dm-service-icon-wrapper">
                <div className="dm-icon-bg-shape"></div>
                <MousePointerClick size={28} color="#2f6bd8" />
              </div>
              <h4>Pay-Per-Click (PPC) Advertising</h4>
              <div className="dm-card-divider"></div>
              <p>
                Launch high-converting ad campaigns across Google and social platforms 
                to generate immediate traffic and measurable ROI.
              </p>
              <div className="dm-card-bottom-bar"></div>
            </div>

            {/* Card 3 */}
            <div className="dm-service-card">
              <div className="dm-service-icon-wrapper">
                <div className="dm-icon-bg-shape"></div>
                <ThumbsUp size={28} color="#2f6bd8" />
              </div>
              <h4>Social Media Marketing</h4>
              <div className="dm-card-divider"></div>
              <p>
                Build brand awareness and customer engagement with creative campaigns 
                tailored for modern social platforms.
              </p>
              <div className="dm-card-bottom-bar"></div>
            </div>

            {/* Card 4 */}
            <div className="dm-service-card">
              <div className="dm-service-icon-wrapper">
                <div className="dm-icon-bg-shape"></div>
                <PenTool size={28} color="#2f6bd8" />
              </div>
              <h4>Content Marketing</h4>
              <div className="dm-card-divider"></div>
              <p>
                Create impactful content including blogs, landing pages, and multimedia 
                that strengthen your digital presence.
              </p>
              <div className="dm-card-bottom-bar"></div>
            </div>

            {/* Card 5 */}
            <div className="dm-service-card">
              <div className="dm-service-icon-wrapper">
                <div className="dm-icon-bg-shape"></div>
                <MapPin size={28} color="#2f6bd8" />
              </div>
              <h4>Local SEO & Geo-Targeting</h4>
              <div className="dm-card-divider"></div>
              <p>
                Enhance local search visibility and connect with customers in Dubai 
                and across the UAE.
              </p>
              <div className="dm-card-bottom-bar"></div>
            </div>

            {/* Card 6 */}
            <div className="dm-service-card">
              <div className="dm-service-icon-wrapper">
                <div className="dm-icon-bg-shape"></div>
                <BarChart2 size={28} color="#2f6bd8" />
              </div>
              <h4>Analytics & Reporting</h4>
              <div className="dm-card-divider"></div>
              <p>
                Track performance with transparent reporting and actionable insights 
                for continuous improvement.
              </p>
              <div className="dm-card-bottom-bar"></div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= OUR PROCESS SECTION ================= */}
      <section className="dm-process-section">
        <div className="container">
          
          <div className="dm-process-header">
            <div className="dm-process-badge">
              <span className="dm-dot">•</span>
              <span>OUR PROCESS</span>
              <span className="dm-dot">•</span>
            </div>
            <h2>
              Our <span className="dm-blue-text">Digital Marketing</span> Approach
            </h2>
            <p>A proven step-by-step methodology to achieve measurable business growth.</p>
            <div className="dm-process-header-divider"></div>
          </div>

          <div className="dm-process-row">
            
            {/* Step 1 */}
            <div className="dm-process-card">
              <div className="dm-process-number">01</div>
              <div className="dm-process-icon">
                <Search size={50} color="#2f6bd8" strokeWidth={1.5} />
              </div>
              <h4>RESEARCH & STRATEGY</h4>
              <p>
                We analyze your business, target audience, and competition to identify 
                opportunities and create a data-driven marketing strategy that drives 
                maximum visibility and growth.
              </p>
            </div>

            <div className="dm-process-arrow">
              <ChevronsRight size={32} color="#2f6bd8" />
            </div>

            {/* Step 2 */}
            <div className="dm-process-card">
              <div className="dm-process-number">02</div>
              <div className="dm-process-icon">
                <Megaphone size={50} color="#2f6bd8" strokeWidth={1.5} />
              </div>
              <h4>CAMPAIGN EXECUTION</h4>
              <p>
                Our experts design and launch high-performing campaigns across SEO, 
                Google Ads, social media, content marketing, and more to reach the 
                right audience with the right message.
              </p>
            </div>

            <div className="dm-process-arrow">
              <ChevronsRight size={32} color="#2f6bd8" />
            </div>

            {/* Step 3 */}
            <div className="dm-process-card">
              <div className="dm-process-number">03</div>
              <div className="dm-process-icon">
                <TrendingUp size={50} color="#2f6bd8" strokeWidth={1.5} />
              </div>
              <h4>OPTIMIZATION</h4>
              <p>
                We continuously analyze results, optimize keywords, improve content, 
                and enhance website performance to generate more traffic, quality 
                leads, and higher return on investment.
              </p>
            </div>

            <div className="dm-process-arrow">
              <ChevronsRight size={32} color="#2f6bd8" />
            </div>

            {/* Step 4 */}
            <div className="dm-process-card">
              <div className="dm-process-number">04</div>
              <div className="dm-process-icon">
                <Mail size={50} color="#2f6bd8" strokeWidth={1.5} />
              </div>
              <h4>REPORTING</h4>
              <p>
                We believe in complete transparency. Our detailed reports provide 
                in-depth insights into performance, rankings, traffic, conversions, 
                and ROI to help your business grow consistently.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="dm-choose-section">
        <div className="container dm-choose-container">
          
          {/* Left Column */}
          <div className="dm-choose-left">
            <div className="dm-choose-badge">
              <span className="dm-slash">//</span>
              <span>WHY CHOOSE US</span>
            </div>

            <h2>
              Why Choose<br/>
              <span className="dm-blue-text">Mostech?</span>
            </h2>
            <div className="dm-title-underline"></div>

            <p>
              Mostech Business Solutions offers you full digital marketing services 
              that will make your business stand out by creating awareness, attracting 
              quality leads and making sure that your business grows sustainably. We 
              have experts in data-based approaches, creative ideas, and marketing 
              technologies to make sure your business finds its audience in an effective way.
            </p>

            <p>
              Every business has different objectives. We tailor our marketing approaches 
              and technologies depending on your industry, competition, and target market. 
              We offer our clients a variety of marketing services such as SEO, PPC 
              advertising, social media marketing, content marketing, email campaigns, 
              and conversion rate optimization.
            </p>

            <div className="dm-trusted-box">
              <div className="dm-trusted-icon">
                <ShieldCheck size={28} color="#ffffff" />
              </div>
              <div className="dm-trusted-text">
                <h5>Trusted by Businesses</h5>
                <p>We are committed to transparency,<br/>integrity, and long-term partnerships.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="dm-choose-right">
            
            {/* Top Image (Replaces Text Box) */}
            <div className="dm-mission-img-wrapper">
              <img src="/growth2.png" alt="Your Growth is Our Mission" className="dm-mission-full-img" />
            </div>

            {/* Bottom 4 Cards */}
            <div className="dm-choose-cards-row">
              
              {/* Card 1 */}
              <div className="dm-choose-card">
                <div className="dm-choose-card-icon">
                  <Target size={32} color="#2f6bd8" strokeWidth={1.5} />
                </div>
                <div className="dm-choose-card-dash"></div>
                <h6>RESULTS DRIVEN</h6>
                <p>We focus on strategies that deliver real measurable results.</p>
                <div className="dm-choose-number">01</div>
              </div>

              {/* Card 2 */}
              <div className="dm-choose-card">
                <div className="dm-choose-card-icon">
                  <Users size={32} color="#2f6bd8" strokeWidth={1.5} />
                </div>
                <div className="dm-choose-card-dash"></div>
                <h6>EXPERT TEAM</h6>
                <p>Experienced professionals dedicated to your business growth.</p>
                <div className="dm-choose-number">02</div>
              </div>

              {/* Card 3 */}
              <div className="dm-choose-card">
                <div className="dm-choose-card-icon">
                  <Lightbulb size={32} color="#2f6bd8" strokeWidth={1.5} />
                </div>
                <div className="dm-choose-card-dash"></div>
                <h6>CREATIVE SOLUTIONS</h6>
                <p>Innovative ideas crafted to make your brand stand out.</p>
                <div className="dm-choose-number">03</div>
              </div>

              {/* Card 4 */}
              <div className="dm-choose-card">
                <div className="dm-choose-card-icon">
                  <BarChart2 size={32} color="#2f6bd8" strokeWidth={1.5} />
                </div>
                <div className="dm-choose-card-dash"></div>
                <h6>DATA FOCUSED</h6>
                <p>We use data and insights to make smarter marketing decisions.</p>
                <div className="dm-choose-number">04</div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default DigitalMarketingPage;
