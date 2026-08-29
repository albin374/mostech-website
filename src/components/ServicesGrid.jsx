import React from 'react';
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
  return (
    <section id="services" className="services-modern-section" style={{ backgroundImage: "url('/services.png')" }}>
      <div className="container">
        <div className="services-header">
          <div className="services-badge-pill">
            OUR SERVICES <span className="services-badge-dot"></span>
          </div>
          
          <h2 className="services-title">
            Our <span className="services-gradient-text">Services</span>
          </h2>
          
          <p className="services-desc">
            We deliver innovative digital solutions that help businesses grow,<br/>
            streamline operations, and stay ahead in a competitive digital world.
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
              <div className="service-card-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <div className="service-card-divider"></div>
              <p className="service-card-desc">{service.description}</p>
              
              <button className="service-card-arrow">
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
