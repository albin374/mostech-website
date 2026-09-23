import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [countryCode, setCountryCode] = useState(null);

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
    { code: 'AE', label: 'UAE:', phone: '+971 585792020', href: '+971585792020' },
    { code: 'IN', label: 'INDIA:', phone: '+91 8547557283', href: '+918547557283' },
    { code: 'SA', label: 'KSA:', phone: '+966 53 574 4308', href: '+966535744308' },
    { code: 'QA', label: 'QATAR:', phone: '+974 5054 7557', href: '+97450547557' }
  ];

  const matchedPhone = phoneNumbers.find(p => p.code === countryCode);
  let displayPhones = [...phoneNumbers];
  if (matchedPhone) {
    displayPhones = [
      matchedPhone,
      ...phoneNumbers.filter(p => p.code !== countryCode)
    ];
  }

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
              <a href="https://www.linkedin.com/company/mostech/" target="_blank" rel="noreferrer" className="social-icon-link linkedin"><FaLinkedinIn size={20} /></a>
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
              {displayPhones.map((item) => (
                <div className="contact-item" key={item.code}>
                  <span className="country-label">{item.label}</span>
                  <a href={`tel:${item.href}`} className="contact-link"><strong>{item.phone}</strong></a>
                </div>
              ))}
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
