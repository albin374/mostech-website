import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award, Rocket, Trophy, Lightbulb, Gauge, ShieldCheck } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-corporate-section">
      <div className="container">
        <div className="about-corporate-grid" style={{marginBottom: '0rem'}}>
          
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
              Mostech Business Solutions is a Dubai-based software company trusted across the Middle East & Africa.
            </p>
            <p className="corporate-desc">
              We specialize in software development, web and mobile applications, and performance-driven digital marketing solutions. Our solutions are seamless, efficient, and tailored to meet specific business needs.
            </p>
            <p className="corporate-desc">
              Driven by innovation, quality, and performance, we deliver intelligent, tailored digital systems that support sustainable growth and help organizations stay ahead in competitive markets.
            </p>


          </motion.div>

          <div className="about-corporate-visual">
            <motion.img 
              src="/Typing.gif" 
              className="main-visual-img"
              alt="Typing"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        <motion.div 
          className="expertise-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{marginTop: '3rem', position: 'relative', zIndex: 10}}
        >
          <div className="expertise-item" style={{flexDirection: 'row', alignItems: 'center', textAlign: 'left', gap: '0.5rem', flex: '1 1 180px'}}>
            <div style={{padding: '10px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <Lightbulb className="expertise-icon" style={{color: 'white'}} size={24} />
            </div>
            <div>
              <span style={{display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem'}}>Innovation</span>
              <p style={{margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4}}>Creative solutions that drive real impact.</p>
            </div>
          </div>

          <div className="expertise-divider"></div>

          <div className="expertise-item" style={{flexDirection: 'row', alignItems: 'center', textAlign: 'left', gap: '0.5rem', flex: '1 1 180px'}}>
            <div style={{padding: '10px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <Award className="expertise-icon" style={{color: 'white'}} size={24} />
            </div>
            <div>
              <span style={{display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem'}}>Quality</span>
              <p style={{margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4}}>Excellence in every product we deliver.</p>
            </div>
          </div>

          <div className="expertise-divider"></div>

          <div className="expertise-item" style={{flexDirection: 'row', alignItems: 'center', textAlign: 'left', gap: '0.5rem', flex: '1 1 180px'}}>
            <div style={{padding: '10px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <Gauge className="expertise-icon" style={{color: 'white'}} size={24} />
            </div>
            <div>
              <span style={{display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem'}}>Performance</span>
              <p style={{margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4}}>Systems optimized for peak efficiency.</p>
            </div>
          </div>

          <div className="expertise-divider"></div>

          <div className="expertise-item" style={{flexDirection: 'row', alignItems: 'center', textAlign: 'left', gap: '0.5rem', flex: '1 1 180px'}}>
            <div style={{padding: '10px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <ShieldCheck className="expertise-icon" style={{color: 'white'}} size={24} />
            </div>
            <div>
              <span style={{display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem'}}>Reliability</span>
              <p style={{margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4}}>Trusted tech for lasting success.</p>
            </div>
          </div>

          <div className="expertise-divider"></div>

          <div className="expertise-item" style={{flexDirection: 'row', alignItems: 'center', textAlign: 'left', gap: '0.5rem', flex: '1 1 180px'}}>
            <div style={{padding: '10px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <Users className="expertise-icon" style={{color: 'white'}} size={24} />
            </div>
            <div>
              <span style={{display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem'}}>Partnership</span>
              <p style={{margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4}}>Your growth is our shared mission.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
