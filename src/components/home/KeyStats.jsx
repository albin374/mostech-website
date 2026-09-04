import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, Calendar, Briefcase, Handshake } from 'lucide-react';
import './KeyStats.css';

const StatItem = ({ icon: Icon, endValue, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * endValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, endValue]);

  return (
    <motion.div 
      ref={ref}
      className="key-stat-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="key-stat-icon-wrapper">
        <div className="key-stat-icon-arc"></div>
        <div className="key-stat-icon-inner">
           <Icon size={32} strokeWidth={2} className="key-stat-icon" />
        </div>
      </div>
      <div className="key-stat-content">
        <h3 className="key-stat-number">{count}{suffix}</h3>
        <div className="key-stat-line"></div>
        <p className="key-stat-label">{label}</p>
      </div>
    </motion.div>
  );
};

const KeyStats = () => {
  const stats = [
    { icon: Users, endValue: 25, suffix: '+', label: 'Employees' },
    { icon: Globe, endValue: 12, suffix: '+', label: 'Countries' },
    { icon: Calendar, endValue: 7, suffix: '+', label: 'Years in Business' },
    { icon: Briefcase, endValue: 1000, suffix: '+', label: 'Projects' },
    { icon: Handshake, endValue: 1000, suffix: '+', label: 'Clients' },
  ];

  return (
    <section className="key-stats-section">
      <div className="key-stats-bg-pattern"></div>
      <div className="key-stats-bg-gradient"></div>
      
      <div className="key-stats-container">
        
        <div className="key-stats-header">
          <motion.div 
            className="key-stats-subtitle-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="key-stats-dot"></span>
            <span className="key-stats-subtitle">OUR ACHIEVEMENTS</span>
            <span className="key-stats-dot"></span>
          </motion.div>
          
          <motion.h2 
            className="key-stats-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Numbers That Reflect Our<br/>
            <span className="text-highlight">Commitment & Growth</span>
          </motion.h2>
          
          <motion.p 
            className="key-stats-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Delivering reliable solutions and building lasting relationships<br/>across the globe.
          </motion.p>
        </div>

        <div className="key-stats-grid">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={0.3 + (index * 0.1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;
