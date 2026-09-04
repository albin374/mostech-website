import React from 'react';
import './AboutCeoMessage.css';

const founderMilestones = [
  {
    step: '01',
    year: '2018',
    label: 'The Beginning',
    location: 'Kannur, India',
    color: '#2563eb',
    colorSoft: 'rgba(37,99,235,0.06)',
    colorBorder: 'rgba(37,99,235,0.18)',
    colorGlow: 'rgba(37,99,235,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.76-2.34C7.8 16.32 6.32 14.8 5.4 13.34c-.84.5-1.63 1.05-2.34 1.76z"/>
        <path d="M15 9l-3 3"/>
        <path d="M12.5 3.5c3.5 0 7 2 8.5 5.5 1.5 3.5.5 7.5-2.5 10.5-3 3-7 4-10.5 2.5-3.5-1.5-5.5-5-5.5-8.5 0-4 4-8 10-10z"/>
      </svg>
    ),
    text: 'The journey of Mostech Business Solutions commenced in 2018 with a handful of creative minds coming together in the vibrant city of Kannur. From the very beginning, our vision was clear — to revolutionize the business solutions landscape with innovative ideas and cutting-edge strategies. Our initial steps were taken in the iconic KVR Tower.',
    highlights: ['Founded in Kannur', 'KVR Tower Operations', 'Core Tech Team']
  },
  {
    step: '02',
    year: '2021',
    label: 'Global Expansion',
    location: 'Dubai, UAE',
    color: '#0891b2',
    colorSoft: 'rgba(8,145,178,0.06)',
    colorBorder: 'rgba(8,145,178,0.18)',
    colorGlow: 'rgba(8,145,178,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
      </svg>
    ),
    text: 'A significant milestone in our growth unfolded in 2021 when we established our presence in the global business hub, Dubai - UAE. Setting up our headquarters in the prestigious Business Bay marked a strategic move to position ourselves at the heart of international commerce, allowing us to tap into a diverse global market.',
    highlights: ['Global HQ Business Bay', 'International Commerce', 'Regional Hub']
  },
  {
    step: '03',
    year: '2023',
    label: 'Regional Reach',
    location: 'Middle East',
    color: '#7c3aed',
    colorSoft: 'rgba(124,58,237,0.06)',
    colorBorder: 'rgba(124,58,237,0.18)',
    colorGlow: 'rgba(124,58,237,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    text: 'Building on the success of our Dubai venture, 2023 saw Mostech Business Solutions extending its reach across the Middle East. We ventured into Qatar, Oman and Saudi Arabia, recognizing the immense potential in these dynamic markets and solidifying our presence on a regional scale.',
    highlights: ['Qatar, Oman & KSA', '1,000+ Systems Delivered', 'GCC Market Footprint']
  }
];

const AboutCeoMessage = () => {
  return (
    <section className="about-ceo">
      <div className="container">

        {/* Section Header */}
        <div className="ceo-header animate-on-scroll">
          <div className="section-eyebrow">Leadership Vision</div>
          <h2 className="ceo-title">
            A Word From Our <span className="text-blue">Founder</span>
          </h2>
        </div>

        {/* Main Founder Card */}
        <div className="ceo-card animate-on-scroll">
          <div className="ceo-image-col">
            <img
              src="/ceo2.jpeg"
              alt="Ayoob K. A., Founder & CEO"
              className="ceo-photo"
              onError={(e) => { e.target.src = '/ceofinal222.png'; }}
            />
            <div className="ceo-image-overlay">
              <div className="ceo-name-plate">
                <div className="gold-accent-line"></div>
                <h3>Ayoob K. A.</h3>
                <p>Founder, Managing Director &amp; CEO</p>
              </div>
            </div>
          </div>

          <div className="ceo-text-col">
            <div className="quote-mark">"</div>
            <div className="quote-open-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <div className="quote-content">
              <p className="ceo-quote-text">
                We commenced operations in 2018 with a focused collective of software engineers committed to building
                robust and efficient software components. Coming from a rigorous institutional banking background,
                I understood early on that corporate success is tied to{' '}
                <strong>zero-error code, fast go-to-market velocity, bulletproof continuity</strong>, and software
                that creates measurable business value.
              </p>
              <p className="ceo-quote-text">
                As we have expanded across the region and beyond, our mission has remained the same: to orchestrate,
                refine, and deploy digital infrastructure. Today, we have successfully{' '}
                <strong>delivered over 1,000 systems</strong>. It is an honor to partner with forward-thinking
                enterprises, deliver profound engineering, and walk together through the ongoing, and truly exciting,
                journey that is the digital ecosystem. Thank you.
              </p>
            </div>
          </div>
        </div>

        {/* ── SUCCESS STORY SECTION ── */}
        <div className="sv-section animate-on-scroll">

          {/* Header row */}
          <div className="sv-header-centered">
            <div className="section-eyebrow">From Vision to Victory</div>
            <h3 className="sv-title">Our <em>Success</em> Story</h3>
          </div>

          {/* Connected Step Track Bar */}
          <div className="sv-track-bar" aria-hidden="true">
            <div className="sv-track-line"></div>
            {founderMilestones.map((item, idx) => (
              <div
                key={idx}
                className="sv-track-step"
                style={{
                  left: `${(idx / (founderMilestones.length - 1)) * 100}%`,
                  '--step-color': item.color,
                  '--step-glow': item.colorGlow,
                }}
              >
                <span className="sv-track-num">{item.step}</span>
                <span className="sv-track-dot"></span>
              </div>
            ))}
          </div>

          {/* Milestone Cards Grid */}
          <div className="sv-cards-grid">
            {founderMilestones.map((item, idx) => (
              <div
                key={idx}
                className="sv-card"
                style={{
                  '--card-color': item.color,
                  '--card-soft': item.colorSoft,
                  '--card-border': item.colorBorder,
                  '--card-glow': item.colorGlow,
                }}
              >
                {/* Top bar: Step counter + Location pill */}
                <div className="sv-card-top-bar">
                  <div className="sv-card-step-badge">
                    <span className="sv-step-dot"></span>
                    <span className="sv-step-text">Phase {item.step}</span>
                  </div>
                  <span className="sv-card-location">
                    <svg viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
                      <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                    </svg>
                    {item.location}
                  </span>
                </div>

                {/* Year + Icon Hero Row */}
                <div className="sv-card-hero">
                  <div className="sv-card-year-group">
                    <span className="sv-card-year">{item.year}</span>
                    <span className="sv-card-label">{item.label}</span>
                  </div>
                </div>

                {/* Body text */}
                <p className="sv-card-text">{item.text}</p>



              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCeoMessage;
