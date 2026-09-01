import React from 'react';
import { MapPin, Store, Target, FileText } from 'lucide-react';
import './LocalSeo.css';

const LocalSeo = () => {
  return (
    <section className="local-seo-section">
      <div className="container">
        
        <div className="local-card">
          
          {/* Left Column (Text) */}
          <div className="local-card-left">
            <div className="local-badge">
              <div className="badge-icon">
                <MapPin size={16} color="#ffffff" />
              </div>
              <span>LOCAL SEO</span>
            </div>

            <h3 className="local-card-title">Local <span className="blue-text">SEO</span></h3>
            
            <div className="local-divider">
              <span className="line"></span>
              <span className="dot"></span>
              <span className="dot small"></span>
            </div>

            <p className="local-card-desc">
              In case you would like to see your business appearing in all the right places, 
              then your website has to be visible on local search engines, Google maps, 
              and even local directories to attract local customers. Being the best SEO 
              company in UAE, our main concern is to ensure your Google listing is optimized 
              among other SEO aspects.
            </p>

            <div className="local-timeline">
              
              {/* Item 1 */}
              <div className="local-timeline-item">
                <div className="timeline-icon-box">
                  <Store size={22} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="timeline-content">
                  <h4>Google Business Profile Optimization</h4>
                  <p>Optimize your Google Business profile to improve visibility and attract more local customers.</p>
                </div>
                <div className="timeline-number">01</div>
              </div>

              {/* Item 2 */}
              <div className="local-timeline-item">
                <div className="timeline-icon-box">
                  <MapPin size={22} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="timeline-content">
                  <h4>Local Maps Pack Top Ranking</h4>
                  <p>Rank in the Google Maps 3-pack and get discovered by customers in your area.</p>
                </div>
                <div className="timeline-number">02</div>
              </div>

              {/* Item 3 */}
              <div className="local-timeline-item">
                <div className="timeline-icon-box">
                  <Target size={22} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="timeline-content">
                  <h4>Geo-Targeted Search Engine Visibility</h4>
                  <p>Target specific locations to increase visibility in local search results.</p>
                </div>
                <div className="timeline-number">03</div>
              </div>

              {/* Item 4 */}
              <div className="local-timeline-item">
                <div className="timeline-icon-box">
                  <FileText size={22} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div className="timeline-content">
                  <h4>UAE & GCC Directory Citations</h4>
                  <p>Build consistent business citations across trusted UAE & GCC directories.</p>
                </div>
                <div className="timeline-number">04</div>
              </div>

            </div>

          </div>

          {/* Right Column (Image) */}
          <div className="local-card-right">
            <img src="/local seo.png" alt="Local SEO" className="local-image" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocalSeo;
