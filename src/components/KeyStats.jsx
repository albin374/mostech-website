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
      const duration = 2000; // 2 seconds
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOut easing function for smoother deceleration
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
      className="key-stat-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="key-stat-icon-wrapper">
        <Icon size={32} strokeWidth={1.5} className="key-stat-icon" />
      </div>
      <h3 className="key-stat-number">{count}{suffix}</h3>
      <p className="key-stat-label">{label}</p>
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
      <div className="key-stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatItem {...stat} delay={index * 0.1} />
            {index < stats.length - 1 && (
              <motion.div 
                className="key-stat-divider"
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              ></motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default KeyStats;
