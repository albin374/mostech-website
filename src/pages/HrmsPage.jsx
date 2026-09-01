import React, { useEffect } from 'react';
import HrmsHero from '../components/HrmsHero';
import HrmsDashboards from '../components/HrmsDashboards';
import HrmsModules from '../components/HrmsModules';
import HrmsLifecycle from '../components/HrmsLifecycle';
import HrmsCta from '../components/HrmsCta';

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
