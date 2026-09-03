import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TechPartners from '../components/TechPartners';
import ServicesGrid from '../components/ServicesGrid';
import GlobalPresence from '../components/GlobalPresence';
import CompanyStats from '../components/CompanyStats';
import WebDevSection from '../components/WebDevSection';
import SeoSection from '../components/SeoSection';
import MobileSection from '../components/MobileSection';
import CeoMessage from '../components/CeoMessage';
import S3Model from '../components/S3Model';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechPartners />
      <ServicesGrid />
      <GlobalPresence />
      <CompanyStats />
      <WebDevSection />
      <SeoSection />
      <MobileSection />
      <CeoMessage />
      <S3Model />
    </>
  );
};

export default HomePage;
