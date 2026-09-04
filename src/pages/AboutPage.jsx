import React from 'react';
import AboutPageHero from '../components/about us/AboutPageHero';
import AboutOverview from '../components/about us/AboutOverview';
import AboutCeoMessage from '../components/about us/AboutCeoMessage';
import AboutTechnicalImpact from '../components/about us/AboutTechnicalImpact';
import AboutMandate from '../components/about us/AboutMandate';
import AboutPrinciples from '../components/about us/AboutPrinciples';
import AboutLifecycle from '../components/about us/AboutLifecycle';
import AboutCTA from '../components/about us/AboutCTA';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-page-main">
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
