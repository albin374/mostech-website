import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a href="tel:+971581730112" className="contact-item">
              <Phone size={14} />
              <span>+971 58 173 0112</span>
            </a>
            <span className="divider">|</span>
            <a href="mailto:info@mostech.ae" className="contact-item">
              <Mail size={14} />
              <span>info@mostech.ae</span>
            </a>
          </div>
          <div className="top-bar-right">
            <span className="follow-text">Follow Us :</span>
            <div className="social-links">
              <a href="#" className="social-icon"><FaLinkedinIn size={14} /></a>
              <a href="#" className="social-icon"><FaFacebookF size={14} /></a>
              <a href="#" className="social-icon"><FaInstagram size={14} /></a>
              <a href="#" className="social-icon"><FaWhatsapp size={14} /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main-wrapper">
        <div className="container">
          <div className="header-main-inner">
            <Link to="/" className="logo">
              <img src="/logo.webp" alt="Mostech Logo" className="logo-img" />
            </Link>
            
            <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                <li className="has-dropdown">
                  <a href="/#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services <ChevronDown size={14} className="dropdown-icon" /></a>
                  <ul className="dropdown">
                    <li><Link to="/mobile-app-development" onClick={() => setIsMobileMenuOpen(false)}>MOBILE APP DEVELOPMENT</Link></li>
                    <li><Link to="/web-development" onClick={() => setIsMobileMenuOpen(false)}>WEB DEVELOPMENT & DESIGN</Link></li>
                    <li><Link to="/digital-marketing" onClick={() => setIsMobileMenuOpen(false)}>DIGITAL MARKETING</Link></li>
                    <li><Link to="/ecommerce" onClick={() => setIsMobileMenuOpen(false)}>ECOMMERCE</Link></li>
                    <li><Link to="/erp-solution" onClick={() => setIsMobileMenuOpen(false)}>ERP SOLUTION</Link></li>
                    <li><Link to="/seo" onClick={() => setIsMobileMenuOpen(false)}>SEARCH ENGINE OPTIMIZATION</Link></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="/#products" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Products <ChevronDown size={14} className="dropdown-icon" /></a>
                  <ul className="dropdown">
                    <li><Link to="/hrms" onClick={() => setIsMobileMenuOpen(false)}>HRMS</Link></li>
                    <li><Link to="/erp-product" onClick={() => setIsMobileMenuOpen(false)}>ERP</Link></li>
                    <li><Link to="/whatsapp-chatbot" onClick={() => setIsMobileMenuOpen(false)}>WHATSAPP CHATBOT</Link></li>
                    <li><a href="/#project-management">PROJECT MANAGEMENT</a></li>
                    <li><a href="/#task-management">TASK MANAGEMENT</a></li>
                    <li><a href="/#accounting-software">ACCOUNTING SOFTWARE</a></li>
                    <li><a href="/#pos-machine">POS MACHINE + SOFTWARE</a></li>
                  </ul>
                </li>

                <li className="mobile-only-contact"><a href="/#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
              </ul>
            </nav>
            
            <div className="header-right">
              <a href="/#contact" className="nav-contact-btn">
                Contact Us 
                <span className="btn-icon-wrapper"><ArrowRight size={16} /></span>
              </a>
              <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
