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
  // Add observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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
