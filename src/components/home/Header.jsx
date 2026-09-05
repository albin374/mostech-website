import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
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
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/logo.webp" alt="Mostech Logo" className="logo-img" />
          </Link>
          
          <div className="header-right-section">
            <div className="top-contact-info">
              <a href="tel:+971585792020" className="contact-item">
                <Phone size={14} className="contact-icon" />
                <span>+971 58 579 2020</span>
              </a>
              <a href="mailto:info@mostech.ae" className="contact-item">
                <Mail size={14} className="contact-icon" />
                <span>info@mostech.ae</span>
              </a>
            </div>
            
            <div className="bottom-nav-section">
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
                  <li><Link to="/" className={`nav-link ${currentPath === '/' ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>HOME</Link></li>
                  <li><Link to="/about" className={`nav-link ${currentPath === '/about' ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link></li>

                  <li className={`has-dropdown ${activeDropdown === 'services' ? 'dropdown-open' : ''}`}>
                    <a href="#" className="nav-link" onClick={(e) => toggleDropdown(e, 'services')}>OUR SERVICES <ChevronDown size={14} className="dropdown-icon" /></a>
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
                    <a href="#" className="nav-link" onClick={(e) => toggleDropdown(e, 'products')}>PRODUCTS <ChevronDown size={14} className="dropdown-icon" /></a>
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
                  <li><Link to="/contact" className={`nav-link ${currentPath === '/contact' ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link></li>
                </ul>
                <div className="mobile-menu-contact-info">
                  <a href="mailto:info@mostech.ae" className="mobile-contact-link">
                    <Mail size={16} />
                    <span>info@mostech.ae</span>
                  </a>
                  <a href="tel:+971585792020" className="mobile-contact-link">
                    <Phone size={16} />
                    <span>+971 58 579 2020</span>
                  </a>
                </div>
                <div className="mobile-menu-socials">
                  <a href="https://www.linkedin.com/company/mostech.ae" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaLinkedinIn size={20} /></a>
                  <a href="https://www.facebook.com/mostech.ae" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaFacebookF size={20} /></a>
                  <a href="https://www.instagram.com/mostech.ae" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaInstagram size={20} /></a>
                  <a href="https://wa.me/971585792020" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaWhatsapp size={20} /></a>
                </div>
              </nav>

              <div className="social-links-outline">
                <a href="https://www.linkedin.com/company/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-circle"><FaLinkedinIn size={14} /></a>
                <a href="https://www.facebook.com/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-circle"><FaFacebookF size={14} /></a>
                <a href="https://www.instagram.com/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-circle"><FaInstagram size={14} /></a>
                <a href="https://wa.me/971585792020" target="_blank" rel="noreferrer" className="social-icon-circle"><FaWhatsapp size={16} /></a>
              </div>

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
