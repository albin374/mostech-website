import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Layers, Shield, BarChart2 } from 'lucide-react';
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
            <img src="/section3.png" alt="Digital Solutions Designed for Growth" className="digital-visual-img" />
          </motion.div>

          <motion.div 
            className="digital-content-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="digital-subtitle">DIGITAL SOLUTIONS</h4>
            <h2 className="digital-title">
              DESIGNED <span className="digital-gradient-text">FOR GROWTH</span>
            </h2>
            
            <div className="digital-divider"></div>
            
            <p className="digital-desc">
              At Mostech Business Solutions, we simplify business operations through smart technology, strategic digital marketing, and impactful branding. We design and develop software solutions that help businesses work smarter, grow faster, and stay competitive. Our focus is on creating easy-to-use, accessible, and cost-effective digital solutions that improve productivity, enhance brand visibility, and deliver measurable results.
            </p>
            
            <p className="digital-desc">
              Our expertise spans branding, digital marketing, SEO, and social media marketing, helping businesses build strong online identities and connect effectively with their target audience. Alongside marketing, we deliver modern web design and development, mobile application development, and customized software applications tailored to specific business needs. From ERP systems, accounting and HR software to automation tools and scalable enterprise solutions, we provide end-to-end technology that simplifies processes and supports long-term growth. At Mostech, our mission is simple—to make technology work for you and make your business life easier.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
