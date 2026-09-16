import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, Building2, Globe2, HeadphonesIcon } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure to replace these with your actual EmailJS credentials
    emailjs.sendForm('service_6vdumow', 'template_r37cvxg', form.current, '-G08WgHo8YaudEBwv')
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          setStatus('error');
      });
  };

  return (
    <main className="contact-page-wrapper">
      <section className="contact-banner-section">
        <div className="container contact-banner-container">
          <div className="contact-banner-left">
            <div className="cb-badge">
              <span className="cb-badge-line"></span>
              CONTACT US
            </div>
            
            <h1 className="cb-title">
              Let's Build Your Next<br/>
              <span className="cb-highlight">Big Idea</span>
            </h1>
            
            <p className="cb-subtitle">
              Have a project in mind? Get in touch with our team and let's turn your vision into powerful digital solutions. We'll get back to you within 24 business hours.
            </p>


          </div>

        </div>
      </section>

        <div className="container contact-container">
          {/* Center Column: Form */}
          <div className="contact-col-center">
            <div className="contact-form-card">
              <h2>Send Us a <span className="contact-form-blue">Message</span></h2>
              <p className="contact-form-subtitle">
                Fill out the form below and our team will get back to you within 24 business hours.
              </p>
              
              <form ref={form} className="contact-form" onSubmit={sendEmail}>
                {status === 'success' && <div style={{color: '#16a34a', marginBottom: '1.5rem', fontWeight: '600', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0'}}>✅ Your message has been sent successfully!</div>}
                {status === 'error' && <div style={{color: '#dc2626', marginBottom: '1.5rem', fontWeight: '600', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca'}}>❌ Failed to send message. Please verify your EmailJS credentials.</div>}
                
                <div className="form-group">
                  <label>Your Name *</label>
                  <div className="input-wrapper">
                    <input type="text" name="user_name" placeholder="Enter your name" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Your Email Address *</label>
                  <div className="input-wrapper">
                    <input type="email" name="user_email" placeholder="Enter your email address" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Message *</label>
                  <div className="input-wrapper textarea-wrapper">
                    <textarea name="message" placeholder="Enter your message..." rows="4" required></textarea>
                  </div>
                </div>
                
                <button type="submit" className="contact-submit-btn" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending...' : <><Send size={18} /> Send Message <span style={{marginLeft: '8px'}}>→</span></>}
                </button>
                
                <div className="contact-form-footer">
                  <span className="lock-icon">🔒</span> Your information is safe with us. We respect your privacy.
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="contact-col-right">
            
            <div className="contact-info-card">
              <div className="info-icon-box">
                <Building2 size={24} color="#0d6efd" />
              </div>
              <h4 className="info-card-title">DUBAI HEAD<br/>OFFICE</h4>
              <div className="info-card-divider"></div>
              <div className="info-list">
                <div className="info-list-item">
                  <MapPin size={18} color="#0d6efd" className="info-list-icon" />
                  <span>
                    <strong>Bay Square<br/>Business Tower</strong><br/>
                    Business Bay,<br/>Dubai,<br/>United Arab<br/>Emirates
                  </span>
                </div>
                <div className="info-list-item">
                  <Phone size={18} color="#0d6efd" className="info-list-icon" />
                  <span><strong>+971 585792020</strong></span>
                </div>
                <div className="info-list-item">
                  <Mail size={18} color="#0d6efd" className="info-list-icon" />
                  <span><strong>info@mostech.ae</strong></span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <Globe2 size={24} color="#0d6efd" />
              </div>
              <h4 className="info-card-title">REGIONAL<br/>OFFICE</h4>
              <div className="info-card-divider"></div>
              <div className="info-list">
                <div className="info-list-item">
                  <MapPin size={18} color="#0d6efd" className="info-list-icon" />
                  <span>
                    <strong>Hilite Business Park,</strong><br/>
                    Door No. 2/1149/I 100 Olavanna,<br/>
                    Kozhikode, Kerala, India, 673014
                  </span>
                </div>
                <div className="info-list-item">
                  <Phone size={18} color="#0d6efd" className="info-list-icon" />
                  <span style={{ whiteSpace: 'nowrap' }}><strong>+91 85475 57283</strong></span>
                </div>
                <div className="info-list-item">
                  <Building2 size={18} color="#0d6efd" className="info-list-icon" />
                  <span>Regional Support<br/>across GCC</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <Clock size={24} color="#0d6efd" />
              </div>
              <h4 className="info-card-title">BUSINESS HOURS</h4>
              <div className="info-card-divider"></div>
              <div className="info-list">
                <div className="info-list-item">
                  <div className="info-list-icon-cal">📅</div>
                  <span><strong>Monday - Thursday</strong><br/>9:00 AM - 5:00 PM (GST)</span>
                </div>
                <div className="info-list-item">
                  <div className="info-list-icon-cal">📅</div>
                  <span><strong>Friday</strong><br/>9:00 AM - 1:00 PM (GST)</span>
                </div>
                <div className="info-list-item">
                  <div className="info-list-icon-cal">❌</div>
                  <span><strong>Saturday & Sunday</strong><br/>Closed</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <HeadphonesIcon size={24} color="#0d6efd" />
              </div>
              <h4 className="info-card-title">QUICK SUPPORT</h4>
              <div className="info-card-divider"></div>
              <div className="info-list">
                <div className="info-list-item">
                  <MessageSquare size={18} color="#0d6efd" className="info-list-icon" />
                  <span><strong>Have a question?</strong><br/>Our team is ready<br/>to assist you.</span>
                </div>
                <div className="info-list-item">
                  <Send size={18} color="#0d6efd" className="info-list-icon" />
                  <span><strong>Drop us an email</strong><br/>support@mostech.ae</span>
                </div>
                <div className="info-list-item">
                  <Phone size={18} color="#0d6efd" className="info-list-icon" />
                  <span><strong>Call us anytime</strong><br/>+971 585792020</span>
                </div>
              </div>
            </div>

          </div>

        </div>
        

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-wrapper">
            <iframe 
              src="https://maps.google.com/maps?q=Mostech%20Business%20Solutions,%20Business%20Bay,%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mostech Business Solutions Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
