import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

      
      <div className="header-main">
        <div className="container header-main-content">
          <a href="/" className="logo">
            <img src="/logo.webp" alt="Mostech Logo" className="logo-img" />
          </a>
          
          <div className="header-actions">
            <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="/" className="nav-link nav-link-active">Home</a></li>
                <li><a href="/about" className="nav-link">About Us</a></li>
                <li className="has-dropdown">
                  <a href="#services" className="nav-link">Our Services</a>
                  <ul className="dropdown">
                    <li><a href="#web-dev">Web Development</a></li>
                    <li><a href="#app-dev">Mobile App Development</a></li>
                    <li><a href="#digital-marketing">Digital Marketing</a></li>
                    <li><a href="#ecommerce">Ecommerce</a></li>
                    <li><a href="#erp">ERP Solution</a></li>
                    <li><a href="#seo">SEO</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            
            <div className="header-right">
              <a href="#contact" className="nav-contact-btn">Contact Us</a>
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
