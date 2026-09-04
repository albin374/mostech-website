import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDropdown = (e, dropdown) => {
    e.preventDefault();
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };


  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a href="mailto:info@mostech.ae" className="contact-item">
              <Mail size={14} />
              <span>info@mostech.ae</span>
            </a>
            <div style={{width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)', margin: '0 5px'}}></div>
            <a href="tel:+971581730112" className="contact-item">
              <Phone size={14} />
              <span>+971 58 173 0112</span>
            </a>
          </div>
          <div className="top-bar-right">
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
          <div className="header-main-inner header-main-bg">
            <Link to="/" className="logo">
              <img src="/logo.webp" alt="Mostech Logo" className="logo-img" />
            </Link>
            
            <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <div className="mobile-menu-top">
                <Link to="/" onClick={toggleMobileMenu}>
                  <img src="/logo.webp" alt="Mostech Logo" className="logo-img" />
                </Link>
                <button className="mobile-menu-close-btn" onClick={toggleMobileMenu}>
                  <X size={24} />
                </button>
              </div>
              <ul>
                <li><Link to="/" className={`nav-link ${currentPath === '/' ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className={`nav-link ${currentPath === '/about' ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>

                <li className={`has-dropdown ${activeDropdown === 'services' ? 'dropdown-open' : ''}`}>
                  <a href="#" className="nav-link" onClick={(e) => toggleDropdown(e, 'services')}>Services <ChevronDown size={14} className="dropdown-icon" /></a>
                  <ul className="dropdown">
                    <li><Link to="/mobile-app-development" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>MOBILE APP DEVELOPMENT</Link></li>
                    <li><Link to="/web-development" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>WEB DEVELOPMENT & DESIGN</Link></li>
                    <li><Link to="/digital-marketing" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>DIGITAL MARKETING</Link></li>
                    <li><Link to="/ecommerce" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>ECOMMERCE</Link></li>
                    <li><Link to="/erp-solution" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>ERP SOLUTION</Link></li>
                    <li><Link to="/seo" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>SEARCH ENGINE OPTIMIZATION</Link></li>
                  </ul>
                </li>
                <li className={`has-dropdown ${activeDropdown === 'products' ? 'dropdown-open' : ''}`}>
                  <a href="#" className="nav-link" onClick={(e) => toggleDropdown(e, 'products')}>Products <ChevronDown size={14} className="dropdown-icon" /></a>
                  <ul className="dropdown">
                    <li><Link to="/hrms" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>HRMS</Link></li>
                    <li><Link to="/erp-product" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>ERP</Link></li>
                    <li><Link to="/whatsapp-chatbot" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>WHATSAPP CHATBOT</Link></li>
                    <li><Link to="/project-management" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>PROJECT MANAGEMENT</Link></li>
                    <li><Link to="/task-management" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>TASK MANAGEMENT</Link></li>
                    <li><Link to="/accounting-software" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>ACCOUNTING SOFTWARE</Link></li>
                    <li><Link to="/pos-machine" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>POS MACHINE + SOFTWARE</Link></li>
                  </ul>
                </li>

                <li className="mobile-only-contact"><Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
              </ul>
            </nav>
            
            <div className="header-right">
              <Link to="/contact" className="nav-contact-btn">
                Let's Talk 
                <ArrowRight size={16} />
              </Link>
              <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
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
