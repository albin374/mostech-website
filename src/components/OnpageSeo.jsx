import React from 'react';
import { Target, TrendingUp, Search, Tag, Link as LinkIcon, FileText } from 'lucide-react';
import './OnpageSeo.css';

const OnpageSeo = () => {
  return (
    <section id="seo" className="onpage-seo-section">
      <div className="container">
        
        {/* Top Header Section */}
        <div className="onpage-header">
          <div className="onpage-header-icon left">
            <Target size={28} color="#0044cc" />
          </div>
          
          <div className="onpage-header-content">
            <div className="onpage-dots">
              <span className="dot small"></span>
              <span className="dot large"></span>
              <span className="dot small"></span>
            </div>
            <h2 className="onpage-title">
              What We Offer at <span className="blue-text">Mostech Business Solutions SEO</span>
            </h2>
            <p className="onpage-desc">
              At <strong>Mostech Business Solutions</strong>, we help businesses strengthen their online presence through strategic
              and results-driven search engine optimization services. Our experienced digital marketing team
              develops customized SEO strategies that improve website visibility, attract qualified organic traffic,
              and generate valuable leads.
            </p>
          </div>

          <div className="onpage-header-icon right">
            <TrendingUp size={28} color="#0044cc" />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="onpage-card">
          
          {/* Left Column */}
          <div className="onpage-card-left">
            <div className="onpage-badge">
              <div className="badge-icon">
                <Search size={16} color="#ffffff" />
              </div>
              <span>ON-PAGE SEO</span>
            </div>

            <h3 className="onpage-card-title">On-page SEO</h3>
            
            <p className="onpage-card-desc">
              Our On-page SEO service delivers results: we optimize every aspect that
              users and search engines will view on a website. Be it title tags, URL
              structure, content, or internal links, we increase your website's visibility
              and ranking through on-page optimization of all these factors. With our
              On-page SEO, your website becomes both search engine friendly and
              conversion ready.
            </p>

            <ul className="onpage-list">
              <li>
                <div className="list-icon">
                  <Tag size={18} color="#0044cc" />
                </div>
                <span>Title Tag & Meta Description Optimization</span>
              </li>
              <li>
                <div className="list-icon">
                  <LinkIcon size={18} color="#0044cc" />
                </div>
                <span>URL Structure & Internal Linking</span>
              </li>
              <li>
                <div className="list-icon">
                  <Search size={18} color="#0044cc" />
                </div>
                <span>High-Performing Keyword Placement</span>
              </li>
              <li>
                <div className="list-icon">
                  <FileText size={18} color="#0044cc" />
                </div>
                <span>Conversion-Focused Content Structuring</span>
              </li>
            </ul>
          </div>

          {/* Right Column (Image) */}
          <div className="onpage-card-right">
            <img src="/onpage seo.png" alt="On Page SEO" className="onpage-image" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default OnpageSeo;
