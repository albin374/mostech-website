import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/about us/AboutSection';
import TechPartners from '../components/home/TechPartners';
import ServicesGrid from '../components/services/ServicesGrid';
import GlobalPresence from '../components/home/GlobalPresence';
import CompanyStats from '../components/home/CompanyStats';
import WebDevSection from '../components/services/WebDevSection';
import SeoSection from '../components/services/SeoSection';
import MobileSection from '../components/services/MobileSection';
import CeoMessage from '../components/home/CeoMessage';
import S3Model from '../components/home/S3Model';
import SisterConcerns from '../components/home/SisterConcerns';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <GlobalPresence />
      <CompanyStats />
      <WebDevSection />
      <SeoSection />
      <MobileSection />
      <CeoMessage />
      <S3Model />
      {/* <SisterConcerns /> */}
      <TechPartners />
    </>
  );
};

export default HomePage;
