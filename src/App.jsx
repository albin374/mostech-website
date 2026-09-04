import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MobileAppDevPage from './pages/MobileAppDevPage';
import WebDevPage from './pages/WebDevPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import EcommercePage from './pages/EcommercePage';
import ErpPage from './pages/ErpPage';
import ErpProductPage from './pages/ErpProductPage';
import SeoPage from './pages/SeoPage';
import HrmsPage from './pages/HrmsPage';
import WhatsappChatbotPage from './pages/WhatsappChatbotPage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import TaskManagementPage from './pages/TaskManagementPage';
import OurTeamPage from './pages/OurTeamPage';
import AccountingPage from './pages/AccountingPage';
import PosMachinePage from './pages/PosMachinePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Helmet>
            <title>Leading software company in dubai</title>
            <meta name="description" content="Mostech is a leading Dubai software company delivering web development, mobile apps, and digital marketing across the UAE & GCC. Trusted by 500+ clients." />
            <meta name="keywords" content="Mostech Business Solutions | The Best Software Company in Dubai, Digital Marketing Agency in Dubai, UAE." />
          </Helmet>
          
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mobile-app-development" element={<MobileAppDevPage />} />
            <Route path="/web-development" element={<WebDevPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />
            <Route path="/erp-solution" element={<ErpPage />} />
            <Route path="/erp-product" element={<ErpProductPage />} />
            <Route path="/seo" element={<SeoPage />} />
            <Route path="/hrms" element={<HrmsPage />} />
            <Route path="/whatsapp-chatbot" element={<WhatsappChatbotPage />} />
            <Route path="/project-management" element={<ProjectManagementPage />} />
            <Route path="/task-management" element={<TaskManagementPage />} />
            <Route path="/accounting-software" element={<AccountingPage />} />
            <Route path="/pos-machine" element={<PosMachinePage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

