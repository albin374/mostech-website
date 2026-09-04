import React, { useEffect } from 'react';
import HrmsHero from '../components/products/HrmsHero';
import HrmsDashboards from '../components/products/HrmsDashboards';
import HrmsModules from '../components/products/HrmsModules';
import HrmsLifecycle from '../components/products/HrmsLifecycle';
import HrmsCta from '../components/products/HrmsCta';

const HrmsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="hrms-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <HrmsHero />
      <HrmsDashboards />
      <HrmsModules />
      <HrmsLifecycle />
      <HrmsCta />
    </main>
  );
};

export default HrmsPage;
