import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import AreasCovered from './components/AreasCovered';
import Blog from './components/Blog';
import GasBoilerServiceScunthorpe from './components/GasBoilerServiceScunthorpe';
import GasBoilerInstallationScunthorpe from './components/GasBoilerInstallationScunthorpe';
import GasBoilerServiceNorthLincolnshire from './components/GasBoilerServiceNorthLincolnshire';
import BoilerRepairScunthorpe from './components/BoilerRepairScunthorpe';
import GasBoilerBreakdownScunthorpe from './components/GasBoilerBreakdownScunthorpe';
import Login from './components/Login';
import Admin from './components/Admin';
import Contact from './components/Contact';
import BoilerMaintenanceTips from './components/BoilerMaintenanceTips';
import GasSafeBoilerInstallersScunthorpe from './components/GasSafeBoilerInstallersScunthorpe';
import BoilerGrantsScunthorpe from './components/BoilerGrantsScunthorpe';
import GasBoilerReplacementScunthorpe from './components/GasBoilerReplacementScunthorpe';
import GasBoilerServicingScunthorpe from './components/GasBoilerServicingScunthorpe';
import GasBoilerBrandsScunthorpe from './components/GasBoilerBrandsScunthorpe';
import BoilerFinanceScunthorpe from './components/BoilerFinanceScunthorpe';
import Breadcrumb from './components/Breadcrumb';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  const isSeoPage = location.pathname === '/gas-boiler-service-scunthorpe' || location.pathname === '/gas-boiler-installation-scunthorpe' || location.pathname === '/gas-boiler-service-north-lincolnshire' || location.pathname === '/gas-boiler-repair-scunthorpe' || location.pathname === '/gas-boiler-breakdown-scunthorpe' || location.pathname === '/boiler-maintenance-tips' || location.pathname === '/gas-safe-boiler-installers-scunthorpe' || location.pathname === '/boiler-grants-scunthorpe' || location.pathname === '/gas-boiler-replacement-scunthorpe' || location.pathname === '/gas-boiler-servicing-scunthorpe' || location.pathname === '/areas-covered' || location.pathname === '/gas-boiler-brands-scunthorpe' || location.pathname === '/boiler-finance-scunthorpe';

  const canonicalUrl = window.location.origin + window.location.pathname + window.location.search;
return (
  <>

    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>

    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:rounded focus:shadow-lg"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <main id="main-content" role="main" tabIndex="-1">
        {!isSeoPage && <Header />}
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/areas" element={<AreasCovered />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gas-boiler-service-scunthorpe" element={<GasBoilerServiceScunthorpe />} />
          <Route path="/gas-boiler-installation-scunthorpe" element={<GasBoilerInstallationScunthorpe />} />
          <Route path="/gas-boiler-service-north-lincolnshire" element={<GasBoilerServiceNorthLincolnshire />} />
          <Route path="/gas-boiler-repair-scunthorpe" element={<BoilerRepairScunthorpe />} />
          <Route path="/gas-boiler-breakdown-scunthorpe" element={<GasBoilerBreakdownScunthorpe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/boiler-maintenance-tips" element={<BoilerMaintenanceTips />} />
          <Route path="/gas-safe-boiler-installers-scunthorpe" element={<GasSafeBoilerInstallersScunthorpe />} />
          <Route path="/boiler-grants-scunthorpe" element={<BoilerGrantsScunthorpe />} />
          <Route path="/gas-boiler-servicing-scunthorpe" element={<GasBoilerServicingScunthorpe />} />
        </Routes>
        {!isSeoPage && <Footer />}
      </main>
    </>
  );
}

export default App;
