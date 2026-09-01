import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Users, Award, Code, Smartphone, TrendingUp, Briefcase, HeadphonesIcon, Check } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-corporate-section">
      <div className="container">
        <div className="about-corporate-grid">
          
          <motion.div 
            className="about-corporate-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="corporate-title">
              Driving Digital Success<br />
              <span className="navy-blue-text">for Businesses</span>
            </h2>
            
            <p className="corporate-desc">
              Mostech Business Solutions is a leading software and digital marketing agency in Dubai, serving as a trusted technology partner across the UAE and GCC.
            </p>

            <div className="gradient-divider"></div>
            
            <ul className="corporate-list">
              <li>
                <div className="check-icon-wrapper bg-blue">
                  <Check className="check-icon-svg" strokeWidth={3} size={14} />
                </div>
                <span>We specialize in software development, web and mobile applications, and performance-driven digital marketing solutions.</span>
              </li>
              <li>
                <div className="check-icon-wrapper bg-blue">
                  <Check className="check-icon-svg" strokeWidth={3} size={14} />
                </div>
                <span>Our solutions are seamless, efficient, and tailored to meet specific business needs.</span>
              </li>
              <li>
                <div className="check-icon-wrapper bg-purple">
                  <Check className="check-icon-svg" strokeWidth={3} size={14} />
                </div>
                <span>Driven by innovation, quality, and performance, we deliver intelligent, tailored digital systems that support sustainable growth and help organizations stay ahead in competitive markets.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="about-corporate-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/about section banner.png" alt="Driving Digital Success" className="main-visual-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
