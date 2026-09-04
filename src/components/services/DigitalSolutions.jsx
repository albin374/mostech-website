import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart2, Target, Code, Megaphone, Search, PenTool, Blocks, Settings } from 'lucide-react';
import './DigitalSolutions.css';

const DigitalSolutions = () => {
  return (
    <section className="digital-solutions-section">
      <div className="container">
        <div className="digital-solutions-grid">
          
          <motion.div 
            className="digital-visual-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* The robot image is now part of the background image (growth.png) */}
          </motion.div>

          <motion.div 
            className="digital-content-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="digital-badge">
              <span className="digital-badge-dots">
                <span className="digital-dot cyan"></span>
                <span className="digital-dot blue"></span>
              </span>
              DIGITAL SOLUTIONS
            </div>
            <h2 className="digital-title">
              DESIGNED <br />
              FOR GROWTH
            </h2>
            
            <div className="digital-divider"></div>
            
            <p className="digital-desc">
              At Mostech Business Solutions, we simplify business operations through smart technology, strategic digital marketing, and impactful branding. We design and develop software solutions that help businesses <span className="digital-gradient-text" style={{fontWeight: 700}}>work smarter</span>, <span className="digital-gradient-text" style={{fontWeight: 700}}>grow faster</span>, and stay competitive.
            </p>
            
            <div className="digital-right-features">
              <div className="dr-feature">
                <Rocket size={24} className="dr-icon" />
                <div className="dr-text">
                  <h5><span className="digital-gradient-text">Smart Solutions</span></h5>
                  <p>that streamline and scale.</p>
                </div>
              </div>
              <div className="dr-feature-divider"></div>
              <div className="dr-feature">
                <BarChart2 size={24} className="dr-icon" />
                <div className="dr-text">
                  <h5><span className="digital-gradient-text">Measurable Growth</span></h5>
                  <p>driven by data, strategy & creativity.</p>
                </div>
              </div>
              <div className="dr-feature-divider"></div>
              <div className="dr-feature">
                <Target size={24} className="dr-icon" />
                <div className="dr-text">
                  <h5><span className="digital-gradient-text">Future Ready</span></h5>
                  <p>technology for a competitive edge.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        <motion.div 
          className="digital-bottom-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="db-item">
            <div className="db-icon"><Code size={22} /></div>
            <h5>Web & App <br/>Development</h5>
            <p>Modern websites and scalable applications.</p>
          </div>
          <div className="db-item">
            <div className="db-icon"><Megaphone size={22} /></div>
            <h5>Digital <br/>Marketing</h5>
            <p>Strategic campaigns that boost visibility and engagement.</p>
          </div>
          <div className="db-item">
            <div className="db-icon"><Search size={22} /></div>
            <h5>SEO & Social <br/>Media</h5>
            <p>Build your brand and reach the right audience.</p>
          </div>
          <div className="db-item">
            <div className="db-icon"><PenTool size={22} /></div>
            <h5>UI/UX & Web <br/>Design</h5>
            <p>Beautiful, intuitive designs that deliver great experiences.</p>
          </div>
          <div className="db-item">
            <div className="db-icon"><Blocks size={22} /></div>
            <h5>Software & ERP <br/>Solutions</h5>
            <p>Custom systems to simplify operations and scale growth.</p>
          </div>
          <div className="db-item">
            <div className="db-icon"><Settings size={22} /></div>
            <h5>Automation & <br/>Integrations</h5>
            <p>Automate workflows and integrate tools that work for you.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DigitalSolutions;
