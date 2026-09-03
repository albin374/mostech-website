import React from 'react';
import AboutPageHero from '../components/AboutPageHero';
import AboutOverview from '../components/AboutOverview';
import AboutCeoMessage from '../components/AboutCeoMessage';
import AboutTechnicalImpact from '../components/AboutTechnicalImpact';
import AboutMandate from '../components/AboutMandate';
import AboutPrinciples from '../components/AboutPrinciples';
import AboutLifecycle from '../components/AboutLifecycle';
import AboutCTA from '../components/AboutCTA';
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
