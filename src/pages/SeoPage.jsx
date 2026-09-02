import React, { useEffect } from 'react';
import OnpageSeo from '../components/OnpageSeo';
import OffpageSeo from '../components/OffpageSeo';
import TechnicalSeo from '../components/TechnicalSeo';
import LocalSeo from '../components/LocalSeo';
import ContentStrategy from '../components/ContentStrategy';
import SeoWhyChooseUs from '../components/SeoWhyChooseUs';

const SeoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="seo-page-wrapper" style={{ paddingTop: '140px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <OnpageSeo />
      <OffpageSeo />
      <TechnicalSeo />
      <LocalSeo />
      <ContentStrategy />
      <SeoWhyChooseUs />
    </main>
  );
};

export default SeoPage;
