import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
              <a href="https://wa.me/971581730112" target="_blank" rel="noreferrer" className="social-icon-link whatsapp"><FaWhatsapp size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/web-development"><ChevronRight size={14} /> Web Development</Link></li>
              <li><Link to="/mobile-app-development"><ChevronRight size={14} /> App Development</Link></li>
              <li><Link to="/digital-marketing"><ChevronRight size={14} /> Digital Marketing</Link></li>
              <li><Link to="/seo"><ChevronRight size={14} /> SEO Services</Link></li>
              <li><Link to="/ecommerce"><ChevronRight size={14} /> Ecommerce</Link></li>
              <li><Link to="/erp-product"><ChevronRight size={14} /> ERP Solutions</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="country-label">UAE:</span>
                <a href="tel:+971585792020" className="contact-link"><strong>+971 585792020</strong></a>
              </div>
              <div className="contact-item">
                <span className="country-label">INDIA:</span>
                <a href="tel:+918547557283" className="contact-link"><strong>+91 8547557283</strong></a>
              </div>
              <div className="contact-item">
                <span className="country-label">KSA:</span>
                <a href="tel:+966535744308" className="contact-link"><strong>+966 53 574 4308</strong></a>
              </div>
              <div className="contact-item">
                <span className="country-label">QATAR:</span>
                <a href="tel:+97450547557" className="contact-link"><strong>+974 5054 7557</strong></a>
              </div>
              <div className="contact-item mt-3">
                <Mail size={20} />
                <a href="mailto:info@mostech.ae" className="contact-link" style={{ fontSize: '1.1rem' }}><strong>info@mostech.ae</strong></a>
              </div>
            </div>
          </div>
          
        </div>


      </div>
    </footer>
  );
};

export default Footer;
