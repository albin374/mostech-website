import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import DigitalSolutions from './components/DigitalSolutions';
import MobileSection from './components/MobileSection';
import Footer from './components/Footer';
import WebDevSection from './components/WebDevSection';
import SeoSection from './components/SeoSection';
import GlobalPresence from './components/GlobalPresence';
import CompanyStats from './components/CompanyStats';
import CeoMessage from './components/CeoMessage';

function App() {
  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <title>Web Design & Development Company in Dubai - Mostech</title>
          <meta name="description" content="Mostech is a leading Dubai software company delivering web development, mobile apps, and digital marketing across the UAE & GCC. Trusted by 500+ clients." />
          <meta name="keywords" content="Mostech Business Solutions | The Best Software Company in Dubai, Digital Marketing Agency in Dubai, UAE." />
        </Helmet>
        
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <CeoMessage />
          <ServicesGrid />
          <GlobalPresence />
          <CompanyStats />
          <WebDevSection />
          <SeoSection />
          <DigitalSolutions />
          <MobileSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
