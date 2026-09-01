import React from 'react';
import { Link2, Megaphone, ShieldCheck, Users } from 'lucide-react';
import './OffpageSeo.css';

const OffpageSeo = () => {
  return (
    <section className="offpage-seo-section">
      <div className="container">
        
        <div className="offpage-card">
          
          {/* Left Column (Image) */}
          <div className="offpage-card-left">
            <img src="/offpage seo .png" alt="Off-Page SEO" className="offpage-image" />
          </div>

          {/* Right Column (Text) */}
          <div className="offpage-card-right">
            
            <h3 className="offpage-title">OFF-PAGE SEO</h3>
            <div className="offpage-divider">
              <span className="dot"></span>
              <span className="line"></span>
            </div>
            
            <p className="offpage-desc">
              Off-page SEO is an essential element in the successful SEO performance of your website. 
              To increase the ranking of your website and drive more traffic to it, it is necessary 
              for search engines to consider your website as a valuable resource within the industry 
              you belong to. To accomplish that, the off-page SEO we provide concentrates on building 
              reputation for your website.
            </p>

            <div className="offpage-list">
              
              {/* Item 1 */}
              <div className="offpage-list-item">
                <div className="offpage-list-icon-box">
                  <Link2 size={24} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="offpage-list-content">
                  <h4>High-Authority Backlink Acquisition</h4>
                  <p>Earn quality backlinks from trusted and relevant websites to boost your rankings.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="offpage-list-item">
                <div className="offpage-list-icon-box">
                  <Megaphone size={24} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="offpage-list-content">
                  <h4>Brand Mentions & Digital PR</h4>
                  <p>Increase brand visibility through mentions on high-authority platforms and digital PR campaigns.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="offpage-list-item">
                <div className="offpage-list-icon-box">
                  <ShieldCheck size={24} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="offpage-list-content">
                  <h4>Domain Authority & Trust Growth</h4>
                  <p>Strengthen your domain authority and build trust in the eyes of search engines.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="offpage-list-item">
                <div className="offpage-list-icon-box">
                  <Users size={24} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="offpage-list-content">
                  <h4>Strategic Online Relationship Building</h4>
                  <p>Build meaningful relationships and partnerships that drive long-term SEO success.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OffpageSeo;
