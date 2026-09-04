import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Code, Smartphone, ShoppingBag, Layers, Wrench, ArrowRight } from 'lucide-react';
import './ServicesGrid.css';

const services = [
  {
    id: 1,
    title: 'DIGITAL MARKETING',
    description: 'Digital marketing continues to evolve rapidly. We help businesses achieve enhanced visibility, optimize marketing budgets, and engage customers effectively across digital platforms.',
    icon: <BarChart2 size={24} strokeWidth={2} />,
  },
  {
    id: 2,
    title: 'WEB DEVELOPMENT & DESIGN',
    description: 'Expand your reach with websites built using modern design principles and advanced technologies. Elevate your brand, improve visibility, and accelerate online success.',
    icon: <Code size={24} strokeWidth={2} />,
  },
  {
    id: 3,
    title: 'MOBILE APP DEVELOPMENT',
    description: 'Create seamless mobile experiences. We enable smarter business growth through advanced Android and iOS app development, guiding your product from concept to launch on app stores.',
    icon: <Smartphone size={24} strokeWidth={2} />,
  },
  {
    id: 4,
    title: 'ECOMMERCE DEVELOPMENT',
    description: 'Go digital with intelligent, cross-platform eCommerce solutions designed to grow your business. Sell your products and services via Android, iOS, and web platforms – no physical store required.',
    icon: <ShoppingBag size={24} strokeWidth={2} />,
  },
  {
    id: 5,
    title: 'ERP SOLUTIONS',
    description: 'Our ERP solutions portfolio addresses enterprise requirements, enabling improved planning, seamless system integration, and efficient management of operational workflows.',
    icon: <Layers size={24} strokeWidth={2} />,
  },
  {
    id: 6,
    title: 'CUSTOMIZED APP DEVELOPMENT',
    description: 'We develop platform-independent, customized applications using modern frameworks that integrate with existing business systems, extending their lifecycle and usability.',
    icon: <Wrench size={24} strokeWidth={2} />,
  }
];

const ServicesGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="services" className="services-modern-section" style={{ position: 'relative' }}>
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={isMobile ? "/ourservices banner video.mp4" : "/The_year_is_2125_Dubai_2026090316578.mp4"} type="video/mp4" />
      </video>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      ></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="services-header">
          <h2 className="services-title" style={{ color: '#ffffff' }}>
            Our <span>Services</span>
          </h2>
          
          <p className="services-desc" style={{ color: '#ffffff' }}>
            Innovative digital solutions to streamline operations and drive business growth.
          </p>

          <div className="services-header-divider"></div>
        </div>
        
        <motion.div 
          className="services-modern-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-modern-card" 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
              }}
              whileHover={{ y: -5 }}
            >
              <h3 className="service-card-title">{service.title}</h3>
              <div className="service-card-divider"></div>
              <p className="service-card-desc">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
