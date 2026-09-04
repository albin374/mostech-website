import React, { useEffect } from 'react';
import AboutPageHero from '../components/about us/AboutPageHero';
import AboutOverview from '../components/about us/AboutOverview';
import AboutCeoMessage from '../components/about us/AboutCeoMessage';
import AboutTechnicalImpact from '../components/about us/AboutTechnicalImpact';
import AboutMandate from '../components/about us/AboutMandate';
import AboutPrinciples from '../components/about us/AboutPrinciples';
import AboutLifecycle from '../components/about us/AboutLifecycle';
import AboutCTA from '../components/about us/AboutCTA';
import '../styles/about-design-system.css';
import './AboutPage.css';

const AboutPage = () => {
  // Scroll-reveal: reveal elements with animate-on-scroll when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Small stagger based on element's position among siblings
          const siblings = Array.from(
            entry.target.parentElement?.querySelectorAll('.animate-on-scroll') || []
          );
          const idx = siblings.indexOf(entry.target);
          const delay = idx >= 0 ? idx * 80 : 0;

          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    const hiddenElements = document.querySelectorAll('.about-page .animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page about-page-main">
      <AboutPageHero />
      <AboutOverview />
      <AboutCeoMessage />
      <AboutTechnicalImpact />
      <AboutMandate />
      <AboutPrinciples />
      <AboutLifecycle />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;
