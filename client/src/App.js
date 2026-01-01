import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';
import Breadcrumb from './components/Breadcrumb';

const QuoteForm = lazy(() => import('./components/QuoteForm'));
const LazyHome = lazy(() => import('./components/Home'));
const LazyFAQ = lazy(() => import('./components/FAQ'));
const LazyAreasCovered = lazy(() => import('./components/AreasCovered'));
const LazyBlog = lazy(() => import('./components/Blog'));
const LazyContact = lazy(() => import('./components/Contact'));
const LazyBoilerMaintenanceTips = lazy(() => import('./components/BoilerMaintenanceTips'));
const LazyGasBoilerServiceScunthorpe = lazy(() => import('./components/GasBoilerServiceScunthorpe'));
const LazyGasBoilerInstallationScunthorpe = lazy(() => import('./components/GasBoilerInstallationScunthorpe'));
const LazyGasBoilerServiceNorthLincolnshire = lazy(() => import('./components/GasBoilerServiceNorthLincolnshire'));
const LazyBoilerRepairScunthorpe = lazy(() => import('./components/BoilerRepairScunthorpe'));
const LazyGasBoilerBreakdownScunthorpe = lazy(() => import('./components/GasBoilerBreakdownScunthorpe'));
const LazyGasSafeBoilerInstallersScunthorpe = lazy(() => import('./components/GasSafeBoilerInstallersScunthorpe'));
const LazyBoilerGrantsScunthorpe = lazy(() => import('./components/BoilerGrantsScunthorpe'));
const LazyGasBoilerServicingScunthorpe = lazy(() => import('./components/GasBoilerServicingScunthorpe'));
const LazyGasBoilerBrandsScunthorpe = lazy(() => import('./components/GasBoilerBrandsScunthorpe'));
const LazySystemBoilerInstallationScunthorpe = lazy(() => import('./components/SystemBoilerInstallationScunthorpe'));
const LazyRegularBoilerInstallationScunthorpe = lazy(() => import('./components/RegularBoilerInstallationScunthorpe'));
const LazyBoilerPriceGuideScunthorpe = lazy(() => import('./components/BoilerPriceGuideScunthorpe'));
const LazyGasBoilerMaintenanceTipsScunthorpe = lazy(() => import('./components/GasBoilerMaintenanceTipsScunthorpe'));
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
        <Header />
        <Breadcrumb />
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>} >
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/quote" element={<QuoteForm />} />
            <Route path="/faq" element={<LazyFAQ />} />
            <Route path="/areas" element={<LazyAreasCovered />} />
            <Route path="/blog" element={<LazyBlog />} />
            <Route path="/contact" element={<LazyContact />} />
            <Route path="/gas-boiler-service-scunthorpe" element={<LazyGasBoilerServiceScunthorpe />} />
            <Route path="/gas-boiler-installation-scunthorpe" element={<LazyGasBoilerInstallationScunthorpe />} />
            <Route path="/gas-boiler-service-north-lincolnshire" element={<LazyGasBoilerServiceNorthLincolnshire />} />
            <Route path="/gas-boiler-repair-scunthorpe" element={<LazyBoilerRepairScunthorpe />} />
            <Route path="/gas-boiler-breakdown-scunthorpe" element={<LazyGasBoilerBreakdownScunthorpe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/boiler-maintenance-tips" element={<LazyBoilerMaintenanceTips />} />
            <Route path="/gas-safe-boiler-installers-scunthorpe" element={<LazyGasSafeBoilerInstallersScunthorpe />} />
            <Route path="/boiler-grants-scunthorpe" element={<LazyBoilerGrantsScunthorpe />} />
            <Route path="/gas-boiler-servicing-scunthorpe" element={<LazyGasBoilerServicingScunthorpe />} />
            <Route path="/gas-boiler-brands-scunthorpe" element={<LazyGasBoilerBrandsScunthorpe />} />
            <Route path="/system-boiler-installation-scunthorpe" element={<LazySystemBoilerInstallationScunthorpe />} />
            <Route path="/regular-boiler-installation-scunthorpe" element={<LazyRegularBoilerInstallationScunthorpe />} />
            <Route path="/boiler-price-guide-scunthorpe" element={<LazyBoilerPriceGuideScunthorpe />} />
            <Route path="/gas-boiler-maintenance-tips-scunthorpe" element={<LazyGasBoilerMaintenanceTipsScunthorpe />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

export default App;
