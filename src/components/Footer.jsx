import React from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <h3 className="footer-title">About Mostech</h3>
            <p className="footer-text">
              Mostech Business Solutions is a Dubai-based software company trusted across the UAE and GCC. We offer Software Development, Web and Mobile Application Development, and Digital Marketing services. We create intelligent, powerful applications that streamline business operations efficiently.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-link linkedin"><FaLinkedinIn size={20} /></a>
              <a href="https://www.facebook.com/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-link facebook"><FaFacebookF size={20} /></a>
              <a href="https://www.instagram.com/mostech.ae" target="_blank" rel="noreferrer" className="social-icon-link instagram"><FaInstagram size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#services"><ChevronRight size={14} /> Web Development</a></li>
              <li><a href="#services"><ChevronRight size={14} /> App Development</a></li>
              <li><a href="#services"><ChevronRight size={14} /> Digital Marketing</a></li>
              <li><a href="#services"><ChevronRight size={14} /> SEO Services</a></li>
              <li><a href="#services"><ChevronRight size={14} /> Ecommerce</a></li>
              <li><a href="#services"><ChevronRight size={14} /> ERP Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="country-label">UAE:</span>
                <a href="tel:+971581730112" className="contact-link"><strong>+971 581730112</strong></a>
              </div>
              <div className="contact-item">
                <span className="country-label">INDIA:</span>
                <a href="tel:+918547557283" className="contact-link"><strong>+91 8547557283</strong></a>
              </div>
              <div className="contact-item">
                <span className="country-label">KSA:</span>
                <a href="tel:+966535744308" className="contact-link"><strong>+966 53 574 4308</strong></a>
              </div>
              <div className="contact-item mt-3">
                <Mail size={16} />
                <a href="mailto:info@mostech.ae" className="contact-link">info@mostech.ae</a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; All Rights Reserved | Developed by Mostech Business Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
