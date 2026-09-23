import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/country.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.country) {
          setCountryCode(data.country);
        }
      })
      .catch(err => console.error("Could not fetch country data", err));
  }, []);

  const phoneNumbers = [
    { code: 'AE', label: 'UAE:', phone: '+971 58 579 2020', href: '+971585792020' },
    { code: 'IN', label: 'INDIA:', phone: '+91 8547557283', href: '+918547557283' },
    { code: 'SA', label: 'KSA:', phone: '+966 53 574 4308', href: '+966535744308' },
    { code: 'QA', label: 'QATAR:', phone: '+974 5054 7557', href: '+97450547557' }
  ];

  const matchedPhone = phoneNumbers.find(p => p.code === countryCode);
  const displayPhone = matchedPhone ? matchedPhone : phoneNumbers[0];
  const whatsappPhone = displayPhone;

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
              <a href={`tel:${displayPhone.href}`} className="contact-item" title={displayPhone.label}>
                <Phone size={14} className="contact-icon" />
                <span>{displayPhone.phone}</span>
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
                      <li><Link to="/erp-product" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>ERP APPLICATION</Link></li>
                      <li><Link to="/hrms" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>HRMS APPLICATION</Link></li>
                      <li><Link to="/accounting-software" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>ACCOUNTING SOFTWARE</Link></li>
                      <li><Link to="/whatsapp-chatbot" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>CHATBOT APPLICATION</Link></li>
                      <li><Link to="/project-management" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>PROJECT MANAGEMENT APPLICATION</Link></li>
                      <li><Link to="/task-management" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>TASK MANAGEMENT SOFTWARE</Link></li>
                      <li><Link to="/pro-solutions" onClick={() => {setIsMobileMenuOpen(false); setActiveDropdown(null);}}>PRO SOLUTIONS</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact" className={`nav-link ${currentPath === '/contact' ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link></li>
                </ul>
                <div className="mobile-menu-contact-info">
                  <a href="mailto:info@mostech.ae" className="mobile-contact-link">
                    <Mail size={16} />
                    <span>info@mostech.ae</span>
                  </a>
                  <a href={`tel:${displayPhone.href}`} className="mobile-contact-link">
                    <Phone size={16} />
                    <span>{displayPhone.phone}</span>
                  </a>
                </div>
                <div className="mobile-menu-socials">
                  <a href="https://www.linkedin.com/company/mostech.ae" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaLinkedinIn size={20} /></a>
                  <a href="https://www.facebook.com/mostech.ae" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaFacebookF size={20} /></a>
                  <a href="https://www.instagram.com/mostech.ae" target="_blank" rel="noreferrer" className="mobile-social-icon"><FaInstagram size={20} /></a>
                  <a href={`https://wa.me/${whatsappPhone.href.replace('+', '')}`} target="_blank" rel="noreferrer" className="mobile-social-icon"><FaWhatsapp size={20} /></a>
                </div>
              </nav>

              <div className="social-links-outline">
                <a href="https://www.linkedin.com/company/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-circle"><FaLinkedinIn size={14} /></a>
                <a href="https://www.facebook.com/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-circle"><FaFacebookF size={14} /></a>
                <a href="https://www.instagram.com/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-circle"><FaInstagram size={14} /></a>
                <a href={`https://wa.me/${whatsappPhone.href.replace('+', '')}`} target="_blank" rel="noreferrer" className="social-icon-circle"><FaWhatsapp size={16} /></a>
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
