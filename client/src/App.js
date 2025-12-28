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
import Login from './components/Login';
import Admin from './components/Admin';
import Contact from './components/Contact';
import BoilerMaintenanceTips from './components/BoilerMaintenanceTips';
import GasSafeBoilerInstallersScunthorpe from './components/GasSafeBoilerInstallersScunthorpe';

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

  const isSeoPage = location.pathname === '/gas-boiler-service-scunthorpe' || location.pathname === '/gas-boiler-installation-scunthorpe' || location.pathname === '/gas-boiler-service-north-lincolnshire' || location.pathname === '/gas-boiler-repair-scunthorpe' || location.pathname === '/boiler-maintenance-tips' || location.pathname === '/gas-safe-boiler-installers-scunthorpe';

  const canonicalUrl = `https://nimbusboilers-scunthorpe.vercel.app${location.pathname}`;
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
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/boiler-maintenance-tips" element={<BoilerMaintenanceTips />} />
          <Route path="/gas-safe-boiler-installers-scunthorpe" element={<GasSafeBoilerInstallersScunthorpe />} />
        </Routes>
        {!isSeoPage && <Footer />}
      </main>
    </>
  );
}

export default App;
