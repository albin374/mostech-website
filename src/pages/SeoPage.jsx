import React, { useEffect } from 'react';
import OnpageSeo from '../components/services/OnpageSeo';
import OffpageSeo from '../components/services/OffpageSeo';
import TechnicalSeo from '../components/services/TechnicalSeo';
import LocalSeo from '../components/services/LocalSeo';
import ContentStrategy from '../components/services/ContentStrategy';
import SeoWhyChooseUs from '../components/services/SeoWhyChooseUs';

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
