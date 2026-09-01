import React from 'react';
import { Settings, Gauge, Smartphone, FileCode, Database, CheckCircle2 } from 'lucide-react';
import './TechnicalSeo.css';

const TechnicalSeo = () => {
  return (
    <section className="technical-seo-section">
      <div className="container">
        
        <div className="technical-card">
          
          {/* Left Column (Text) */}
          <div className="technical-card-left">
            <div className="technical-badge">
              <div className="badge-icon">
                <Settings size={16} color="#ffffff" />
              </div>
              <span>TECHNICAL SEO</span>
            </div>

            <h3 className="technical-card-title">Technical <span className="blue-text">SEO</span></h3>
            
            <div className="technical-divider">
              <span className="line"></span>
              <span className="dot"></span>
              <span className="dot small"></span>
            </div>

            <p className="technical-card-desc">
              The speed of your website must be optimized along with making sure it is crawlable 
              and free from errors so that search engines are able to discover, index and rank your 
              website without any issues. The technical SEO services that we offer cover everything 
              starting from site speed, mobile friendliness and all the way up to crawl issues.
            </p>

            <ul className="technical-list">
              <li>
                <div className="list-icon-box">
                  <Gauge size={24} color="#0044cc" />
                </div>
                <div className="list-content">
                  <h4><CheckCircle2 size={16} color="#0044cc" className="check-icon" /> Site Speed & Core Web Vitals Optimization</h4>
                  <p>Improve loading speed and ensure optimal performance for better rankings and user experience.</p>
                </div>
              </li>
              <li>
                <div className="list-icon-box">
                  <Smartphone size={24} color="#0044cc" />
                </div>
                <div className="list-content">
                  <h4><CheckCircle2 size={16} color="#0044cc" className="check-icon" /> Mobile Responsiveness & Usability Audit</h4>
                  <p>Ensure a seamless experience across all devices with a mobile-friendly and user-focused approach.</p>
                </div>
              </li>
              <li>
                <div className="list-icon-box">
                  <FileCode size={24} color="#0044cc" />
                </div>
                <div className="list-content">
                  <h4><CheckCircle2 size={16} color="#0044cc" className="check-icon" /> XML Sitemap & Indexation Error Fixes</h4>
                  <p>Optimize crawlability by fixing indexation issues and maintaining an error-free sitemap.</p>
                </div>
              </li>
              <li>
                <div className="list-icon-box">
                  <Database size={24} color="#0044cc" />
                </div>
                <div className="list-content">
                  <h4><CheckCircle2 size={16} color="#0044cc" className="check-icon" /> Schema Markup & Structured Data Integration</h4>
                  <p>Add structured data to help search engines understand your content better and boost visibility.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column (Image) */}
          <div className="technical-card-right">
            <img src="/technical seo.png" alt="Technical SEO" className="technical-image" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnicalSeo;
