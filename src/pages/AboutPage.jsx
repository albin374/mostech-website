import React from 'react';
import { Target, Layers, Users, Code, Smartphone, Database, ShoppingCart, Megaphone, Building2, Calendar, Globe, ShieldCheck } from 'lucide-react';
import FoundationSection from '../components/FoundationSection';
import KeyStats from '../components/KeyStats';
import AboutHeroSection from '../components/AboutHeroSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-page-main">

      {/* Hero Section */}
      <AboutHeroSection />

      {/* Foundation Section: Vision, Mission, Goals */}
      <FoundationSection />

      {/* Key Stats Animated Section */}
      <KeyStats />
      
    </main>
  );
};

export default AboutPage;
