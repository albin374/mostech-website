import React from 'react';
import { PenTool, Users, FileText, ShoppingCart, TrendingUp } from 'lucide-react';
import './ContentStrategy.css';

const ContentStrategy = () => {
  return (
    <section className="content-strategy-section">
      <div className="container">
        
        <div className="content-card">
          
          {/* Left Column (Text) */}
          <div className="content-card-left">
            <div className="content-badge">
              <div className="badge-icon">
                <PenTool size={16} color="#ffffff" />
              </div>
              <span>BUILD. ENGAGE. CONVERT.</span>
            </div>

            <h3 className="content-card-title">CONTENT <span className="light-blue-text">STRATEGY</span></h3>
            
            <div className="content-divider">
              <span className="line"></span>
              <span className="dot"></span>
              <span className="dot small"></span>
            </div>

            <p className="content-card-desc">
              Our company offers content that addresses the needs of your target audience on blogs, 
              websites, and product descriptions. Proper placement of content will ensure you are 
              ahead of your competitors. Our top-notch content ensures you get more traffic, 
              establish credibility, and turn visitors into customers.
            </p>

            <div className="content-timeline">
              
              {/* Item 1 */}
              <div className="content-timeline-item">
                <div className="timeline-number-circle">01</div>
                <div className="timeline-icon">
                  <Users size={24} color="#0f172a" strokeWidth={2} />
                </div>
                <div className="timeline-content">
                  <h4>Target Audience & Search Intent Mapping</h4>
                  <p>We identify your ideal audience and map their search intent to create content that truly connects.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="content-timeline-item">
                <div className="timeline-number-circle">02</div>
                <div className="timeline-icon">
                  <FileText size={24} color="#0f172a" strokeWidth={2} />
                </div>
                <div className="timeline-content">
                  <h4>High-Converting Blog & Website Copywriting</h4>
                  <p>Engaging, SEO-friendly content that informs, inspires, and converts your visitors.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="content-timeline-item">
                <div className="timeline-number-circle">03</div>
                <div className="timeline-icon">
                  <ShoppingCart size={24} color="#0f172a" strokeWidth={2} />
                </div>
                <div className="timeline-content">
                  <h4>Product Description & Landing Page Optimization</h4>
                  <p>Optimized product descriptions and landing pages that boost visibility and drive more sales.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="content-timeline-item">
                <div className="timeline-number-circle">04</div>
                <div className="timeline-icon">
                  <TrendingUp size={24} color="#0f172a" strokeWidth={2} />
                </div>
                <div className="timeline-content">
                  <h4>Strategic Content Placement for Maximum ROI</h4>
                  <p>We place the right content in the right places to maximize traffic, engagement, and ROI.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (Image) */}
          <div className="content-card-right">
            <img src="/content stragey.png" alt="Content Strategy" className="content-image" onError={(e) => { e.target.src = '/content marketing.png'; }} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContentStrategy;
